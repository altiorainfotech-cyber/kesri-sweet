import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
      style={{
        backgroundImage: 'url(/images/home-page/hero-section-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }}
    >
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 relative flex items-center min-h-screen lg:min-h-screen">
        {/* Left side background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/home-page/leftside-kaju-katli-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-30 animate-slideInLeft"
          />
        </div>

        {/* Mobile/Tablet Images - Top Right Corner */}
        <div className="absolute top-[18%] right-2 md:right-8 flex lg:hidden items-start gap-3 z-20">
          {/* Left Image - Manchurian Small */}
          <div className="relative">
            <Image
              src="/images/home-page/RDK-00448-removebg-preview.png"
              alt="Manchurian Small"
              width={170}
              height={140}
              className="object-contain w-[130px] md:w-[160px] h-auto"
            />
          </div>

          {/* Right Image - Momo */}
          <div className="relative">
            <Image
              src="/images/home-page/momobg.png"
              alt="Background"
              width={210}
              height={150}
              className="absolute top-[11%] left-[9%] z-10 w-[85px] md:w-[130px] h-auto"
            />
            <Image
              src="/images/home-page/momo.png"
              alt="Momo"
              width={280}
              height={180}
              className="relative z-20 object-contain w-[116px] md:w-[180px] h-auto"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-32 w-full">
          {/* Because - rotated text */}
          <div className="mb-1">
            <span
              className="font-[family-name:var(--font-island-moments)] text-[var(--color-primary)] inline-block text-3xl md:text-4xl lg:text-5xl"
              style={{ transform: 'rotate(-9deg)', transformOrigin: 'left center' }}
            >
              Because
            </span>
          </div>

          {/* GREAT FOOD NEEDS - one line */}
          <h1
            className="font-bold text-[#2d3a4a] tracking-tight text-2xl md:text-3xl lg:text-5xl -mt-4 md:-mt-6 lg:-mt-8"
            style={{ lineHeight: '1.1' }}
          >
            GREAT FOOD NEEDS
          </h1>

          {/* no occasion - right aligned */}
          <div className="text-right">
            <span
              className="font-[family-name:var(--font-inter)] text-[#2d3a4a] text-lg md:text-2xl lg:text-4xl"
              style={{ fontWeight: 400 }}
            >
              no occasion
            </span>
          </div>

          {/* Description */}
          <p
            className="mt-3 md:mt-4 lg:mt-6 text-gray-600 max-w-md font-[family-name:var(--font-inter)] text-sm md:text-base"
            style={{ fontWeight: 400 }}
          >
            Kesari brings you the finest Indian confectionery and authentic flavours, proudly serving guests looking for best Indian restaurant in White Rock, Surrey BC. Widely known for offering some of the best Indian food in South Surrey, we blend traditional recipes with premium ingredients to create a truly memorable dining experience.
          </p>

          {/* Button */}
          <Link
            href="/order"
            className="inline-block mt-3 md:mt-4 lg:mt-6 px-5 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 text-white font-medium hover:opacity-90 transition-opacity text-sm md:text-base"
            style={{ backgroundColor: '#FF8400', borderBottomRightRadius: '20px', borderTopLeftRadius: '20px' }}
          >
            Explore Menu
          </Link>
        </div>
      </div>

      {/* Right Side - Food Images Collage - Hidden on mobile/tablet */}
      <div className="hidden lg:block w-1/2 relative bg-[var(--color-cream)] overflow-hidden min-h-screen">
        {/* Background shape */}
        <div
          className="absolute top-[15%] xl:top-[17%] 2xl:top-[19%] left-0 w-[85%] xl:w-[88%] 2xl:w-[92%] h-[55%] xl:h-[60%] 2xl:h-[63%]"
          style={{
            backgroundImage: 'url(/images/home-page/rightside-image-bg.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Food Image 1 - Momo (top right) */}
        <div className="absolute top-[12%] xl:top-[16%] 2xl:top-[21%] right-[15%] xl:right-[18%] 2xl:right-[20%] z-20">
          <div className="relative">
            <Image
              src="/images/home-page/momobg.png"
              alt="Background"
              width={210}
              height={150}
              className="absolute top-[11%] left-[9%] z-10 w-[130px] xl:w-[170px] 2xl:w-[210px] h-auto"
            />
            <Image
              src="/images/home-page/momo.png"
              alt="Momo"
              width={280}
              height={180}
              className="relative z-20 object-contain animate-slideInRight w-[180px] xl:w-[230px] 2xl:w-[280px] h-auto"
            />
          </div>
        </div>

        {/* Food Image 2 - Manchurian Small (middle left) */}
        <div className="absolute top-[25%] xl:top-[27%] 2xl:top-[30%] left-[10%] xl:left-[14%] 2xl:left-[19%] z-20">
          <div className="relative">
            <Image
              src="/images/home-page/RDK-00448.jpg"
              alt="Manchurian Small"
              width={170}
              height={140}
              className="relative z-20 object-contain animate-slideInRight w-[110px] xl:w-[140px] 2xl:w-[170px] h-auto"
              style={{ borderTopLeftRadius: '30px', borderBottomRightRadius: '30px' }}
            />
          </div>
        </div>

        {/* Food Image 3 - Kaju Katli (middle left) */}
        <div className="absolute top-[42%] xl:top-[45%] 2xl:top-[48%] left-[5%] xl:left-[10%] 2xl:left-[15%] z-20">
          <div className="relative">
            <Image
              src="/images/home-page/kajukatribg.png"
              alt="Background"
              width={200}
              height={160}
              className="z-10 w-[130px] xl:w-[165px] 2xl:w-[200px] h-auto"
            />
            <Image
              src="/images/home-page/kajukatli.png"
              alt="Kaju Katli"
              width={200}
              height={120}
              className="absolute top-5 left-[-35%] z-20 object-contain animate-slideInRight w-[130px] xl:w-[165px] 2xl:w-[200px] h-auto"
            />
          </div>
        </div>

        {/* Food Image 4 - Panjeri Ladoo (bottom center) */}
        <div className="absolute bottom-[8%] xl:bottom-[6%] 2xl:bottom-[4%] left-[5%] xl:left-[10%] 2xl:left-[15%] z-20">
          <div className="relative">
            <Image
              src="/images/home-page/panjeri-laddoo-bg.png"
              alt="Background"
              width={160}
              height={120}
              className="z-10 w-[100px] xl:w-[130px] 2xl:w-[160px] h-auto"
            />
            <Image
              src="/images/home-page/Panjeri-Ladoo.png"
              alt="Panjeri Ladoo"
              width={600}
              height={300}
              className="absolute bottom-0 left-[-66%] z-20 animate-slideInRight w-[200px] xl:w-[250px] 2xl:w-[300px] h-auto"
              style={{ maxWidth: 'none' }}
            />
          </div>
        </div>

        {/* Food Image 5 - Manchurian Big (middle right) */}
        <div className="absolute top-[42%] xl:top-[45%] 2xl:top-[48%] right-[18%] xl:right-[20%] 2xl:right-[22%] z-20">
          <div className="relative">
            <Image
              src="/images/home-page/manchurianbig-bg.png"
              alt="Background"
              width={280}
              height={200}
              className="absolute -top-0 -left-0 z-10 w-[180px] xl:w-[230px] 2xl:w-[280px] h-auto"
            />
            <Image
              src="/images/home-page/RDK-00437.jpg"
              alt="Manchurian"
              width={250}
              height={160}
              className="relative z-20 object-contain animate-slideInRight w-[180px] xl:w-[230px] 2xl:w-[240px] h-auto"
              style={{ borderTopLeftRadius: '25px', borderBottomRightRadius: '25px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
