import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lembagaOpen, setLembagaOpen] = useState(false);
  const [dusunOpen, setDusunOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setLembagaOpen(!lembagaOpen);
  };

  const toggleDusunMenu = () => {
    setDusunOpen(!dusunOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <h1 className="text-black font-semibold text-lg">DesaKu</h1>
        </a>
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2 w-10 h-10 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:block w-full md:w-auto`}
          id="navbar-default">
          {/* Menu desktop */}
          <ul className="hidden md:flex flex-row space-x-8">
            <li>
              <a href="/" className="text-gray-900 hover:text-blue-700">
                Beranda
              </a>
            </li>
            <div className="relative inline-block text-center">
              <button onClick={toggleDropdown} className="text-black">
                Lembaga
              </button>
              <div
                className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
                  lembagaOpen ? "block" : "hidden"
                }`}>
                <div className="py-1 bg-white rounded md">
                  <a
                    href="/bpd"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    BPD
                  </a>
                  <a
                    href="/pkk"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    PKK
                  </a>
                  <a
                    href="/kmpd"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    KMPD
                  </a>
                  <a
                    href="/lpmd"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    LPMD
                  </a>
                  <button
                    onClick={toggleDusunMenu}
                    className="mx-auto px-4 py-2 text-gray-800 hover:bg-blue-100">
                    Dusun
                  </button>
                  {dusunOpen && (
                    <ul className="py-1 bg-white rounded-md">
                      <li>
                        <a
                          href="/dusun/1"
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                          Dusun 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dusun/2"
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                          Dusun 2
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <li>
              <a href="/services" className="text-gray-900 hover:text-blue-700">
                Layanan
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-900 hover:text-blue-700">
                Kontak
              </a>
            </li>
          </ul>

          {/* Menu mobile */}
          <ul className="md:hidden flex flex-col mt-4">
            <li>
              <a href="/" className="text-gray-900 hover:text-blue-700">
                Beranda
              </a>
            </li>
            <div>
              <button onClick={toggleDropdown} className="text-black">
                Lembaga
              </button>
              <div
                className={`origin-top-left absolute left-7 mt-1 w-48 rounded-md shadow-lg ${
                  lembagaOpen ? "block" : "hidden"
                }`}>
                <div className="py-1 bg-white rounded md">
                  <a
                    href="/bpd"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    BPD
                  </a>
                  <a
                    href="/pkk"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    PKK
                  </a>
                  <a
                    href="/kmpd"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    KMPD
                  </a>
                  <a
                    href="/lpmd"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    LPMD
                  </a>
                </div>
              </div>
            </div>
            <li>
              <a href="/services" className="text-gray-900 hover:text-blue-700">
                Layanan
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-900 hover:text-blue-700">
                Kontak
              </a>
            </li>
            <li>
              <button
                onClick={toggleDusunMenu}
                className=" text-gray-800 hover:bg-blue-100">
                Dusun
              </button>
              {dusunOpen && (
                <ul className="py-1 bg-white rounded-md">
                  <li>
                    <a
                      href="/dusun/1"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                      Dusun 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dusun/2"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                      Dusun 2
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
