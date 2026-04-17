import Footer from "@/components/Footer";
import ContactUs from "@/components/home/ContactUs";
import FashionStories from "@/components/home/FashionStories";
import Hero from "@/components/home/Hero";
import Home3 from "@/components/home/Home3";
import Home5 from "@/components/home/Home5";
import Home6 from "@/components/home/Home6";
import IconMarquee from "@/components/home/IconMarquee";
import IconMarquee2 from "@/components/home/IconMarquee2";
import Map from "@/components/home/Map";

export default function Home() {
  return (
    <>
     <Hero/> 
     <Map/>   
     <Home3/>
     <IconMarquee/>
     <Home5/>
     <Home6/>
     <IconMarquee2/>
     <FashionStories/>
     <ContactUs/>
     <Footer/>
    </>
  );
}
