import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600')"
      }}
    >
      <div className="absolute inset-0 bg-brandFigure/60"></div>

      <div className="relative z-10 mx-6 max-w-4xl text-center text-white">
        <img
          src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png"
          alt="SpyDishTest logo"
          className="mx-auto mb-6 h-20 w-20 object-contain"
        />
        <h1 className="mb-4 text-4xl md:text-5xl">
          SpyDishTest
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
          An intelligent WhatsApp bot connecting diners and restaurants with AI powered insights.
        </p>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-brandPrimary px-6 py-3 text-lg font-semibold text-white transition hover:bg-brandPrimary/90"
        >
          <FaWhatsapp className="text-2xl" />
          Start Now
        </a>
      </div>
    </section>
  );
}
