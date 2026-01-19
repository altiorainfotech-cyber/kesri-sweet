import Image from "next/image";

export default function About() {
  return (
    <section
      className="relative "
      style={{
        backgroundImage: 'url(/images/home-about/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="container mx-auto px-6 pt-25 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Food Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/home-about/aboutleftside.png"
              alt="Delicious Indian Food"
              width={600}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-center">
            {/* The Taste + Behind Us - connected layout like Figma */}
            <div className="relative inline-block text-left">
              <span
                className="font-[family-name:var(--font-island-moments)] text-[var(--color-primary)] absolute"
                style={{ fontSize: '70px', top: '-38px', left: '-22px' }}
              >
                The Taste
              </span>
              <h2
                className="font-bold text-[#2d3a4a]"
                style={{ fontSize: '48px', lineHeight: '1', paddingLeft: '120px', paddingTop: '15px' }}
              >
                Behind Us
              </h2>
            </div>

            {/* Description */}
            <p
              className="mt-6 text-gray-600 max-w-lg mx-auto font-[family-name:var(--font-inter)]"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7' }}
            >
              <strong>Kesari</strong> brings you the finest Indian confectionery and authentic
              flavours, proudly serving guests looking for best Indian
              restaurant in White Rock, Surrey BC. Widely known for offering
              some of the best Indian food in South Surrey, we blend
              traditional recipes with premium ingredients to create a truly
              memorable dining experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
