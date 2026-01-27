"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Moved outside to prevent re-creation on parent re-render
const AccordionHeader = ({
  title,
  sectionId,
  children,
  isExpanded,
  onToggle
}: {
  title: string;
  sectionId: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: (sectionId: string) => void;
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={() => onToggle(sectionId)}
        className="w-full flex items-center justify-between text-left group md:pointer-events-none"
      >
        <h4 className="text-lg font-semibold menu-heading" style={{ color: '#FF9900' }}>
          {title}
        </h4>
        <span className={`text-[#FF9900] transition-transform duration-300 md:hidden ${isExpanded ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 md:max-h-none md:mt-2 ${isExpanded ? 'max-h-[1000px] mt-2' : 'max-h-0'}`}>
        <ul className="space-y-1 pl-6">
          {children}
        </ul>
      </div>
    </div>
  );
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "30%" : "-30%",
    opacity: 0,
    scale: 0.98
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "30%" : "-30%",
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

// Moved outside to prevent state reset on parent re-render
const CateringSlider = ({ slides }: { slides: { title: string, content: React.ReactNode }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + (slides?.length || 1)) % (slides?.length || 1));
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-visible px-4">
      {/* Dynamic Title - Exactly 25px space on mobile */}
      <div className="text-center" style={{ marginBottom: '25px' }}>
        <motion.h3
          key={currentIndex}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-normal italic inline-block pb-1"
          style={{
            fontFamily: 'var(--font-island-moments)',
            color: '#5D4E37'
          }}
        >
          {slides[currentIndex].title}
        </motion.h3>
      </div>

      <div className="relative overflow-visible min-h-[460px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full relative z-10"
          >
            {slides[currentIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 shadow-lg text-[#FF9900] hover:bg-[#FF9900] hover:text-white transition-all cursor-pointer group"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 shadow-lg text-[#FF9900] hover:bg-[#FF9900] hover:text-white transition-all cursor-pointer group"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default function CateringMenu() {
  const [activeTab, setActiveTab] = useState("Veg");
  const categories = ["Veg", "Non-Veg"];
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    'veg-pakora': true,
    'veg-others': true,
    'nonveg-chicken': true,
    'nonveg-others-main': true,
    'main-veg-dal': true,
    'main-veg-others': true,
    'main-nonveg-goat': true,
    'main-nonveg-chicken-main': true,
    'm-rice': true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #FF9900; border-radius: 10px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #e68a00; }
    .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #FF9900 #f1f1f1; }
    .menu-heading { position: relative; padding-left: 25px; }
    .menu-heading::before {
      content: ''; position: absolute; left: -22px; top: 54%; transform: translateY(-50%);
      width: 40px; height: 2px; background-color: #FF9900;
    }
    .bg-white.overflow-visible.shadow-sm.relative.md\\:mt-32.flex.flex-col { padding-top: 24px; }
    @media (min-width: 768px) {
      .bg-white.overflow-visible.shadow-sm.relative.md\\:mt-32.flex.flex-col { padding-top: 118px; }
    }
  `;

  const menuData = {
    appetizersVeg: {
      pakora: ["Veg Pakora", "Paneer Pakora", "Gobi Pakora", "Mirch Pakora", "Aloo Finger", "Paneer Finger", "Bread Pakora", "Spring Roll"],
      paneer: ["Paneer Tikka - Traditional", "Paneer Tikka - Hariyali", "Chilli Paneer", "Malai Paneer Cubes"],
      liveStation: ["Tawa Tikki", "Pav Bhaji", "Nutri Kulcha", "Samosa Chaat", "Gol Gappa", "Chaat Papdi", "Taco and Burrito Bar", "Momos", "Chole Bhature and Aloo Puri"],
      others: ["Hara Bhara Kebab", "Corn Kebab", "Beetroot Tikki", "Stuffed Mushroom", "Chilli Mushroom", "Chaat Papdi", "Manchurian", "Chowmein", "Aloo Tikki", "Pav Bhaji", "Gol Gappa", "Hunny Gobi", "Sandwiches", "Veg Sliders", "Veg Momos - Tandoori and Chilli", "Soy Chaap - Tandoori and Malai", "Tandoori Tofu Tikka", "Dry Fruit Chaat", "Fruit Chaat", "Cocktail Samosa"]
    },
    appetizersNonVeg: {
      others: ["Hara Bhara Kebab", "Corn Kebab", "Beetroot Tikki", "Stuffed Mushroom", "Chilli Mushroom", "Chaat Papdi", "Manchurian", "Chowmein", "Aloo Tikki", "Pav Bhaji", "Gol Gappa", "Humy Gobi", "Sandwiches", "Veg Sliders", "Soy Chaap - Tandoori and Chilli", "Soy Chaap - Tandoori and Malai", "Tandoori Tofu Tikka", "Dry Fruit Chaat", "Fruit Chaat", "Cocktail Samosa"]
    },
    chicken: ["Tandoori Chicken", "Chicken Tikka", "Pesto Chicken", "Chicken Pakora", "Chilli Chicken", "Chicken Lollipop", "Chicken Nuggets", "Chicken 65", "Chicken Wings", "Seekh Kebab"],
    fish: ["Fish Tikka", "Fish Pakora", "Chilli Fish", "Fish Cake", "Fish Finger", "Tawa Fish"],
    othersNonVeg: ["Prawn Tikka", "Chilli Prawn", "Lamb Chops"],
    mainCourseVeg: {
      dal: ["Dal Makhani", "Dal Tadka", "KESARI Dal"],
      paneer: ["KESARI Paneer", "Shahi Paneer", "Paneer Makhani", "Paneer Butter Masala", "Matar Paneer", "Palak Paneer", "Karahi Paneer", "Palak Paneer"],
      mushroom: ["Makhana", "Do Pyaza", "Matar"],
      others: ["Palak Corn", "Chana Masala", "Malai Kofta", "Aloo Kofta", "Aloo Gobi", "Mix Vegetable", "Vegetable Korma", "Chana Masala", "Bhindi Masala", "Methi Malai Matar", "Jeera Aloo", "Beans", "Bhartha", "Khoya Matar", "Veg Korma", "Kadhi Pakora", "Rajmah", "Biryani"]
    },
    mainCourseNonVeg: {
      dal: ["Dal Makhani", "Dal Tadka", "KESARI Dal"],
      goat: ["Goat Curry", "Goat Korma", "Goat Rogan Josh", "Tawa Goat"],
      lamb: ["Palak (Spinach) Lamb", "Lamb Curry", "Lamb Korma", "Lamb Vindaloo", "Lamb Rogan Josh"],
      fish: ["Goan Fish Curry", "Punjabi Fish Curry"],
      chicken: ["Butter Chicken", "Kadai Chicken", "Chicken Curry", "Lahori Chicken Curry", "Cream Chicken", "Methi Chicken", "Palak Chicken", "Chicken Tikka Masala", "Thai Chicken Curry", "Palak (Spinach) Chicken", "Chicken Korma", "Chicken Vindaloo"],
      pasta: ["Creamy Alfredo", "Tomato Veggie Pasta"],
      others: ["Prawn Curry", "Biryani"]
    },
    riceAndRoti: ["Masir Pulao", "Brown Rice", "Jeera rice", "Biryani", "Malai roti", "Tandoori roti", "Naan", "Paratha", "Bhatura"],
    soup: ["Cream of Mushroom", "Minestrone", "French Onion", "Hot and Sour", "Roasted Pumpkin Soup", "Tom Yum", "Cream of Chicken", "Chicken Shorba", "Chicken Dal & Vegetables"],
    drinks: ["Chai", "Indian Coffee", "Tea with Steam Milk", "Juice", "Mango Lassi", "Milkshakes", "Mango Shake"],
    dessert: ["Moong Dal Halwa", "Gajar Halwa", "Kheer", "Hot Gulab Jamun", "Ice Cream", "Rasmalai", "Zarda Rice", "Sufiyan & Rasqul", "Shahi Tukda", "Kulfi Falooda", "Moong Dal Ka Halwa", "Fruit Cream", "Fruit Custard"],
    saladPicklesRaita: ["Pasta salad", "Potato Salad", "Bean Salad", "Indian salad", "Kachumber Salad", "Green Salad", "Gajar achaar", "Nimbu achaar", "Mango chutney", "Mixed Raita"],
    charcuteriePlatter: ["Hummus and Pita", "Spinach and Corn Dip with chips", "Fruit Platter", "Fruit Skewers", "Veggie Tray + Meat", "Charcuterie Board"]
  };

  // Reusable Cards
  const AppetizersVegCard1 = () => (
    <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
      <div className="relative w-[110%] h-[110%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
        <Image src="/images/catering/Appetizers - Veg1.png" alt="Appetizers" fill className="object-cover rounded-full" />
      </div>
      <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
        <AccordionHeader title="Pakora" sectionId="veg-pakora" isExpanded={expandedSections['veg-pakora']} onToggle={toggleSection}>
          {menuData.appetizersVeg.pakora.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
        <AccordionHeader title="Paneer" sectionId="veg-paneer" isExpanded={expandedSections['veg-paneer']} onToggle={toggleSection}>
          {menuData.appetizersVeg.paneer.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
        <AccordionHeader title="Live Station" sectionId="veg-live" isExpanded={expandedSections['veg-live']} onToggle={toggleSection}>
          {menuData.appetizersVeg.liveStation.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
      </div>
    </div>
  );

  const AppetizersVegCard2 = () => (
    <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
      <div className="relative w-[110%] h-[110%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
        <Image src="/images/catering/Appetizers - Veg2.png" alt="Appetizers Veg 2" fill className="object-cover rounded-full" />
      </div>
      <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
        <AccordionHeader title="Others" sectionId="veg-others" isExpanded={expandedSections['veg-others']} onToggle={toggleSection}>
          {menuData.appetizersVeg.others.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
      </div>
    </div>
  );

  const AppetizersNonVegCard1 = () => (
    <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
      <div className="relative w-[110%] h-[110%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
        <Image src="/images/catering/Appetizers - Non-Veg1.png" alt="Chicken" fill className="object-cover rounded-full" />
      </div>
      <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
        <AccordionHeader title="Chicken" sectionId="nonveg-chicken" isExpanded={expandedSections['nonveg-chicken']} onToggle={toggleSection}>
          {menuData.chicken.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
      </div>
    </div>
  );

  const AppetizersNonVegCard2 = () => (
    <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
      <div className="relative w-[110%] h-[110%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
        <Image src="/images/catering/Appetizers - Non-Veg2.png" alt="Others" fill className="object-cover rounded-full" />
      </div>
      <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
        <AccordionHeader title="Fish" sectionId="nonveg-fish" isExpanded={expandedSections['nonveg-fish']} onToggle={toggleSection}>
          {menuData.fish.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
        <AccordionHeader title="Others" sectionId="nonveg-others-small" isExpanded={expandedSections['nonveg-others-small']} onToggle={toggleSection}>
          {menuData.othersNonVeg.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
      </div>
    </div>
  );

  const MainVegCard1 = () => (
    <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
      <div className="relative w-[110%] h-[110%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
        <Image src="/images/maincours/Shahi-Paneer-1.png" alt="Main Course Vegetarian" fill className="object-cover rounded-full" />
      </div>
      <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
        <AccordionHeader title="Dal" sectionId="main-veg-dal" isExpanded={expandedSections['main-veg-dal']} onToggle={toggleSection}>
          {menuData.mainCourseVeg.dal.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
        <AccordionHeader title="Paneer" sectionId="main-veg-paneer" isExpanded={expandedSections['main-veg-paneer']} onToggle={toggleSection}>
          {menuData.mainCourseVeg.paneer.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
        <AccordionHeader title="Mushroom" sectionId="main-veg-mushroom" isExpanded={expandedSections['main-veg-mushroom']} onToggle={toggleSection}>
          {menuData.mainCourseVeg.mushroom.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
      </div>
    </div>
  );

  const MainVegCard2 = () => (
    <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
      <div className="relative w-[110%] h-[110%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
        <Image src="/images/maincours/Bhindi-Masala-1.png" alt="Main Course Vegetarian 2" fill className="object-cover rounded-full" />
      </div>
      <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
        <AccordionHeader title="Others" sectionId="main-veg-others" isExpanded={expandedSections['main-veg-others']} onToggle={toggleSection}>
          {menuData.mainCourseVeg.others.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
      </div>
    </div>
  );

  const MainNonVegCard1 = () => (
    <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
      <div className="relative w-[110%] h-[110%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
        <Image src="/images/maincours/Goat-Curry-1.png" alt="Main Course Non-Vegetarian" fill className="object-cover rounded-full" />
      </div>
      <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
        <AccordionHeader title="Goat" sectionId="main-nonveg-goat" isExpanded={expandedSections['main-nonveg-goat']} onToggle={toggleSection}>
          {menuData.mainCourseNonVeg.goat.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
        <AccordionHeader title="Lamb" sectionId="main-nonveg-lamb" isExpanded={expandedSections['main-nonveg-lamb']} onToggle={toggleSection}>
          {menuData.mainCourseNonVeg.lamb.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
        <AccordionHeader title="Fish" sectionId="main-nonveg-fish" isExpanded={expandedSections['main-nonveg-fish']} onToggle={toggleSection}>
          {menuData.mainCourseNonVeg.fish.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
      </div>
    </div>
  );

  const MainNonVegCard2 = () => (
    <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
      <div className="relative w-[110%] h-[110%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
        <Image src="/images/maincours/Creamy-Alfredo-1.png" alt="Main Course Non-Vegetarian 2" fill className="object-cover rounded-full" />
      </div>
      <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
        <AccordionHeader title="Chicken" sectionId="main-nonveg-chicken-main" isExpanded={expandedSections['main-nonveg-chicken-main']} onToggle={toggleSection}>
          {menuData.mainCourseNonVeg.chicken.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
        <AccordionHeader title="Pasta" sectionId="main-nonveg-pasta" isExpanded={expandedSections['main-nonveg-pasta']} onToggle={toggleSection}>
          {menuData.mainCourseNonVeg.pasta.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
        <AccordionHeader title="Others" sectionId="main-nonveg-others-main" isExpanded={expandedSections['main-nonveg-others-main']} onToggle={toggleSection}>
          {menuData.mainCourseNonVeg.others.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
        </AccordionHeader>
      </div>
    </div>
  );

  const AdditionalItemsRow = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
        <div className="relative w-[85%] h-[85%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
          <Image src="/images/catering/catringlastrow/Biryani 1.png" alt="Rice and Roti" fill className="object-cover rounded-full" />
        </div>
        <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
          <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>Rice and Roti</h4>
          <ul className="space-y-1 pl-6">
            {menuData.riceAndRoti.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
          </ul>
        </div>
      </div>
      {/* Soup */}
      <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
        <div className="relative w-[85%] h-[85%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
          <Image src="/images/catering/catringlastrow/Minestrone 1.png" alt="SOUP" fill className="object-cover rounded-full" />
        </div>
        <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
          <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>SOUP</h4>
          <ul className="space-y-1 pl-6">
            {menuData.soup.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
          </ul>
        </div>
      </div>
      {/* Drinks */}
      <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
        <div className="relative w-[85%] h-[85%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
          <Image src="/images/catering/catringlastrow/Mango-Shake-1.png" alt="Drinks" fill className="object-cover rounded-full" />
        </div>
        <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
          <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>Drinks</h4>
          <ul className="space-y-1 pl-6">
            {menuData.drinks.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
          </ul>
        </div>
      </div>
      {/* Dessert */}
      <div className="bg-white/60 md:bg-white overflow-visible shadow-sm relative md:mt-32 flex flex-col h-auto max-h-[450px] md:h-[700px] md:max-h-none" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
        <div className="relative w-[85%] h-[85%] -mt-32 mx-auto hidden md:block" style={{ position: 'absolute', height: '248px', width: '263px', left: '50%', transform: 'translateX(-50%)', top: 0, color: 'transparent' }}>
          <Image src="/images/catering/catringlastrow/Gajar Halwa 1.png" alt="Dessert" fill className="object-cover rounded-full" />
        </div>
        <div className="p-6 md:pt-6 flex-1 overflow-auto custom-scrollbar md:mt-20">
          <h4 className="text-lg font-semibold mb-2 menu-heading" style={{ color: '#FF9900' }}>Dessert</h4>
          <ul className="space-y-1 pl-6">
            {menuData.dessert.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-6 relative overflow-hidden" style={{ backgroundColor: '#F4F0EF' }}>
      <style>{scrollbarStyles}</style>

      {/* Mobile-Only Background Image - 25% Opacity */}
      <div className="absolute inset-0 z-0 md:hidden opacity-[0.25]">
        <Image
          src="/images/catering/Group 46.png"
          alt="Catering Background"
          fill
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 md:mb-12 relative">
          <div className="relative inline-block">
            <div className="absolute bg-[#FF9900]" style={{ width: '35px', height: '30px', top: '5px', left: '-45px', borderTopLeftRadius: '10px', borderBottomRightRadius: '10px' }} />
            <h2 className="text-4xl md:text-5xl font-normal text-black">Catering Menu</h2>
          </div>
        </div>

        {/* Mobile-Only Slider View */}
        <div className="md:hidden">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveTab(cat)} className={`text-lg font-medium transition-all ${activeTab === cat ? "text-[#FF9900]" : "text-[#5D4E37]"}`}>{cat}</button>
            ))}
          </div>

          <div className="mt-4">
            {activeTab === "Veg" ? (
              <CateringSlider
                slides={[
                  { title: "Appetizers - Veg", content: <AppetizersVegCard1 /> },
                  { title: "Appetizers - Veg", content: <AppetizersVegCard2 /> },
                  { title: "Main Course - Vegetarian", content: <MainVegCard1 /> },
                  { title: "Main Course - Vegetarian", content: <MainVegCard2 /> }
                ]}
              />
            ) : (
              <CateringSlider
                slides={[
                  { title: "Appetizers - Non-Veg", content: <AppetizersNonVegCard1 /> },
                  { title: "Appetizers - Non-Veg", content: <AppetizersNonVegCard2 /> },
                  { title: "Main Course - Non-Vegetarian", content: <MainNonVegCard1 /> },
                  { title: "Main Course - Non-Vegetarian", content: <MainNonVegCard2 /> },
                  {
                    title: "Additional Items", content: (
                      <div className="bg-white/60 overflow-visible shadow-sm relative flex flex-col h-auto max-h-[450px]" style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                        <div className="p-6 flex-1 overflow-auto custom-scrollbar">
                          <AccordionHeader title="Rice & Roti" sectionId="m-rice" isExpanded={expandedSections['m-rice']} onToggle={toggleSection}>
                            {menuData.riceAndRoti.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
                          </AccordionHeader>
                          <AccordionHeader title="Soup" sectionId="m-soup" isExpanded={expandedSections['m-soup']} onToggle={toggleSection}>
                            {menuData.soup.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
                          </AccordionHeader>
                          <AccordionHeader title="Drinks" sectionId="m-drinks" isExpanded={expandedSections['m-drinks']} onToggle={toggleSection}>
                            {menuData.drinks.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
                          </AccordionHeader>
                          <AccordionHeader title="Dessert" sectionId="m-dessert" isExpanded={expandedSections['m-dessert']} onToggle={toggleSection}>
                            {menuData.dessert.map((item, index) => <li key={index} style={{ fontSize: '14px', color: '#333' }}>{item}</li>)}
                          </AccordionHeader>
                        </div>
                      </div>
                    )
                  }
                ]}
              />
            )}
          </div>
        </div>

        {/* Desktop Layout - 4-Column Grid View */}
        <div className="hidden md:block">
          {/* Appetizers Section */}
          <div className="mb-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-8 px-4">
              <h3 className="lg:col-span-2 text-4xl font-normal italic inline-block pb-2 text-center" style={{ fontFamily: 'var(--font-island-moments)', color: '#5D4E37' }}>Appetizers - Veg</h3>
              <h3 className="lg:col-span-2 text-4xl font-normal italic inline-block pb-2 text-center" style={{ fontFamily: 'var(--font-island-moments)', color: '#5D4E37' }}>Appetizers - Non-Veg</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <AppetizersVegCard1 />
              <AppetizersVegCard2 />
              <AppetizersNonVegCard1 />
              <AppetizersNonVegCard2 />
            </div>
          </div>

          {/* Main Course Section */}
          <div className="mb-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-8 px-4">
              <h3 className="lg:col-span-2 text-4xl font-normal italic inline-block pb-2 text-center" style={{ fontFamily: 'var(--font-island-moments)', color: '#5D4E37' }}>Main Course - Vegetarian</h3>
              <h3 className="lg:col-span-2 text-4xl font-normal italic inline-block pb-2 text-center" style={{ fontFamily: 'var(--font-island-moments)', color: '#5D4E37' }}>Main Course - Non-Vegetarian</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <MainVegCard1 />
              <MainVegCard2 />
              <MainNonVegCard1 />
              <MainNonVegCard2 />
            </div>
          </div>

          {/* Additional Items Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-4xl font-normal italic inline-block pb-2" style={{ fontFamily: 'var(--font-island-moments)', color: '#5D4E37' }}>Additional Items</h3>
            </div>
            <AdditionalItemsRow />
          </div>
        </div>
      </div>
    </section>
  );
}
