import React, { useCallback } from "react";

import AxisX from "../axis-x/axis-x-ctx";
import AxisYLeft from "../axis-y-left/axis-y-left-ctx";
import AxisYRight from "../axis-y-right/axis-y-right-ctx";
import Group from "../group/group";
import HorizontalLines from "./horizontal-lines-ctx";
import Lines from "./lines-ctx";
import Plot from "./plot-ctx";
import VerticalLines from "./vertical-lines-ctx";

const Content = ({ margin }) => {
  const groupContent = useCallback(
    <>
      <Plot />
      <HorizontalLines />
      <VerticalLines />
      <AxisYLeft />
      <AxisYRight />
      <AxisX />
      <Lines />
    </>,
    []
  );

  return (
    <Group className="c-tlch-content" x={margin.left} y={margin.top}>
      {groupContent}
    </Group>
  );
};

export default Content;
