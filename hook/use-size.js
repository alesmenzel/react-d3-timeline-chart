import { useRef, useState, useEffect } from "react";

const noop = () => {};
const noThrottle = fnc => [fnc, noop];

const useSize = (initial = {}, throttle = noThrottle) => {
  const { width: initialWidth = null, height: initialHeight = null } = initial;
  const ref = useRef(null);
  const [size, setSize] = useState({
    width: initialWidth,
    height: initialHeight
  });

  useEffect(() => {
    const [handleResize, clearResize] = throttle(() => {
      const { clientWidth, clientHeight } = ref.current;
      setSize({ width: clientWidth, height: clientHeight });
    });

    window.addEventListener("resize", handleResize, false);
    handleResize();
    return () => {
      clearResize();
      window.removeEventListener("resize", handleResize);
    };
  }, [throttle]);

  return [ref, size.width, size.height];
};

export default useSize;
