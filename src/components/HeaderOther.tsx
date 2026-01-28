"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sweets", href: "/sweets" },
  { name: "Order", href: "/order" },
  {
    name: "Catering",
    href: "/catering",
    submenu: [
      { name: "Catering Menu", href: "/catering-menu" }
    ]
  },
];

export default function HeaderOther() {
  const { getCartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const cartCount = getCartCount();

  return (
    <header className="relative w-full py-4 px-6" style={{ backgroundColor: "#F4F0EF" }}>
      <div className="container mx-auto">
        {/* First Row: Logo and Navigation */}
        <div className="flex items-center justify-between mb-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-25 h-16">
              <Image
                src="/logo.png"
                alt="Kesri Sweets Logo"
                width={62}
                height={55}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Menu - Centered */}
          <nav className="hidden md:flex items-center gap-8 mx-auto">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && setOpenSubmenu(link.name)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="text-[#2d3a4a] hover:text-[var(--color-primary)] font-medium text-base transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.submenu && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="#FF9900">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
                {link.submenu && openSubmenu === link.name && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-[180px] z-50">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-2 text-gray-700 hover:text-[var(--color-primary)] hover:bg-orange-50 transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-200/50 rounded-full transition-colors"
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

        {/* Second Row: Pickup Location and Cart - Centered */}
        <div className="flex items-center justify-center gap-3">
          <div className="relative flex items-center gap-3">
            <span
              className="text-black italic font-[family-name:var(--font-island-moments)] hidden sm:block"
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
              <div key={link.name}>
                {link.submenu ? (
                  <button
                    className="group relative text-gray-700 hover:text-[var(--color-primary)] transition-all duration-300 font-medium py-4 px-4 rounded-lg hover:bg-orange-50 flex items-center justify-between w-full text-left"
                    onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === link.name ? null : link.name)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {link.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform duration-300 ${mobileSubmenuOpen === link.name ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="#FF9900"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[var(--color-primary)] group-hover:h-8 transition-all duration-300 rounded-r"></div>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="group relative text-gray-700 hover:text-[var(--color-primary)] transition-all duration-300 font-medium py-4 px-4 rounded-lg hover:bg-orange-50 flex items-center justify-between"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[var(--color-primary)] group-hover:h-8 transition-all duration-300 rounded-r"></div>
                  </Link>
                )}
                {link.submenu && mobileSubmenuOpen === link.name && (
                  <div className="pl-8">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block text-gray-600 hover:text-[var(--color-primary)] transition-colors py-2 px-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
