import React, { useContext } from "react";

import ScaleXCtx from "../context/scale-x";
import TicksXCtx from "../context/ticks-x";
import PlotHeightCtx from "../context/plot-height";
import AxisX from "./axis-x";

const AxisXCtx = () => {
  const scaleX = useContext(ScaleXCtx);
  const ticksX = useContext(TicksXCtx);
  const plotHeight = useContext(PlotHeightCtx);

  return <AxisX scaleX={scaleX} ticksX={ticksX} plotHeight={plotHeight} />;
};

export default React.memo(AxisXCtx);
