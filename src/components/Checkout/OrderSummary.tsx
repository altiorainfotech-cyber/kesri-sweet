"use client";

import Image from "next/image";
import { useState } from "react";

export default function OrderSummary() {
    const [tipPercentage, setTipPercentage] = useState<number | null>(null);
    const subtotal = 3.00;
    const bagFee = 0.25;
    const tax = 0.16;

    const calculateTip = () => {
        if (tipPercentage === null) return 0;
        return Number((subtotal * (tipPercentage / 100)).toFixed(2));
    };

    const total = subtotal + bagFee + tax + calculateTip();

    return (
        <div className="w-full">
            {/* Pickup Header */}
            <h2 className="text-[#FF9900] text-xl font-medium mb-6">Pickup at</h2>

            <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                    <Image src="/images/Location.png" alt="Location" width={20} height={20} className="mt-1 flex-shrink-0" />
                    <div className="flex-1">
                        <p className="text-black font-medium text-sm">Kesari Indian Sweets & Eats</p>
                        <p className="text-gray-600 text-sm">2-1990 152 Street Surrey BC V4A4N4 CA</p>
                    </div>
                    <button className="text-sm text-gray-500 font-medium">(Edit)</button>
                </div>

                <div className="flex items-start gap-3">
                    <Image src="/images/Hourglass.png" alt="Time" width={20} height={20} className="mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                        <p className="text-black text-sm">Today at 9:25 AM</p>
                    </div>
                </div>
            </div>

            {/* Order Summary Header */}
            <div className="border-y border-black py-4 mb-6 flex justify-between items-center cursor-pointer">
                <h3 className="text-black font-bold text-base">Order summary (1 item)</h3>
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>

            {/* Note Area */}
            <div className="relative mb-8">
                <textarea
                    className="w-full h-32 border border-black rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none p-3 text-sm text-gray-700 bg-[#dcd9d785] resize-none placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Add a note for the seller"
                ></textarea>
            </div>

            <div className="h-px w-full bg-gray-300 mb-6"></div>

            {/* Subtotal Display (Hidden in layout but implicit before tips?) - Tips align with images */}
            {/* Tip Selection */}
            {/* Add a tip */}
            <h3 className="text-black font-bold text-base mb-4">Add a tip</h3>

            {/* Tip Selection */}
            <div className="grid grid-cols-4 gap-3 mb-6">
                <button
                    onClick={() => setTipPercentage(15)}
                    className={`h-16 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none flex flex-col items-center justify-center text-xs font-bold transition-colors ${tipPercentage === 15 ? 'bg-black text-white' : 'bg-[#dcd9d785] text-black hover:bg-gray-200'}`}
                >
                    <span>15%</span>
                    <span>${(subtotal * 0.15).toFixed(2)}</span>
                </button>
                <button
                    onClick={() => setTipPercentage(20)}
                    className={`h-16 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none flex flex-col items-center justify-center text-xs font-bold transition-colors ${tipPercentage === 20 ? 'bg-black text-white' : 'bg-[#dcd9d785] text-black hover:bg-gray-200'}`}
                >
                    <span>20%</span>
                    <span>$0.60</span>
                </button>
                <button
                    onClick={() => setTipPercentage(25)}
                    className={`h-16 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none flex flex-col items-center justify-center text-xs font-bold transition-colors ${tipPercentage === 25 ? 'bg-black text-white' : 'bg-[#dcd9d785] text-black hover:bg-gray-200'}`}
                >
                    <span>25%</span>
                    <span>$0.75</span>
                </button>
                <button
                    onClick={() => setTipPercentage(null)}
                    className={`h-16 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none flex items-center justify-center text-xs font-bold transition-colors bg-[#dcd9d785] text-black hover:bg-gray-200`}
                >
                    Other
                </button>
            </div>

            <div className="h-px w-full bg-gray-400 mb-6"></div>

            {/* Totals */}
            <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-black">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-black">
                    <span>Bag Fee</span>
                    <span>${bagFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-black">
                    <span>Taxes (GST)</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-black">
                    <span>Tip</span>
                    <span>${calculateTip().toFixed(2)}</span>
                </div>
            </div>

            <div className="border-t border-dashed border-gray-400 my-4"></div>

            <div className="flex justify-end text-xl font-bold text-black mb-6">
                ${total.toFixed(2)}
            </div>

            {/* Coupon */}
            <div className="border border-gray-400 rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none p-3 flex items-center gap-2 mb-6 bg-white">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                <input type="text" placeholder="Add coupon or gift card" className="flex-1 outline-none text-sm placeholder-black" />
            </div>

            {/* Place Order */}
            <button className="w-full bg-[#FFCC80] hover:bg-[#ffb74d] text-black font-medium py-3 rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none shadow-sm transition-colors mb-12">
                Place order ${total.toFixed(2)}
            </button>

            {/* Footer Text */}


        </div>
    );
}
