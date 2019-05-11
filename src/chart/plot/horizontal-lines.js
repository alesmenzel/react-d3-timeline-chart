import React from "react";

import Group from "../group/group";

import "./horizontal-lines.scss";

const HorizontalLines = ({ scaleX, scaleY }) => {
  const [minX, maxX] = scaleX.domain();
  const ticks = scaleY.ticks(6).slice(1);

  return (
    <Group className="c-tlch-grid-x">
      {ticks.map((tick, idx) => (
        <line
          className="c-tlch-grid-x__line"
          key={idx}
          x1={scaleX(minX)}
          y1={scaleY(tick)}
          x2={scaleX(maxX) + 15}
          y2={scaleY(tick)}
        />
      ))}
    </Group>
  );
};

export default React.memo(HorizontalLines);
