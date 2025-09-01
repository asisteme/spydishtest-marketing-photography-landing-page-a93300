import React from "react";
import Hero from "./components/Hero.jsx";
import Diners from "./components/Diners.jsx";
import Restaurants from "./components/Restaurants.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Diners />
      <Restaurants />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
