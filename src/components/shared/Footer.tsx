import React from "react";
import { FaGithub, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-slate-200 flex items-center justify-evenly">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
      <div className="mt-10 mb-10 text-center lg:text-left">
        <h1 className="text-3xl font-bold">Daily News</h1>
        <p className="text-slate-800 font-sans">Building better digital experience for everyone</p><br /><br />
        <p>©2025 News_Iztihad_By_NextJS</p>
      </div>

      <div className="mt-10 mb-10">
        <nav>
          <ul className="grid lg:grid-cols-4 md:text-center grid-cols-1 gap-6">
            <li>About Us</li>
            <li>Service</li>
            <li>Conatact</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
      </div>

      <div className="mt-10 mb-10 flex flex-col items-center ">
        <div className="flex gap-5">
          <span><FaTwitter /></span>
          <span><FaInstagramSquare /></span>
          <span><FaGithub /></span>
        </div>
       <Button className="mt-10" variant={"outline"}>Subscribe</Button>
      </div>
    </div>
    </div>
  );
};

export default Footer;
