"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sweets", href: "/sweets" },
  { name: "Order", href: "/order" },
  { name: "Catering", href: "/catering" },
];

export default function Header() {
  const { getCartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = getCartCount();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Kesri Sweets Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Cart, Search, and Mobile Menu Icons */}
        <div className="flex items-center gap-2">
          {/* Cart Icon */}
          <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              style={{ color: "#000000" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-0 -right-0 text-black text-xs font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Search Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 w-screen bg-white shadow-2xl z-50 animate-growLeftToRight overflow-hidden">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col p-6 pt-12 max-w-full">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-gray-700 hover:text-[var(--color-primary)] transition-all duration-300 font-medium py-4 px-4 rounded-lg hover:bg-orange-50"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[var(--color-primary)] group-hover:h-8 transition-all duration-300 rounded-r"></div>
              </Link>
            ))}

            {/* Decorative element */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>
                <span>Kesri Sweets</span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
