import Image from "next/image";

export default function Wedding() {
    const services = [
        {
            title: "Wedding Catering Services in Surrey",
            description:
                "Make your special day unforgettable with elegant wedding catering. Our wedding catering services in Surrey include traditional Indian sweets, savoury dishes, and full-course vegetarian menus customized to your ceremony and reception.",
            image: "/images/Wedding/Mask group.png", // Start with this, assuming likely order or matching content to file names best effort
        },
        {
            title: "Birthday Catering Services in Surrey",
            description:
                "Planning a birthday party? Our birthday catering services in Surrey are perfect for kids' parties, milestone birthdays, and family celebrations—delicious food without the stress of cooking.",
            image: "/images/Wedding/image 33.png",
        },
        {
            title: "Small Event Catering in Surrey",
            description:
                "Hosting a house party, anniversary, or intimate gathering? Our small event catering services in Surrey are designed for flexibility, freshness, and flavour—ideal for events of any size.",
            image: "/images/Wedding/image 34.png",
        },
        {
            title: "Corporate & Office Catering",
            description:
                "Professional catering for meetings, staff hunches, and business events, delivered on time with consistent quality.",
            image: "/images/Wedding/image 35.png",
        },
    ];

    return (
        <section className="py-16 px-6 md:px-12 bg-[#E0DCDB]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
                {/* Left Side Content */}
                <div className="lg:w-1/2">
                    <div className="relative inline-block mb-6">
                        <h2 className="text-4xl md:text-5xl font-normal text-black leading-tight relative z-10">
                            Authentic Indian Catering
                            <br />
                            Services in Surrey, BC
                        </h2>
                        {/* Orange Accent - Top Left ish based on design */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF9900] rounded-tl-[15px] rounded-br-[15px] -z-0"></div>
                    </div>

                    <div className="space-y-6 text-black text-lg md:text-xl font-normal">
                        <p>
                            Kesari Sweets is a trusted name for Indian catering services in
                            Surrey and nearby areas. We combine traditional recipes, fresh
                            ingredients, and reliable service to make every event seamless and
                            stress-free.
                        </p>
                        <p>
                            From large celebrations to intimate gatherings, our catering
                            solutions are tailored to your needs, budget, and guest count.
                        </p>
                        <p className="font-medium">Our Catering Services in Surrey</p>
                    </div>
                </div>

                {/* Right Side Services List */}
                <div className="lg:w-1/2">
                    <h3 className="text-[#FF9900] text-xl md:text-2xl font-normal mb-8 leading-snug">
                        We proudly offer customized menus
                        <br />
                        for all occasions:
                    </h3>

                    <div className="space-y-10">
                        {services.map((service, index) => (
                            <div key={index} className="flex gap-6 items-start">
                                {/* Service Image */}
                                <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden shadow-sm">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Service Text */}
                                <div>
                                    <h4 className="text-xl font-normal text-black mb-2">
                                        {service.title}
                                    </h4>
                                    <p className="text-black text-sm leading-relaxed font-normal opacity-90">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
