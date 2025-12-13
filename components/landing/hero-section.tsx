"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    alt: "Students collaborating",
    description: "Learn together with our interactive platform",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    alt: "Online learning",
    description: "Access courses from anywhere, anytime",
  },
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=600&fit=crop",
    alt: "Expert instructors",
    description: "Learn from industry experts",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const leftRotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const leftRotateY = useTransform(mouseX, [-300, 300], [-5, 5]);
  const rightRotateX = useTransform(mouseY, [-300, 300], [3, -3]);
  const rightRotateY = useTransform(mouseX, [-300, 300], [-3, 3]);

  const springConfig = { stiffness: 150, damping: 15 };
  const leftRotateXSpring = useSpring(leftRotateX, springConfig);
  const leftRotateYSpring = useSpring(leftRotateY, springConfig);
  const rightRotateXSpring = useSpring(rightRotateX, springConfig);
  const rightRotateYSpring = useSpring(rightRotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="container mx-auto px-4 py-20 md:py-32"
      onMouseMove={handleMouseMove}
    >
      <div className="grid md:grid-cols-3 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          className="md:col-span-1 space-y-6"
          style={{
            rotateX: leftRotateXSpring,
            rotateY: leftRotateYSpring,
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-linear-to-r from-(--color-frosted-mint-200) to-(--color-old-gold-200) rounded-full text-sm font-semibold text-(--color-dark-slate-grey-800) mb-4">
              🚀 New Learning Experience
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transform Your Future with{" "}
            <span className="bg-linear-to-r from-(--color-muted-teal-700) to-(--color-frosted-mint-700) bg-clip-text text-transparent">
              Lernify
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Access world-class courses, learn from industry experts, and unlock
            your potential with our comprehensive Learning Management System.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-8 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div>
              <p className="text-2xl font-bold text-(--color-muted-teal-700)">
                50K+
              </p>
              <p className="text-sm text-muted-foreground">Active Students</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-2xl font-bold text-(--color-frosted-mint-700)">
                200+
              </p>
              <p className="text-sm text-muted-foreground">Expert Courses</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Image Slider */}
        <motion.div
          className="md:col-span-2 relative"
          style={{
            rotateX: rightRotateXSpring,
            rotateY: rightRotateYSpring,
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-100 md:h-125 rounded-3xl overflow-hidden shadow-2xl">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  scale: currentSlide === index ? 1 : 1.1,
                }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-24 left-8 right-8">
                  <motion.p
                    className="text-white text-xl font-semibold"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: currentSlide === index ? 0 : 20,
                      opacity: currentSlide === index ? 1 : 0,
                    }}
                    transition={{ delay: 0.3 }}
                  >
                    {image.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlide === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-(--color-muted-teal-500) to-(--color-frosted-mint-500) rounded-xl flex items-center justify-center text-white font-bold text-xl">
                A+
              </div>
              <div>
                <p className="font-semibold text-sm">Excellent Rating</p>
                <p className="text-xs text-muted-foreground">4.9/5.0</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-(--color-old-gold-500) to-(--color-frosted-mint-500) rounded-xl flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Live Classes</p>
                <p className="text-xs text-muted-foreground">Join now</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
