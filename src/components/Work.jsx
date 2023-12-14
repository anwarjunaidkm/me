import React from "react";
import event3 from "../assets/event3.PNG";
import adminnext from "../assets/admin-nextui.png";
import elite from "../assets/elite.png";
import foudyy from "../assets/foudyy.png";
import certy from "../assets/certy.PNG";
import port3 from "../assets/port3.PNG";
import password from "../assets/password.png";
import qoute from "../assets/qoute.png";
import { motion } from "framer-motion";

function Work() {
  return (
    <div
      name="work"
      className=" md:h-screen w-full bg-[#0a192f] pt-96 sm:pt-48 lg:pt-40  text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-8">
          <p className="text-4xl font-bold inline  border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">check out some of my recent work</p>
        </div>
        {/* single card container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* //spacefic */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ backgroundImage: `url(${foudyy}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://www.foudyy.com/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/anwarjunaidkm/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ backgroundImage: `url(${elite}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://elite-mission.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/anwarjunaidkm/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ backgroundImage: `url(${adminnext}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://foudyy-admin-next-ui.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/anwarjunaidkm/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ backgroundImage: `url(${event3}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://eventtyy.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/anwarjunaidkm/event-management.git">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ backgroundImage: `url(${certy}` }}
            viewport={{ once: true }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/anwarjunaidkm/cms-certificate-generator.git">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ backgroundImage: `url(${port3}` }}
            viewport={{ once: true }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/anwarjunaidkm/me.git">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ backgroundImage: `url(${qoute}` }}
            viewport={{ once: true }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Quote Generator
              </span>
              <div className="pt-8 text-center ">
                <a href="https://just-random-quote.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/anwarjunaidkm/Random-Quote-Generator.git">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            style={{ backgroundImage: `url(${password}` }}
            viewport={{ once: true }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Password Generator
              </span>
              <div className="pt-8 text-center ">
                <a href="https://password-random-gen.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/anwarjunaidkm/Password-random.git">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Work;
