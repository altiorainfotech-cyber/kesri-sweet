"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const dishes = [
  {
    name: "Chicken Biryani",
    image: "/images/home-dish/Briyani.png",
  },
  {
    name: "Gol Gappa / Pani Puri",
    image: "/images/home-dish/pain-puri.png",
  },
  {
    name: "Pav Bhaji",
    image: "/images/home-dish/pav-bhaji-1.png",
  },
  {
    name: "Laccha Parantha",
    image: "/images/home-dish/Best Laccha Paratha 1.png",
  },
];

export default function Dishes() {
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
    <section
      ref={sectionRef}
      className="relative py-8 md:py-12 lg:py-16 min-h-[600px] md:min-h-[700px] lg:h-[87vh]"
      style={{
        backgroundImage: 'url(/images/home-dish/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Title Section */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className={`relative inline-block text-left ${isVisible ? 'animate-slideInLeftDelayed' : ''}`}>
            <span
              className="font-[family-name:var(--font-island-moments)] text-[var(--color-primary)] absolute text-3xl md:text-4xl lg:text-5xl opacity-100"
              style={{ top: '-15px', left: '0px' }}
            >
              Explore Our
            </span>
            <h2
              className="font-bold text-[#2d3a4a] text-2xl md:text-3xl lg:text-5xl pl-20 md:pl-28 lg:pl-36 pt-2 md:pt-2 lg:pt-3"
              style={{ lineHeight: '1' }}
            >
              Exclusive Dishes
            </h2>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 items-end">
          {dishes.map((dish, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Dish card with orange background */}
              <div className="relative group">
                {/* Orange background div - below circle, opacity 51% */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-full transition-colors duration-300 ${isVisible ? 'animate-slideUpFromBottom' : ''} h-[150px] md:h-[180px] lg:h-[225px] top-[70px] md:top-[80px] lg:top-[100px]`}
                  style={{
                    borderTopLeftRadius: '40%',
                    borderBottomRightRadius: '40%',
                    backgroundColor: 'rgba(255, 153, 0, 0.51)',
                  }}
                />
                {/* White hover overlay */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[150px] md:h-[180px] lg:h-[225px] top-[70px] md:top-[80px] lg:top-[100px]"
                  style={{
                    borderTopLeftRadius: '40%',
                    borderBottomRightRadius: '40%',
                    backgroundColor: 'rgba(255, 255, 255, 0.51)',
                  }}
                />
                {/* Circle image - at top, no border, no background */}
                <div
                  className={`relative z-10 rounded-full overflow-hidden mx-auto w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] ${isVisible ? 'animate-moveToPosition' : ''}`}
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Dish Name - inside orange box */}
                <p
                  className="relative z-10 text-center font-[family-name:var(--font-inter)] text-[#2d3a4a] text-xs md:text-sm lg:text-base mt-3 md:mt-4 lg:mt-5 px-2"
                  style={{ fontWeight: 500 }}
                >
                  {dish.name}
                </p>
                {/* Spacer for the background div */}
                <div className="h-[50px] md:h-[60px] lg:h-[80px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Menu Link */}
       
      </div>
    </section>
  );
}
