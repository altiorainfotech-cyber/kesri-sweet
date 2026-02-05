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
        name: "Bikaneri Barfi",
        image: "/images/ordar-page/Sweets/Bikareri Barfi.webp",
        description: "Traditional Bikaneri style barfi made with khoya and sugar.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 2,
        name: "Gur Khoya Barfi",
        image: "/images/ordar-page/Sweets/Gur Khoya Barfi.jpg",
        description: "Rich barfi made with jaggery and khoya for a wholesome taste.",
        variants: [
            { weight: "1/4 lb", price: 3.75 },
            { weight: "1/2 lb", price: 7.50 },
            { weight: "1 lb", price: 15.00 },
        ]
    },
    {
        id: 3,
        name: "Plain Khoya Barfi",
        image: "/images/ordar-page/Sweets/Khoya_Burfi.webp",
        description: "Classic khoya barfi with a smooth, melt-in-mouth texture.",
        variants: [
            { weight: "1/4 lb", price: 3.00 },
            { weight: "1/2 lb", price: 6.00 },
            { weight: "1 lb", price: 12.00 },
        ]
    },
    {
        id: 4,
        name: "Khoya Pista Barfi",
        image: "/images/ordar-page/Sweets/khoya Pista Barfi.webp",
        description: "Khoya barfi enriched with premium pistachios.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 5,
        name: "Almond Khoya",
        image: "/images/ordar-page/Sweets/khoya_badam_burfi_3072x2048_56b0b293-1b36-4e53-9045-cc2ff19d4190.webp",
        description: "Khoya barfi topped with crunchy almonds.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 6,
        name: "Gajar Pak",
        image: "/images/ordar-page/Sweets/Gajar-Pak.jpg",
        description: "Traditional carrot-based sweet delicacy.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 7,
        name: "Khoya Gajar",
        image: "/images/ordar-page/Sweets/Khoya Gajar.jpg",
        description: "Carrot and khoya combined for a rich, flavorful treat.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 8,
        name: "Mango Barfi",
        image: "/images/ordar-page/Sweets/Mango-Burfi.webp",
        description: "Delicious barfi infused with real mango flavor.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 9,
        name: "Dhodha Barfi",
        image: "/images/ordar-page/Sweets/dodha-barfi.jpg",
        description: "Punjabi specialty made with milk and sugar, slow cooked to perfection.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 10,
        name: "Fruit Barfi",
        image: "/images/ordar-page/Sweets/Fruit barfi.jpg",
        description: "Colorful barfi with mixed dried fruits and nuts.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 11,
        name: "Kaju Katli",
        image: "/images/ordar-page/Sweets/Kaju katli.avif",
        description: "Premium cashew fudge with silver leaf topping.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 12,
        name: "Mathura Peda",
        image: "/images/ordar-page/Sweets/mathura-peda.jpg",
        description: "Famous Mathura style peda with cardamom flavor.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 13,
        name: "Kesar Peda",
        image: "/images/ordar-page/Sweets/Kesar peda.webp",
        description: "Saffron-infused peda with rich aroma and taste.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 14,
        name: "Kalakand",
        image: "/images/ordar-page/Sweets/Kalakand.png",
        description: "Soft milk cake with a grainy texture and cardamom essence.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 15,
        name: "Pink Coconut Barfi",
        image: "/images/ordar-page/Sweets/Pink coconut barfi.jpg",
        description: "Sweet coconut barfi with a beautiful pink hue.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 16,
        name: "Besan Barfi",
        image: "/images/ordar-page/Sweets/Besan barfi.jpg",
        description: "Traditional gram flour barfi with ghee and sugar.",
        variants: [
            { weight: "1/4 lb", price: 2.25 },
            { weight: "1/2 lb", price: 4.50 },
            { weight: "1 lb", price: 9.00 },
        ]
    },
    {
        id: 17,
        name: "Coconut Ladoo",
        image: "/images/ordar-page/Sweets/Coconut ladoo.webp",
        description: "Sweet coconut balls made with condensed milk.",
        variants: [
            { weight: "1/4 lb", price: 3.75 },
            { weight: "1/2 lb", price: 7.50 },
            { weight: "1 lb", price: 15.00 },
        ]
    },
    {
        id: 18,
        name: "Kesar Ladoo",
        image: "/images/ordar-page/Sweets/Kesar ladoo.webp",
        description: "Saffron-flavored ladoo with a rich golden color.",
        variants: [
            { weight: "1/4 lb", price: 2.25 },
            { weight: "1/2 lb", price: 4.50 },
            { weight: "1 lb", price: 9.00 },
        ]
    },
    {
        id: 19,
        name: "Navratan Ladoo",
        image: "/images/ordar-page/Sweets/Navratan ladoo.webp",
        description: "Nine-jeweled ladoo with assorted dry fruits and nuts.",
        variants: [
            { weight: "1/4 lb", price: 2.25 },
            { weight: "1/2 lb", price: 4.50 },
            { weight: "1 lb", price: 9.00 },
        ]
    },
    {
        id: 20,
        name: "Besan Ladoo",
        image: "/images/ordar-page/Sweets/Besan ladoo.webp",
        description: "Classic gram flour ladoo with ghee and cardamom.",
        variants: [
            { weight: "1/4 lb", price: 3.00 },
            { weight: "1/2 lb", price: 6.00 },
            { weight: "1 lb", price: 12.00 },
        ]
    },
    {
        id: 21,
        name: "Atta Pinni",
        image: "/images/ordar-page/Sweets/Atta pinni.webp",
        description: "Whole wheat flour sweet with dry fruits and ghee.",
        variants: [
            { weight: "1/4 lb", price: 3.75 },
            { weight: "1/2 lb", price: 7.50 },
            { weight: "1 lb", price: 15.00 },
        ]
    },
    {
        id: 22,
        name: "Alsi Pinni",
        image: "/images/ordar-page/Sweets/Alsi pinni.png",
        description: "Nutritious flaxseed pinni with traditional spices.",
        variants: [
            { weight: "1/4 lb", price: 3.75 },
            { weight: "1/2 lb", price: 7.50 },
            { weight: "1 lb", price: 15.00 },
        ]
    },
    {
        id: 23,
        name: "Patisa",
        image: "/images/ordar-page/Sweets/Patisa.webp",
        description: "Flaky, melt-in-mouth sweet made with gram flour.",
        variants: [
            { weight: "1/4 lb", price: 3.00 },
            { weight: "1/2 lb", price: 6.00 },
            { weight: "1 lb", price: 12.00 },
        ]
    },
    {
        id: 24,
        name: "Chana Dal Barfi",
        image: "/images/ordar-page/Sweets/Chana dal barfi.jpg",
        description: "Rich barfi made with split chickpeas and ghee.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 25,
        name: "Gulab Jamun Filled",
        image: "/images/ordar-page/Sweets/Gulab jamun.jpg",
        description: "Gulab jamun with delicious filling inside.",
        variants: [
            { weight: "1/4 lb", price: 3.00 },
            { weight: "1/2 lb", price: 6.00 },
            { weight: "1 lb", price: 12.00 },
        ]
    },
    {
        id: 26,
        name: "Pink Chum Chum",
        image: "/images/ordar-page/Sweets/Pink-Chum-Chum.jpg",
        description: "Soft Bengali sweet in beautiful pink color.",
        variants: [
            { weight: "1/4 lb", price: 3.00 },
            { weight: "1/2 lb", price: 6.00 },
            { weight: "1 lb", price: 12.00 },
        ]
    },
    {
        id: 27,
        name: "White Chum Chum",
        image: "/images/ordar-page/Sweets/White chum chum.jpg",
        description: "Classic white Bengali sweet with coconut coating.",
        variants: [
            { weight: "1/4 lb", price: 3.00 },
            { weight: "1/2 lb", price: 6.00 },
            { weight: "1 lb", price: 12.00 },
        ]
    },
    {
        id: 28,
        name: "Orange Chum Chum",
        image: "/images/ordar-page/Sweets/Orange chum chum.jpg",
        description: "Vibrant orange Bengali sweet with a citrus twist.",
        variants: [
            { weight: "1/4 lb", price: 3.00 },
            { weight: "1/2 lb", price: 6.00 },
            { weight: "1 lb", price: 12.00 },
        ]
    },
    {
        id: 29,
        name: "Pan Petha",
        image: "/images/ordar-page/Sweets/Pan petha.webp",
        description: "Agra's famous petha with betel leaf flavor.",
        variants: [
            { weight: "1 pc", price: 2.50 },
            { weight: "2 pc", price: 5.00 },
            { weight: "4 pc", price: 10.00 },
        ]
    },
    {
        id: 30,
        name: "Kaju Paan",
        image: "/images/ordar-page/Sweets/Kaju paan.jpg",
        description: "Cashew-based sweet shaped like betel leaf.",
        variants: [
            { weight: "1 pc", price: 2.00 },
            { weight: "2 pc", price: 4.00 },
            { weight: "4 pc", price: 8.00 },
        ]
    },
    {
        id: 31,
        name: "Paan Ladoo",
        image: "/images/ordar-page/Sweets/Paan ladoo.jpg",
        description: "Unique ladoo with refreshing paan flavor.",
        variants: [
            { weight: "1 pc", price: 2.00 },
            { weight: "2 pc", price: 4.00 },
            { weight: "4 pc", price: 8.00 },
        ]
    },
    {
        id: 32,
        name: "Rose Ladoo",
        image: "/images/ordar-page/Sweets/Rose ladoo.jpg",
        description: "Fragrant ladoo infused with rose essence.",
        variants: [
            { weight: "1 pc", price: 3.00 },
            { weight: "2 pc", price: 6.00 },
            { weight: "4 pc", price: 12.00 },
        ]
    },
    {
        id: 33,
        name: "Gulab Jamun",
        image: "/images/ordar-page/Sweets/Gulab jamun.jpg",
        description: "Classic deep-fried dumplings in rose sugar syrup.",
        variants: [
            { weight: "1/4 lb", price: 2.50 },
            { weight: "1/2 lb", price: 5.00 },
            { weight: "1 lb", price: 10.00 },
        ]
    },
    {
        id: 34,
        name: "Coconut Gulab Jamun",
        image: "/images/ordar-page/Sweets/Coconut_Gulab_Jamun.webp",
        description: "Gulab jamun rolled in shredded coconut.",
        variants: [
            { weight: "1/4 lb", price: 2.50 },
            { weight: "1/2 lb", price: 5.00 },
            { weight: "1 lb", price: 10.00 },
        ]
    },
    {
        id: 35,
        name: "Angoori Gulab Jamun",
        image: "/images/ordar-page/Sweets/Angoori gulab jamun.webp",
        description: "Mini grape-sized gulab jamun in syrup.",
        variants: [
            { weight: "1/4 lb", price: 2.50 },
            { weight: "1/2 lb", price: 5.00 },
            { weight: "1 lb", price: 10.00 },
        ]
    },
    {
        id: 36,
        name: "Gluten Free Gulab Jamun",
        image: "/images/ordar-page/Sweets/Gluten free gulab jamun.jpg",
        description: "Delicious gulab jamun made without gluten.",
        variants: [
            { weight: "1/4 lb", price: 2.50 },
            { weight: "1/2 lb", price: 5.00 },
            { weight: "1 lb", price: 10.00 },
        ]
    },
    {
        id: 37,
        name: "Rasgulla",
        image: "/images/ordar-page/Sweets/Rasgulla.jpg",
        description: "Soft spongy cheese balls in light sugar syrup.",
        variants: [
            { weight: "1/4 lb", price: 2.50 },
            { weight: "1/2 lb", price: 5.00 },
            { weight: "1 lb", price: 10.00 },
        ]
    },
    {
        id: 38,
        name: "Angoori Rasgulla",
        image: "/images/ordar-page/Sweets/Angoori rasgulla.png",
        description: "Mini grape-sized rasgulla in syrup.",
        variants: [
            { weight: "1/4 lb", price: 2.50 },
            { weight: "1/2 lb", price: 5.00 },
            { weight: "1 lb", price: 10.00 },
        ]
    },
    {
        id: 39,
        name: "Spongy Rasgulla",
        image: "/images/ordar-page/Sweets/Spongy rasgulla.jpeg",
        description: "Extra soft and spongy rasgulla.",
        variants: [
            { weight: "1 pc", price: 3.00 },
            { weight: "2 pc", price: 6.00 },
            { weight: "4 pc", price: 12.00 },
        ]
    },
    {
        id: 40,
        name: "Coconut Rasgulla",
        image: "/images/ordar-page/Sweets/Coconut rasgulla.jpg",
        description: "Rasgulla with coconut filling.",
        variants: [
            { weight: "1/4 lb", price: 2.50 },
            { weight: "1/2 lb", price: 5.00 },
            { weight: "1 lb", price: 10.00 },
        ]
    },
    {
        id: 41,
        name: "Rasmalai",
        image: "/images/ordar-page/Sweets/rasmalai-recipe.jpg",
        description: "Soft paneer discs in saffron-flavored creamy milk.",
        variants: [
            { weight: "1 pc", price: 3.00 },
            { weight: "2 pc", price: 6.00 },
            { weight: "4 pc", price: 12.00 },
        ]
    },
    {
        id: 42,
        name: "Gajar Halwa",
        image: "/images/ordar-page/Sweets/Gajar-Halwa-Indian.webp",
        description: "Traditional carrot pudding with milk, ghee, and nuts.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
        ]
    },
    {
        id: 43,
        name: "Moongdal Halwa",
        image: "/images/ordar-page/Sweets/Dal-Halwa-Blog.jpg",
        description: "Rich halwa made with moong lentils and ghee.",
        variants: [
            { weight: "1/4 lb", price: 3.25 },
            { weight: "1/2 lb", price: 6.50 },
            { weight: "1 lb", price: 13.00 },
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
