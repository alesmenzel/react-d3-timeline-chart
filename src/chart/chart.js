import React, { useCallback } from "react";

import SVG from "./svg/svg-ctx";
import Content from "./plot/content-ctx";

import "./chart.scss";

const Chart = (props, ref) => {
  const svgContent = useCallback(<Content />, []);

  return (
    <SVG className="c-tlch" ref={ref} {...props}>
      {svgContent}
    </SVG>
  );
};

export default React.memo(React.forwardRef(Chart));
