"use client";

import * as React from "react";
import { motion } from "motion/react";

export function DashboardFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border border-border rounded-xl py-6 mt-auto">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>
            © {currentYear} Lernify. All rights reserved. |{" "}
            <a
              href="#privacy"
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="#terms"
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
