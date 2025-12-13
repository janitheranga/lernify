"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  [
    {
      name: "Sarah Johnson",
      role: "Web Developer",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      content:
        "Lernify has transformed my career. The courses are well-structured and the instructors are top-notch!",
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      avatar: "https://i.pravatar.cc/150?img=13",
      rating: 5,
      content:
        "Best investment I've made in my education. The quality of content is exceptional.",
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      content:
        "I love how interactive the courses are. The projects really help reinforce learning.",
    },
    {
      name: "James Wilson",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      content:
        "The platform is intuitive and the course variety is amazing. Highly recommend!",
    },
  ],
  [
    {
      name: "Lisa Anderson",
      role: "Marketing Specialist",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      content:
        "Flexible learning that fits my schedule. The mobile app is fantastic!",
    },
    {
      name: "David Martinez",
      role: "Software Engineer",
      avatar: "https://i.pravatar.cc/150?img=14",
      rating: 5,
      content:
        "The certifications have helped me advance in my career. Worth every penny!",
    },
    {
      name: "Rachel Brown",
      role: "Business Analyst",
      avatar: "https://i.pravatar.cc/150?img=45",
      rating: 5,
      content:
        "Outstanding learning experience. The community support is incredible.",
    },
    {
      name: "Tom Harris",
      role: "DevOps Engineer",
      avatar: "https://i.pravatar.cc/150?img=33",
      rating: 5,
      content:
        "Practical skills that I use daily at work. Best LMS platform out there!",
    },
  ],
  [
    {
      name: "Jennifer Lee",
      role: "Frontend Developer",
      avatar: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      content:
        "The video quality is superb and the content is always up-to-date.",
    },
    {
      name: "Kevin Zhang",
      role: "Cloud Architect",
      avatar: "https://i.pravatar.cc/150?img=59",
      rating: 5,
      content:
        "Comprehensive courses with real-world examples. Exactly what I needed!",
    },
    {
      name: "Amanda White",
      role: "Graphic Designer",
      avatar: "https://i.pravatar.cc/150?img=23",
      rating: 5,
      content:
        "The instructors are patient and explain complex topics in simple terms.",
    },
    {
      name: "Robert Taylor",
      role: "Full Stack Developer",
      avatar: "https://i.pravatar.cc/150?img=68",
      rating: 5,
      content:
        "From beginner to advanced, Lernify has courses for everyone. Love it!",
    },
  ],
];

interface ReviewCardProps {
  review: {
    name: string;
    role: string;
    avatar: string;
    rating: number;
    content: string;
  };
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="shrink-0 w-87.5 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer">
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-(--color-old-gold-500) text-(--color-old-gold-500)"
          />
        ))}
      </div>

      <p className="text-foreground mb-6 leading-relaxed">
        &ldquo;{review.content}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const [isPaused, setIsPaused] = React.useState([false, false, false]);

  const handleMouseEnter = (index: number) => {
    setIsPaused((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index: number) => {
    setIsPaused((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <section className="py-20 bg-linear-to-b from-(--color-dark-slate-grey-50) to-transparent overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-linear-to-r from-(--color-frosted-mint-200) to-(--color-old-gold-200) rounded-full text-sm font-semibold text-(--color-dark-slate-grey-800) mb-4">
            Student Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Thousands of Learners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our students have to say about their learning experience
            with Lernify
          </p>
        </motion.div>
      </div>

      <div className="space-y-6">
        {reviews.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="relative"
            onMouseEnter={() => handleMouseEnter(rowIndex)}
            onMouseLeave={() => handleMouseLeave(rowIndex)}
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: rowIndex % 2 === 0 ? [0, -1920] : [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              style={{
                animationPlayState: isPaused[rowIndex] ? "paused" : "running",
              }}
            >
              {/* Duplicate reviews for seamless looping */}
              {[...row, ...row, ...row, ...row].map((review, index) => (
                <ReviewCard key={`${review.name}-${index}`} review={review} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
