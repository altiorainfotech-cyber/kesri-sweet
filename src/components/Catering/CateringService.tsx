import Image from "next/image";

export default function CateringService() {
    return (
        <section className="py-16 px-6 md:px-12 bg-[#E0DCDB]"> {/* Using a color close to the image background */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">

                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 relative">
                    <div className="relative w-full aspect-square md:aspect-[4/3]">
                        <Image
                            src="/images/catering/Group 46.png"
                            alt="Catering Services at Kesari Sweets"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 text-left">
                    <div className="relative inline-block mb-6">
                        <h2 className="text-3xl md:text-4xl lg:text-4xl text-black leading-tight relative z-10 font-normal">
                            Looking for the best catering
                            <br />
                            services in Surrey, BC?
                        </h2>
                        {/* Orange Accent Square */}
                        <div className="absolute top-0 right-0 -mr-6 -mt-2 w-10 h-10 bg-[#FF9900] z-0" style={{ borderTopLeftRadius: "15px", borderBottomRightRadius: "15px" }}></div>
                    </div>

                    <p className="text-black text-lg md:text-xl leading-relaxed font-normal">
                        At Kesari Sweets, we provide professional, flavour-rich catering for
                        weddings, birthdays, small events, and corporate gatherings. Whether
                        you&apos;re searching for catering near me in Surrey or planning a
                        special celebration, our team delivers food and service your guests
                        will remember.
                    </p>
                </div>
            </div>
        </section>
    );
}
