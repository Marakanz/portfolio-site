import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import Paddy from "../images/student-paddy.jpeg";

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="my-4 text-3xl md:text-5xl text-center text-teal-300 drop-shadow-lg font-bold ">
        {" "}
        Where I've worked
      </h1>
      <a href="https://www.studentpaddy.com" className="w-5/6 md:w-4/5">
        <div className=" flex flex-col-reverse md:flex-row justify-between shadow-lg hover:shadow-teal-300">
          <div className="md:w-3/5 p-6">
            <h1 className="text-2xl font-bold">
              {" "}
              Frontend Intern{" "}
              <b className="text-teal-300">
                <a href="https://www.studentpaddy.com">@Student Paddy</a>
              </b>
            </h1>
            <h2>Sept 2021 - Dec 2021</h2>
            <div className="my-5">
              <div className="flex mb-4">
                <div className="w-1/6 py-2 flex justify-end px-3">
                  <BsCaretRightFill className="font-2xl text-teal-300" />
                </div>
                <p className="w-5/6 md:text-lg">
                  Contributed to the design and development of the client-side
                  of the web application using Tailwind CSS, React.js and Redux
                  and assisted in the implementation and development of the chat
                  feature using Socket.io.
                </p>
              </div>

              <div className="flex mb-4">
                <div className="w-1/6 py-2 flex justify-end px-3">
                  <BsCaretRightFill className="font-2xl text-teal-300" />
                </div>
                <p className="w-5/6 md:text-lg">
                  Assisted in identifying and fixing
                  production issues throughout the full Software Development
                  Life Cycle (SDLC) of the product.
                </p>
              </div>

              <div className="flex">
                <div className="w-1/6 py-2 flex justify-end px-3">
                  <BsCaretRightFill className="font-2xl text-teal-300" />
                </div>
                <p className="w-5/6 md:text-lg">
                ● Integrated REST api’s from server
                  side to the client side.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-2/5 h-auto">
            <img
              src={Paddy}
              className="w-full h-full object-cover object-left-top"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Experience;
