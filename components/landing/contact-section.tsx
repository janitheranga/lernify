"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const socials = [
    { icon: FaXTwitter, name: "x" },
    { icon: FaFacebookF, name: "facebook" },
    { icon: FaLinkedinIn, name: "linkedin" },
    { icon: FaYoutube, name: "youtube" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-b from-transparent to-(--color-dark-slate-grey-50)"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-linear-to-r from-(--color-frosted-mint-200) to-(--color-old-gold-200) rounded-full text-sm font-semibold text-(--color-dark-slate-grey-800) mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;re here to help. Send us a message and
            we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of these channels, or fill out the
                form and we&apos;ll get back to you.
              </p>
            </div>

            <motion.div
              className="flex items-start gap-4 group cursor-pointer"
              whileHover={{ x: 10 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-(--color-muted-teal-500) to-(--color-frosted-mint-500) flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground">support@lernify.com</p>
                <p className="text-muted-foreground">sales@lernify.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 group cursor-pointer"
              whileHover={{ x: 10 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-(--color-frosted-mint-500) to-(--color-old-gold-500) flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-muted-foreground">Mon-Fri 9am-6pm EST</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 group cursor-pointer"
              whileHover={{ x: 10 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-(--color-old-gold-500) to-(--color-muted-teal-500) flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Office</h4>
                <p className="text-muted-foreground">123 Learning Street</p>
                <p className="text-muted-foreground">San Francisco, CA 94102</p>
              </div>
            </motion.div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socials.map((social, key) => (
                  <motion.a
                    key={key}
                    href={`#${social.name.toLowerCase()}`}
                    className="w-10 h-10 rounded-full bg-linear-to-br from-(--color-muted-teal-500) to-(--color-frosted-mint-500) flex items-center justify-center text-white hover:shadow-lg transition-shadow cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{social.name}</span>
                    <span className="text-sm font-bold uppercase">
                      {<social.icon className="w-5 h-5" />}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-37.5"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
