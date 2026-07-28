import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-8 text-center">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl font-bold">
          Sky<span className="text-olive-400">Mart</span>
        </h2>

        <p className="text-zinc-400 max-w-lg">
          Shop smarter with SkyMart. Quality products, secure shopping, and a
          seamless experience—all in one place.
        </p>

        <div className="flex gap-6 text-zinc-400 text-lg">
          <a href="#" className="hover:text-olive-400 transition-colors">
            <i className="ri-facebook-circle-fill"></i>
          </a>

          <a href="#" className="hover:text-olive-400 transition-colors">
            <i className="ri-instagram-line"></i>
          </a>

          <a href="#" className="hover:text-olive-400 transition-colors">
            <i className="ri-twitter-x-line"></i>
          </a>

          <a href="#" className="hover:text-olive-400 transition-colors">
            <i className="ri-linkedin-box-fill"></i>
          </a>

          <a href="#" className="hover:text-olive-400 transition-colors">
            <i className="ri-github-fill"></i>
          </a>
        </div>

        <p className="text-sm text-zinc-500 mt-2">
          © {new Date().getFullYear()} SkyMart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
