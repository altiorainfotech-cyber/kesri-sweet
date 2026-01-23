"use client";

import Image from "next/image";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import OrderSummary from "@/components/Checkout/OrderSummary";
import HeaderOther from "@/components/HeaderOther";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
    return (
        <>
            <HeaderOther />
            <main className="min-h-screen relative w-full bg-white overflow-x-hidden md:overflow-visible flex flex-col items-center py-12">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="relative w-full h-full">
                        {/* Using the payment.png as background with high transparency based on design which is very clean white with subtle watermark maybe? 
                         User said background image - "payment.png", let's use it.
                     */}
                        <Image
                            src="/images/payment.png"
                            alt="Background"
                            fill
                            className="object-cover opacity-100"
                            priority
                        />
                    </div>
                </div>

                <div className="relative z-10 w-full max-w-6xl px-6 md:px-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="font-[family-name:var(--font-island-moments)] text-5xl text-black">
                            Checkout
                        </h1>
                        <div className="h-px w-24 bg-black mx-auto mt-2"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                        {/* Left Side */}
                        <div className="flex-1">
                            <CheckoutForm />
                        </div>

                        {/* Right Side */}
                        <div className="w-full lg:w-[400px]">
                            <OrderSummary />
                        </div>
                    </div>

                    {/* Secure Checkout Footer */}
                    <div className="flex flex-col items-center gap-4 mt-auto mb-8">
                        <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
                            <div className="w-6 h-6 border-2 border-black rounded-[4px] flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-black rounded-[1px]"></div>
                            </div>
                            <span>Secure checkout by Square</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            <Image src="/images/cat-page/Square-Pay .png" alt="Square" width={24} height={16} className="object-contain" />
                            <Image src="/images/cat-page/visa 1.png" alt="Visa" width={32} height={20} className="object-contain" />
                            <Image src="/images/cat-page/Group 38.png" alt="Mastercard" width={32} height={20} className="object-contain" />
                            <Image src="/images/cat-page/americanexpress 1.png" alt="Amex" width={32} height={20} className="object-contain" />
                            <Image src="/images/cat-page/jcb 1.png" alt="JCB" width={32} height={20} className="object-contain" />
                            <Image src="/images/cat-page/googlepay 1.png" alt="GPay" width={32} height={20} className="object-contain" />
                            <Image src="/images/cat-page/discover 1.png" alt="Discover" width={32} height={20} className="object-contain" />
                            <Image src="/images/cat-page/applepay 1.png" alt="ApplePay" width={32} height={20} className="object-contain" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
