import React from "react";
import Image_Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full overflow-x-hidden">
      <div className="grid gap-16 md:gap-32 px-5 py-10">
        {/* Footer Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <img
            src={Image_Logo}
            alt="Logo"
            className="w-40 sm:w-56 h-24 sm:h-32 object-cover"
          />

          <p className="text-primaryBlack text-4xl sm:text-5xl md:text-6xl font-bold break-words">
            PrimalTraining
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start min-w-0">
          {/* Contact */}
          <div className="min-w-0">
            <p className="text-2xl font-bold mb-2">CONTACT</p>
            <div className="space-y-1">
              <div className="flex flex-wrap gap-1 font-medium min-w-0">
                <p>Email:</p>
                <p className="break-all">primaltraining@gmail.com</p>
              </div>
              <div className="flex flex-wrap gap-1 font-medium">
                <p>Phone:</p>
                <p>+91-9001122334</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="min-w-0">
            <p className="text-2xl font-bold mb-2">OPENING HOURS</p>
            <ul className="space-y-1">
              <li className="flex  gap-6 font-medium">
                <p className="w-40">Monday - Friday</p>
                <p>5:00 - 23:00</p>
              </li>

              <li className="flex gap-6 font-medium">
                <p className="w-40">Saturday</p>
                <p>8:00 - 16:00</p>
              </li>

              <li className="flex gap-6 font-medium">
                <p className="w-40">Sunday</p>
                <p>8:00 - 13:00</p>
              </li>

              <li className="flex gap-6 font-medium">
                <p className="w-40">Holidays</p>
                <p>Closed</p>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="min-w-0">
            <p className="text-2xl font-bold mb-2">SOCIAL</p>
            <div className="flex flex-col gap-1">
              <a href="#" className="font-medium">
                Instagram
              </a>
              <a href="#" className="font-medium">
                X
              </a>
              <a href="#" className="font-medium">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
