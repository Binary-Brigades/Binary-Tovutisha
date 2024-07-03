import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import LogoImg from "../../assets/tovutisha logo.png";

function Footer() {
  return (
    <section className="text-white bottom-0 relative bg-gradient-to-b from-[#000000] to-[#0f9b0f]" id="footer">
      <footer className="text-white py-8 relative pt-[160px] md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-4">
            <div>
              <img src={LogoImg} alt="Logo" className="mb-4 w-24 mx-auto md:mx-0" />
              <h1 className="text-xl font-semibold mb-2">Contact Us</h1>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white w-6 h-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>
                    <a href="tel:+254711201107" className="text-white">+254113198044</a>
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white w-6 h-6"
                  >
                    <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
                    <polyline points="15,9 18,9 18,11"></polyline>
                    <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
                    <line x1="6" x2="7" y1="10" y2="10"></line>
                  </svg>
                  <span className="truncate">
                    <a href="mailto:tovutisha@gmail.com" className="text-white">info@tovutisha.co.ke</a>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-4">
                <li><NavLink to="/" onClick={() => window.scrollTo(0, 0)} className="text-white">Home </NavLink></li>
                <li><NavLink to="/About Us" onClick={() => window.scrollTo(0, 0)} className="text-white">About Us </NavLink></li>
                <li><NavLink to="/Impacts and Insights" onClick={() => window.scrollTo(0, 0)} className="text-white">Impact and Insights</NavLink></li>
                <li><NavLink to="/Contacts" onClick={() => window.scrollTo(0, 0)} className="text-white">Contacts</NavLink></li>
                <li><NavLink to="/Donate" onClick={() => window.scrollTo(0, 0)} className="text-white">Donate</NavLink></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-4">Partner Links</h5>
      
              <ul className="space-y-4">
                <li><a href="https://www.mmust.ac.ke/" target="_blank" rel="noopener noreferrer">
                  <img src="/mmust.png" alt="Mmust" className="rounded-full object-cover text-white  " />
                </a> </li>
                <li> <a href="https://konza.go.ke/" target="_blank" rel="noopener noreferrer">
                  <img src="/konza.png" alt="Konza" className=" rounded-full object-cover text-white " />
                </a> </li>
                <li><a href="https://www.mmust.ac.ke/" target="_blank" rel="noopener noreferrer">
                  <img src="/mmust.png" alt="MmustIhub" className="rounded-full object-cover text-white  " />
                </a> </li>
                </ul>
                
              
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-6">Let's Connect</h5>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-2xl" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-6">Talk to Us</h5>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className=" border border-gray-300 rounded" />
                  <input type="email" placeholder="Email" className=" border border-gray-300 rounded" />
                </div>
                <textarea placeholder="Message" className="p-2 mt-4 w-full border border-gray-300 rounded" rows="4"></textarea>
                <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Send</button>
              </form>
            </div>
          </div>

          <div className="text-center mt-8">
            <p>2024 Tovutisha. All rights Reserved</p>
            <p className="text-sm text-white">Powered by MmustIhub</p>
          </div>
        </div>

        <div className="absolute flex items-center justify-center flex-col md:bottom-[100px] bottom-[120px] right-2">
          <div
            className="w-12 flex items-center justify-center shadow rounded-full shadow-black px-2 py-2 bg-[#2c3e9e] mx-12 animate-bounce"
            rel="ugc"
          >
            <HashLink to="#" smooth>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white w-8 h-8"
              >
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
            </HashLink>
          </div>
          <p className="font-bold">Back To Top </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
