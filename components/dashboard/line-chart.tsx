"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LineChartProps {
  title: string;
  data: {
    label: string;
    value: number;
  }[];
  color?: string;
}

export function LineChart({
  title,
  data,
  color = "var(--color-muted-teal-500)",
}: LineChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const padding = 20;
  const chartHeight = 200;
  const chartWidth = 600;

  // Calculate points for the line
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * (chartWidth - padding * 2) + padding;
      const y =
        chartHeight -
        (d.value / maxValue) * (chartHeight - padding * 2) -
        padding;
      return `${x},${y}`;
    })
    .join(" ");

  // Calculate area points
  const areaPoints = `${padding},${chartHeight - padding} ${points} ${
    chartWidth - padding
  },${chartHeight - padding}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="w-full h-48"
            preserveAspectRatio="none"
          >
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1={padding}
                y1={padding + (i * (chartHeight - padding * 2)) / 4}
                x2={chartWidth - padding}
                y2={padding + (i * (chartHeight - padding * 2)) / 4}
                stroke="var(--color-dark-slate-grey-200)"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}

            {/* Area under the line */}
            <motion.polygon
              points={areaPoints}
              fill={color}
              opacity="0.1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
            />

            {/* Line */}
            <motion.polyline
              points={points}
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Data points */}
            {data.map((d, i) => {
              const x =
                (i / (data.length - 1)) * (chartWidth - padding * 2) + padding;
              const y =
                chartHeight -
                (d.value / maxValue) * (chartHeight - padding * 2) -
                padding;

              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill={color}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="cursor-pointer"
                />
              );
            })}
          </svg>

          {/* Labels */}
          <div className="flex justify-between mt-2">
            {data.map((d, i) => (
              <div
                key={i}
                className="text-xs text-muted-foreground text-center flex-1"
              >
                {d.label}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
