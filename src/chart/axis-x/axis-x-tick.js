import React from "react";

import Group from "../group/group";

import "./axis-x-tick.scss";

const AxisXTick = ({ scaleX, value }) => {
  const number = value === 0 ? "+N" : `- ${Math.abs(value)}`;
  const label = value === 0 ? "NOW" : "HOURS";

  return (
    <Group className="c-tlch-axis-x-tick" x={scaleX(value)}>
      <line className="c-tlch-axis-x-tick__line" x1="0" y1="0" x2="0" y2="6" />
      <Group className="c-tlch-axis-x-tick__label" x="10" y="35">
        <text className="c-tlch-axis-x-tick__label-title" y="0">
          {number}
        </text>
        <text className="c-tlch-axis-x-tick__label-subtitle" y="12">
          {label}
        </text>
      </Group>
    </Group>
  );
};

export default React.memo(AxisXTick);
