import React from "react";
import { BsCaretRightFill } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="my-4 text-3xl md:text-5xl text-center text-teal-300 drop-shadow-lg font-bold ">
        {" "}
        Where I've worked
      </h1>
      <div className="w-5/6 md:w-3/5 p-6">
        <h1 className="text-2xl font-bold">
          {" "}
          Frontend Intern <b className="text-teal-300"><a href="https://www.studentpaddy.com">@Student Paddy</a></b>
        </h1>
        <h2>Sept 2021 - Dec 2021</h2>
        <div className="my-5">
          <div className="flex mb-4">
            <div className="w-1/6 py-2 flex justify-end px-3">
              <BsCaretRightFill className="font-2xl text-teal-300" />
            </div>
            <p className="w-5/6 text-lg">
              Worked with a cross functional team in an agile environment the product development, and the analysis and diagnosing of production issues.
            </p>
          </div>

          <div className="flex">
            <div className="w-1/6 py-2 flex justify-end px-3">
              <BsCaretRightFill className="font-2xl text-teal-300" />
            </div>
            <p className="w-5/6 text-lg">
              Contributed to design and development of the web application using React, Redux, TailwindCSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
