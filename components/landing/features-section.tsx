"use client";

import * as React from "react";
import { motion } from "motion/react";
import { BookOpen, Users, Award, Video, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Extensive Course Library",
    description:
      "Access over 200+ courses covering technology, business, design, and more. Learn at your own pace with lifetime access.",
    color:
      "from-[var(--color-muted-teal-500)] to-[var(--color-muted-teal-600)]",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of real-world experience. Get personalized feedback and mentorship.",
    color:
      "from-[var(--color-frosted-mint-500)] to-[var(--color-frosted-mint-600)]",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description:
      "Earn recognized certificates upon completion. Boost your resume and showcase your skills to potential employers.",
    color: "from-[var(--color-old-gold-500)] to-[var(--color-old-gold-600)]",
  },
  {
    icon: Video,
    title: "HD Video Content",
    description:
      "Watch high-quality video lectures with interactive exercises. Download resources and access content offline.",
    color:
      "from-[var(--color-mint-cream-500)] to-[var(--color-mint-cream-600)]",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description:
      "Study anywhere, anytime on any device. Fit learning into your busy schedule with bite-sized lessons.",
    color:
      "from-[var(--color-dark-slate-grey-500)] to-[var(--color-dark-slate-grey-600)]",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitor your learning journey with detailed analytics. Set goals and track your achievements in real-time.",
    color:
      "from-[var(--color-muted-teal-600)] to-[var(--color-frosted-mint-600)]",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-[var(--color-dark-slate-grey-50)] to-transparent"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--color-frosted-mint-200)] to-[var(--color-old-gold-200)] rounded-full text-sm font-semibold text-[var(--color-dark-slate-grey-800)] mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and resources you
            need to achieve your learning goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all border border-transparent hover:border-[var(--color-muted-teal-200)] cursor-pointer">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-muted-teal-700)] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
