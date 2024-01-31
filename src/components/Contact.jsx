import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gray-50 flex items-center px-5 py-10 md:py-20 sm:px-6 lg:px-20"
    >
      <div className="flex flex-col gap-5 w-full">
        <div>
          <p className="text-lg md:text-xl uppercase text-center md:text-left font-bold text-blue-500">
            contact
          </p>
          <h3 className="text-2xl md:text-3xl text-center mb-5 md:mb-0 md:text-left font-bold text-zinc-800">
            Don't be shy! Hit me up! 👇
          </h3>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5 items-center md:gap-20">
          <div className="w-full flex items-center gap-3">
            <div className="p-3 shadow-lg rounded-full">
              <FaMapLocationDot className="text-blue-500" size={30} />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-xl">Location</h3>
              <p className="text-zinc-600 cursor-pointer text-sm md:text-base hover:text-blue-600">
                Delhi, India
              </p>
            </div>
          </div>

          <div className="w-full flex items-center gap-3">
            <div className="p-3 shadow-lg rounded-full">
              <MdEmail className="text-blue-500" size={30} />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-xl">Mail</h3>
              <p className="text-zinc-600 cursor-pointer text-sm md:text-base hover:text-blue-600">
                <a href="mailto:sk7399052@gmail.com">sk7399052@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
