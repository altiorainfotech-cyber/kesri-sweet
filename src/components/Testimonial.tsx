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
    <section className=" overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Text Content - White Background */}
        <motion.div
          className="w-full lg:w-[45%] px-6 lg:pl-20 lg:pr-10 bg-white pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Orange Square Decoration */}
          <div
            className="bg-[var(--color-primary)] mb-8"
            style={{
              width: '40px',
              height: '30px',
              borderTopLeftRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
          />

          {/* Title */}
          <div className="relative mb-8 ">
            <span
              className="font-[family-name:var(--font-island-moments)] text-[var(--color-primary)]"
              style={{ fontSize: '55px', display: 'block', marginBottom: '-35px', paddingLeft: '100px' }}
            >
              Customer
            </span>
            <h2
              className="text-[#2d3a4a]"
              style={{ fontSize: '45px', fontWeight: 400, fontFamily: 'Inter, sans-serif' }}
            >
              Reviews
            </h2>
          </div>

          {/* Testimonial Text - White background */}
          <div className="bg-white p-4 " style={{ marginRight: '-117px', zIndex: 9999, position: 'relative', height: '150px', marginTop: '-20px' }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="leading-relaxed"
                style={{ fontSize: '16px', color: '#444', lineHeight: '1.8' }}
              >
                {current.text}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Side - Image and Orange Section */}
        <motion.div
          className="w-full lg:w-[55%] bg-[var(--color-primary)] pt-20"
          style={{ minHeight: '63vh' }}
          initial={{ scaleX: 0, transformOrigin: "left" }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Content Container */}
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scaleX: 0, transformOrigin: "left" }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center justify-center w-full"
              >
                {/* Testimonial Image - With 150px left padding */}
                <div style={{ marginLeft: '74px', zIndex: 9999, position: 'relative' }}>
                  <Image
                    src={current.image}
                    alt={current.name}
                    width={200}
                    height={200}
                    style={{ width: '213px', height: '269px', objectFit: 'cover' }}
                  />

                  {/* Navigation Arrows - Bottom of image */}
                  <div className="flex gap-4 justify-center" style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)' }}>
                    <button
                      onClick={prevTestimonial}
                      className="text-white hover:opacity-70 transition-opacity"
                      style={{ fontSize: '24px' }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="text-white hover:opacity-70 transition-opacity"
                      style={{ fontSize: '24px' }}
                    >
                      ›
                    </button>
                  </div>
                </div>

                {/* Name and Rating - No background */}
                <div style={{ marginRight: 'auto', marginLeft: '50px' }}>
                  <h3
                    className="font-bold mb-1"
                    style={{ fontSize: '24px', color: '#000' }}
                  >
                    {current.name}
                  </h3>
                  <p
                    className="mb-3"
                    style={{ fontSize: '14px', color: '#000' }}
                  >
                    {current.name}
                  </p>
                  {/* Star Rating - White color */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(current.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#FFF', fontSize: '16px' }}>★</span>
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
