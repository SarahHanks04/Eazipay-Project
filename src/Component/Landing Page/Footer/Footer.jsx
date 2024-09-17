import React from "react";
import EazipayFooter from "../../../assets/EazipayFooter.svg";
import { Link } from "react-router-dom";
import LinkedIn from "../../../assets/LinkedIn.svg";
import Facebook from "../../../assets/Facebook.svg";
import Twitter from "../../../assets/Twitter.svg";
import Instagram from "../../../assets/Instagram.svg";
import send from "../../../assets/send.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="w-full h-[1px] bg-[#EAEAEA] mt-11 mb-6"></div>
      <footer className="bg-white py-8 px-4 md:px-10 text-white">
        <div
          className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* COLUMN ONE */}
          <div className="text-center sm:text-left">
            <img
              src={EazipayFooter}
              alt="logo"
              className="mx-auto sm:mx-0 mb-4 text-[#292A29]"
            />
            <p className="text-[#7C7C7C] text-sm">
              Copyright &copy; {currentYear} Eazypay.
            </p>
            <p className="text-[#7C7C7C] text-sm pt-2">All right reserved</p>
            <div className="flex justify-center sm:justify-start space-x-4 pt-4">
              <img src={Instagram} alt="Instagram" />
              <img src={Twitter} alt="Twitter" />
              <img src={LinkedIn} alt="LinkedIn" />
              <img src={Facebook} alt="Facebook" />
            </div>
          </div>

          {/* COLUMN TWO */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 text-lg text-[#292A29]">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  Individual
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  Businesses
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  Request Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/prices"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN THREE */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 text-lg text-[#292A29]">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/contact-form"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN FOUR */}

          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 text-lg text-[#292A29]">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/contact-form"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  Customer Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN FIVE */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-[#292A29] mb-4 text-lg">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/contact-form"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  eazipay@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#7C7C7C] hover:underline hover:text-teal-600"
                >
                  +234 816 878 9518
                </Link>
              </li>
              <li className="relative">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="w-full p-2 pr-10 border rounded-full focus:outline-none focus:ring-1 focus:ring-[#11453B] placeholder:text-sm"
                />
                <span className="absolute inset-y-0 right-3 flex items-center">
                  <img src={send} alt="send" className="w-5 h-5" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
