import React, { useState } from "react";

const Contact = () => {
    const [email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
  return (
    <div className="contact" id="contact">
      <h1 className="text-5xl font-bold drop-shadow-lg my-4 text-teal-300">
        Get in Touch
      </h1>
      <div className="w-3/5 shadow-xl contact-box py-4 flex flex-col justify-center items-center">
        <form className=" flex flex-col items-center w-4/5">
          <label className="text-lg font-bold mr-3">Email</label>
          <input
            className="w-full p-3 my-2 outline-none text-black rounded-full"
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-lg font-bold mr-3">Message</label>
          <input onChange={(e) => setMessage(e.target.value)} className="w-full text-black h-36 outline-none p-4 my-2 rounded-xl" type={"text"} />

          <button className="button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
