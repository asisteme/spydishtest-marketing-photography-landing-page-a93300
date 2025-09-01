import React from "react";
import { FaChartBar, FaBell, FaMailBulk } from "react-icons/fa";

export default function Restaurants() {
  const features = [
    {
      icon: <FaChartBar className="text-3xl text-brandPrimary" />,
      title: "Pro Plan & Analysis",
      desc:
        "Competitor pricing, dish ranking and diner interest heatmaps in real time."
    },
    {
      icon: <FaBell className="text-3xl text-brandPrimary" />,
      title: "AI Notifications",
      desc:
        "Smart recommendations and price adjustments based on demand and sentiment."
    },
    {
      icon: <FaMailBulk className="text-3xl text-brandPrimary" />,
      title: "Weekly Executive Reports",
      desc:
        "Stay updated with competitor moves, reviews and key trends directly in your inbox."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-3xl md:text-4xl">For Restaurants</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg">
          Transform decision making with powerful data and AI driven marketing tools.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="mb-2 text-center text-xl font-semibold">{f.title}</h3>
              <p className="text-center text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-brandPrimary px-8 py-4 text-lg font-semibold text-white transition hover:bg-brandPrimary/90"
          >
            Subscribe to Pro Plan
          </a>
        </div>
      </div>
    </section>
  );
}
