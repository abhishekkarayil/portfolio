import React from "react";
import myPhoto from "../../assets/Images/Rectangle 31.webp";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import Footer from "../Footer/Footer";
import Headers from "../Header/Header";
import { MdOutlineArrowOutward } from "react-icons/md";

function About() {
  const socialItems = [
    { label: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
    { label: "X", link: "https://twitter.com", icon: <FaXTwitter /> },
    { label: "LinkedIn", link: "https://linkedin.com", icon: <FaLinkedinIn /> },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "LB.S.M.D College, Calicut University, Kerala",
      period: "08/2021 – 03/2024",
      location: "Kerala, India",
    },
    {
      degree: "Plus Two Computer Science",
      institution: "S N M H S School, Kerala Higher Secondary School Board",
      period: "06/2019 – 03/2021",
      location: "Kerala, India",
    },
  ];

  return (
    <>
      <Headers />

      <div className="min-h-screen bg-white mt-20 text-gray-800 px-5 sm:px-8 md:px-16 lg:px-50 py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-14">
          <div className="relative flex justify-center md:justify-start w-full md:w-auto">
            <img
              src={myPhoto}
              alt="Abhishek K"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-lg"
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
              <ul className="flex gap-3 text-white text-xs sm:text-sm md:text-base">
                {socialItems.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center hover:text-gray-300 transition"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col lg:flex-row sm:justify-between sm:items-center gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-[#535353]">
                My Story
              </h1>
              <div>
                <a
                  href="Resume/ABHISHEK-K-CV.pdf"
                  download
                  className="flex justify-center items-center gap-1 text-[#1E1E1E] bg-[#F5F5F5] px-3 py-2 rounded-full hover:bg-[#e1dddd] transition-all text-sm sm:text-base"
                >
                  View Resume <MdOutlineArrowOutward />
                </a>
              </div>
            </div>
            <p className="leading-relaxed mt-6 text-sm sm:text-base md:text-[17px]">
              I'm Abhishek K, an aspiring Front-End Developer with a background in
              healthcare operations and a growing passion for building clean,
              responsive, and user-focused web experiences. Skilled in HTML, CSS,
              JavaScript, and React.js, I enjoy crafting modern interfaces that
              combine creativity and performance.
            </p>
            <p className="leading-relaxed text-sm sm:text-base md:text-[17px] mt-3">
              I believe in learning by building — from creating an e-commerce
              frontend to developing personal portfolio projects, each step
              strengthens my ability to turn ideas into smooth digital experiences.
              I’m always eager to collaborate, solve real-world problems, and grow
              in the ever-evolving world of web development.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-6 mt-4">
          {[
            "My Expertise",
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Tailwind CSS",
            "Bootstrap",
          ].map((skill, index) => (
            <span
              key={index}
              className={`px-4 py-1.5 text-xs sm:text-sm md:text-base rounded-md shadow-sm ${
                index === 0
                  ? "bg-[#333] text-white hover:bg-[#4b4b4b] transition-all"
                  : "bg-[#F5F5F5] text-[#4B4B4B] border hover:bg-[#e8e5e5] border-gray-200"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>

       <div className="mt-16 sm:mt-20 text-center  ">
          <h2 className="text-lg sm:text-xl md:text-2xl text-[#535353] font-semibold justify-center items-center mb-8">
            My Learning Journey
          </h2>

          <div className="space-y-8 sm:space-y-10">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-8 text-gray-700"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">•</span>
                  <p className="text-[#535353] text-base sm:text-lg md:text-xl font-medium">
                    {edu.degree}
                  </p>
                </div>
                <div className="text-center md:text-right text-sm sm:text-base md:text-lg">
                  <p className="text-[#535353] font-medium">{edu.institution}</p>
                  <p className="text-[#535353]">{edu.period}</p>
                  <p className="text-sm text-[#535353]">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
