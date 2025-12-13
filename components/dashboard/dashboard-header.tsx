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
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);
  const notificationsRef = React.useRef<HTMLDivElement | null>(null);
  const profileRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        isNotificationsOpen &&
        notificationsRef.current &&
        !notificationsRef.current.contains(target)
      ) {
        setIsNotificationsOpen(false);
      }

      if (
        isProfileOpen &&
        profileRef.current &&
        !profileRef.current.contains(target)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isNotificationsOpen, isProfileOpen]);

  return (
    <motion.header
      className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-lg shadow-sm border border-border rounded-xl"
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
              className="bg-linear-to-br from-(--color-muted-teal-600) to-(--color-frosted-mint-600) p-2 rounded-lg"
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-linear-to-r from-(--color-muted-teal-700) to-(--color-frosted-mint-700) bg-clip-text text-transparent">
              Lernify
            </span>
            {userType === "admin" && (
              <span className="text-xs px-2 py-1 bg-linear-to-r from-(--color-old-gold-500) to-(--color-old-gold-600) text-white rounded-full">
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
            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <motion.button
                className="p-2 rounded-full hover:bg-accent transition-colors cursor-pointer relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-haspopup="true"
                aria-expanded={isNotificationsOpen}
                onClick={() => setIsNotificationsOpen((prev) => !prev)}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </motion.button>

              {isNotificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border overflow-hidden"
                >
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm font-semibold">Notifications</p>
                    <p className="text-xs text-muted-foreground">
                      You&apos;re all caught up
                    </p>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {[
                      "New course: Advanced React just dropped",
                      "Reminder: Live session starts in 30 minutes",
                      "Certification: Your React Basics certificate is ready",
                    ].map((item) => (
                      <div
                        key={item}
                        className="px-4 py-3 text-sm hover:bg-accent/60 transition-colors cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t text-center text-sm text-primary hover:underline cursor-pointer">
                    View all
                  </div>
                </motion.div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <motion.button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-2 rounded-full hover:bg-accent transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-(--color-muted-teal-500) to-(--color-frosted-mint-500) flex items-center justify-center text-white font-semibold">
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
