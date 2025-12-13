"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip as RTooltip,
  Cell,
} from "recharts";

interface DoughnutChartProps {
  title: string;
  data: {
    label: string;
    value: number;
    color: string;
  }[];
  metricLabel?: string;
  formatter?: (value: number) => string;
}

export function DoughnutChart({
  title,
  data,
  metricLabel = "Value",
  formatter = (v) => v.toString(),
}: DoughnutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="relative w-52 h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="label"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={2}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RTooltip
                  contentStyle={{ borderRadius: 8 }}
                  formatter={(value: any, name: any) => [
                    `${metricLabel} : ${formatter(Number(value))}`,
                    String(name),
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold">{total}</p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            {data.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.label}</span>
                </div>
                <span className="text-sm font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
