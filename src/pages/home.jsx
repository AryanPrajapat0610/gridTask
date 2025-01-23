import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Navbar from "../components/navbar"; // Corrected import
import Features from "../components/features";
import Contact from "../components/contactUs";
import HowItWorks from "../components/working";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
// Data for Features Section
const features = [
  {
    id: 1,
    title: "Real-Time Tracking",
    description: "Track buses in real-time with accurate GPS data.",
    img: "https://via.placeholder.com/400x300?text=Real-Time+Tracking",
  },
  {
    id: 2,
    title: "Estimated Arrival Times",
    description: "Get precise arrival times for better trip planning.",
    img: "https://via.placeholder.com/400x300?text=Arrival+Times",
  },
  {
    id: 3,
    title: "Route Information",
    description: "View detailed bus routes and stop details.",
    img: "https://via.placeholder.com/400x300?text=Route+Information",
  },
  {
    id: 4,
    title: "Notification Alerts",
    description: "Receive notifications for bus arrivals and delays.",
    img: "https://via.placeholder.com/400x300?text=Notification+Alerts",
  },
];

// Hero Section Component


// Features Section Component
const FeaturesSection = () => (
  <div className="bg-gray-100 py-16">
    <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
      Features of SAFAR
    </h2>
    <div className="max-w-6xl mx-auto space-y-16 px-4">
      {features.map((feature, index) => (
        <ScrollAnimation
          key={feature.id}
          animateIn={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
          duration={1.2}
        >
          <div
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </div>
);

// How It Works Section Component

// Contact Section Component
const ContactSection = () => (
  <div className="bg-gray-800 text-white py-16">
    <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
      Contact Us
    </h2>
    <form className="max-w-4xl mx-auto space-y-6">
      <div>
        <label className="block mb-2 text-sm">Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm">Your Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm">Your Message</label>
        <textarea
          rows="5"
          placeholder="Type your message here"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400"
        ></textarea>
      </div>
      <button className="bg-blue-600 px-6 py-3 rounded-lg text-white font-bold hover:bg-blue-500">
        Send Message
      </button>
    </form>
  </div>
);

// Main App Component
const Home = () => (
  <div className="">
    <Navbar /> {/* Navbar component added */}
    <HeroSection />
        <Features />
        {/* <About /> */}
    <HowItWorks />
  
    {/* <ContactSection /> */}
        {/* <Contact /> */}
        <Footer />
  </div>
);

export default Home;
