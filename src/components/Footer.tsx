"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 1023px) {
          .footer-social-icons:before {
            right: -40% !important;
          }
        }
      `}</style>
      <footer
        className="relative py-12 md:py-14 lg:py-16 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/footer/footer-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Food Image */}
          <motion.div
            className="w-[35%] md:w-[50%] lg:w-[45%] mb-8 lg:mb-0"
            initial={{ x: -100, y: 100, rotate: -45, opacity: 0 }}
            whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/images/footer/footerLeftside image.png"
              alt="Indian Food"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right Side - Location Info */}
          <motion.div
            className="w-full lg:w-[55%] lg:pl-16 text-center lg:text-right relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            {/* Orange Square Decoration - Top Left */}
            <div
              className="bg-[var(--color-primary)] mb-4 md:mb-5 lg:mb-6 absolute top-0 left-0 lg:left-0 w-[30px] h-[25px] md:w-[35px] md:h-[28px] lg:w-[40px] lg:h-[30px]"
              style={{
                borderTopLeftRadius: '10px',
                borderBottomRightRadius: '10px',
              }}
            />

            {/* Location Title */}
            <h2
              className="font-serif text-[#2d3a4a] mb-6 md:mb-7 lg:mb-8 mt-8 md:mt-10 lg:mt-12 text-2xl md:text-3xl lg:text-4xl"
              style={{ fontWeight: 400, fontFamily: 'Inter, sans-serif' }}
            >
              Location
            </h2>

            {/* Location Details */}
            <div className="space-y-4 md:space-y-5 lg:space-y-6">
              {/* South Surrey Location */}
              <div>
                <h3 className="font-bold text-base md:text-lg text-gray-800 mb-1 md:mb-2">South Surrey</h3>
                <p className="text-gray-700 mb-1 text-sm md:text-base">604-560-9893</p>
                <p className="text-gray-700 mb-1 md:mb-2 text-sm md:text-base">2-1990 152 Street, Surrey</p>
                <a
                  href="mailto:kesarisweets152@gmail.com"
                  className="text-gray-700 underline hover:text-[var(--color-primary)] text-sm md:text-base"
                >
                  kesarisweets152@gmail.com
                </a>
              </div>

              {/* Langley Location */}
              <div>
                <h3 className="font-bold text-base md:text-lg text-gray-800 mb-1 md:mb-2">Langley</h3>
                <p className="text-gray-700 mb-1 text-sm md:text-base">604-514-3700</p>
                <p className="text-gray-700 mb-1 md:mb-2 text-sm md:text-base">19475 Fraser Highway</p>
                <a
                  href="mailto:kesarilangley@gmail.com"
                  className="text-gray-700 underline hover:text-[var(--color-primary)] text-sm md:text-base"
                >
                  kesarilangley@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Icons and Orange Line - Bottom Right */}
            <div className="footer-social-icons flex gap-3 md:gap-4 mt-6 md:mt-7 lg:mt-8 justify-center lg:justify-end items-center relative before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-20 md:before:w-22 lg:before:w-24 before:h-5 md:before:h-5.5 lg:before:h-6 before:bg-[var(--color-primary)] before:rounded-tl-lg">
              {/* Instagram Icon */}
              <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>

              {/* Facebook Icon */}
              <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
        {/* Copyright Bar */}
        <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm text-gray-600">
          © 2026 Kesri Sweets • All Rights Reserved | Developed by{" "}
          <a
            href="https://altiorainfotech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--color-primary)]"
          >
            Altiora Infotech
          </a>
        </div>
      </footer>
    </>
  );
}