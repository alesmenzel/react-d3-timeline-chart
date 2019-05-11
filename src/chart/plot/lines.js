import React, { useCallback, useMemo } from "react";
import { line, curveMonotoneX } from "d3-shape";

import Group from "../group/group";
import Line from "./line";

const Lines = ({ scaleX, scaleY, lines, activeIndex, onLabelClick }) => {
  const createLine = useCallback(
    line()
      .x(d => scaleX(d.x))
      .y(d => scaleY(d.y))
      .curve(curveMonotoneX),
    [scaleX, scaleY]
  );

  // Move active line to last index, so it renders above all other lines
  // since there is no z-index in SVG 1
  const sortedLines = useMemo(() => {
    const isActive = idx => idx === activeIndex;
    const { inactive, active } = lines.reduce(
      (acc, line, idx) => {
        const active = isActive(idx);
        const enhancedLine = {
          id: line.id,
          idx,
          active,
          line
        };
        if (!active) {
          acc.inactive.push(enhancedLine);
          return acc;
        }
        acc.active.push(enhancedLine);
        return acc;
      },
      { inactive: [], active: [] }
    );
    return [...inactive, ...active];
  }, [lines, activeIndex]);

  return (
    <Group className="c-tlch-lines">
      {sortedLines.map(item => {
        return (
          <Line
            key={item.id}
            idx={item.idx}
            scaleX={scaleX}
            scaleY={scaleY}
            createLine={createLine}
            line={item.line}
            isActive={item.active}
            onLabelClick={onLabelClick}
          />
        );
      })}
    </Group>
  );
};

export default React.memo(Lines);
