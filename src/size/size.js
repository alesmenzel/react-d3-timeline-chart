import React from "react";

import useSize from "../../hook/use-size";
import raf from "../../helper/raf";

const Size = () => {
  const [ref, width, height] = useSize({ width: 0, height: 0 }, raf);
  console.log({ width, height });

  return (
    <div ref={ref}>
      {width} / {height}
    </div>
  );
};

export default Size;
