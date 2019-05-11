import React, { useContext } from "react";

import ScaleXCtx from "../context/scale-x";
import ScaleYCtx from "../context/scale-y";
import AxisY from "./axis-y-left";

const AxisYLeftCtx = () => {
  const scaleX = useContext(ScaleXCtx);
  const scaleY = useContext(ScaleYCtx);

  return <AxisY scaleX={scaleX} scaleY={scaleY} />;
};

export default AxisYLeftCtx;
