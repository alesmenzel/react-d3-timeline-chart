import React, { useContext } from "react";

import ScaleXCtx from "../context/scale-x";
import ScaleYCtx from "../context/scale-y";
import VerticalX from "../context/vertical-x";
import VerticalLines from "./vertical-lines";

const VerticalLinesCtx = () => {
  const scaleX = useContext(ScaleXCtx);
  const scaleY = useContext(ScaleYCtx);
  const verticalX = useContext(VerticalX);

  return (
    <VerticalLines scaleX={scaleX} scaleY={scaleY} verticalX={verticalX} />
  );
};

export default React.memo(VerticalLinesCtx);
