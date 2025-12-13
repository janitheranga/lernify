"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  items: {
    icon: LucideIcon;
    label: string;
    href: string;
  }[];
  activeItem: string;
  onItemClick: (href: string) => void;
}

export function Sidebar({ items, activeItem, onItemClick }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <motion.aside
      className="h-full bg-white border my-4 border-border rounded-xl sticky top-16 px-2 py-4"
      animate={{
        width: isCollapsed ? 80 : 240,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <div className="flex justify-end p-4">
          <motion.button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-2 space-y-1">
          {items.map((item, index) => {
            const isActive = activeItem === item.href;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.href}
                onClick={() => onItemClick(item.href)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all cursor-pointer",
                  isActive
                    ? "bg-linear-to-r from-(--color-muted-teal-500) to-(--color-frosted-mint-500) text-white shadow-md"
                    : "hover:bg-accent text-foreground"
                )}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span
                      className="text-sm font-medium whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
}
