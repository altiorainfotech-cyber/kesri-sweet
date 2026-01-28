"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Gallery images from public/images/gallery folder
const galleryImages = [
  { src: "/images/gallery/RDK-00151.jpg", alt: "Kesari Sweets Gallery" },
  { src: "/images/gallery/RDK-00158.jpg", alt: "Kesari Sweets Gallery" },
  { src: "/images/gallery/RDK-00004.jpg", alt: "Kesari Sweets Gallery" },
  { src: "/images/gallery/RDK-00066.jpg", alt: "Kesari Sweets Gallery" },
  { src: "/images/gallery/RDK-00474.jpg", alt: "Kesari Sweets Gallery" },
  { src: "/images/gallery/RDK-00588.jpg", alt: "Kesari Sweets Gallery" },
  { src: "/images/gallery/RDK-00605.jpg", alt: "Kesari Sweets Gallery" },
  { src: "/images/gallery/RDK-00112.jpg", alt: "Kesari Sweets Gallery" },
  { src: "/images/gallery/eewqe.jpg", alt: "Kesari Sweets Gallery" },
  { src: "/images/gallery/RDK-00642.jpg", alt: "Kesari Sweets Gallery" },

];

const WeddingTwo = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight" && selectedImage !== null) {
        setSelectedImage((prev) => (prev! + 1) % galleryImages.length);
      }
      if (e.key === "ArrowLeft" && selectedImage !== null) {
        setSelectedImage((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#f4f0ef]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="relative inline-block">
            <h2 className="font-sans text-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Our Gallery
            </h2>
            {/* Orange Accent */}
            <div
              className="absolute -top-2 -right-4 md:-top-3 md:-right-6 w-8 h-8 md:w-10 md:h-10 bg-[#FF9900] -z-10"
              style={{ borderTopLeftRadius: "15px", borderBottomRightRadius: "15px" }}
            ></div>
          </div>
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            A glimpse into our delicious creations and memorable events
          </p>
        </div>

        {/* Masonry Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden cursor-pointer group transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${index % 5 === 0 ? "row-span-2" : ""}`}
              style={{
                transitionDelay: `${index * 100}ms`,
                borderTopLeftRadius: "15px",
                borderBottomRightRadius: "15px",
              }}
              onClick={() => setSelectedImage(index)}
            >
              <div className={`relative w-full ${index % 5 === 0 ? "h-[300px] sm:h-[400px] md:h-[500px]" : "h-[150px] sm:h-[200px] md:h-[240px]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 md:h-7 md:w-7 text-[#FF9900]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-12 md:w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev! + 1) % galleryImages.length);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-12 md:w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm md:text-base">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default WeddingTwo;

/*
========================================
ORIGINAL CODE (COMMENTED OUT)
========================================

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
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="lg:w-1/2">
            <div className="relative inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-normal text-black leading-tight relative z-10">
                Authentic Indian Catering
                <br />
                Services in Surrey, BC
              </h2>
              <div className="absolute -top-3 -left-7 w-12 h-8 bg-[#FF9900] rounded-tl-[15px] rounded-br-[15px] -z-0"></div>
            </div>
            <p className="text-[#F5A623] text-lg font-semibold">
              We proudly offer customized menus
              <br />
              for all occasions:
            </p>
          </div>

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

        <div className="relative">
          <div
            className="absolute h-[2px] bg-[#F5A623] hidden lg:block"
            style={{ top: "175px", zIndex: 1, left: "calc(-50vw + 50%)", right: "calc(-50vw + 50%)" }}
          ></div>

          <div className="absolute hidden lg:flex justify-between items-center" style={{ top: "167px", left: "calc(25% - 8px)", right: "calc(25% - 8px)", zIndex: 1 }}>
            <div className="w-4 h-4 rounded-full bg-[#F5A623]"></div>
            <div className="w-4 h-4 rounded-full bg-[#F5A623]"></div>
            <div className="w-4 h-4 rounded-full bg-[#F5A623]"></div>
          </div>

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

*/
