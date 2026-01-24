export default function WhyChoose() {
  const features = [
    "Freshly prepared food",
    "Authentic Indian flavours",
    "Custom catering menus",
    "Reliable, on-time delivery",
    "Competitive pricing",
    "Trusted local caterer in Surrey, BC"
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
      className="relative min-h-screen py-8 md:py-16 px-4 md:px-6 lg:px-12"
      style={{
        backgroundImage: 'url(/images/Why-Choose/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12">
          <div className="relative inline-block">
            <span
              className="font-[family-name:var(--font-island-moments)] text-[#FF9900] absolute text-2xl md:text-4xl lg:text-[55px]"
              style={{
                lineHeight: '1',
                top: '10px',
                left: '-15%',
                whiteSpace: 'nowrap',
                transform: 'rotate(-15deg)'
              }}
            >
              Why Choose
            </span>
            <h1
              className="font-sans text-white text-3xl md:text-4xl lg:text-5xl mt-8 md:mt-12 lg:mt-[50px]"
              style={{ fontWeight: 700, lineHeight: '1.2', letterSpacing: '0.02em' }}
            >
              KESARI SWEETS
            </h1>
          </div>
          <p className="text-white text-base md:text-lg lg:text-xl mt-3 md:mt-4">
            for Catering Near You?
          </p>
        </div>

        {/* Features Grid - 2 rows x 3 columns */}
        <div
          className="bg-black/70 px-4 md:px-8 py-4 md:py-6 mb-8 md:mb-12 mx-auto w-full md:max-w-[90%] lg:max-w-[60%]"
          style={{
            borderTopLeftRadius: '20px',
            borderBottomRightRadius: '20px'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 relative pl-4">
                {/* Orange square icon - behind first letter */}
                <div
                  className="flex-shrink-0 absolute w-[21px] h-[18px]"
                  style={{
                    backgroundColor: 'rgb(255, 153, 0)',
                    borderTopLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 0
                  }}
                />
                <span className="text-white relative z-10 text-xs md:text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Search Text */}
        <div className="text-center mb-8 md:mb-16 px-4">
          <p className="text-white max-w-4xl mx-auto text-xs md:text-sm">
            If you&apos;re searching for &quot;<span className="font-semibold">catering services near me</span>&quot; or &quot;<span className="font-semibold">Indian catering near me in Surrey BC</span>&quot;, Kesari Sweets is your local go-to choice.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Left Column - Menu Customization */}
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

          {/* Right Column - Quality Section */}
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
        </div>
      </div>
    </section>
  );
}
