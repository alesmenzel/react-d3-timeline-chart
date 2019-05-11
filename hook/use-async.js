import { useState, useEffect } from "react";

const defaultCompare = (prev, next) => prev === next;

const useAsync = (initValue, toValue, compare = defaultCompare) => {
  const [value, updateValue] = useState(initValue);
  useEffect(() => {
    if (compare(value, toValue)) {
      return;
    }
    const timeoutId = setTimeout(() => {
      updateValue(toValue);
    }, 0);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, toValue, compare]);

  return value;
};

export default useAsync;
