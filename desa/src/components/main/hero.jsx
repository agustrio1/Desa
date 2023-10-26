import React from "react";

function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-auto"
          src="image/hero.jpeg"
          alt="hero"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white leading-tight sm:text-5xl md:text-6xl">
              Selamat Datang di Situs Kami
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Temukan informasi terbaru dan layanan kami.
            </p>
            <div className="mt-6">
              <a
                href="/kontak"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
