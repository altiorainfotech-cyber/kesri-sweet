"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      <div className="relative lg:absolute top-0 lg:top-12 left-0 lg:left-1/2 lg:-translate-x-1/2 z-20 text-center pt-8 lg:pt-0">
        <h1 className="text-4xl md:text-5xl lg:text-[50px] italic text-[#FF9900]" style={{ fontFamily: 'Island Moments, cursive' }}>
          Menu
        </h1>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen">

        {/* Mobile: Big rotated image space */}
        <div className="lg:hidden relative bg-white min-h-[254px] order-1"></div>

        {/* LEFT : White section with background image */}
        <div className="relative bg-white flex items-center justify-center p-2 lg:p-16 order-2 lg:order-1 min-h-[40px] lg:min-h-screen">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/home-dish/Ellipse 3.png"
              alt="Background decoration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Small images - horizontal on mobile, vertical on desktop */}
        <div className="relative lg:absolute left-0 lg:left-1/2 top-auto lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 order-3 lg:order-2 bg-white lg:bg-transparent">
          <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 justify-center lg:justify-start py-6 lg:py-0 px-4 lg:px-0 overflow-x-auto lg:overflow-x-visible">
            {menuData.menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={() => handleSmallImageClick(item, index)}
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden cursor-pointer shadow-lg flex-shrink-0"
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

        {/* RIGHT : Orange section with content */}
        <div className="relative bg-[#FF9900]/[0.51] flex items-center justify-center p-8 lg:p-16 order-4 lg:order-3 min-h-[auto] lg:min-h-screen">
          <div className="w-full max-w-[600px]">

            {/* Title, description and button */}
            <div className="lg:pl-16 lg:mt-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                {activeItem.title}
              </h2>
              <p className="text-gray-900 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
                {activeItem.description}
              </p>
              <Link href="/order">
                <button className="px-6 py-3 bg-[#FF8400] text-white font-semibold hover:bg-[#FF9900] transition-colors shadow-[0_4px_6px_rgba(0,0,0,0.3)]" style={{ borderRadius: '12px 0 12px 0' }}>
                  Explore Menu
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Animated image on click - positioned at top left on mobile */}
      <div className="absolute inset-0 pointer-events-none order-1 lg:order-none">
        <AnimatePresence mode="wait">
          {selectedImage && selectedIndex !== null && (
            <motion.div
              key={selectedImage}
              initial={{
                top: isMobile ? '470px' : 'auto',
                bottom: isMobile ? 'auto' : '2rem',
                left: isMobile ? `calc(50% + ${(selectedIndex - 2) * 4.5}rem)` : '2rem',
                x: isMobile ? '-50%' : '0%',
                y: '0%',
                scale: 0.2,
                rotate: 0,
                opacity: 0.5
              }}
              animate={{
                top: isMobile ? '80px' : '50%',
                bottom: 'auto',
                left: isMobile ? '50%' : '25%',
                x: isMobile ? '-50%' : '-50%',
                y: isMobile ? '0%' : '-50%',
                scale: isMobile ? 0.8 : 1,
                rotate: 360,
                opacity: 1
              }}
              exit={{
                top: isMobile ? '470px' : '50%',
                bottom: 'auto',
                left: isMobile ? `calc(50% + ${(selectedIndex - 2) * 4.5}rem)` : '50%',
                x: isMobile ? '-50%' : '-50%',
                y: isMobile ? '0%' : `calc(-50% + ${(selectedIndex - 2) * 6}rem)`,
                scale: 0.2,
                rotate: 720,
                opacity: 0
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] z-[15] pointer-events-none"
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