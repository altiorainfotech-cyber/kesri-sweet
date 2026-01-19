"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Menu", href: "/menu" },
  { name: "Order", href: "/order" },
  { name: "Catering", href: "/catering" },
  { name: "Sweets", href: "/sweets" },
];

export default function Header() {
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

        {/* Navigation */}
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
      </div>
    </header>
  );
}
