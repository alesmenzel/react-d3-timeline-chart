import React from "react";

const SVG = (props, ref) => {
  return <svg ref={ref} {...props} />;
};

export default React.memo(React.forwardRef(SVG));
