"use client";

import Image from "next/image";
import { useState } from "react";

interface Sweet {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

const sweetsData: Sweet[] = [
    {
        id: 1,
        name: "Coconut Sweet",
        image: "/images/sweets/coconut.png",
        description: "Tradition wrapped in tropical flavour, crafted to melt gently on your palate.",
        price: 2.50,
    },
    {
        id: 2,
        name: "Phool Patisa",
        image: "/images/sweets/Phool-Patisa.png",
        description: "Tradition wrapped in tropical flavour, crafted to melt gently on your palate.",
        price: 2.50,
    },
    {
        id: 3,
        name: "Malai Chop",
        image: "/images/sweets/Malai-Chop.png",
        description: "Tradition wrapped in tropical flavour, crafted to melt gently on your palate.",
        price: 2.50,
    },
];

export default function SweetsList() {
    // Local state to track quantities for each item
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({
        1: 1,
        2: 1,
        3: 1,
    });

    const handleQuantityChange = (id: number, delta: number) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + delta)
        }));
    };

    return (
        <section className="relative w-full min-h-screen py-20 overflow-hidden bg-[#EAE5E3]">
            {/* Background Gradient/Image if needed to match exact design tone, using plain color + background image overlay if provided */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/sweets/pagebackground.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />

            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[10px] md:left-[100px] top-0 bottom-0 w-px bg-orange-400 h-full hidden md:block"></div>

                    <div className="flex flex-col gap-24">
                        {sweetsData.map((sweet) => (
                            <div key={sweet.id} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">

                                {/* Label and Connector (Desktop only) */}
                                <div className="hidden md:flex items-center absolute left-[100px] top-1/2 -translate-y-1/2 -ml-[1px] w-[200px]">
                                    {/* Dot on line */}
                                    {/* Small orange marker on the line */}
                                    <div className="w-1.5 h-8 bg-orange-500 rounded-sm absolute left-0 -translate-x-1/2"></div>

                                    {/* Horizontal connector */}
                                    <div className="h-px bg-black w-12 ml-0"></div>

                                    {/* Text Label */}
                                    <span className="text-black text-sm whitespace-nowrap ml-2 font-medium">{sweet.name}</span>
                                </div>

                                {/* Image Section */}
                                <div className="md:ml-[300px] relative z-20 flex-shrink-0">
                                    <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden shadow-xl">
                                        <Image
                                            src={sweet.image}
                                            alt={sweet.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 flex flex-col xl:flex-row justify-between items-start pt-4 md:pt-0 gap-6 min-w-0">
                                    <div className="flex-1 max-w-md">
                                        <h3 className="text-2xl text-orange-400 font-semibold mb-2">{sweet.name}</h3>
                                        <div className="h-px w-24 bg-gray-400 mb-4"></div>
                                        <p className="text-gray-700 text-base leading-relaxed">
                                            {sweet.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-start gap-4 mt-4 xl:mt-0 flex-shrink-0">
                                        <div className="text-black font-semibold text-lg">
                                            CAD${sweet.price.toFixed(2)}
                                        </div>

                                        <div className="flex items-center gap-4">
                                            {/* Quantity Control */}
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleQuantityChange(sweet.id, -1)}
                                                    className="w-5 h-5 flex items-center justify-center bg-black text-white rounded-[4px] text-xs hover:bg-gray-800 transition-colors"
                                                >
                                                    <span className="mb-0.5">-</span>
                                                </button>
                                                <span className="w-4 text-center text-sm font-medium text-black">{quantities[sweet.id]}</span>
                                                <button
                                                    onClick={() => handleQuantityChange(sweet.id, 1)}
                                                    className="w-5 h-5 flex items-center justify-center bg-black text-white rounded-[4px] text-xs hover:bg-gray-800 transition-colors"
                                                >
                                                    <span className="mb-0.5">+</span>
                                                </button>

                                                <button className="text-black ml-2 hover:text-red-600 transition-colors">
                                                    {/* Trash Icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <button className="bg-orange-400 hover:bg-orange-500 text-black px-6 py-2.5 rounded-tl-2xl rounded-br-2xl text-sm font-medium shadow-md transition-colors w-full md:w-auto">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Showcase Images */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {[22, 26, 27, 28].map((num) => (
                        <div key={num} className="relative aspect-[3/4] w-full max-w-[200px] mx-auto overflow-hidden rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none shadow-lg hover:scale-105 transition-transform duration-300">
                            <Image
                                src={`/images/sweets/image ${num}.png`}
                                alt={`Sweet showcase ${num}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
