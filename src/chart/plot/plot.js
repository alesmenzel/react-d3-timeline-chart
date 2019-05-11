import React from "react";

import Group from "../group/group";

import "./plot.scss";

const Plot = ({ scaleX, scaleY }) => {
  const [minX, maxX] = scaleX.domain();
  const [minY, maxY] = scaleY.domain();

  return (
    <Group className="c-tlch-plot">
      <rect
        className="c-tlch-plot__background"
        x={scaleX(minX)}
        y={scaleY(maxY)}
        width={scaleX(maxX)}
        height={scaleY(minY)}
      />
    </Group>
  );
};

export default React.memo(Plot);
