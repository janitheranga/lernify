"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Bell, Gift, Sparkles } from "lucide-react";

const notifications = [
  {
    icon: Gift,
    text: "🎉 Special Offer: Get 50% off on all courses this week!",
  },
  { icon: Sparkles, text: "✨ New courses added: Advanced React & TypeScript" },
  { icon: Bell, text: "🔥 Limited Time: Enroll now and get lifetime access" },
  {
    icon: Gift,
    text: "🎓 Early Bird Discount: Save up to 70% on annual plans",
  },
  {
    icon: Sparkles,
    text: "💎 Premium membership now includes 1-on-1 mentorship",
  },
];

export function NotificationLoop() {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <div
      className="bg-linear-to-r from-(--color-muted-teal-600) to-(--color-frosted-mint-600) text-white py-2 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {/* Duplicate the notifications array for seamless looping */}
        {[...notifications, ...notifications, ...notifications].map(
          (notification, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <notification.icon className="w-4 h-4" />
              <span>{notification.text}</span>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}
