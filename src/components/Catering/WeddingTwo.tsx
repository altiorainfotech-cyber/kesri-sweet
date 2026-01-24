"use client";

import Image from "next/image";
import { useState } from "react";

const WeddingTwo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const timelineItems = [
    {
      image: "/images/weddingTwo/one.png",
      alt: "Indian catering dishes",
      title: "Wedding Catering Services in Surrey",
      description:
        "Make your special day unforgettable with elegant wedding catering. Our wedding catering services in Surrey include traditional Indian sweets, savoury dishes, and full-course vegetarian menus.",
    },
    {
      image: "/images/weddingTwo/two.png",
      alt: "Fresh vegetables and catering",
      title: "Corporate Catering Services",
      description:
        "Professional catering for corporate events, meetings, and conferences. We deliver fresh, delicious Indian cuisine that impresses your clients and colleagues.",
    },
    {
      image: "/images/weddingTwo/three.png",
      alt: "Catering setup",
      title: "Party & Event Catering",
      description:
        "From birthday parties to anniversary celebrations, we provide customized menus that suit your taste and budget for any special occasion.",
    },
    {
      image: "/images/weddingTwo/foure.png",
      alt: "Rice and Indian breads",
      title: "Festival & Religious Catering",
      description:
        "Celebrate festivals and religious occasions with authentic Indian cuisine. We specialize in traditional dishes for Diwali, Eid, and other celebrations.",
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: "#F4F0EF" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          {/* Left Side - Title */}
          <div className="lg:w-1/2">
            <div className="relative inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-normal text-black leading-tight relative z-10">
                Authentic Indian Catering
                <br />
                Services in Surrey, BC
              </h2>
              {/* Orange Accent - Top Left */}
              <div className="absolute -top-3 -left-7 w-12 h-8 bg-[#FF9900] rounded-tl-[15px] rounded-br-[15px] -z-0"></div>
            </div>
            <p className="text-[#F5A623] text-lg font-semibold">
              We proudly offer customized menus
              <br />
              for all occasions:
            </p>
          </div>

          {/* Right Side - Description */}
          <div className="lg:w-1/2 text-center">
            <p className="text-gray-700 leading-relaxed">
              Kesari Sweets is a trusted name for Indian catering services in Surrey and
              <br />
              nearby areas. We combine traditional recipes, fresh ingredients, and reliable
              <br />
              service to make every event seamless and stress-free.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              From large celebrations to intimate gatherings, our catering solutions are
              <br />
              tailored to your needs, budget, and guest count.
            </p>
            <p className="text-gray-700 leading-relaxed mt-6">
              Our Catering Services in Surrey
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Horizontal Line - extends to full page width */}
          <div
            className="absolute h-[2px] bg-[#F5A623] hidden lg:block"
            style={{ top: "175px", zIndex: 1, left: "calc(-50vw + 50%)", right: "calc(-50vw + 50%)" }}
          ></div>

          {/* Dots between images */}
          <div className="absolute hidden lg:flex justify-between items-center" style={{ top: "167px", left: "calc(25% - 8px)", right: "calc(25% - 8px)", zIndex: 1 }}>
            <div className="w-4 h-4 rounded-full bg-[#F5A623]"></div>
            <div className="w-4 h-4 rounded-full bg-[#F5A623]"></div>
            <div className="w-4 h-4 rounded-full bg-[#F5A623]"></div>
          </div>

          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center relative" style={{ zIndex: 2 }}>
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center group">
                <div
                  className="relative overflow-hidden w-[192px] h-[291px] md:w-[233px] md:h-[351px]"
                  style={{
                    borderTopLeftRadius: "20px",
                    borderBottomRightRadius: "20px"
                  }}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 192px, 233px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover Overlay for Desktop / Touch Overlay for Mobile */}
                  <div
                    className={`absolute inset-0 bg-[#F5A623]/90 transition-opacity duration-300 flex flex-col justify-center items-center p-4 md:p-6 ${
                      activeIndex === index ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'
                    }`}
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomRightRadius: "20px"
                    }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-3 md:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-800 text-xs md:text-sm text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingTwo;
