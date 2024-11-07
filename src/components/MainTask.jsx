import React from "react";
import CardName from "./CardName";
import ContentBox from "./ContentBox";

const mainSections = [
  { name: "Incomplete", bgColor: "bg-red-500" },
  { name: "To Do", bgColor: "bg-sky-400" },
  { name: "Doing", bgColor: "bg-amber-300" },
  { name: "Under Review", bgColor: "bg-slate-200" },
  { name: "Incomplete", bgColor: "bg-red-500" },
  { name: "To Do", bgColor: "bg-sky-400" },
  { name: "Doing", bgColor: "bg-amber-300" },
  { name: "Under Review", bgColor: "bg-slate-200" },
  { name: "Incomplete", bgColor: "bg-red-500" },
  { name: "To Do", bgColor: "bg-sky-400" },
  { name: "Doing", bgColor: "bg-amber-300" },
  { name: "Under Review", bgColor: "bg-slate-200" },
  // You can add more sections here as needed
];

const MainTask = () => {
  return (
    <div className="flex overflow-x-scroll scroolbarTow">
      {mainSections.map((section, index) => (
        <div key={index} className="main">
          <CardName name={section.name} className={section.bgColor} />
          <div className="w-[339px] h-[892px] bg-slate-200 ml-5 mb-10 px-2 overflow-y-scroll custom-scrollbar flex flex-col gap-4">
            {Array.from({ length: 15 }, (_, idx) => (
              <ContentBox key={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainTask;
