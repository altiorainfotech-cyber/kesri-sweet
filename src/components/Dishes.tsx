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
      className="relative py-16"
      style={{
        backgroundImage: 'url(/images/home-dish/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '87vh'
      }}
    >
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="mb-12">
          <div className={`relative inline-block text-left ${isVisible ? 'animate-slideInLeftDelayed' : ''}`}>
            <span
              className="font-[family-name:var(--font-island-moments)] text-[var(--color-primary)] absolute"
              style={{ fontSize: '50px', top: '-30px', left: '0px' }}
            >
              Explore Our
            </span>
            <h2
              className="font-bold text-[#2d3a4a]"
              style={{ fontSize: '48px', lineHeight: '1', paddingLeft: '140px', paddingTop: '10px' }}
            >
              Exclusive Dishes
            </h2>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-end">
          {dishes.map((dish, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Dish card with orange background */}
              <div className="relative group">
                {/* Orange background div - below circle, opacity 51% */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-full transition-colors duration-300 ${isVisible ? 'animate-slideUpFromBottom' : ''}`}
                  style={{
                    height: '225px',
                    top: '100px',
                    borderTopLeftRadius: '40%',
                    borderBottomRightRadius: '40%',
                    backgroundColor: 'rgba(255, 153, 0, 0.51)',
                  }}
                />
                {/* White hover overlay */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    height: '225px',
                    top: '100px',
                    borderTopLeftRadius: '40%',
                    borderBottomRightRadius: '40%',
                    backgroundColor: 'rgba(255, 255, 255, 0.51)',
                  }}
                />
                {/* Circle image - at top, no border, no background */}
                <div
                  className={`relative z-10 rounded-full overflow-hidden ${isVisible ? 'animate-moveToPosition' : ''}`}
                  style={{ width: '200px', height: '200px' }}
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
                  className="relative z-10 text-center font-[family-name:var(--font-inter)] text-[#2d3a4a]"
                  style={{ fontSize: '16px', fontWeight: 500, marginTop: '20px' }}
                >
                  {dish.name}
                </p>
                {/* Spacer for the background div */}
                <div style={{ height: '80px' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Menu Link */}
       
      </div>
    </section>
  );
}
