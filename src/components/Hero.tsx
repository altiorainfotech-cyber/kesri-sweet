import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-screen flex overflow-hidden" style={{backgroundImage: 'url(/images/home-page/hero-section-bg.png)', backgroundSize: 'cover', backgroundPosition: 'top'}}>
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 relative flex items-center">
        {/* Left side background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/home-page/leftside-kaju-katli-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-30 animate-slideInLeft"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-8 lg:px-16 py-20 md:py-32">
          {/* Because - rotated text */}
          <div className="mb-1">
            <span
              className="font-[family-name:var(--font-island-moments)] text-[var(--color-primary)] inline-block text-4xl lg:text-5xl"
              style={{ transform: 'rotate(-9deg)', transformOrigin: 'left center' }}
            >
              Because
            </span>
          </div>

          {/* GREAT FOOD NEEDS - one line */}
          <h1
            className="font-bold text-[#2d3a4a] tracking-tight text-3xl lg:text-5xl -mt-4 md:-mt-8 lg:-mt-8"
            style={{ lineHeight: '1.1' }}
          >
            GREAT FOOD NEEDS
          </h1>

          {/* no occasion - right aligned, Inter 36px 400 */}
          <div className="text-right">
            <span
              className="font-[family-name:var(--font-inter)] text-[#2d3a4a] text-xl md:text-2xl lg:text-4xl"
              style={{ fontWeight: 400 }}
            >
              no occasion
            </span>
          </div>

          {/* Description - Inter 20px 400 */}
          <p
            className="mt-4 md:mt-6 text-gray-600 max-w-md font-[family-name:var(--font-inter)] text-sm md:text-base"
            style={{ fontWeight: 400 }}
          >
            Kesari – Best Indian Restaurant in Surrey for Authentic Sweets & Eats
          </p>

          {/* Button - bg #FF9900, border-radius 20px */}
          <Link
            href="/order"
            className="inline-block mt-4 md:mt-6 px-6 md:px-8 py-2 md:py-3 text-white font-medium hover:opacity-90 transition-opacity text-sm md:text-base"
            style={{ backgroundColor: '#FF8400', borderBottomRightRadius:'20px', borderTopLeftRadius:'20px' }}
          >
            Explore Menu
          </Link>
        </div>
      </div>

      {/* Right Side - Food Images Collage */}
      <div 
        className="hidden lg:block w-1/2 relative bg-[var(--color-cream)] overflow-hidden" 
       
      >

        <div style={{
          backgroundImage: 'url(/images/home-page/rightside-image-bg.png)', 
          backgroundSize: 'contain', 
          backgroundPosition: 'center',
          height: '63%',
          backgroundRepeat: 'no-repeat',
          width: '92%',
          marginTop: '19%'
        }}
        >


      
        {/* Food Image 1 - Momo (top right) */}
        <div className="absolute top-[21%] right-[20%] z-20">
          <div className="relative">
            <Image
              src="/images/home-page/momobg.png"
              alt="Background"
              width={210}
              height={150}
              className="absolute top-[11%] left-[9%] z-10"
            />
            <Image
              src="/images/home-page/momo.png"
              alt="Momo"
              width={280}
              height={180}
              className="relative z-20 object-contain animate-slideInRight"
            />
          </div>
        </div>

        {/* Food Image 2 - Manchurian Small (middle left) */}
        <div className="absolute top-[30%] left-[19%] z-20">
          <div className="relative">
            <Image
              src="/images/home-page/manchurian-small.png"
              alt="Manchurian Small"
              width={170}
              height={140}
              className="relative z-20 object-contain animate-slideInRight"
            />
          </div>
        </div>

        {/* Food Image 3 - Kaju Katli (middle left) */}
        <div className="absolute top-[48%] left-[15%] z-20">
          <div className="relative">
            <Image
              src="/images/home-page/kajukatribg.png"
              alt="Background"
              width={200}
              height={160}
              className="z-10"
            />
            <Image
              src="/images/home-page/kajukatli.png"
              alt="Kaju Katli"
              width={200}
              height={120}
              className="absolute top-5 left-[-35%] z-20 object-contain animate-slideInRight"
            />
          </div>
        </div>

        {/* Food Image 4 - Panjeri Ladoo (bottom center) */}
        <div className="absolute bottom-[4%] left-[15%] z-20">
          <div className="relative">
            <Image
              src="/images/home-page/panjeri-laddoo-bg.png"
              alt="Background"
              width={160}
              height={120}
              className="z-10"
            />
            <Image
              src="/images/home-page/Panjeri-Ladoo.png"
              alt="Panjeri Ladoo"
              width={600}
              height={300}
              className="absolute bottom-0 left-[-66%] z-20 animate-slideInRight"
              style={{ width: '300px', height: 'auto', maxWidth: 'none' }}
            />
            
          </div>
        </div>

        {/* Food Image 5 - Manchurian Big (middle right) */}
        <div className="absolute top-[48%] right-[22%] z-20">
          <div className="relative">
            <Image
              src="/images/home-page/manchurianbig-bg.png"
              alt="Background"
              width={280}
              height={200}
              className="absolute -top-0 -left-0 z-10"
            />
            <Image
              src="/images/home-page/manchurian-big.png"
              alt="Manchurian"
              width={280}
              height={160}
              className="relative z-20 object-contain animate-slideInRight"
            />
          </div>
        </div>
          </div>
      </div>
    </section>
  );
}