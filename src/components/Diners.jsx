import React from "react";
import { FaUtensils, FaStar, FaMapMarkerAlt } from "react-icons/fa";

export default function Diners() {
  const benefits = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-brandPrimary" />,
      title: "Explore Restaurants",
      desc: "Find dining spots that match your taste and location."
    },
    {
      icon: <FaUtensils className="text-3xl text-brandPrimary" />,
      title: "Discover Featured Dishes",
      desc: "Browse mouth-watering menus and chef specials."
    },
    {
      icon: <FaStar className="text-3xl text-brandPrimary" />,
      title: "Read Reviews",
      desc: "Access ratings and popularity analytics for specific dishes."
    }
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-3xl md:text-4xl">For Diners</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg">
          Enhance your dining experience with personalized recommendations and insights.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="mb-2 text-center text-xl font-semibold">{item.title}</h3>
              <p className="text-center text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <img
            src="https://images.pexels.com/photos/1183464/pexels-photo-1183464.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"
            alt="Chat with bot"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
