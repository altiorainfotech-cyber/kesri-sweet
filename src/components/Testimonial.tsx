"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Lawrence Salaver",
    image: "/images/home-testimonial/Mask group.png",
    rating: 5,
    text: "First time trying out this restaurant in White Rock & I'm impressed on their place. Got a nice ambiance once you enter. Their staff are very friendly. We ordered Samosas, veggie & chicken, & they were good. Will have the butter chicken for dinner tonight & some sweets, (forgot what it's called lol!)",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: "/images/home-testimonial/Mask group.png",
    rating: 5,
    text: "Amazing food and wonderful service! The sweets are absolutely delicious. I've been coming here for months and they never disappoint. Highly recommend the Kaju Katli and Gulab Jamun!",
  },
  {
    id: 3,
    name: "Michael Chen",
    image: "/images/home-testimonial/Mask group.png",
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

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Text Content - White Background */}
        <motion.div
          className="w-full lg:w-[45%] px-4 md:px-6 lg:pl-20 lg:pr-10 bg-white pt-8 md:pt-10 lg:pt-12 pb-8 lg:pb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Orange Square Decoration */}
          <div
            className="bg-[var(--color-primary)] mb-4 md:mb-6 lg:mb-8 w-[30px] h-[25px] md:w-[35px] md:h-[28px] lg:w-[40px] lg:h-[30px]"
            style={{
              borderTopLeftRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
          />

          {/* Title */}
          <div className="relative mb-6 md:mb-7 lg:mb-8">
            <span
              className="font-[family-name:var(--font-island-moments)] text-[var(--color-primary)] text-3xl md:text-4xl lg:text-5xl block mb-[-20px] md:mb-[-28px] lg:mb-[-35px] pl-16 md:pl-20 lg:pl-24"
            >
              Customer
            </span>
            <h2
              className="text-[#2d3a4a] text-2xl md:text-3xl lg:text-4xl"
              style={{ fontWeight: 400, fontFamily: 'Inter, sans-serif' }}
            >
              Reviews
            </h2>
          </div>

          {/* Testimonial Text - White background */}
          <div className="bg-white p-3 md:p-4 lg:mr-[-117px] z-[9999] relative min-h-[120px] md:min-h-[140px] lg:min-h-[150px] mt-0 lg:-mt-5">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="leading-relaxed text-sm md:text-base"
                style={{ color: '#444', lineHeight: '1.8' }}
              >
                {current.text}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Side - Image and Orange Section */}
        <motion.div
          className="w-full lg:w-[55%] bg-[var(--color-primary)] pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20 lg:pb-0 min-h-[400px] md:min-h-[500px] lg:min-h-[63vh]"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Content Container */}
          <div className="h-full flex items-center justify-center flex-col lg:flex-row px-4 md:px-6 lg:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scaleX: 0, transformOrigin: "left" }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col lg:flex-row items-center justify-center w-full"
              >
                {/* Testimonial Image */}
                <div className="relative z-[9999] mb-8 lg:mb-0 lg:ml-[74px]">
                  <Image
                    src={current.image}
                    alt={current.name}
                    width={200}
                    height={200}
                    className="w-[160px] h-[200px] md:w-[180px] md:h-[225px] lg:w-[213px] lg:h-[269px] object-cover"
                  />

                  {/* Navigation Arrows - Bottom of image */}
                  <div className="flex gap-3 md:gap-4 justify-center absolute bottom-[-30px] md:bottom-[-35px] lg:bottom-[-40px] left-1/2 -translate-x-1/2">
                    <button
                      onClick={prevTestimonial}
                      className="text-white hover:opacity-70 transition-opacity text-xl md:text-2xl"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="text-white hover:opacity-70 transition-opacity text-xl md:text-2xl"
                    >
                      ›
                    </button>
                  </div>
                </div>

                {/* Name and Rating - No background */}
                <div className="text-center lg:text-left lg:mr-auto lg:ml-[50px] mt-8 lg:mt-0">
                  <h3
                    className="font-bold mb-1 text-lg md:text-xl lg:text-2xl"
                    style={{ color: '#000' }}
                  >
                    {current.name}
                  </h3>
                  <p
                    className="mb-3 text-xs md:text-sm"
                    style={{ color: '#000' }}
                  >
                    {current.name}
                  </p>
                  {/* Star Rating - White color */}
                  <div className="flex gap-1 mb-4 lg:mb-8 justify-center lg:justify-start">
                    {[...Array(current.rating)].map((_, i) => (
                      <span key={i} className="text-white text-sm md:text-base">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
