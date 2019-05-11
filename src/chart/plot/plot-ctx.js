import React, { useContext } from "react";

import ScaleXCtx from "../context/scale-x";
import ScaleYCtx from "../context/scale-y";
import Plot from "./plot";

const PlotCtx = () => {
  const scaleX = useContext(ScaleXCtx);
  const scaleY = useContext(ScaleYCtx);

  return <Plot scaleX={scaleX} scaleY={scaleY} />;
};

export default React.memo(PlotCtx);
