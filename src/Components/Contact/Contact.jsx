import React from "react";
import bgImage from "../../assets/Images/Group 17.webp"; 
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Contact() {
  const socialItems = [
      { label: 'Instagram', link: 'https://instagram.com', icon: <FaInstagram /> },
      { label: 'X', link: 'https://twitter.com', icon: <FaXTwitter /> },
      { label: 'LinkedIn', link: 'https://linkedin.com', icon: <FaLinkedinIn /> },
    ];

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", 
      }}
    >
      <div>
        <div className="px-50 ">
            <h1 className="text-4xl text-[#FFFFFF]">Get in Touch</h1>
            <p className="text-[#FFFFFF] mt-5 text-sm">Have a question, a project idea, or just want to say hello? I’m always happy to connect! Fill out the form below or reach me through email or social media, and I’ll get back to you as soon as possible.</p>
            <div className="flex text-[#FFFFFF] mt-7 gap-2.5 "><MdOutlineAttachEmail />abhishekkarayil@gmail.com</div>
            <div className="flex text-[#FFFFFF] mt-7 gap-2.5"><MdLocalPhone />+91 8281970249</div>

            <div className="text-[#FFFFFF]"><h3>Conect me With</h3>
            
            <ul className='flex gap-[9px]  mt-1 text-[6px] md:gap-5 lg:gap-10 md:text-base md:mt-1 text-[#FFFFFF] rounded-3xl'>
              {socialItems.map((social, index) => (
                <li key={index}>
                  <a href={social.link} target='_blank' rel='noreferrer' className='inline-flex items-center'>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
            </div>
         
        </div>
        <div>

        </div>
      </div>
    
  );
}

export default Contact;
