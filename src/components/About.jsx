import React from "react";
import { motion } from "framer-motion";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full   grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl font-bold inline border-b-4 border-pink-600"
            >
              About
            </motion.p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px]  w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
            >
              As a self-taught software engineer, I have honed my
              problem-solving skills and gained experience in creating web apps
              with React JS
            </motion.p>
          </div>
          <div className="flex items-center">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-white px-6 py-3 border-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
            >
              {" "}
              <a href="https://drive.google.com/file/d/1Fe53FC6nKzDKCFDkxCg9Z39oNQqatGHu/view?usp=sharing">
                Resume
              </a>{" "}
              <HiArrowNarrowRight className="ml-3" />
            </motion.button>

            <p>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit Aspernatur quia nesciunt hic, recusandae quaerat sit. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
