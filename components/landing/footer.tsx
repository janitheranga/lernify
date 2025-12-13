"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { FaSquareXTwitter, FaLinkedin, FaSquareInstagram, FaSquareYoutube, FaSquareFacebook } from "react-icons/fa6";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Courses", href: "#courses" },
    { label: "Testimonials", href: "#reviews" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" },
    { label: "Press", href: "#press" },
  ],
  resources: [
    { label: "Help Center", href: "#help" },
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "Community", href: "#community" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Refund Policy", href: "#refunds" },
  ],
};

const socials = [
    { icon: FaSquareXTwitter, name: "X" },
    { icon: FaSquareFacebook, name: "Facebook" },
    { icon: FaLinkedin, name: "LinkedIn" },
    { icon: FaSquareInstagram, name: "Instagram" },
    { icon: FaSquareYoutube, name: "YouTube" },
]

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[var(--color-dark-slate-grey-50)] to-[var(--color-dark-slate-grey-100)] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 mb-4 cursor-pointer group"
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
            </Link>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering learners worldwide with quality education. Transform
              your future with our comprehensive learning platform.
            </p>

            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                <span>support@lernify.com</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4" />
                <span>123 Learning St, San Francisco, CA 94102</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-foreground mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer inline-block hover:translate-x-1 transition-transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Lernify. All rights reserved.
          </motion.p>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {socials.map(
              (social, key) => (
                <motion.a
                  key={key}
                  href={`#${social.name.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {<social.icon className="w-6 h-6" />}
                </motion.a>
              )
            )}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
