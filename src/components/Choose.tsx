"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const galleryImages = [
  { src: "/images/home-choose/gallery/gallery1.png", alt: "Dish 1" },
    { src: "/images/home-choose/gallery/momo.png", alt: "Dish 2" },
  { src: "/images/home-choose/gallery/gallery3.png", alt: "Dish 2" },
  { src: "/images/home-choose/gallery/gallery4.png", alt: "Dish 3" },
  { src: "/images/home-choose/gallery/gallery5.png", alt: "Dish 4" },
  { src: "/images/home-choose/gallery/gallery6.png", alt: "Dish 5" },
  { src: "/images/home-choose/gallery/gallery7.png", alt: "Dish 6" },
  { src: "/images/home-choose/gallery/gallery9.png", alt: "Dish 7" },
  { src: "/images/home-choose/gallery/gallery10.png", alt: "Dish 8" },
  { src: "/images/home-choose/gallery/gallery12.png", alt: "Dish 9" },
  { src: "/images/home-choose/gallery/gallery13.png", alt: "Dish 10" },
  { src: "/images/home-choose/gallery/image 6.png", alt: "Dish 11" },
];

export default function Choose() {
  const [showGallery, setShowGallery] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 overflow-hidden" style={{ backgroundColor: '#F4F0EF' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-8">
            {/* Left Side - Image Collage */}
            <div className="relative w-full lg:w-[55%] h-[300px] md:h-[380px] lg:h-[420px]">
              {/* Orange Square Decoration - border only top-left and bottom-right */}
              <div
                className="absolute bg-[var(--color-primary)] w-[30px] h-[25px] md:w-[35px] md:h-[28px] lg:w-[40px] lg:h-[30px]"
                style={{
                  top: '5px',
                  left: '20px',
                  borderTopLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                }}
              />

              {/* Left Image - Small sweets - NO border radius */}
              <div
                className={`absolute overflow-hidden z-20 ${isVisible ? 'animate-growLeftToRight' : ''} w-[110px] h-[95px] md:w-[130px] md:h-[110px] lg:w-[150px] lg:h-[130px] top-[140px] md:top-[160px] lg:top-[180px] left-[15px] md:left-[25px] lg:left-[30px]`}
              >
                <Image
                  src="/images/home-choose/left.png"
                  alt="Sweets"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Center Image - Paratha/Main dish - BEHIND other images - NO border radius */}
              <div
                className={`absolute overflow-hidden z-10 ${isVisible ? 'animate-growLeftToRight' : ''} w-[210px] h-[260px] md:w-[240px] md:h-[300px] lg:w-[280px] lg:h-[343px] top-[20px] md:top-[25px] lg:top-[30px] left-[90px] md:left-[110px] lg:left-[130px]`}
              >
                <Image
                  src="/images/home-choose/center.png"
                  alt="Laccha Paratha"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Right Image - Basket of sweets - NO border radius */}
              <div
                className={`absolute overflow-hidden z-20 ${isVisible ? 'animate-growLeftToRight' : ''} w-[130px] h-[145px] md:w-[150px] md:h-[165px] lg:w-[170px] lg:h-[190px] top-[75px] md:top-[85px] lg:top-[100px] left-[260px] md:left-[300px] lg:left-[350px]`}
              >
                <Image
                  src="/images/home-choose/right.png"
                  alt="Sweet Basket"
                  fill
                  className="object-contain"
                />
              </div>

            </div>

            {/* Right Side - Text Content */}
            <div className="w-full lg:w-[45%] lg:pl-8 text-center flex flex-col items-center">
              <div className="relative">
                <span
                  className="font-[family-name:var(--font-island-moments)] text-[var(--color-primary)] absolute text-3xl md:text-4xl lg:text-5xl"
                  style={{ top: '-1%', left: '-21%' }}
                >
                  Choose
                </span>
                <h2
                  className="font-serif text-[#2d3a4a] text-2xl md:text-3xl lg:text-4xl pt-6 md:pt-7 lg:pt-8"
                  style={{ fontWeight: 400, lineHeight: '1.2' }}
                >
                  your favourite
                </h2>
              </div>
              <p
                className="my-4 md:my-5 lg:my-6 leading-relaxed text-center text-sm md:text-base lg:text-lg px-4 md:px-0"
                style={{ color: '#000000' }}
              >
                A glimpse into our kitchen, our tables, and our stories.
                <br />
                Because every plate deserves to be remembered.
              </p>
              <button
                onClick={() => setShowGallery(!showGallery)}
                className="text-white font-medium transition-all duration-300 hover:opacity-90 text-xs md:text-sm"
                style={{
                  backgroundColor: '#FF8400',
                  borderTopLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                  boxShadow: '0 4px 15px rgba(255, 132, 0, 0.4)',
                  padding: showGallery ? '8px 16px' : '8px 20px',
                }}
              >
                {showGallery ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                ) : (
                  'Explore Moments'
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Shows below Choose section with smooth animation */}
      <div
        className="overflow-hidden transition-all duration-700 ease-in-out"
        style={{
          maxHeight: showGallery ? '9999px' : '0px',
          opacity: showGallery ? 1 : 0,
        }}
      >
        <section
          className="relative py-8 md:py-12 lg:py-16"
          style={{
            backgroundImage: 'url(/images/home-choose/gallery/gallerysection-background%20.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Gallery Grid - 2 columns on mobile, 4 columns on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2.5 lg:gap-3">
              {/* Column 1 */}
              <div className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/home-choose/gallery/gallery1.png"
                    alt="Paratha"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/home-choose/gallery/gallery9.png"
                    alt="Paratha"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/home-choose/gallery/momo.png"
                    alt="Chaat"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/home-choose/gallery/gallery4.png"
                    alt="Pink Sweets"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/home-choose/gallery/gallery5.png"
                    alt="Vegetables"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/home-choose/gallery/gallery3.png"
                    alt="Kebab"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/home-choose/gallery/gallery6.png"
                    alt="Biryani"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/home-choose/gallery/gallery7.png"
                    alt="Curry"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/home-choose/gallery/gallery10.png"
                    alt="Green Drink"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/home-choose/gallery/gallery12.png"
                    alt="Dal"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/home-choose/gallery/gallery13.png"
                    alt="Ladoo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
