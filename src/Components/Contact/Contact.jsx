import React from "react";
import bgImage from "../../assets/Images/Group 17.webp";
import { MdOutlineAttachEmail, MdLocalPhone } from "react-icons/md";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

function Contact() {
  const socialItems = [
    { label: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
    { label: "X", link: "https://twitter.com", icon: <FaXTwitter /> },
    { label: "LinkedIn", link: "https://linkedin.com", icon: <FaLinkedinIn /> },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="flex items-center justify-center py-16 px-4 sm:px-6 md:px-10"
    >
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-16 w-full max-w-6xl">
        
        {/* Left Section */}
        <div className="text-white space-y-8 text-center md:text-left md:w-1/2">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Have a question, a project idea, or just want to say hello? <br className="hidden md:block" />
              I'm always happy to connect! Fill out the form below or <br className="hidden md:block" />
              reach me through email or social media, and I'll get back to <br className="hidden md:block" />
              you as soon as possible.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex items-center gap-3 text-gray-200 text-sm sm:text-base">
              <MdOutlineAttachEmail className="text-xl" />
              <span>abhishekkarayil@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200 text-sm sm:text-base">
              <MdLocalPhone className="text-xl" />
              <span>+91 8281970249</span>
            </div>
          </div>

          <div>
            <h3 className="text-gray-300 mb-3">Connect with Me</h3>
            <ul className="flex justify-center md:justify-start gap-6">
              {socialItems.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center text-white text-2xl hover:text-gray-300 transition-colors"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      
        <div className="bg-white rounded-3xl w-full sm:w-[90%] md:w-[420px] lg:w-[480px] shadow-2xl p-6 sm:p-8 md:p-10 flex-shrink-0">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-3 bg-[#F5F5F5] rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 bg-[#F5F5F5] rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-5 py-3 bg-[#F5F5F5] rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-5 py-3 bg-[#F5F5F5] rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#4A4A4A] hover:bg-[#3c3c3c] text-white font-medium py-3 rounded-full transition-colors duration-300"
            >
              Drop a Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
