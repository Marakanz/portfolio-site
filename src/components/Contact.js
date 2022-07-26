import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="contact" id="contact">
      <h1 className="text-5xl font-bold drop-shadow-lg my-4 text-teal-300">
        Get in Touch
      </h1>
      <div className="w-4/5 md:w-3/5 shadow-xl contact-box py-4 flex flex-col justify-center items-center">
        <form className=" flex flex-col items-center w-4/5">
          <label className="text-lg font-bold mr-3">Email</label>
          <input
            className="w-full p-3 my-2 outline-none text-black rounded-full"
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-lg font-bold mr-3">Message</label>
          <textarea onChange={(e) => setMessage(e.target.value)}
            className="w-full text-black h-36 outline-none p-4 my-2 rounded-xl"
            type={"text"}/>

          <button className="button">Send Message</button>
        </form>
      </div>
      <div className="my-8 flex flex-col items-center justify-center">
        <div className="flex justify-center items-center mb-4">
          <a href="https://github.com/Marakanz">
            <FaGithub className="text-2xl text-gray-300 hover:text-teal-300 hover:text-3xl mx-3" />
          </a>
          <a href="https://www.linkedin.com/in/juwon-akande-0708a7172">
            <FaLinkedin className="text-2xl text-gray-300 hover:text-teal-300 hover:text-3xl mx-3" />
          </a>
          <a>
            <FaTwitter className="text-2xl text-gray-300 hover:text-teal-300 hover:text-3xl mx-3" />
          </a>
        </div>
        <p className="tracking-widest border-b border-gray-300 cursor-pointer hover:text-teal-300">juwonakande07@gmail.com</p>

      </div>
    </div>
  );
};

export default Contact;
