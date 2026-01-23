"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import menuData from '@/data/menuData.json';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function MenuHero() {
  const [activeItem, setActiveItem] = useState<MenuItem>(menuData.menuItems[0]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Auto-rotate menu items every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => {
        const nextIndex = prevIndex === null ? 1 : (prevIndex + 1) % menuData.menuItems.length;
        const nextItem = menuData.menuItems[nextIndex];
        setActiveItem(nextItem);
        setSelectedImage(nextItem.image);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSmallImageClick = (item: MenuItem, index: number) => {
    setSelectedImage(item.image);
    setSelectedIndex(index);
    setActiveItem(item);
  };

  return (
    <section className="w-full min-h-screen bg-white overflow-hidden relative">
      {/* Menu heading at top center */}
      <div className="absolute top-8 lg:top-12 left-1/2 -translate-x-1/2 z-20">
        <h1 className="text-[50px] italic text-[#FF9900]" style={{ fontFamily: 'Island Moments, cursive' }}>
          Menu
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* LEFT : White section with background image */}
        <div className="relative bg-white flex items-center justify-center p-8 lg:p-16">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/home-dish/Ellipse 3.png"
              alt="Background decoration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT : Orange section with content */}
        <div className="relative bg-[#FF9900]/[0.51] flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-[600px]">

            {/* Title, description and button */}
            <div className="pl-16 mt-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {activeItem.title}
              </h2>
              <p className="text-gray-900 mb-8 leading-relaxed text-sm lg:text-base">
                {activeItem.description}
              </p>
              <button className="px-6 py-3 bg-[#FF8400] text-white font-semibold hover:bg-[#FF9900] transition-colors shadow-[0_4px_6px_rgba(0,0,0,0.3)]" style={{ borderRadius: '12px 0 12px 0' }}>
                Explore Menu
              </button>
            </div>

          </div>
        </div>

        {/* Small images positioned in the middle between sections */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
          {menuData.menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => handleSmallImageClick(item, index)}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden cursor-pointer shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Animated image on click */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          {selectedImage && selectedIndex !== null && (
            <motion.div
              key={selectedImage}
              initial={{
                top: 'auto',
                bottom: '2rem',
                left: '2rem',
                x: '0%',
                y: '0%',
                scale: 0.2,
                rotate: 0,
                opacity: 0
              }}
              animate={{
                top: '50%',
                bottom: 'auto',
                left: '25%',
                x: '-50%',
                y: '-50%',
                scale: 1,
                rotate: 360,
                opacity: 1
              }}
              exit={{
                top: '50%',
                bottom: 'auto',
                left: '50%',
                x: '-50%',
                y: `calc(-50% + ${(selectedIndex - 2) * 6}rem)`,
                scale: 0.2,
                rotate: 720,
                opacity: 0
              }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute w-[400px] h-[400px] z-[5] pointer-events-none"
            >
              <Image
                src={selectedImage}
                alt="Selected dish"
                fill
                className="object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}