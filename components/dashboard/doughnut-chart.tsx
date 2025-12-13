"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DoughnutChartProps {
  title: string;
  data: {
    label: string;
    value: number;
    color: string;
  }[];
}

export function DoughnutChart({ title, data }: DoughnutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Chart */}
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              {data.map((item, index) => {
                const percentage = (item.value / total) * 100;
                const circumference = 2 * Math.PI * 35;
                const strokeDasharray = `${
                  (percentage / 100) * circumference
                } ${circumference}`;
                const rotation = currentAngle;
                currentAngle += percentage * 3.6;

                return (
                  <motion.circle
                    key={item.label}
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="15"
                    strokeDasharray={strokeDasharray}
                    style={{
                      transformOrigin: "50% 50%",
                      transform: `rotate(${rotation}deg)`,
                    }}
                    initial={{ strokeDasharray: `0 ${circumference}` }}
                    animate={{ strokeDasharray }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                );
              })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold">{total}</p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 space-y-3">
            {data.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.label}</span>
                </div>
                <span className="text-sm font-semibold">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
