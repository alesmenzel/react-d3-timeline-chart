import React from "react";
import { humanize } from "@alesmenzel/number-format";

import Group from "../group/group";
import Tick from "./axis-y-right-tick";

const format = humanize({
  suffixes: {
    big: ["", "K", "M", "B"]
  }
});

const AxisYRight = ({ scaleX, scaleY }) => {
  const ticks = scaleY.ticks(5).slice(1);

  return (
    <Group className="c-tlch-axis-y-right">
      {ticks.map(tick => (
        <Tick
          key={tick}
          scaleX={scaleX}
          scaleY={scaleY}
          value={tick}
          format={format}
        />
      ))}
    </Group>
  );
};

export default React.memo(AxisYRight);
