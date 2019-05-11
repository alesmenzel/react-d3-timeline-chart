import React from "react";

import Group from "../group/group";

import "./axis-y-left.scss";

const AxisYLeft = ({ scaleX, scaleY }) => {
  const [minX] = scaleX.domain();
  const [minY, maxY] = scaleY.domain();

  return (
    <Group className="c-tlch-axis-y-left">
      <line
        className="c-tlch-axis-y-left__line"
        x1={scaleX(minX)}
        y1={scaleY(maxY) - 15}
        x2={scaleX(minX)}
        y2={scaleY(minY)}
      />
    </Group>
  );
};

export default React.memo(AxisYLeft);
