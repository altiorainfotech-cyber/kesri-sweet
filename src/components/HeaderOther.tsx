"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HeaderOther() {
  const [cartCount] = useState(2);

  return (
    <header className="w-full py-4 px-6" style={{ backgroundColor: "#F4F0EF" }}>
      <div className="container mx-auto">
        {/* First Row: Logo and Navigation */}
        <div className="flex items-center mb-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Kesri Sweets Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Navigation Menu - Centered */}
          <nav className="flex items-center gap-8 mx-auto">
            <Link
              href="/sweets"
              className="text-[#2d3a4a] hover:text-[var(--color-primary)] font-medium text-base transition-colors"
            >
              Sweets
            </Link>
            <Link
              href="/food"
              className="text-[#2d3a4a] hover:text-[var(--color-primary)] font-medium text-base transition-colors"
            >
              Food
            </Link>
            <Link
              href="/order"
              className="text-[var(--color-primary)] font-semibold text-base transition-colors"
            >
              Order
            </Link>
            <Link
              href="/catering"
              className="text-[#2d3a4a] hover:text-[var(--color-primary)] font-medium text-base transition-colors"
            >
              Catering
            </Link>
          </nav>
        </div>

        {/* Second Row: Pickup Location and Cart - Centered */}
        <div className="flex items-center justify-center gap-3">
          <div className="relative flex items-center gap-3">
            <span
              className="text-black italic font-[family-name:var(--font-island-moments)]"
              style={{
                fontSize: "20px",
                transform: "rotate(-15deg)",
                position: "absolute",
                bottom: "67%",
                left: "-12%",
                transformOrigin: "center"
              }}
            >
              pickup from
            </span>
            <Link
              href="https://maps.google.com/?q=2-1990+152+Street"
              target="_blank"
              className="text-white px-5 py-1.5 text-sm font-semibold transition-colors"
              style={{
                backgroundColor: "#FF8400",
                borderRadius: "12px 0 12px 0"
              }}
            >
              2-1990 152 Street
            </Link>
          </div>
          <Link href="/cart" className="relative ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 cursor-pointer"
              style={{ color: "#FF8400" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 text-black text-xs font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
