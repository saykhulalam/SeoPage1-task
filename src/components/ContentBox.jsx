import React from "react";
import ImageOne from "../assets/Image-1.png";
import ImageTow from "../assets/Image-2.png";
import bottomImgOne from "../assets/bottomImgOne.png";
import bottomImgTow from "../assets/bottomImgTow.png";
import Image from "./Image";
import { IoIosApps } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { FaRegCalendarDays } from "react-icons/fa6";

const ContentBox = () => {
  return (
    <div className="h-[129px] bg-white px-2 rounded-[5px] py-2 pb-1">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image src={ImageOne} alt="image 1" className="w-[30px]" />
          <h2 className="text-[14px] text-gray-700 font-semibold">
            Client Name
          </h2>
        </div>
        <div className="flex items-center gap-1">
          <Image src={ImageTow} alt="image 1" className="w-[30px]" />
          <h2 className="text-[14px] text-gray-700 font-semibold">
            Sadik Istiak
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className=" flex items-center gap-1">
          <IoIosApps className="text-[20px] text-gray-700 " />
          <p className="text-[13px] text-gray-700 font-normal ">
            Lorem ipsum dolor sit amet curn..
          </p>
        </div>
        <div className=" w-[50px] bg-slate-200 flex items-center gap-1 justify-center rounded-[5px] py-1">
          <FaClipboardList className="text-[15px] text-gray-700" />
          <p className="text-[13px] text-gray-700 font-bold">1/2</p>
        </div>
      </div>
      <div className=" flex items-center justify-between flex-wrap mt-2 pb-2">
        <Image src={bottomImgOne} alt="image 1" className="w-[30px]" />
        <Image src={bottomImgTow} alt="image 1" className="w-[30px]" />
        <div className=" w-[30px] h-[30px] rounded-full bg-slate-200 flex items-center justify-center">
          <p className="text-[13px] text-gray-700 font-bold">12+</p>
        </div>
        <div className="flex items-center gap-[2px]">
          <FaRegComments className="text-[20px] text-gray-700" />
          <p className="text-[13px] text-gray-700 font-bold">15</p>
        </div>
        <div className="flex items-center gap-[2px]">
          <GrAttachment className="text-[18px] text-gray-700" />
          <p className="text-[13px] text-gray-700 font-bold">25</p>
        </div>
        <div className="flex items-center gap-[4px]">
          <FaRegCalendarDays className="text-[17px] text-gray-700" />
          <p className="text-[13px] text-gray-700 font-bold">30-12-2022</p>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
