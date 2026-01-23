import Image from "next/image";

export default function CateringMenu() {
  // Custom scrollbar styles
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #FF9900;
      border-radius: 10px;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #e68a00;
    }

    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: #FF9900 #f1f1f1;
    }

    .menu-heading {
      position: relative;
      padding-left: 25px;
    }

    .menu-heading::before {
      content: '';
      position: absolute;
      left: -22px;
      top: 54%;
      transform: translateY(-50%);
      width: 40px;
      height: 2px;
      background-color: #FF9900;
    }

    .bg-white.overflow-visible.shadow-sm.relative.mt-32.flex.flex-col {
      padding-top: 118px;
    }
  `;
  const menuData = {
    appetizersVeg: {
      pakora: [
        "Veg Pakora",
        "Paneer Pakora",
        "Gobi Pakora",
        "Mirch Pakora",
        "Aloo Finger",
        "Paneer Finger",
        "Bread Pakora",
        "Spring Roll"
      ],
      paneer: [
        "Paneer Tikka - Traditional",
        "Paneer Tikka - Hariyali",
        "Chilli Paneer",
        "Malai Paneer Cubes"
      ],
      liveStation: [
        "Tawa Tikki",
        "Pav Bhaji",
        "Nutri Kulcha",
        "Samosa Chaat",
        "Gol Gappa",
        "Chaat Papdi",
        "Taco and Burrito Bar",
        "Momos",
        "Chole Bhature and Aloo Puri"
      ]
    },
    appetizersNonVeg: {
      others: [
        "Hara Bhara Kebab",
        "Corn Kebab",
        "Beetroot Tikki",
        "Stuffed Mushroom",
        "Chilli Mushroom",
        "Chaat Papdi",
        "Manchurian",
        "Chowmein",
        "Aloo Tikki",
        "Pav Bhaji",
        "Gol Gappa",
        "Humy Gobi",
        "Sandwiches",
        "Veg Sliders",
        "Soy Chaap - Tandoori and Chilli",
        "Soy Chaap - Tandoori and Malai",
        "Tandoori Tofu Tikka",
        "Dry Fruit Chaat",
        "Fruit Chaat",
        "Cocktail Samosa"
      ]
    },
    chicken: [
      "Tandoori Chicken",
      "Chicken Tikka",
      "Pesto Chicken",
      "Chicken Pakora",
      "Chilli Chicken",
      "Chicken Lollipop",
      "Chicken Nuggets",
      "Chicken 65",
      "Chicken Wings",
      "Seekh Kebab"
    ],
    fish: [
      "Fish Tikka",
      "Fish Pakora",
      "Chilli Fish",
      "Fish Cake",
      "Fish Finger",
      "Tawa Fish"
    ],
    othersNonVeg: [
      "Prawn Tikka",
      "Chilli Prawn",
      "Lamb Chops"
    ],
    mainCourseVeg: {
      dal: [
        "Dal Makhani",
        "Dal Tadka",
        "KESARI Dal"
      ],
      paneer: [
        "KESARI Paneer",
        "Shahi Paneer",
        "Paneer Makhani",
        "Paneer Butter Masala",
        "Matar Paneer",
        "Palak Paneer",
        "Karahi Paneer",
        "Palak Paneer"
      ],
      mushroom: [
        "Makhana",
        "Do Pyaza",
        "Matar"
      ],
      others: [
        "Palak Corn",
        "Chana Masala",
        "Malai Kofta",
        "Aloo Kofta",
        "Aloo Gobi",
        "Mix Vegetable",
        "Vegetable Korma",
        "Chana Masala",
        "Bhindi Masala",
        "Methi Malai Matar",
        "Jeera Aloo",
        "Beans",
        "Bhartha",
        "Khoya Matar",
        "Veg Korma",
        "Kadhi Pakora",
        "Rajmah",
        "Biryani"
      ]
    },
    mainCourseNonVeg: {
      dal: [
        "Dal Makhani",
        "Dal Tadka",
        "KESARI Dal"
      ],
      goat: [
        "Goat Curry",
        "Goat Korma",
        "Goat Rogan Josh",
        "Tawa Goat"
      ],
      lamb: [
        "Palak (Spinach) Lamb",
        "Lamb Curry",
        "Lamb Korma",
        "Lamb Vindaloo",
        "Lamb Rogan Josh"
      ],
      fish: [
        "Goan Fish Curry",
        "Punjabi Fish Curry"
      ],
      chicken: [
        "Butter Chicken",
        "Kadai Chicken",
        "Chicken Curry",
        "Lahori Chicken Curry",
        "Cream Chicken",
        "Methi Chicken",
        "Palak Chicken",
        "Chicken Tikka Masala",
        "Thai Chicken Curry",
        "Palak (Spinach) Chicken",
        "Chicken Korma",
        "Chicken Vindaloo"
      ],
      pasta: [
        "Creamy Alfredo",
        "Tomato Veggie Pasta"
      ],
      others: [
        "Prawn Curry",
        "Biryani"
      ]
    },
    riceAndRoti: [
      "Masir Pulao",
      "Brown Rice",
      "Jeera rice",
      "Biryani",
      "Malai roti",
      "Tandoori roti",
      "Naan",
      "Paratha",
      "Bhatura"
    ],
    soup: [
      "Cream of Mushroom",
      "Minestrone",
      "French Onion",
      "Hot and Sour",
      "Roasted Pumpkin Soup",
      "Tom Yum",
      "Cream of Chicken",
      "Chicken Shorba",
      "Chicken Dal & Vegetables"
    ],
    drinks: [
      "Chai",
      "Indian Coffee",
      "Tea with Steam Milk",
      "Juice",
      "Mango Lassi",
      "Milkshakes",
      "Mango Shake"
    ],
    dessert: [
      "Moong Dal Halwa",
      "Gajar Halwa",
      "Kheer",
      "Hot Gulab Jamun",
      "Ice Cream",
      "Rasmalai",
      "Zarda Rice",
      "Sufiyan & Rasqul",
      "Shahi Tukda",
      "Kulfi Falooda",
      "Moong Dal Ka Halwa",
      "Fruit Cream",
      "Fruit Custard"
    ],
    saladPicklesRaita: [
      "Pasta salad",
      "Potato Salad",
      "Bean Salad",
      "Indian salad",
      "Kachumber Salad",
      "Green Salad",
      "Gajar achaar",
      "Nimbu achaar",
      "Mango chutney",
      "Mixed Raita"
    ],
    charcuteriePlatter: [
      "Hummus and Pita",
      "Spinach and Corn Dip with chips",
      "Fruit Platter",
      "Fruit Skewers",
      "Veggie Tray + Meat",
      "Charcuterie Board"
    ]
  };

  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#F4F0EF' }}>
      <style>{scrollbarStyles}</style>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 relative">
          <div className="relative inline-block">
            <div
              className="absolute bg-[#FF9900]"
              style={{
                width: '35px',
                height: '30px',
                top: '5px',
                left: '-45px',
                borderTopLeftRadius: '10px',
                borderBottomRightRadius: '10px'
              }}
            />
            <h2 className="text-4xl md:text-5xl font-normal text-black">
              Catering Menu
            </h2>
          </div>
        </div>

        {/* Menu Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Appetizers Veg */}
          <div>
            <h3
              className="text-3xl font-normal mb-6 italic inline-block pb-2"
              style={{
                fontFamily: 'var(--font-island-moments)',
                color: '#5D4E37'
              }}
            >
              Appetizers - Veg
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridAutoRows: '1fr' }}>
              {/* Veg Card 1 */}
              <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
              <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
                <Image
                  src="/images/catering/Appetizers - Veg1.png"
                  alt="Appetizers"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
                <div className="p-6 flex-1 overflow-auto custom-scrollbar">
                  {/* Pakora */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Pakora
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.appetizersVeg.pakora.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Paneer */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Paneer
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.appetizersVeg.paneer.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Live Station */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Live Station
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.appetizersVeg.liveStation.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Veg Card 2 - Duplicate for layout */}
              <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
                <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
                  <Image
                    src="/images/catering/Appetizers - Veg2.png"
                    alt="Appetizers Veg 2"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="p-6 flex-1 overflow-auto custom-scrollbar">
                  {/* Paneer */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Paneer
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.appetizersVeg.paneer.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Live Station */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Live Station
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.appetizersVeg.liveStation.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Appetizers Non-Veg */}
          <div>
            <h3
              className="text-3xl font-normal mb-6 italic inline-block pb-2"
              style={{
                fontFamily: 'var(--font-island-moments)',
                color: '#5D4E37',
                
              }}
            >
              Appetizers - Non-Veg
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridAutoRows: '1fr' }}>
              {/* Non-Veg Card 1 - Chicken */}
              <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
                <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
                  <Image
                    src="/images/catering/Appetizers - Non-Veg2.png"
                    alt="Chicken"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="p-6 flex-1 overflow-auto custom-scrollbar">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Chicken
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.chicken.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Non-Veg Card 2 - Others & Fish */}
              <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
                <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
                  <Image
                    src="/images/catering/Appetizers - Non-Veg1.png"
                    alt="Others"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="p-6 flex-1 overflow-auto custom-scrollbar">
                  {/* Others - Main List */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Others
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.appetizersNonVeg.others.slice(0, 10).map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fish */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Fish
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.fish.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Others - Small List */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Others
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.othersNonVeg.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Course Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          {/* Left Column - Main Course Vegetarian */}
          <div>
            <h3
              className="text-3xl font-normal mb-6 italic inline-block pb-2"
              style={{
                fontFamily: 'var(--font-island-moments)',
                color: '#5D4E37'
              }}
            >
              Main Course - Vegetarian
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridAutoRows: '1fr' }}>
              {/* Main Course Veg Card 1 */}
              <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
              <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
                <Image
                  src="/images/maincours/Shahi-Paneer-1.png"
                  alt="Main Course Vegetarian"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
                <div className="p-6 flex-1 overflow-auto custom-scrollbar">
                  {/* Dal */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Dal
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.mainCourseVeg.dal.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Paneer */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Paneer
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.mainCourseVeg.paneer.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mushroom */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Mushroom
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.mainCourseVeg.mushroom.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Main Course Veg Card 2 */}
              <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
                <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
                  <Image
                    src="/images/maincours/Bhindi-Masala-1.png"
                    alt="Main Course Vegetarian 2"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="p-6 flex-1 overflow-auto custom-scrollbar">
                  {/* Others */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Others
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.mainCourseVeg.others.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Course Non-Vegetarian */}
          <div>
            <h3
              className="text-3xl font-normal mb-6 italic inline-block pb-2"
              style={{
                fontFamily: 'var(--font-island-moments)',
                color: '#5D4E37'
              }}
            >
              Main Course - Non-Vegetarian
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridAutoRows: '1fr' }}>
              {/* Main Course Non-Veg Card 1 */}
              <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
                <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
                  <Image
                    src="/images/maincours/Goat-Curry-1.png"
                    alt="Main Course Non-Vegetarian"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="p-6 flex-1 overflow-auto custom-scrollbar">
                  {/* Goat */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Goat
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.mainCourseNonVeg.goat.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lamb */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Lamb
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.mainCourseNonVeg.lamb.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fish */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Fish
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.mainCourseNonVeg.fish.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Main Course Non-Veg Card 2 */}
              <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
                <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
                  <Image
                    src="/images/maincours/Creamy-Alfredo-1.png"
                    alt="Main Course Non-Vegetarian 2"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="p-6 flex-1 overflow-auto custom-scrollbar">
                  {/* Chicken */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Chicken
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.mainCourseNonVeg.chicken.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pasta */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Pasta
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.mainCourseNonVeg.pasta.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Others */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                      Others
                    </h4>
                    <ul className="space-y-1 pl-6">
                      {menuData.mainCourseNonVeg.others.map((item, index) => (
                        <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Items Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {/* Rice and Roti Card */}
          <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
            <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
              <Image
                src="/images/catering/catringlastrow/Biryani 1.png"
                alt="Rice and Roti"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="p-6 flex-1 overflow-auto custom-scrollbar">
              <div>
                <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                  Rice and Roti
                </h4>
                <ul className="space-y-1 pl-6">
                  {menuData.riceAndRoti.map((item, index) => (
                    <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SOUP Card */}
          <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
            <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
              <Image
                src="/images/catering/catringlastrow/Minestrone 1.png"
                alt="SOUP"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="p-6 flex-1 overflow-auto custom-scrollbar">
              <div>
                <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                  SOUP
                </h4>
                <ul className="space-y-1 pl-6">
                  {menuData.soup.map((item, index) => (
                    <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Drinks Card */}
          <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
            <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
              <Image
                src="/images/catering/catringlastrow/Mango-Shake-1.png"
                alt="Drinks"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="p-6 flex-1 overflow-auto custom-scrollbar">
              <div>
                <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                  Drinks
                </h4>
                <ul className="space-y-1 pl-6">
                  {menuData.drinks.map((item, index) => (
                    <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Dessert Card */}
          <div className="bg-white overflow-visible shadow-sm relative mt-32 flex flex-col" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', height: '700px' }}>
            <div className="relative w-[85%] h-[85%] -mt-32 mx-auto" style={{ position: 'absolute', height: '248px', width: '263px', left: 0, top: 0, right: '-21px', bottom: 0, color: 'transparent' }}>
              <Image
                src="/images/catering/catringlastrow/Gajar Halwa 1.png"
                alt="Dessert"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="p-6 flex-1 overflow-auto custom-scrollbar">
              <div>
                <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>
                  Dessert
                </h4>
                <ul className="space-y-1 pl-6">
                  {menuData.dessert.map((item, index) => (
                    <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
