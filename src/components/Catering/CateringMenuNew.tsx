"use client";

export default function CateringMenuNew() {
  // All menu data from CateringMenu.tsx
  const menuData = {
    appetizersVeg: {
      pakora: ["Veg Pakora", "Paneer Pakora", "Gobi Pakora", "Mirch Pakora", "Aloo Finger", "Paneer Finger", "Bread Pakora", "Spring Roll"],
      paneer: ["Paneer Tikka - Traditional", "Paneer Tikka - Hariyali", "Chilli Paneer", "Malai Paneer Cubes"],
      liveStation: ["Tawa Tikki", "Pav Bhaji", "Nutri Kulcha", "Samosa Chaat", "Gol Gappa", "Chaat Papdi", "Taco and Burrito Bar", "Momos", "Chole Bhature and Aloo Puri"],
      others: ["Hara Bhara Kebab", "Corn Kebab", "Beetroot Tikki", "Stuffed Mushroom", "Chilli Mushroom", "Chaat Papdi", "Manchurian", "Chowmein", "Aloo Tikki", "Pav Bhaji", "Gol Gappa", "Hunny Gobi", "Sandwiches", "Veg Sliders", "Veg Momos - Tandoori and Chilli", "Soy Chaap - Tandoori and Malai", "Tandoori Tofu Tikka", "Dry Fruit Chaat", "Fruit Chaat", "Cocktail Samosa"]
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

  // Helper function to render menu items in 3 columns
  const renderMenuGrid = (items: string[]) => {
    const columnSize = Math.ceil(items.length / 3);
    const columns = [
      items.slice(0, columnSize),
      items.slice(columnSize, columnSize * 2),
      items.slice(columnSize * 2)
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-2">
            {column.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center gap-3">
                <span
                  className="w-3 h-3 flex-shrink-0 border-2"
                  style={{ borderColor: '#FF9900', backgroundColor: 'transparent' }}
                ></span>
                <span className="text-sm md:text-base" style={{ color: '#333' }}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // Helper function to render subcategory section
  const renderSubcategory = (title: string, items: string[]) => (
    <div className="mb-6">
      <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#FF9900' }}>{title}</h3>
      {renderMenuGrid(items)}
    </div>
  );

  // Helper function to render section heading with underline
  const renderSectionHeading = (title: string) => (
    <div className="mb-8 md:mb-10">
      <h2
        className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-[0.15em]"
        style={{ color: '#FF9900' }}
      >
        {title}
      </h2>
      <div className="mt-3" style={{ width: '80px', height: '4px', backgroundColor: '#FF9900' }}></div>
    </div>
  );

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16" style={{ backgroundColor: '#f4f0ef' }}>
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="relative inline-block">
            <div className="absolute bg-[#FF9900]" style={{ width: '35px', height: '30px', top: '5px', left: '-45px', borderTopLeftRadius: '10px', borderBottomRightRadius: '10px' }} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black">Catering Menu</h1>
            <div className="mt-3 mx-auto" style={{ width: '80px', height: '4px', backgroundColor: '#FF9900' }}></div>
          </div>
        </div>

        {/* APPETIZERS (VEG) */}
        <div className="mb-12 md:mb-16">
          {renderSectionHeading("APPETIZERS (VEG)")}
          {renderSubcategory("Pakora", menuData.appetizersVeg.pakora)}
          {renderSubcategory("Paneer", menuData.appetizersVeg.paneer)}
          {renderSubcategory("Live Station", menuData.appetizersVeg.liveStation)}
          {renderSubcategory("Others", menuData.appetizersVeg.others)}
        </div>

        {/* APPETIZERS (NON-VEG) */}
        <div className="mb-12 md:mb-16">
          {renderSectionHeading("APPETIZERS (NON-VEG)")}
          {renderSubcategory("Chicken", menuData.chicken)}
          {renderSubcategory("Fish", menuData.fish)}
          {renderSubcategory("Others", menuData.othersNonVeg)}
        </div>

        {/* MAIN COURSE (VEG) */}
        <div className="mb-12 md:mb-16">
          {renderSectionHeading("MAIN COURSE (VEG)")}
          {renderSubcategory("Dal", menuData.mainCourseVeg.dal)}
          {renderSubcategory("Paneer", menuData.mainCourseVeg.paneer)}
          {renderSubcategory("Mushroom", menuData.mainCourseVeg.mushroom)}
          {renderSubcategory("Others", menuData.mainCourseVeg.others)}
        </div>

        {/* MAIN COURSE (NON-VEG) */}
        <div className="mb-12 md:mb-16">
          {renderSectionHeading("MAIN COURSE (NON-VEG)")}
          {renderSubcategory("Goat", menuData.mainCourseNonVeg.goat)}
          {renderSubcategory("Lamb", menuData.mainCourseNonVeg.lamb)}
          {renderSubcategory("Fish", menuData.mainCourseNonVeg.fish)}
          {renderSubcategory("Chicken", menuData.mainCourseNonVeg.chicken)}
          {renderSubcategory("Pasta", menuData.mainCourseNonVeg.pasta)}
          {renderSubcategory("Others", menuData.mainCourseNonVeg.others)}
        </div>

        {/* RICE & ROTI */}
        <div className="mb-12 md:mb-16">
          {renderSectionHeading("RICE & ROTI")}
          {renderMenuGrid(menuData.riceAndRoti)}
        </div>

        {/* SOUP */}
        <div className="mb-12 md:mb-16">
          {renderSectionHeading("SOUP")}
          {renderMenuGrid(menuData.soup)}
        </div>

        {/* DRINKS */}
        <div className="mb-12 md:mb-16">
          {renderSectionHeading("DRINKS")}
          {renderMenuGrid(menuData.drinks)}
        </div>

        {/* DESSERT */}
        <div className="mb-12 md:mb-16">
          {renderSectionHeading("DESSERT")}
          {renderMenuGrid(menuData.dessert)}
        </div>

        {/* SALAD, PICKLES & RAITA */}
        <div className="mb-12 md:mb-16">
          {renderSectionHeading("SALAD, PICKLES & RAITA")}
          {renderMenuGrid(menuData.saladPicklesRaita)}
        </div>

        {/* CHARCUTERIE PLATTER */}
        <div>
          {renderSectionHeading("CHARCUTERIE PLATTER")}
          {renderMenuGrid(menuData.charcuteriePlatter)}
        </div>

      </div>
    </section>
  );
}
