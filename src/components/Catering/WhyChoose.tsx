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
      className="relative min-h-screen py-16 px-6 md:px-12"
      style={{
        backgroundImage: 'url(/images/Why-Choose/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <span
              className="font-[family-name:var(--font-island-moments)] text-[#FF9900] absolute"
              style={{
                fontSize: '55px',
                lineHeight: '1',
                top: '22px',
                left: '-20%',
                whiteSpace: 'nowrap',
                transform: 'rotate(-15deg)'
              }}
            >
              Why Choose
            </span>
            <h1
              className="font-sans text-white"
              style={{ fontSize: '48px', fontWeight: 700, lineHeight: '1.2', letterSpacing: '0.02em', marginTop: '50px' }}
            >
              KESARI SWEETS
            </h1>
          </div>
          <p className="text-white text-xl mt-4">
            for Catering Near You?
          </p>
        </div>

        {/* Features Grid - 2 rows x 3 columns */}
        <div
          className="bg-black/70 px-8 py-6 mb-12 mx-auto"
          style={{
            maxWidth: '60%',
            borderTopLeftRadius: '20px',
            borderBottomRightRadius: '20px'
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{
              marginLeft: '117px',
              marginRight: '-177px'
            }}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 relative">
                {/* Orange square icon - behind first letter */}
                <div
                  className="flex-shrink-0 absolute"
                  style={{
                    width: '21px',
                    height: '18px',
                    backgroundColor: 'rgb(255, 153, 0)',
                    borderTopLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                    left: '-12px',
                    top: '21%',
                    transform: 'translateY(-50%)',
                    zIndex: 0
                  }}
                />
                <span className="text-white relative z-10" style={{ fontSize: '14px' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Search Text */}
        <div className="text-center mb-16">
          <p className="text-white max-w-4xl mx-auto" style={{ fontSize: '14px' }}>
            If you&apos;re searching for &quot;<span className="font-semibold">catering services near me</span>&quot; or &quot;<span className="font-semibold">Indian catering near me in Surrey BC</span>&quot;, Kesari Sweets is your local go-to choice.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Menu Customization */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-white text-2xl md:text-3xl font-normal mb-6">
              Our catering menu can be customized to include:
            </h2>
            <ul className="space-y-3">
              {menuItems.map((item, index) => (
                <li key={index} className="text-white flex items-start gap-2" style={{ fontSize: '14px', margin: '0px' }}>
                  <span className="text-[#FF9900] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Quality Section */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg">
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{
                fontFamily: 'var(--font-island-moments)',
                color: '#FF9900',
                fontSize: '55px',
                lineHeight: '1.2'
              }}
            >
              Quality Catering You Can Trust
            </h2>
            <p className="text-white leading-relaxed" style={{ fontSize: '14px' }}>
              Every dish at Kesari Sweets is prepared fresh using high-quality ingredients and traditional cooking methods. We follow strict hygiene standards to ensure safe, delicious food for every event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
