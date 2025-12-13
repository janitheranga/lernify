"use client";

import * as React from "react";
import { motion } from "motion/react";

const brands = [
  {
    name: "Google",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
  },
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
];

export function TrustedBrands() {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <section className="py-16 bg-linear-to-b from-transparent to-(--color-dark-slate-grey-50) overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals from world&apos;s top companies
            learning with Lernify
          </p>
        </motion.div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-12">
          <motion.div
            className="flex gap-12 items-center"
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
            {/* Duplicate brands for seamless loop */}
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                className="shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer grayscale hover:grayscale-0"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-[80%] max-h-[60%] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-(--color-dark-slate-grey-50) to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-(--color-dark-slate-grey-50) to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
