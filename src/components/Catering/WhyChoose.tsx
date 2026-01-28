import Link from "next/link";

export default function WhyChoose() {
  const features = [
    {
      text: "Freshly prepared food",
      icon: (
        <svg height="32" width="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M6 13.87A4 4 0 0 1 7.41 6.51 4 4 0 0 1 12 2a4 4 0 0 1 4.59 4.51A4 4 0 0 1 18 13.87" />
          <path d="M12 18v4" />
          <path d="M12 15l-3 3 3 3 3-3-3-3z" />
        </svg>
      )
    },
    {
      text: "Authentic Indian flavours",
      icon: (
        <svg height="32" width="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.465-4.522 1.5-6 1.407 3.545 3.326 5.513 4 8 .506 1.864.223 3.493-1 5" />
          <path d="M14.5 9c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1z" />
          <path d="M12 21c-3.314 0-6-2.463-6-5.5a5.5 5.5 0 0 1 3.416-5.074" />
        </svg>
      )
    },
    {
      text: "Custom catering menus",
      icon: (
        <svg height="32" width="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M8 7h6" />
          <path d="M8 11h8" />
          <path d="M8 15h6" />
        </svg>
      )
    },
    {
      text: "Reliable, on-time delivery",
      icon: (
        <svg height="32" width="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      text: "Competitive pricing",
      icon: (
        <svg height="32" width="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      text: "Trusted local caterer in Surrey, BC",
      icon: (
        <svg height="32" width="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    }
  ];

  const menuItems = [
    "Traditional Indian sweets",
    "Savoury snacks and chaat",
    "Vegetarian main dishes",
    "Fresh breads and sides",
    "Custom platters for weddings, birthdays, and small events"
  ];

  return (
    <section
      className="relative py-4 pt-10 px-4 md:px-6 lg:px-12 "
      style={{
        backgroundImage: 'url(/images/Why-Choose/RDK-00683.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay - Modern Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-[2px]"
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-6 md:mb-10">
          <div className="relative inline-block group">
            <span
              className="font-[family-name:var(--font-island-moments)] text-[#FF9900] absolute text-2xl md:text-3xl lg:text-[45px] font-semibold transition-transform duration-500 group-hover:-rotate-[20deg]"
              style={{
                lineHeight: '1',
                top: '-15px',
                left: '-15%',
                whiteSpace: 'nowrap',
                transform: 'rotate(-15deg)',
                textShadow: '2px 2px 10px rgba(0,0,0,0.3)'
              }}
            >
              Why Choose
            </span>
            <h2
              className="font-sans text-white text-2xl md:text-4xl lg:text-5xl mt-6 md:mt-10 lg:mt-[40px] tracking-tight"
              style={{ fontWeight: 800, lineHeight: '1', textShadow: '2px 2px 20px rgba(0,0,0,0.5)' }}
            >
              KESARI SWEETS
            </h2>
          </div>
          <p className="text-white/90 text-base md:text-lg lg:text-xl mt-3 font-light tracking-wide italic">
            for Catering Near You?
          </p>
        </div>

        {/* Features Grid - Modernized with Glassmorphism */}
        <div
          className="relative px-6 md:px-12 py-8 md:py-10 mb-12 mx-auto w-full md:max-w-[95%] lg:max-w-[80%] overflow-hidden border border-white/10 shadow-2xl"
          style={{
            backgroundColor: 'rgba(129, 127, 127, 0.4)', // User's color with transparency
            backdropFilter: 'blur(12px)',
            borderTopLeftRadius: '30px',
            borderBottomRightRadius: '30px'
          }}
        >
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">
            {features.map((feature, index) => (
              <div key={index} className="group flex items-center gap-4 relative">
                {/* Icon instead of orange block */}
                <div className="flex-shrink-0 text-[#FF9900] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {feature.icon}
                </div>
                <span className="text-white relative z-10 text-lg md:text-xl font-medium tracking-wide transition-colors duration-300 group-hover:text-[#FF9900]">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Menu Button - Enhanced Styling */}
        <div className="text-center">
          <Link
            href="/catering-menu"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-white font-semibold text-xl transition-all duration-500 overflow-hidden"
            style={{
              backgroundColor: '#FF9900',
              borderTopLeftRadius: '25px',
              borderBottomRightRadius: '25px',
              boxShadow: '0 8px 25px rgba(255, 153, 0, 0.4)'
            }}
          >
            <span className="relative z-10">Explore Catering Menu</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-[-20deg]"></div>
          </Link>
        </div>

        {/* Search Text */}
        {/* <div className="text-center mb-8 md:mb-16 px-4">
          <p className="text-white max-w-4xl mx-auto text-xs md:text-sm">
            If you&apos;re searching for &quot;<span className="font-semibold">catering services near me</span>&quot; or &quot;<span className="font-semibold">Indian catering near me in Surrey BC</span>&quot;, Kesari Sweets is your local go-to choice.
          </p>
        </div> */}

        {/* Two Column Layout */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-stretch">
          <div className="bg-black/40 backdrop-blur-sm p-4 md:p-8 rounded-lg">
            <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-normal mb-4 md:mb-6">
              Our catering menu can be customized to include:
            </h2>
            <ul className="space-y-2 md:space-y-3">
              {menuItems.map((item, index) => (
                <li key={index} className="text-white flex items-start gap-2 text-xs md:text-sm">
                  <span className="text-[#FF9900] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-4 md:p-8 rounded-lg">
            <h2
              className="font-[family-name:var(--font-island-moments)] text-[#FF9900] text-3xl md:text-4xl lg:text-[55px] mb-4 md:mb-6"
              style={{
                lineHeight: '1.2'
              }}
            >
              Quality Catering You Can Trust
            </h2>
            <p className="text-white leading-relaxed text-xs md:text-sm">
              Every dish at Kesari Sweets is prepared fresh using high-quality ingredients and traditional cooking methods. We follow strict hygiene standards to ensure safe, delicious food for every event.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
