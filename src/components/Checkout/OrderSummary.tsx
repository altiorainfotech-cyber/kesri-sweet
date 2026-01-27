"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function OrderSummary() {
    const { getCartTotal, getCartCount, cartItems } = useCart();
    const [tipPercentage, setTipPercentage] = useState<number | null>(null);
    const [tipMode, setTipMode] = useState<'preset' | 'manual-percent' | 'manual-amount'>('preset');
    const [customTipValue, setCustomTipValue] = useState<string>('');
    const [isExpanded, setIsExpanded] = useState(false);

    // Pickup Time state
    const [pickupTime, setPickupTime] = useState("");

    useEffect(() => {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        setPickupTime(`Today at ${formattedTime}`);
    }, []);

    const subtotal = getCartTotal();
    const bagFee = subtotal > 0 ? 0.25 : 0;
    const tax = Number((subtotal * 0.05).toFixed(2)); // Assuming 5% GST

    const calculateTip = () => {
        if (tipMode === 'preset') {
            if (tipPercentage === null) return 0;
            return Number((subtotal * (tipPercentage / 100)).toFixed(2));
        }

        const val = parseFloat(customTipValue) || 0;
        if (tipMode === 'manual-percent') {
            return Number((subtotal * (val / 100)).toFixed(2));
        }

        return Number(val.toFixed(2));
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
                        <p className="text-gray-600 text-sm whitespace-pre-wrap">2-1990 152 Street Surrey BC V4A4N4 CA</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <Image src="/images/Hourglass.png" alt="Time" width={20} height={20} className="mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                        <p className="text-black text-sm">{pickupTime}</p>
                    </div>
                </div>
            </div>

            {/* Order Summary Header */}
            <div
                className="border-y border-black py-4 mb-2 flex justify-between items-center cursor-pointer select-none"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h3 className="text-black font-bold text-base">Order summary ({getCartCount()} item{getCartCount() !== 1 ? 's' : ''})</h3>
                <svg
                    className={`w-4 h-4 text-black transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>

            {/* Collapsible Item List */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] mb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-3 pt-2 pb-4">
                    {cartItems.map((item) => (
                        <div key={`${item.id}-${item.weight}`} className="flex justify-between items-center text-sm">
                            <div className="flex gap-2 text-black">
                                <span className="font-medium">{item.quantity}x</span>
                                <span>{item.name}</span>
                                {item.weight !== "Regular" && <span className="text-gray-500 text-xs">({item.weight})</span>}
                            </div>
                            <span className="text-black">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    {cartItems.length === 0 && (
                        <p className="text-gray-500 text-sm italic">No items in cart</p>
                    )}
                </div>
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
            <div className="grid grid-cols-4 gap-3 mb-4">
                <button
                    onClick={() => {
                        setTipPercentage(15);
                        setTipMode('preset');
                    }}
                    className={`h-16 rounded-tl-xl rounded-br-xl flex flex-col items-center justify-center text-xs font-bold transition-colors ${tipMode === 'preset' && tipPercentage === 15 ? 'bg-black text-white' : 'bg-[#dcd9d785] text-black hover:bg-gray-200'}`}
                >
                    <span>15%</span>
                    <span>${(subtotal * 0.15).toFixed(2)}</span>
                </button>
                <button
                    onClick={() => {
                        setTipPercentage(20);
                        setTipMode('preset');
                    }}
                    className={`h-16 rounded-tl-xl rounded-br-xl flex flex-col items-center justify-center text-xs font-bold transition-colors ${tipMode === 'preset' && tipPercentage === 20 ? 'bg-black text-white' : 'bg-[#dcd9d785] text-black hover:bg-gray-200'}`}
                >
                    <span>20%</span>
                    <span>${(subtotal * 0.20).toFixed(2)}</span>
                </button>
                <button
                    onClick={() => {
                        setTipPercentage(25);
                        setTipMode('preset');
                    }}
                    className={`h-16 rounded-tl-xl rounded-br-xl flex flex-col items-center justify-center text-xs font-bold transition-colors ${tipMode === 'preset' && tipPercentage === 25 ? 'bg-black text-white' : 'bg-[#dcd9d785] text-black hover:bg-gray-200'}`}
                >
                    <span>25%</span>
                    <span>${(subtotal * 0.25).toFixed(2)}</span>
                </button>
                <button
                    onClick={() => {
                        setTipMode(tipMode === 'preset' ? 'manual-percent' : tipMode);
                        setTipPercentage(null);
                    }}
                    className={`h-16 rounded-tl-xl rounded-br-xl flex items-center justify-center text-xs font-bold transition-colors ${tipMode !== 'preset' ? 'bg-black text-white' : 'bg-[#dcd9d785] text-black hover:bg-gray-200'}`}
                >
                    Other
                </button>
            </div>

            {/* Manual Tip Input */}
            {tipMode !== 'preset' && (
                <div className="mb-6 space-y-3">
                    <div className="flex gap-2">
                        <button
                            onClick={() => setTipMode('manual-percent')}
                            className={`flex-1 py-2 text-xs font-medium rounded-tl-lg rounded-br-lg transition-all ${tipMode === 'manual-percent' ? 'bg-orange-400 text-black shadow-md' : 'bg-[#dcd9d785] text-gray-600'}`}
                        >
                            Percentage (%)
                        </button>
                        <button
                            onClick={() => setTipMode('manual-amount')}
                            className={`flex-1 py-2 text-xs font-medium rounded-tl-lg rounded-br-lg transition-all ${tipMode === 'manual-amount' ? 'bg-orange-400 text-black shadow-md' : 'bg-[#dcd9d785] text-gray-600'}`}
                        >
                            Amount ($)
                        </button>
                    </div>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 font-medium">
                            {tipMode === 'manual-percent' ? '%' : '$'}
                        </span>
                        <input
                            type="number"
                            value={customTipValue}
                            onChange={(e) => setCustomTipValue(e.target.value)}
                            placeholder={tipMode === 'manual-percent' ? 'Enter percentage' : 'Enter amount'}
                            className="w-full pl-8 pr-4 py-2.5 bg-[#dcd9d785] border border-transparent focus:border-black rounded-tl-lg rounded-br-lg outline-none text-sm font-medium text-black placeholder:text-gray-500 transition-all"
                        />
                    </div>
                </div>
            )}

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
