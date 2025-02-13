import React from "react";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { MdDownloading } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "motion/react";
function Cards({ data, refer }) {
  return (
    <motion.div
      drag
      dragConstraints={refer}
      whileDrag={{scale: 1.2}}
        dragElastic={0.2}

      className=" relative w-60 h-72 bg-zinc-900/80 rounded-[20px] text-white px-8 py-9 overflow-hidden cursor-pointer"
    >
      <IoFileTrayFullOutline />
      <p className="mt-5 text-sm leading-tight font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full h-20">
        <div className="px-5 pb-3 flex justify-between items-center">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 cursor-pointer rounded-full flex justify-center items-center text-orange-300">
            {data.close ? <IoIosClose /> : <MdDownloading size="1rem" />}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag w-full h-14 ${
              data.tag.tagColor === "green" ? "bg-green-400" : "bg-red-400"
            } overflow-hidden`}
          >
            <h4 className="text-sm text-zinc-900 flex justify-center items-center py-3 font-semibold leading-tight">
              {data.tag.tagTitle}
            </h4>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Cards;
