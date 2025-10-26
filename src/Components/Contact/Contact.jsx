import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import bgImage from "../../assets/Images/Group 17.webp";
import { MdOutlineAttachEmail, MdLocalPhone } from "react-icons/md";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const socialItems = [
    { label: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
    { label: "X", link: "https://twitter.com", icon: <FaXTwitter /> },
    { label: "LinkedIn", link: "https://linkedin.com", icon: <FaLinkedinIn /> },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: '', type: '' });

    emailjs
      .sendForm(
        'service_p95l769',    
        'template_zydt5bi',   
        form.current,
        'ljVT5Fm65R6C1q1UU'     
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setMessage({ text: 'Message sent successfully!', type: 'success' });
          setIsLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
          setIsLoading(false);
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="flex items-center justify-center min-h-screen w-full py-16 px-4 mt-25 sm:px-6 md:px-10 bg-cover bg-center overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between  mt-2  w-full max-w-6xl">
        
        <div className="text-white lg:space-y-20 space-y-8 text-center md:text-left md:w-1/2">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch  
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Have a question, a project idea, or just want to say hello? <br className="hidden md:block" />
              I'm always happy to connect! Fill out the form below or <br className="hidden md:block" />
              reach me through email or social media, and I'll get back to <br className="hidden md:block" />
              you as soon as possible.
            </p>
          </div>

          <div className="flex flex-col gap-7  items-center md:items-start">
            <div className="flex items-center gap-3 text-gray-200 text-sm sm:text-base">
              <MdOutlineAttachEmail className="text-xl" />
              <span>abhishekkarayil@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200 text-sm sm:text-base">
              <MdLocalPhone className="text-xl" />
              <span>+91 8281970249</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:items-start  gap-4 flex-col">
            <h3 className="text-gray-300 mb-3">Connect with Me</h3>
            <ul className="flex justify-center md:justify-start gap-6">
              {socialItems.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center text-white text-xl hover:text-gray-300 transition-colors"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl w-full mt-8 sm:w-[90%] md:w-[400px] lg:w-[480px] shadow-2xl p-6 sm:p-8 md:p-10 flex-shrink-0">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full px-5 py-3 bg-[#F5F5F5] rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full px-5 py-3 bg-[#F5F5F5] rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-5 py-3 bg-[#F5F5F5] rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full px-5 py-3 bg-[#F5F5F5] rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all resize-none"
            ></textarea>

            {message.text && (
              <div className={`text-sm text-center ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#4A4A4A] hover:bg-[#3c3c3c] text-white font-medium py-3 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Drop a Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
