import React from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Image_Hero from "../assets/Image_Hero.png";
import Image_Guided from "../assets/Image_Guided.png";
import Image_Discover from "../assets/Image_Discover.png";
import Footer from "../Components/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Header */}
      <Navbar />
      <header className="bg-primaryWhite border-b">
        <h1 className="p-5 text-primaryBlack text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight">
          TRAIN HARD. <span className="text-primaryPurple">LIVE BETTER</span>
        </h1>
      </header>

      {/* Main Section */}
      <main>
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-primaryBg">
          <img
            src={Image_Hero}
            alt="Hero Image"
            className="md:col-span-2 w-full h-full object-cover"
          />

          <div className="px-5 md:pt-5 pb-6 md:pb-16 grid lg:gap-y-60">
            <h2 className="lg:text-5xl text-4xl font-bold">
              FOR THE COMMITTED
            </h2>
            <div className="">
              <p className="text-xl mb-4">
                Train like an athlete with top-tier equipment and expert
                programming. Whether you're building muscle or breaking PRs, we
                help you push past limits.
              </p>

              <button className="p-4 hover:bg-primaryBlack hover:text-primaryWhite rounded-xl text-lg" onClick={()=>{navigate("/about")}}>
                ABOUT US
              </button>
            </div>
          </div>
        </div>

        {/* Guidded by Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-primaryBg border-b">
          <div className="px-5 pt-5 pb-6 md:pb-16 border-b md:border-r grid lg:gap-y-80">
            <h2 className="lg:text-5xl text-4xl font-bold">GUIDED BY EXPERTS</h2>
            <p>
              We believe in creating a positive environment where you can
              thrive. We're here to help you achieve your goals and unlock your
              full potential.
            </p>
          </div>
          <div className="px-5 pt-5 pb-6 md:pb-16 grid lg:gap-y-80">
            <h2 className="lg:text-5xl text-4xl font-bold">DYNAMIC OPEN GYM</h2>
            <p>
              Our facility is the optimal environment for strength training and
              performance, fully equipped with top-of-the-line tools, ample
              training areas, and a focus on functional movement.
            </p>
          </div>
          <img
            src={Image_Guided}
            alt="Guiding Image"
            className="w-full h-full object-cover order-first md:order-last"
          />
        </div>

        {/* Join the Community headline Section */}
        <div className="bg-primaryWhite border-b">
          <h1 className="p-5 text-primaryBlack text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight">JOIN THE <span className="text-primaryPurple">COMMUNITY</span></h1>
        </div>

        {/* Discover Potential Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-primaryBg">
          <div className="flex flex-col ">
            <div className="lg:text-5xl text-4xl font-bold px-5 py-5 lg:py-10 border-b">DISCOVER YOUR POTENTIAL</div>
            <div className=" px-5 py-5 lg:py-10 border-b">
              <h3 className="lg:text-3xl text-2xl font-bold tracking-tight">EXPERT COACHING</h3>
              <p className="text-lg">Trainers who are passionate about your progress.</p>
            </div>
            <div className="px-5 py-5 lg:py-10 border-b">
              <h3 className="lg:text-3xl text-2xl font-bold tracking-tight">RESULTS-DRIVEN PROGRAMS</h3>
              <p className="text-lg">Workouts that deliver tangible, measurable results.</p>
            </div>
            <div className="px-5 py-5 lg:py-10 border-b">
              <h3 className="lg:text-3xl text-2xl font-bold tracking-tight">A SUPPORTIVE TRIBE</h3>
              <p className="text-lg">A community that pushes you to be your best.</p>
            </div>
            <div className="px-5 py-5 lg:py-10">
              <button className="px-4 py-3 hover:bg-primaryBlack hover:text-primaryWhite rounded-xl" onClick={()=>{navigate("/reserve")}}>VIEW CLASSES</button>
            </div>
          </div>
          <img src={Image_Discover} alt="Discover Potential" className="w-full h-full object-cover lg:col-span-2 order-first md:order-last" />
        </div>

        {/* Call to Action Section */}
        <div className="bg-primaryPurple px-7 md:px-16 py-28 h-[480px]">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <p className="text-lg">WHAT WE BELIEVE IN</p>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">JOIN THE PRIMAL TRIBE TODAY!</h3>
            <button className="px-4 py-3 bg-primaryBg text-primaryBlack hover:text-primaryWhite hover:bg-primaryBlack rounded-xl">RESERVE YOUR SPOT</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
