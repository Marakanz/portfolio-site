import React from "react";
import photo from "../images/photo.jpeg";
import { FaNode, FaReact} from "react-icons/fa";
import MongoDb from "../images/mongodb-svgrepo-com.svg"
import Nodejs from "../images/node-js-svgrepo-com.svg"
import Express from "../images/express-svgrepo-com.svg";
import Html from "../images/html-svgrepo-com.svg";
import reactLogo from "../images/reactjs-svgrepo-com.svg";
import heroku from "../images/heroku-svgrepo-com.svg";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="w-4/5">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="md:w-3/5 md:mr-4">
            <h1 className="text-5xl text-blue-900 text-center m-6 font-bold drop-shadow-md">
              About me
            </h1>
            <p className="text-black text-xl mr-3 mb-4">
              I have experience in web
              development and i'm familiar with multiple programming languages
              like Javascript, Python, Java. Here are some of the technologies
              I've been working with:
            </p>
            <ul className="flex flex-wrap text-blue-900">
                <li className="logo-icon">
                    <img className="h-24 w-24" src={MongoDb}/>
                </li>
                <li className="logo-icon">
                    <img className="h-24 w-24" src={Nodejs}/>
                </li>
                <li className="logo-icon">
                    <img className="h-20  w-24" src={reactLogo}/>
                </li>
                <li className="logo-icon">
                    <img className="h-20 w-24" src={Express}/>
                </li>
                <li className="logo-icon">
                    <img className="h-20 w-24" src={heroku}/>
                </li>
                <li className="logo-icon">
                    <img className="h-20 w-24" src={Html}/>
                </li>
            </ul>
          </div>
          <div>
            <img src={photo} className="h-52 w-52  md:h-80 md:w-80 shadow-xl  rounded-full object-cover object-top" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
