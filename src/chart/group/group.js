import React from "react";

const Group = ({ x = 0, y = 0, ...props }) => {
  const pass = {
    ...((x || y) && { transform: `translate(${x} ${y})` }),
    ...props
  };
  return <g {...pass} />;
};

export default React.memo(Group);
