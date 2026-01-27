import type { Metadata } from "next";
import { Inter, Island_Moments } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const islandMoments = Island_Moments({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-island-moments",
});

export const metadata: Metadata = {
  title: "Kesri Sweets - Authentic Indian Sweets",
  description: "Discover authentic Indian sweets, catering services, and delicious menu options at Kesri Sweets.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${islandMoments.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
