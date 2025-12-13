"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {/* 404 Illustration */}
            <svg
              className="w-full max-w-md mx-auto"
              viewBox="0 0 500 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Large 404 Text */}
              <motion.text
                x="250"
                y="150"
                fontSize="120"
                fontWeight="bold"
                textAnchor="middle"
                fill="url(#gradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                404
              </motion.text>

              {/* Gradient Definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{
                      stopColor: "var(--color-muted-teal-600)",
                      stopOpacity: 1,
                    }}
                  />
                  <stop
                    offset="100%"
                    style={{
                      stopColor: "var(--color-frosted-mint-600)",
                      stopOpacity: 1,
                    }}
                  />
                </linearGradient>
              </defs>

              {/* Floating Elements */}
              <motion.circle
                cx="100"
                cy="80"
                r="20"
                fill="var(--color-old-gold-400)"
                opacity="0.6"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.circle
                cx="400"
                cy="100"
                r="15"
                fill="var(--color-frosted-mint-400)"
                opacity="0.6"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              <motion.circle
                cx="150"
                cy="250"
                r="12"
                fill="var(--color-mint-cream-400)"
                opacity="0.6"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              <motion.circle
                cx="380"
                cy="240"
                r="18"
                fill="var(--color-muted-teal-400)"
                opacity="0.6"
                animate={{
                  y: [0, 12, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              We couldn&apos;t find the page you&apos;re looking for. It might
              have been moved, deleted, or never existed in the first place.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" asChild>
              <Link href="/" className="group">
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/#contact">
                <Search className="mr-2 w-5 h-5" />
                Contact Support
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm text-muted-foreground mb-4">
              Popular pages you might be looking for:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: "Courses", href: "/#features" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Reviews", href: "/#reviews" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary hover:underline cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
