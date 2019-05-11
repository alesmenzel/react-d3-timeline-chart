import React, { useContext } from "react";

import ScaleXCtx from "../context/scale-x";
import ScaleYCtx from "../context/scale-y";
import LinesCtx from "../context/lines";
import ActiveIndexCtx from "../context/active-index";
import OnLabelClickCtx from "../context/on-label-click";
import Lines from "./lines";

const LinesComponentCtx = () => {
  const scaleX = useContext(ScaleXCtx);
  const scaleY = useContext(ScaleYCtx);
  const lines = useContext(LinesCtx);
  const activeIndex = useContext(ActiveIndexCtx);
  const onLabelClick = useContext(OnLabelClickCtx);

  return (
    <Lines
      scaleX={scaleX}
      scaleY={scaleY}
      lines={lines}
      activeIndex={activeIndex}
      onLabelClick={onLabelClick}
    />
  );
};

export default React.memo(LinesComponentCtx);
