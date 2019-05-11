import React from "react";

const compose = (contexts, children) =>
  contexts.reduce((acc, [Context, value]) => {
    return <Context.Provider value={value}>{acc}</Context.Provider>;
  }, children);

export default compose;
