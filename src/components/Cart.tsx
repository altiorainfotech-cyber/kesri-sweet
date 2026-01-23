"use client";
import { useState } from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  type: "veg" | "non-veg"; // Changed color to type for better semantics, mapped to colors later
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Paneer Pakora",
      description: "Stuffed, battered paneer",
      price: 12.0,
      quantity: 2,
      type: "veg",
    },
    {
      id: 2,
      name: "Paneer Pakora",
      description: "Stuffed, battered paneer",
      price: 12.0,
      quantity: 1,
      type: "non-veg", // Assuming red meant non-veg or spicy, closely matching the design's red/green indicators
    },
  ]);

  const handleQuantityChange = (itemId: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <section className="min-h-screen relative py-12 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cat-page/cart-background.png"
          alt="Background"
          fill
          className="object-cover opacity-100" // Increased opacity
          priority
        />
        {/* Overlay removed for full visibility */}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h1
            className="font-[family-name:var(--font-island-moments)] text-5xl md:text-6xl text-black"
          >
            You will enjoy
          </h1>
          <div className="h-px w-24 bg-black mx-auto mt-2"></div>
        </div>

        {/* Cart Items Container */}
        <div className="bg-[#e0e0e033] backdrop-blur-sm rounded-lg shadow-sm p-8 mb-6">
          {cartItems.map((item, index) => (
            <div key={item.id}>
              <div className="flex flex-col md:flex-row items-center gap-4 py-6">
                {/* Veg/Non-Veg Indicator */}
                <div
                  className={`w-4 h-4 rounded-sm mt-1 flex-shrink-0 ${item.type === 'veg' ? 'bg-green-500' : 'bg-red-500'}`}
                ></div>

                {/* Item Details */}
                <div className="flex-1 text-center md:text-left">
                  <h3
                    className={`text-xl mb-1 font-normal ${item.type === 'veg' ? 'text-orange-500' : 'text-orange-500'}`}
                  >
                    {item.name}
                  </h3>
                  <p className="text-black text-sm mb-2">
                    {item.description}
                  </p>
                  <p className="font-normal text-black">
                    CAD${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-tl-md rounded-br-md hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-sm">−</span>
                  </button>
                  <span className="w-8 text-center font-normal text-lg">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-tl-md rounded-br-md hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-sm">+</span>
                  </button>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-1 hover:text-red-600 text-black transition-colors"
                  aria-label="Delete item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>

                {/* Total */}
                <div className="flex items-center gap-8 min-w-[120px] justify-end">
                  <p className="text-sm text-black font-normal">Total</p>
                  <p className="font-normal text-black">
                    CAD${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              {/* Divider */}
              <div className="border-b border-black"></div>
            </div>
          ))}

          {/* Add Items and To Pay Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
            <button
              className="text-black bg-orange-400 px-8 py-3 rounded-tl-xl rounded-br-xl font-normal hover:bg-orange-500 transition-colors shadow-md"
            >
              Add Items
            </button>
            <div className="flex items-center gap-6">
              <span className="text-black font-normal text-lg">To Pay</span>
              <span
                className="text-black font-normal px-8 py-3 rounded-tl-xl rounded-br-xl shadow-md text-lg"
                style={{ backgroundColor: "#FF9900" }}
              >
                CAD${calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-[#e0e0e033] backdrop-blur-sm rounded-lg shadow-sm p-6 mt-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <button
              className="text-black px-6 py-2 rounded-tl-lg rounded-br-lg font-normal flex items-center gap-2 shadow-sm"
              style={{ backgroundColor: "#FF9900" }}
            >
              Pay using
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Payment Method Icons */}
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <img
                src="/images/cat-page/visa 1.png"
                alt="Visa"
                className="h-6 object-contain"
              />
              <img
                src="/images/cat-page/Group 38.png"
                alt="Mastercard"
                className="h-6 object-contain"
              />
              <img
                src="/images/cat-page/jcb 1.png"
                alt="JCB"
                className="h-6 object-contain"
              />
              <img
                src="/images/cat-page/googlepay 1.png"
                alt="Google Pay"
                className="h-6 object-contain"
              />
              <img
                src="/images/cat-page/discover 1.png"
                alt="Discover"
                className="h-6 object-contain"
              />
              <img
                src="/images/cat-page/applepay 1.png"
                alt="Apple Pay"
                className="h-6 object-contain"
              />
              <img
                src="/images/cat-page/americanexpress 1.png"
                alt="American Express"
                className="h-6 object-contain"
              />
              <img
                src="/images/cat-page/interac 1.png"
                alt="Interac"
                className="h-6 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

