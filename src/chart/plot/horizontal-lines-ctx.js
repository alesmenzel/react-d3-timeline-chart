import React, { useContext } from "react";

import ScaleXCtx from "../context/scale-x";
import ScaleYCtx from "../context/scale-y";
import HorizontalLines from "./horizontal-lines";

const HorizontalLinesCtx = () => {
  const scaleX = useContext(ScaleXCtx);
  const scaleY = useContext(ScaleYCtx);

  return <HorizontalLines scaleX={scaleX} scaleY={scaleY} />;
};

export default React.memo(HorizontalLinesCtx);
