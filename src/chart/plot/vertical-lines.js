import React from "react";

import Group from "../group/group";

import "./vertical-lines.scss";

const VerticalLines = ({ scaleX, scaleY, verticalX }) => {
  const [minX] = scaleX.domain();
  const [minY, maxY] = scaleY.domain();

  return (
    <Group className="c-tlch-grid-y">
      {verticalX
        .filter(tick => tick !== minX)
        .map((tick, idx) => (
          <line
            className="c-tlch-grid-y__line"
            key={idx}
            x1={scaleX(tick)}
            y1={scaleY(minY)}
            x2={scaleX(tick)}
            y2={scaleY(maxY)}
          />
        ))}
    </Group>
  );
};

export default React.memo(VerticalLines);
