"use client";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { menuData, menuCategories } from "@/data/menuData";
import { useCart } from "@/context/CartContext";

export default function Order() {
  const router = useRouter();
  const { cartItems, addToCart, updateQuantity, removeFromCart, getCartCount } = useCart();
  const [activeCategory, setActiveCategory] = useState("Most Popular");
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  // Initialize quantities from cart
  useEffect(() => {
    const qtys: { [key: number]: number } = {};
    cartItems.forEach(item => {
      if (item.weight === "Regular") {
        qtys[item.id] = item.quantity;
      }
    });
    setQuantities(qtys);
  }, [cartItems]);

  // Filter menu items by active category
  const filteredItems = useMemo(() => {
    return menuData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Group items into rows of 2
  const itemRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < filteredItems.length; i += 2) {
      rows.push(filteredItems.slice(i, i + 2));
    }
    return rows;
  }, [filteredItems]);

  const handleQuantityChange = (item: { id: number; name: string; image: string; price: number; }, change: number) => {
    const currentQty = quantities[item.id] || 0;
    const newQty = Math.max(0, currentQty + change);

    setQuantities((prev) => ({
      ...prev,
      [item.id]: newQty,
    }));

    // Sync with cart
    const cartItem = cartItems.find(i => i.id === item.id && i.weight === "Regular");
    if (newQty > 0) {
      if (cartItem) {
        updateQuantity(item.id, "Regular", newQty);
      } else {
        addToCart({
          id: item.id,
          name: item.name,
          image: item.image,
          weight: "Regular",
          price: item.price,
          quantity: newQty
        });
      }
    } else {
      if (cartItem) {
        removeFromCart(item.id, "Regular");
      }
    }
  };

  return (
    <section
      className="relative min-h-screen pb-20"
      style={{
        backgroundImage: "url(/images/ordar-page/backgroundimage.png)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Category Navigation - Full Width */}
      <div className="mb-8 bg-white/95 backdrop-blur-sm py-3 px-6 flex flex-wrap gap-6 items-center justify-center w-full">
        {menuCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm font-medium transition-all relative pb-1 cursor-pointer ${activeCategory === category
              ? "text-[var(--color-primary)] font-semibold"
              : "text-[#2d3a4a] hover:text-[var(--color-primary)]"
              }`}
          >
            {category}
            {activeCategory === category && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)]"></span>
            )}
          </button>
        ))}
        <button className="ml-auto p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h2
            className="font-[family-name:var(--font-island-moments)] text-black inline-block relative"
            style={{ fontSize: "50px", lineHeight: "1.2" }}
          >
            {activeCategory}
            <span
              className="absolute left-0 right-0 h-0.5 bg-black"
              style={{ bottom: "-4px" }}
            ></span>
          </h2>
        </div>

        {/* Menu Items - Dynamic Rows with Alternating Pattern */}
        <div className="max-w-7xl mx-auto mb-8 space-y-8">
          {itemRows.map((rowItems, rowIndex) => {
            const isEvenRow = rowIndex % 2 === 0;
            const marginStyle = isEvenRow
              ? { marginRight: "8%" }
              : { marginLeft: "8%" };

            return (
              <div
                key={rowIndex}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20"
                style={marginStyle}
              >
                {rowItems.map((item) => {
                  const isImageRight = !isEvenRow; // Even rows: image left, Odd rows: image right

                  return (
                    <div key={item.id} className="flex items-center gap-4">
                      {/* Image Section */}
                      <div
                        className={`flex-shrink-0 ${isImageRight ? "order-2" : "order-1"
                          }`}
                        style={{ width: "35%" }}
                      >
                        <div className="relative w-full aspect-square max-w-[100px] mx-auto">
                          <div className="absolute inset-0 rounded-full overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={100}
                              height={100}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div
                        className={`flex flex-col border-b border-black pb-2 ${isImageRight ? "order-1" : "order-2"
                          }`}
                        style={{ width: "65%" }}
                      >
                        {/* Item Name */}
                        <h3 className="text-[var(--color-primary)] text-xl font-semibold mb-1">
                          {item.name}
                        </h3>

                        {/* Price and Quantity Controls */}
                        <div className="flex items-center justify-between mb-2">
                          {/* Price */}
                          <p className="text-black text-base font-medium mr-[10px]">
                            {item.priceRange ||
                              `CAD$${item.price.toFixed(2)}`}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(item, -1)
                              }
                              className="w-7 h-7 flex items-center justify-center bg-black text-white hover:bg-gray-800 transition-colors"
                              style={{ borderRadius: "6px 0 6px 0" }}
                            >
                              <span className="text-base font-normal">−</span>
                            </button>
                            <span className="w-7 text-center font-medium text-base">
                              {quantities[item.id] || 0}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item, 1)}
                              className="w-7 h-7 flex items-center justify-center bg-black text-white hover:bg-gray-800 transition-colors"
                              style={{ borderRadius: "0 6px 0 6px" }}
                            >
                              <span className="text-base font-normal">+</span>
                            </button>
                          </div>
                        </div>

                        {/* Description (if exists) */}
                        {item.description && (
                          <p className="text-gray-700 text-sm mb-3">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

      </div>

      {/* Cart Notification */}
      <div className="text-black px-6 flex items-center justify-between absolute right-0 bottom-0 w-[265px] md:w-[400px]" style={{ backgroundColor: "#FF8400", height: "38px", borderRadius: "8px 0 0 0" }}>
        <span className="font-normal text-base">
          {getCartCount()} Item{getCartCount() !== 1 ? "s" : ""} Added
        </span>
        <button
          onClick={() => router.push('/cart')}
          className="font-normal text-base hover:underline transition-all cursor-pointer"
        >
          View Cart &gt;
        </button>
      </div>
    </section>
  );
}
