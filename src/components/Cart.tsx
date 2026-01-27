"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const router = useRouter();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const handleQuantityChange = (id: number, weight: string, change: number) => {
    const item = cartItems.find((i) => i.id === id && i.weight === weight);
    if (item) {
      updateQuantity(id, weight, item.quantity + change);
    }
  };

  const handleRemoveItem = (id: number, weight: string) => {
    removeFromCart(id, weight);
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <section className="min-h-screen relative py-12 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cat-page/cart-background.png"
          alt="Background"
          fill
          className="object-cover opacity-100" // Increased opacity
          priority
        />
        {/* Overlay removed for full visibility */}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h1
            className="font-[family-name:var(--font-island-moments)] text-5xl md:text-6xl text-black"
          >
            You will enjoy
          </h1>
          <div className="h-px w-24 bg-black mx-auto mt-2"></div>
        </div>

        {/* Cart Items Container */}
        <div className="bg-[#e0e0e033] backdrop-blur-sm rounded-lg shadow-sm p-8 mb-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                />
              </svg>
              <h3 className="text-xl text-gray-600 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some delicious sweets to get started!</p>
              <Link
                href="/sweets"
                className="inline-block text-black bg-orange-400 px-8 py-3 rounded-tl-xl rounded-br-xl font-normal hover:bg-orange-500 transition-colors shadow-md"
              >
                Browse Sweets
              </Link>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.weight}`}>
                  <div className="flex flex-col md:flex-row items-center gap-4 py-6">
                    {/* Item Image */}
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl mb-1 font-normal text-orange-500">
                        {item.name}
                      </h3>
                      <p className="text-black text-sm mb-2">
                        Weight: {item.weight}
                      </p>
                      <p className="font-normal text-black">
                        CAD${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.weight, -1)}
                        className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-tl-md rounded-br-md hover:bg-gray-800 transition-colors"
                      >
                        <span className="text-sm">−</span>
                      </button>
                      <span className="w-8 text-center font-normal text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.weight, 1)}
                        className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-tl-md rounded-br-md hover:bg-gray-800 transition-colors"
                      >
                        <span className="text-sm">+</span>
                      </button>
                    </div>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleRemoveItem(item.id, item.weight)}
                      className="p-1 hover:text-red-600 text-black transition-colors"
                      aria-label="Delete item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>

                    {/* Total */}
                    <div className="flex items-center gap-8 min-w-[120px] justify-end">
                      <p className="text-sm text-black font-normal">Total</p>
                      <p className="font-normal text-black">
                        CAD${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="border-b border-black"></div>
                </div>
              ))}

              {/* Add Items and To Pay Section */}
              <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
                <Link
                  href="/sweets"
                  className="text-black bg-orange-400 px-8 py-3 rounded-tl-xl rounded-br-xl font-normal hover:bg-orange-500 transition-colors shadow-md"
                >
                  Add Items
                </Link>
                <div className="flex items-center gap-6">
                  <span className="text-black font-normal text-lg">To Pay</span>
                  <span
                    className="text-black font-normal px-8 py-3 rounded-tl-xl rounded-br-xl shadow-md text-lg"
                    style={{ backgroundColor: "#FF9900" }}
                  >
                    CAD${getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Payment Section - Only show when cart has items */}
        {cartItems.length > 0 && (
          <div className="bg-[#e0e0e033] backdrop-blur-sm rounded-lg shadow-sm p-6 mt-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <button
                onClick={handleCheckout}
                className="text-black px-6 py-2 rounded-tl-lg rounded-br-lg font-normal flex items-center gap-2 shadow-sm"
                style={{ backgroundColor: "#FF9900" }}
              >
                Pay using
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Payment Method Icons */}
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                <img
                  src="/images/cat-page/visa 1.png"
                  alt="Visa"
                  className="h-6 object-contain"
                />
                <img
                  src="/images/cat-page/Group 38.png"
                  alt="Mastercard"
                  className="h-6 object-contain"
                />
                <img
                  src="/images/cat-page/jcb 1.png"
                  alt="JCB"
                  className="h-6 object-contain"
                />
                <img
                  src="/images/cat-page/googlepay 1.png"
                  alt="Google Pay"
                  className="h-6 object-contain"
                />
                <img
                  src="/images/cat-page/discover 1.png"
                  alt="Discover"
                  className="h-6 object-contain"
                />
                <img
                  src="/images/cat-page/applepay 1.png"
                  alt="Apple Pay"
                  className="h-6 object-contain"
                />
                <img
                  src="/images/cat-page/americanexpress 1.png"
                  alt="American Express"
                  className="h-6 object-contain"
                />
                <img
                  src="/images/cat-page/interac 1.png"
                  alt="Interac"
                  className="h-6 object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

