import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About_Header from "../assets/Image_About_Header.png";
import About_Dynamic_Open_Gym from "../assets/Image_About_Dynamic.png";
import Recont_section from "../assets/Reconnect_section1.png";

const About = () => {
  return (
    <div>
      {/* Header */}
      <Navbar />
      <header className="bg-primaryWhite border-b">
        <h1 className="p-5 text-primaryBlack text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight">
          ABOUT US
        </h1>
      </header>

      <main>
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-primaryPurple">
          <div className="md:col-span-2 lg:col-span-2 px-5 pt-5 pb-6 md:pb-16 flex flex-col justify-between ">
            <h2 className="lg:text-5xl text-4xl font-bold">
              TAP INTO YOUR PRIMAL POWER. FORGE A STRONGER YOU.
            </h2>
            <div>
              <h5 className="text-xl font-bold mb-2">OUR VISION</h5>
              <p className="text-lg">
                Primal Training is committed to delivering a training experience
                rooted in raw strength, functional fitness, and unwavering
                community support. We empower our members to tap into their
                primal power, achieve their goals, and live a life of strength,
                resilience, and unwavering determination.
              </p>
            </div>
          </div>
          <img
            src={About_Header}
            alt="About Header"
            className="w-full h-full object-cover order-first md:order-last"
          />
        </div>

        {/* Dynamic Open Gym Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-primaryBg">
          <img
            src={About_Dynamic_Open_Gym}
            alt="About Dynamic Open Gym"
            className="w-full h-full object-cover md:col-span-1 lg:col-span-2 order-first "
          />
          <div className="px-5 pt-5 pb-6 md:pb-16 flex flex-col justify-between">
            <h2 className="lg:text-5xl text-4xl font-bold">DYNAMIC OPEN GYM</h2>
            <div className="">
              <p className="text-lg">
                At Primal Training, we strip away the fluff and focus on the
                fundamentals. Our expert coaches guide you through intense,
                functional workouts designed to build raw strength, resilience,
                and a body capable of anything.
              </p>
            </div>
          </div>
        </div>

        {/* Reconnect Section */}
        <div className="relative">
          <img
            src={Recont_section}
            alt="Reconnect Section"
            className="w-full h-[400px] md:h-full object-cover"
          />
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-primaryWhite font-bold absolute bottom-5 left-5 max-w-xs md:max-w-md lg:max-w-2xl">
            WE'VE CREATED A SPACE WHERE YOU CAN RECONNECT WITH YOUR PRIMAL SELF.
          </h2>
        </div>

        {/* Call to action Section */}
        <div className="bg-primaryBg px-7 md:px-16 py-28 h-[480px] border-b">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <p className="text-lg">WHAT WE BELIEVE IN</p>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
              JOIN THE PRIMAL TRIBE TODAY!
            </h3>
            <button className="px-4 py-3 bg-primaryPurple text-primaryBlack hover:text-primaryWhite hover:bg-primaryBlack rounded-xl">
              RESERVE YOUR SPORT
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
