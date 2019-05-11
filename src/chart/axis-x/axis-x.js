import React from "react";

import Group from "../group/group";
import Tick from "./axis-x-tick";

import "./axis-x.scss";

const AxisX = ({ plotHeight, scaleX, ticksX }) => {
  const [minX, maxX] = scaleX.domain();

  return (
    <Group className="c-tlch-axis-x" y={plotHeight}>
      <line
        className="c-tlch-axis-x__line"
        x1={scaleX(minX)}
        x2={scaleX(maxX) + 15}
      />
      {ticksX.map(value => (
        <Tick key={value} scaleX={scaleX} value={value} />
      ))}
    </Group>
  );
};

export default React.memo(AxisX);
