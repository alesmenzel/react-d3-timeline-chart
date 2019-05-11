import React, { useContext } from "react";

import ScaleXCtx from "../context/scale-x";
import ScaleYCtx from "../context/scale-y";
import AxisYRight from "./axis-y-right";

const AxisYRightCtx = () => {
  const scaleX = useContext(ScaleXCtx);
  const scaleY = useContext(ScaleYCtx);

  return <AxisYRight scaleX={scaleX} scaleY={scaleY} />;
};

export default AxisYRightCtx;
