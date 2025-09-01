import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const social = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" }
  ];

  return (
    <footer className="bg-gray-900 py-8 text-center text-white">
      <div className="mb-4 flex justify-center gap-6">
        {social.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl transition hover:text-brandPrimary"
          >
            {s.icon}
          </a>
        ))}
      </div>
      <p className="text-sm">© {new Date().getFullYear()} SpyDishTest. All rights reserved.</p>
    </footer>
  );
}
