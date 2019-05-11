import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { scaleLinear, scaleOrdinal } from "d3-scale";

import Chart from "./chart";
import useSize from "../hook/use-size";
import raf from "../helper/raf";

import "./index.css";

const margin = {
  top: 30,
  left: 30,
  right: 80,
  bottom: 80
};

const timerange = 72;
const timeranges = {
  8: {
    ticksX: [0, -2, -4, -8]
  },
  36: {
    ticksX: [0, -2, -4, -8, -12, -24, -36]
  },
  72: {
    ticksX: [0, -4, -8, -12, -24, -36, -48, -60, -72],
    verticalX: [0, -2, -4, -6, -8, -10, -12, -24, -48, -72]
  }
};

const timerangeTicks = timeranges[timerange] || [];
const ticksX = timerangeTicks.ticksX;
const verticalX = timerangeTicks.verticalX;

const scaleX = scaleLinear()
  .domain([0, 1])
  .range([-timerange, 0]);
const scaleY = scaleLinear()
  .domain([0, 1])
  .range([0, 450000]);
const scaleType = scaleOrdinal()
  .domain([0, 1])
  .range(["image", "video", "carousel"]);

const randomX = () => scaleX(Math.random());
const randomY = () => scaleY(Math.random());
const randomType = () => scaleType(Math.random());

const generateLine = id => {
  const length = 5;
  const x = Array.from({ length })
    .map((_, i) => (i === 0 ? 0 : randomX()))
    .sort((a, b) => a - b);

  const y = Array.from({ length })
    .map((_, i) => (i === 0 ? 0 : randomY()))
    .sort((a, b) => a - b);

  return {
    id,
    type: randomType(),
    values: x.map((x, i) => ({
      x,
      y: y[i]
    }))
  };
};

const lines = Array.from({ length: 30 }).map((_, i) => generateLine(i));
// const lines =
// [
//   {
//     type: "image",
//     values: [
//       { x: -71, y: 0 },
//       { x: -60, y: 2220 },
//       { x: -48, y: 2460 },
//       { x: -36, y: 3000 },
//       { x: -24, y: 4000 },
//       { x: -12, y: 8000 },
//       { x: 0, y: 17000 }
//     ]
//   },
//   {
//     type: "video",
//     values: [
//       { x: -65, y: 0 },
//       { x: -48, y: 460 },
//       { x: -36, y: 530 },
//       { x: -24, y: 700 },
//       { x: -12, y: 2300 },
//       { x: 0, y: 15700 }
//     ]
//   },
//   {
//     type: "carousel",
//     values: [
//       { x: -59, y: 0 },
//       { x: -48, y: 46 },
//       { x: -36, y: 300 },
//       { x: -24, y: 900 },
//       { x: -12, y: 4300 },
//       { x: 0, y: 12700 }
//     ]
//   }
// ];

const maxY =
  lines.reduce((acc, line) => {
    line.values.forEach(item => {
      if (item.y > acc) {
        acc = item.y;
      }
    });
    return acc;
  }, 0) * 1.05;

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleLabelClick = useCallback((e, index) => {
    e.preventDefault();
    setActiveIndex(index);
  }, []);

  const [ref, width, height] = useSize({}, raf);

  return (
    <div className="App">
      <Chart
        ref={ref}
        width={width}
        height={height}
        margin={margin}
        ticksX={ticksX}
        verticalX={verticalX}
        lines={lines}
        minX={-timerange}
        maxX={0}
        minY={0}
        maxY={maxY}
        minMaxY={10000}
        activeIndex={activeIndex}
        onLabelClick={handleLabelClick}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
