const raf = fnc => {
  let running = false;
  let frameId = null;

  const run = (...args) => {
    if (running) {
      return;
    }
    running = true;
    frameId = window.requestAnimationFrame(() => {
      running = false;
      fnc(...args);
    });
  };
  const clear = () => window.cancelAnimationFrame(frameId);

  return [run, clear];
};

export default raf;
