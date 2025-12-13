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
  metricLabel?: string;
  formatter?: (value: number) => string;
}

export function LineChart({
  title,
  data,
  color = "var(--color-muted-teal-500)",
  metricLabel = "Value",
  formatter = (v) => v.toString(),
}: LineChartProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(600);
  const maxValue = Math.max(...data.map((d) => d.value));
  const padding = 20;
  const chartHeight = 200;
  const minPointSpacing = 80;

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setContainerWidth(el.clientWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const chartWidth = Math.max(
    containerWidth,
    320,
    padding * 2 + (Math.max(data.length, 2) - 1) * minPointSpacing
  );

  const coords = data.map((d, i) => {
    const x =
      (i / Math.max(data.length - 1, 1)) * (chartWidth - padding * 2) + padding;
    const y =
      chartHeight -
      (d.value / maxValue) * (chartHeight - padding * 2) -
      padding;
    return { x, y };
  });

  const points = coords.map(({ x, y }) => `${x},${y}`).join(" ");

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
        <div className="w-full overflow-hidden" ref={containerRef}>
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="w-full h-52"
            preserveAspectRatio="none"
            onMouseLeave={() => setHoveredIndex(null)}
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
            {coords.map(({ x, y }, i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="4.5"
                fill={color}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(i)}
              />
            ))}

            {hoveredIndex !== null && coords[hoveredIndex] && (
              <Tooltip
                x={coords[hoveredIndex].x}
                y={coords[hoveredIndex].y}
                chartWidth={chartWidth}
                padding={padding}
                label={data[hoveredIndex].label}
                metricLabel={metricLabel}
                value={data[hoveredIndex].value}
                formattedValue={formatter(data[hoveredIndex].value)}
                color={color}
              />
            )}
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

function Tooltip({
  x,
  y,
  chartWidth,
  padding,
  label,
  metricLabel,
  value,
  formattedValue,
  color,
}: {
  x: number;
  y: number;
  chartWidth: number;
  padding: number;
  label: string;
  metricLabel: string;
  value: number;
  formattedValue: string;
  color: string;
}) {
  const tooltipWidth = 140;
  const tooltipHeight = 44;
  const offsetY = 12;
  const clampedX = Math.min(
    chartWidth - padding - tooltipWidth,
    Math.max(padding, x - tooltipWidth / 2)
  );
  const clampedY = Math.max(padding, y - tooltipHeight - offsetY);

  return (
    <g pointerEvents="none">
      <rect
        x={clampedX}
        y={clampedY}
        width={tooltipWidth}
        height={tooltipHeight}
        rx={8}
        fill="white"
        stroke="var(--color-dark-slate-grey-200)"
        opacity="0.95"
      />
      <text
        x={clampedX + 10}
        y={clampedY + 18}
        fill="var(--color-dark-slate-grey-600)"
        fontSize="14"
        fontWeight="600"
      >
        {label}
      </text>
      <text
        x={clampedX + 10}
        y={clampedY + 33}
        fill="var(--color-dark-slate-grey-800)"
        fontSize="12"
        fontWeight="500"
      >
        {metricLabel} : {formattedValue}
      </text>
      <circle cx={x} cy={y} r={6} fill="white" stroke={color} strokeWidth={2} />
    </g>
  );
}
