import React from "react";

import SVG from "./svg";

const SVGCtx = (props, ref) => {
  return <SVG ref={ref} {...props} />;
};

export default React.memo(React.forwardRef(SVGCtx));
