"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Wedding() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            title: "Wedding Catering Services in Surrey",
            description:
                "Make your special day unforgettable with elegant wedding catering. Our wedding catering services in Surrey include traditional Indian sweets, savoury dishes, and full-course vegetarian menus customized to your ceremony and reception.",
            image: "/images/Wedding/RDK-00605.jpg",
        },
        {
            title: "Birthday Catering Services in Surrey",
            description:
                "Planning a birthday party? Our birthday catering services in Surrey are perfect for kids' parties, milestone birthdays, and family celebrations—delicious food without the stress of cooking.",
            image: "/images/Wedding/RDK-00211.jpg",
        },
        {
            title: "Small Event Catering in Surrey",
            description:
                "Hosting a house party, anniversary, or intimate gathering? Our small event catering services in Surrey are designed for flexibility, freshness, and flavour—ideal for events of any size.",
            image: "/images/Wedding/RDK-00685.jpg",
        },
        {
            title: "Corporate & Office Catering",
            description:
                "Professional catering for meetings, staff hunches, and business events, delivered on time with consistent quality.",
            image: "/images/Wedding/RDK-00500.jpg",
        },
    ];

    return (
        <section className="py-10 md:py-16 px-4 sm:px-6 md:px-12 bg-[#E0DCDB]">
           

            {/* Services Heading */}
            <div className="max-w-7xl mx-auto mt-6 md:mt-12 mb-6 md:mb-8 text-center sm:text-left">
                <h3 className="text-[#FF9900] text-lg sm:text-xl md:text-2xl  leading-snug font-semibold">
                    We proudly offer customized menus
                    <br />
                    for all occasions:
                </h3>
            </div>

            {/* Services Grid - 2 columns, 2 rows */}
            <div
                ref={sectionRef}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col sm:flex-row gap-4 sm:gap-6 items-center p-4 transition-all duration-700 ease-out ${index >= 2 ? 'md:flex-row-reverse' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{
                            transitionDelay: `${index * 150}ms`,
                        }}
                    >
                        {/* Service Image */}
                        <div
                            className="relative flex-shrink-0 overflow-hidden shadow-sm w-[150px] h-[180px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px]"
                            style={{
                                borderTopLeftRadius: '20px',
                                borderBottomRightRadius: '20px'
                            }}
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Service Text */}
                        <div className={`flex-1 text-center sm:text-left ${index >= 2 ? 'md:text-right' : ''}`}>
                            <h4 className="text-lg sm:text-xl font-normal text-black mb-2">
                                {service.title}
                            </h4>
                            <p className="text-black text-sm leading-relaxed font-normal opacity-90">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
