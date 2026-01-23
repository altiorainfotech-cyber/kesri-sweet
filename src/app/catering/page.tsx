

import HeaderOther from "@/components/HeaderOther";
import CateringService from "@/components/Catering/CateringService";
import WhyChoose from "@/components/Catering/WhyChoose";
import CateringMenu from "@/components/Catering/CateringMenu";
import BookCatering from "@/components/Catering/BookCatering";
import Wedding from "@/components/Catering/Wedding";
import Footer from "@/components/Footer";

export default function CateringPage() {
    return (
        <>
            <HeaderOther />
            <CateringService />
            <Wedding />
            <WhyChoose />
            <CateringMenu />
            <BookCatering />
            <Footer />
        </>
    );
}
