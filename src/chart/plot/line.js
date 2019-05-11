import React from "react";
import cx from "classnames";

import Group from "../group/group";
import LineStart from "./line-start";
import LineEnd from "./line-end";
import useAsync from "../../../hook/use-async";

import "./line.scss";

const Line = ({
  scaleX,
  scaleY,
  createLine,
  idx,
  line,
  isActive: makeActive,
  onLabelClick
}) => {
  // Because we change the order of lines, react rerenders the moved lines
  // with isActive=true so we miss the animation, thats why we defer the
  // isActive property
  const isActive = useAsync(false, makeActive);

  return (
    <Group
      className={cx("c-tlch-line", `c-tlch-line--${line.type}`, {
        "c-tlch-line--active": isActive
      })}
      id={`line-${idx}`}
    >
      <path
        key="line"
        className="c-tlch-line__path"
        d={createLine(line.values)}
        strokeWidth={isActive ? 3 : 2}
        onClick={e => onLabelClick(e, idx)}
      />
      <LineStart
        key="line-start"
        scaleX={scaleX}
        scaleY={scaleY}
        idx={idx}
        line={line}
        isActive={isActive}
        onLabelClick={onLabelClick}
      />
      <LineEnd
        key="line-end"
        scaleX={scaleX}
        scaleY={scaleY}
        idx={idx}
        line={line}
        isActive={isActive}
        onLabelClick={onLabelClick}
      />
    </Group>
  );
};

export default React.memo(Line);
