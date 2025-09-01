import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const data = [
    {
      name: "Emily R",
      role: "Food Blogger",
      quote:
        "SpyDishTest helped me discover hidden gems close to home that I never knew existed."
    },
    {
      name: "Chef Marco",
      role: "Restaurant Owner",
      quote:
        "The competitor pricing insights boosted our sales by allowing dynamic menu updates."
    },
    {
      name: "Sarah K",
      role: "Marketing Manager",
      quote:
        "AI campaigns increased diner engagement dramatically within the first month."
    }
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-3xl md:text-4xl">What People Say</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg">
          Trusted by diners and restaurants alike.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {data.map((t) => (
            <div
              key={t.name}
              className="relative rounded-lg bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <FaQuoteLeft
                className="absolute -top-4 -left-4 text-4xl text-brandPrimary opacity-10"
                aria-hidden="true"
              />
              <p className="mb-4 text-gray-700">“{t.quote}”</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
