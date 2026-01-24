"use client";

import Image from "next/image";
import { useState } from "react";

export default function CheckoutForm() {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

    return (
        <div className="w-full">
            {/* Express Checkout Options */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="bg-[#FF9900] h-12 rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none flex items-center justify-center font-medium text-black transition-opacity hover:opacity-90">
                    Square Pay
                </button>
                <button className="bg-[#dcd9d785] h-12 rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none flex items-center justify-center transition-opacity hover:opacity-90 border border-gray-200">
                    <Image src="/images/cat-page/googlepay 1.png" alt="GPay" width={40} height={16} className="object-contain" />
                </button>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
                <h2 className="text-orange-500 text-xl font-medium mb-4 flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#FF9900] rounded-tl-sm rounded-br-sm rounded-tr-none rounded-bl-none inline-block"></span>
                    Contact
                </h2>

                <div className="flex gap-2 mb-3">
                    <div className="relative w-1/3">
                        <select className="w-full h-12 bg-[#dcd9d785] rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none px-3 appearance-none text-gray-700 outline-none focus:ring-1 focus:ring-orange-400">
                            <option>+1 Canada</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <input
                        type="tel"
                        placeholder="Phone number"
                        className="w-2/3 h-12 bg-[#dcd9d785] rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none px-4 outline-none focus:ring-1 focus:ring-orange-400 placeholder-gray-600"
                    />
                </div>

                <input
                    type="email"
                    placeholder="Email address for receipt"
                    className="w-full h-12 bg-[#dcd9d785] rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none px-4 mb-3 outline-none focus:ring-1 focus:ring-orange-400 placeholder-gray-600"
                />

                <div className="grid grid-cols-2 gap-3 mb-6">
                    <input
                        type="text"
                        placeholder="First name"
                        className="w-full h-12 bg-[#dcd9d785] rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none px-4 outline-none focus:ring-1 focus:ring-orange-400 placeholder-gray-600"
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        className="w-full h-12 bg-[#dcd9d785] rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none px-4 outline-none focus:ring-1 focus:ring-orange-400 placeholder-gray-600"
                    />
                </div>

                <div className="h-px w-full bg-gray-300 mb-6"></div>
            </div>

            {/* Payment Section */}
            <div className="mb-8">
                <h2 className="text-orange-500 text-xl font-medium mb-2 flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#FF9900] rounded-tl-sm rounded-br-sm rounded-tr-none rounded-bl-none inline-block"></span>
                    Payment
                </h2>
                <p className="text-gray-600 text-sm mb-4">All transactions are secure and encrypted</p>

                <div className="border border-black rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none p-4">
                    <div className="mb-4">
                        <label className="text-sm font-medium text-gray-700 block mb-1">Credit</label>
                        <div className="relative">
                            <select className="w-full h-12 bg-[#dcd9d785] rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none px-3 appearance-none text-gray-700 outline-none">
                                <option>Canada</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Card Number"
                            className="flex-grow h-12 bg-[#dcd9d785] rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none px-4 outline-none placeholder-gray-600"
                        />
                        <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-1/4 h-12 bg-[#dcd9d785] rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none px-4 outline-none placeholder-gray-600 text-center"
                        />
                        <input
                            type="text"
                            placeholder="CVV"
                            className="w-1/4 h-12 bg-[#dcd9d785] rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none px-4 outline-none placeholder-gray-600 text-center"
                        />
                    </div>
                </div>
            </div>

            {/* Square Pay Opt-in */}
            <div className="mb-8 bg-[#dcd9d785] rounded-tl-xl rounded-bl-xl rounded-tr-none rounded-br-none p-6">
                <label className="flex items-center gap-3 mb-4 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 border-black rounded-sm focus:ring-0 text-black" />
                    <div className="flex items-center gap-2">
                        {/* Square Icon */}
                        <div className="w-6 h-6 border-2 border-black rounded-[4px] flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-black rounded-[1px]"></div>
                        </div>
                        <span className="text-xl font-normal text-black font-[family-name:var(--font-outfit)]">Square Pay</span>
                    </div>
                </label>

                <p className="text-black text-base mb-8 font-normal leading-relaxed">
                    Save your payment info for faster reordering at Kesari and secure checkout anywhere you see the Square Pay logo.
                </p>

                <p className="text-black text-xs">
                    By selecting Square Pay <a href="#" className="underline decoration-1 underline-offset-2">Square buyer account terms</a> and <a href="#" className="underline decoration-1 underline-offset-2">Privacy policy.</a>
                </p>
            </div>

            {/* Stay in touch */}
            <div className="mb-8">
                <h2 className="text-orange-500 text-xl font-medium mb-4 flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#FF9900] rounded-tl-sm rounded-br-sm rounded-tr-none rounded-bl-none inline-block"></span>
                    Stay in touch
                </h2>

                <label className="flex items-start gap-3 mb-6 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 mt-0.5 border-black rounded-[4px] focus:ring-0 text-black shrink-0" />
                    <span className="text-black text-base leading-snug">
                        Please send me email offers and promotions from Kesari Indian Sweets & Eats. 2-1990 152 Street Surrey BC V4A4N4 CA
                    </span>
                </label>

                <div className="mb-2">
                    <button
                        onClick={() => setIsLearnMoreOpen(!isLearnMoreOpen)}
                        className="text-orange-400 text-base font-medium flex items-center hover:opacity-80 transition-opacity"
                    >
                        Learn more
                        <svg className={`w-4 h-4 ml-1 fill-current transition-transform duration-200 ${isLearnMoreOpen ? "rotate-90" : ""}`} viewBox="0 0 20 20"><path d="M5 10l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    {/* Assuming the caret is meant to expand text, but static for now based on image */}
                </div>

                {isLearnMoreOpen && (
                    <p className="text-black text-sm leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                        Please ask this merchant for more information about their privacy practices. Your contact information is not visible to any other Square merchants unless you provide it directly to that merchant.
                    </p>
                )}
            </div>

        </div>
    );
}
