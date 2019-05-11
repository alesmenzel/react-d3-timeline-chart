import React, { useCallback } from "react";
import { scaleLinear } from "d3-scale";

import Chart from "./chart";
import compose from "../../helper/compose";

import ActiveIndexCtx from "./context/active-index";
import HeightCtx from "./context/height";
import LinesCtx from "./context/lines";
import OnLabelClickCtx from "./context/on-label-click";
import PlotHeightCtx from "./context/plot-height";
import PlotWidthCtx from "./context/plot-width";
import ScaleYCtx from "./context/scale-y";
import ScaleXCtx from "./context/scale-x";
import TicksXCtx from "./context/ticks-x";
import VerticalXCtx from "./context/vertical-x";
import WidthCtx from "./context/width";
import MarginCtx from "./context/margin";

const defaultMargin = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

const Interface = (
  {
    width,
    height,
    margin = defaultMargin,
    ticksX,
    verticalX = ticksX,
    lines,
    minX,
    maxX,
    minY,
    maxY,
    minMaxY = 10000,
    activeIndex,
    onLabelClick
  },
  ref
) => {
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  const realMaxY = Math.max(maxY, minMaxY);

  const scaleX = useCallback(
    scaleLinear()
      .domain([minX, maxX])
      .range([0, plotWidth])
      .clamp(true),
    [minX, maxX, plotWidth]
  );

  const scaleY = useCallback(
    scaleLinear()
      .domain([minY, realMaxY])
      .range([plotHeight, 0])
      .clamp(true)
      .nice(5),
    [minY, realMaxY, plotHeight]
  );

  const chart = useCallback(<Chart ref={ref} />, [ref]);

  return compose(
    [
      [WidthCtx, width],
      [HeightCtx, height],
      [PlotWidthCtx, plotWidth],
      [PlotHeightCtx, plotHeight],
      [TicksXCtx, ticksX],
      [VerticalXCtx, verticalX],
      [ScaleXCtx, scaleX],
      [ScaleYCtx, scaleY],
      [OnLabelClickCtx, onLabelClick],
      [LinesCtx, lines],
      [ActiveIndexCtx, activeIndex],
      [MarginCtx, margin]
    ],
    chart
  );
};

export default React.memo(React.forwardRef(Interface));
