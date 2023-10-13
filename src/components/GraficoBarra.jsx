import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GraficoBarra = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && data.labels && data.datasets) {
      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: data,
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default GraficoBarra;