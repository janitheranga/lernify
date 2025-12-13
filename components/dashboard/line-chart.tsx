"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart as RLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  CartesianGrid,
} from "recharts";

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
  color = "#14b8a6",
  metricLabel = "Value",
  formatter = (v) => v.toString(),
}: LineChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-52">
          <ResponsiveContainer width="100%" height="100%">
            <RLineChart
              data={data}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-dark-slate-grey-200)"
              />
              <XAxis dataKey="label" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <RTooltip
                contentStyle={{ borderRadius: 8 }}
                formatter={(value: any) => [
                  formatter(Number(value)),
                  metricLabel,
                ]}
                labelFormatter={(label: any) => String(label)}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </RLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
