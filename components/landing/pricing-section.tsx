"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Access to 10 free courses",
      "Basic course materials",
      "Community forum access",
      "Mobile app access",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Best for serious learners",
    features: [
      "Unlimited course access",
      "HD video quality",
      "Downloadable resources",
      "Certificate of completion",
      "Priority email support",
      "1-on-1 mentorship sessions",
      "Project reviews",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team management dashboard",
      "Custom learning paths",
      "Advanced analytics",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-transparent to-[var(--color-dark-slate-grey-50)]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--color-frosted-mint-200)] to-[var(--color-old-gold-200)] rounded-full text-sm font-semibold text-[var(--color-dark-slate-grey-800)] mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Learning Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your goals. All plans include a 14-day
            money-back guarantee
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-[var(--color-muted-teal-600)] to-[var(--color-frosted-mint-600)] text-white text-sm font-semibold rounded-full shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all border-2 cursor-pointer ${
                  plan.popular
                    ? "border-[var(--color-muted-teal-500)] ring-4 ring-[var(--color-muted-teal-100)]"
                    : "border-transparent hover:border-[var(--color-muted-teal-200)]"
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[var(--color-muted-teal-700)] to-[var(--color-frosted-mint-700)] bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    {plan.price !== "Free" && (
                      <span className="text-muted-foreground mb-2">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[var(--color-muted-teal-500)] to-[var(--color-frosted-mint-500)] flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <a
              href="#contact"
              className="text-[var(--color-muted-teal-700)] hover:underline cursor-pointer font-medium"
            >
              Contact our sales team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
