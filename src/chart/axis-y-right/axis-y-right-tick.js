import React from "react";

import Group from "../group/group";

import "./axis-y-right-tick.scss";

const AxisYTick = ({ scaleX, scaleY, value, format }) => {
  const [, maxX] = scaleX.domain();

  return (
    <Group
      className="c-tlch-axis-y-right-tick"
      x={scaleX(maxX)}
      y={scaleY(value)}
    >
      <text className="c-tlch-axis-y-right-tick__label" x="25" y="5">
        {format(value)}
      </text>
    </Group>
  );
};

export default React.memo(AxisYTick);
