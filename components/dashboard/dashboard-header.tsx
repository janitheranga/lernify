"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { GraduationCap, Search, Bell, User, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
  userType: "user" | "admin";
}

export function DashboardHeader({ userType }: DashboardHeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  return (
    <motion.header
      className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-lg shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[var(--color-muted-teal-600)] to-[var(--color-frosted-mint-600)] p-2 rounded-lg"
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--color-muted-teal-700)] to-[var(--color-frosted-mint-700)] bg-clip-text text-transparent">
              Lernify
            </span>
            {userType === "admin" && (
              <span className="text-xs px-2 py-1 bg-gradient-to-r from-[var(--color-old-gold-500)] to-[var(--color-old-gold-600)] text-white rounded-full">
                Admin
              </span>
            )}
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search courses, lessons, resources..."
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              className="p-2 rounded-full hover:bg-accent transition-colors cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </motion.button>

            {/* Profile Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-2 rounded-full hover:bg-accent transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-muted-teal-500)] to-[var(--color-frosted-mint-500)] flex items-center justify-center text-white font-semibold">
                  <User className="w-5 h-5" />
                </div>
                <ChevronDown className="w-4 h-4" />
              </motion.button>

              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2"
                >
                  <Link
                    href="#profile"
                    className="block px-4 py-2 text-sm hover:bg-accent transition-colors cursor-pointer"
                  >
                    Profile Settings
                  </Link>
                  <Link
                    href="#preferences"
                    className="block px-4 py-2 text-sm hover:bg-accent transition-colors cursor-pointer"
                  >
                    Preferences
                  </Link>
                  <div className="border-t my-2" />
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-accent transition-colors cursor-pointer"
                  >
                    Logout
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
