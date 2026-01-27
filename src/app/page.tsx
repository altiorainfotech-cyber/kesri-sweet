import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Dishes from "@/components/Dishes";
import Choose from "@/components/Choose";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Foodmenu from "@/components/foodmenu";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Foodmenu />
      <Dishes />
      <Testimonial />
      <Footer />
    </>
  );
}
