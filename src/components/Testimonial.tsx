"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Lawrence Salaver",
    position: "Local Guide",
    rating: 5,
    text: "First time trying out this restaurant in White Rock & I'm impressed on their place. Got a nice ambiance once you enter. Their staff are very friendly. We ordered Samosas, veggie & chicken, & they were good.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Food Blogger",
    rating: 5,
    text: "Amazing food and wonderful service! The sweets are absolutely delicious. I've been coming here for months and they never disappoint. Highly recommend the Kaju Katli and Gulab Jamun!",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Regular Customer",
    rating: 5,
    text: "Best Indian sweets in town! The quality is outstanding and you can taste the freshness in every bite. The staff is always helpful and the atmosphere is warm and welcoming.",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="relative h-auto lg:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect and overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/Why-Choose/RDK-00683.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-[#000000CC] backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 py-10 lg:py-0">
        <div className="flex flex-col items-center">
          {/* Header Link/Text */}
          <div className="mb-4 lg:mb-6 flex flex-col items-center">
            <span className="font-[family-name:var(--font-island-moments)] text-[#FF9900] text-3xl md:text-4xl lg:text-5xl -mb-3 md:-mb-4">
              Happy Guests
            </span>
          </div>

          <div className="relative w-full text-center">
            {/* Quote Icons */}
            <span className="absolute -top-6 left-0 text-[#FF9900] text-4xl lg:text-6xl opacity-20 hidden md:block">"</span>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4 lg:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl lg:text-2xl ${i < current.rating ? "text-[#FF9900]" : "text-gray-600"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-white text-base md:text-lg lg:text-2xl font-light italic leading-relaxed max-w-3xl mb-6 lg:mb-8 line-clamp-3 lg:line-clamp-none">
                  {current.text}
                </p>

                {/* Profile Info */}
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-6 bg-[#FF9900]/50" />
                  <div className="text-center">
                    <h4 className="text-white font-bold text-lg md:text-xl tracking-wide uppercase">
                      {current.name}
                    </h4>
                    <span className="text-[#FF9900] text-sm font-medium tracking-[0.2em] uppercase">
                      {current.position}
                    </span>
                  </div>
                  <div className="h-0.5 w-6 bg-[#FF9900]/50" />
                </div>
              </motion.div>
            </AnimatePresence>

            <span className="absolute -bottom-6 right-0 text-[#FF9900] text-4xl lg:text-6xl opacity-20 hidden md:block">"</span>
          </div>
        </div>

        {/* Minimal Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 right-4 md:right-8 flex justify-between pointer-events-none">
          <button
            onClick={prevTestimonial}
            className="pointer-events-auto h-10 w-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#FF9900] hover:border-[#FF9900] transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="pointer-events-auto h-10 w-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#FF9900] hover:border-[#FF9900] transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
