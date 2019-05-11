import React, { useContext } from "react";

import MarginCtx from "../context/margin";
import Content from "./content";
import WidthCtx from "../context/width";
import HeightCtx from "../context/height";

const ContentCtx = () => {
  const margin = useContext(MarginCtx);
  const width = useContext(WidthCtx);
  const height = useContext(HeightCtx);

  // Skip rendering if no width or heigh is given
  if (!width || !height) {
    return null;
  }

  return <Content margin={margin} />;
};

export default React.memo(ContentCtx);
