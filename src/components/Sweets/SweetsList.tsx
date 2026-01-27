"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

interface SweetVariant {
    weight: string;
    price: number;
}

interface Sweet {
    id: number;
    name: string;
    image: string;
    description: string;
    variants: SweetVariant[];
}

const sweetsData: Sweet[] = [
    {
        id: 1,
        name: "Coconut Sweet",
        image: "/images/sweets/coconut.png",
        description: "Tradition wrapped in tropical flavour, crafted to melt gently on your palate.",
        variants: [
            { weight: "250g", price: 8.00 },
            { weight: "500g", price: 15.00 },
            { weight: "1kg", price: 28.00 },
        ]
    },
    {
        id: 2,
        name: "Phool Patisa",
        image: "/images/sweets/Phool-Patisa.png",
        description: "Tradition wrapped in tropical flavour, crafted to melt gently on your palate.",
        variants: [
            { weight: "250g", price: 8.00 },
            { weight: "500g", price: 15.00 },
            { weight: "1kg", price: 28.00 },
        ]
    },
    {
        id: 3,
        name: "Malai Chop",
        image: "/images/sweets/Malai-Chop.png",
        description: "Tradition wrapped in tropical flavour, crafted to melt gently on your palate.",
        variants: [
            { weight: "250g", price: 8.00 },
            { weight: "500g", price: 15.00 },
            { weight: "1kg", price: 28.00 },
        ]
    },
];

export default function SweetsList() {
    const router = useRouter();
    const { cartItems, addToCart, updateQuantity, removeFromCart, getCartCount } = useCart();

    // State for selected variants, initialized with the first variant for each sweet
    const [selectedVariants, setSelectedVariants] = useState<{ [key: number]: SweetVariant }>(
        sweetsData.reduce((acc, sweet) => ({ ...acc, [sweet.id]: sweet.variants[0] }), {})
    );

    // Local state to track quantities for each item
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    // Initialize quantities from cart based on selected variant
    useEffect(() => {
        const qtys: { [key: number]: number } = {};
        sweetsData.forEach(sweet => {
            const selectedVariant = selectedVariants[sweet.id];
            const cartItem = cartItems.find(i => i.id === sweet.id && i.weight === selectedVariant.weight);
            qtys[sweet.id] = cartItem ? cartItem.quantity : 0;
        });
        setQuantities(qtys);
    }, [cartItems, selectedVariants]);

    const handleVariantChange = (id: number, variant: SweetVariant) => {
        setSelectedVariants(prev => ({
            ...prev,
            [id]: variant
        }));
    };

    const handleQuantityChange = (sweet: Sweet, delta: number) => {
        const selectedVariant = selectedVariants[sweet.id];
        const currentQty = quantities[sweet.id] || 0;
        const newQty = Math.max(0, currentQty + delta);

        setQuantities(prev => ({
            ...prev,
            [sweet.id]: newQty
        }));

        // Sync with cart
        const cartItem = cartItems.find(i => i.id === sweet.id && i.weight === selectedVariant.weight);
        if (newQty > 0) {
            if (cartItem) {
                updateQuantity(sweet.id, selectedVariant.weight, newQty);
            } else {
                addToCart({
                    id: sweet.id,
                    name: sweet.name,
                    image: sweet.image,
                    weight: selectedVariant.weight,
                    price: selectedVariant.price,
                    quantity: newQty
                });
            }
        } else {
            if (cartItem) {
                removeFromCart(sweet.id, selectedVariant.weight);
            }
        }
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

            <div className="relative z-10 max-w-[1100px] mx-auto px-4">
                <div className="relative">
                    {/* Vertical Line removed from global context, added per-item inside the grid */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-24 items-center">
                        {sweetsData.map((sweet, index) => (
                            <div key={sweet.id} className="relative flex flex-col items-center md:items-start text-center md:text-left pl-8 pr-8">

                                {/* Vertical Line for each item */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-orange-400 h-full hidden md:block"></div>

                                {/* Marker and Connector (Desktop only) */}
                                <div className="hidden md:flex items-center absolute -left-0 top-1/2 -translate-y-1/2 w-[40px]">
                                    <div className="w-1.5 h-8 bg-orange-500 rounded-sm absolute left-0 -translate-x-1/2"></div>
                                    <div className="h-px bg-black w-6 ml-0"></div>
                                </div>

                                {/* Image and Content Section Row */}
                                <div className="flex flex-row items-center gap-4 w-full">
                                    {/* Image Section */}
                                    <div className="relative z-20 flex-shrink-0">
                                        <div className="relative w-[88px] h-[103px] rounded-tr-[15px] rounded-bl-[15px] overflow-hidden shadow-lg">
                                            <Image
                                                src={sweet.image}
                                                alt={sweet.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full">
                                        <h3 className="text-xl text-orange-400 font-semibold mb-1">{sweet.name}</h3>
                                        <div className="h-0.5 w-16 bg-gray-400 mb-4 mx-auto md:mx-0"></div>

                                        <div className="flex flex-col gap-3">
                                            {/* Weight Selection */}
                                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                                {sweet.variants.map((variant) => (
                                                    <button
                                                        key={variant.weight}
                                                        onClick={() => handleVariantChange(sweet.id, variant)}
                                                        className={`px-2 py-0.5 text-xs rounded-md border transition-all ${selectedVariants[sweet.id]?.weight === variant.weight
                                                            ? 'bg-orange-400 text-black border-orange-400 font-medium'
                                                            : 'bg-transparent text-gray-600 border-gray-300 hover:border-orange-400'
                                                            }`}
                                                    >
                                                        {variant.weight}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Quantity Control and Actions */}
                                            <div className="flex flex-col gap-3">
                                                <div className="flex items-center justify-start gap-8">
                                                    <div className="text-black font-semibold text-base">
                                                        ${selectedVariants[sweet.id]?.price.toFixed(2)}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => handleQuantityChange(sweet, -1)}
                                                            className="w-5 h-5 flex items-center justify-center bg-black text-white rounded-[4px] text-xs hover:bg-gray-800 transition-colors"
                                                        >
                                                            <span className="mb-0.5">-</span>
                                                        </button>
                                                        <span className="w-4 text-center text-xs font-medium text-black">{quantities[sweet.id] || 0}</span>
                                                        <button
                                                            onClick={() => handleQuantityChange(sweet, 1)}
                                                            className="w-5 h-5 flex items-center justify-center bg-black text-white rounded-[4px] text-xs hover:bg-gray-800 transition-colors"
                                                        >
                                                            <span className="mb-0.5">+</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

            {/* Cart Notification */}
            <div className="text-black px-6 flex items-center justify-between fixed right-0 bottom-0 w-[265px] md:w-[400px] z-50" style={{ backgroundColor: "#FF8400", height: "38px", borderRadius: "8px 0 0 0" }}>
                <span className="font-normal text-base text-black">
                    {getCartCount()} Item{getCartCount() !== 1 ? "s" : ""} Added
                </span>
                <button
                    onClick={() => router.push('/cart')}
                    className="font-normal text-base text-black hover:underline transition-all cursor-pointer"
                >
                    View Cart &gt;
                </button>
            </div>
        </section>
    );
}
