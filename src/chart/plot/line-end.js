import React from "react";
import cx from "classnames";

import Group from "../group/group";

import "./line-end.scss";

const LineEnd = ({ scaleX, scaleY, idx, line, isActive, onLabelClick }) => {
  const last = line.values[line.values.length - 1];

  if (!last) {
    return null;
  }

  const [, maxX] = scaleX.domain();
  const radius = isActive ? 7 : 4;
  const strokeWidth = isActive ? 0 : 2;

  return (
    <Group className="c-tlch-line-end">
      <circle
        className={cx(
          "c-tlch-line-end__dot",
          `c-tlch-line-end__dot--${line.type}`,
          { "c-tlch-line-end__dot--active": isActive }
        )}
        cx={scaleX(maxX)}
        cy={scaleY(last.y)}
        r={radius}
        strokeWidth={strokeWidth}
        onClick={e => onLabelClick(e, idx)}
      />
    </Group>
  );
};

export default React.memo(LineEnd);
