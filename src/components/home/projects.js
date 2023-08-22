import React, { useState } from "react";
import ProjectCard from "./projectcard";

function Projects(props) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div>
      <div>
        <button
          className={`w-[100px] h-[30px] text-2xl cursor-pointer ${
            activeTab === "all" && "text-white"
          }`}
          onClick={() => setActiveTab("all")}
        >
          全部项目
        </button>
        <button
          className={`w-[100px] h-[30px] text-2xl cursor-pointer ${
            activeTab === "trash" && "text-white"
          }`}
          onClick={() => setActiveTab("trash")}
        >
          回收站
        </button>
      </div>
      <div
        className={`mt-[90px] grid grid-cols-3 gap-y-[30px] ${
          activeTab === "all" ? "block" : "hidden"
        }`}
      >
        <button className="w-[250px] h-[250px] hover:opacity-60 flex rounded-[5px] border-2">
          <p className="text-[128px] my-auto mx-auto"> + </p>
        </button>
        <ProjectCard
          name="person1"
          image="/assets/imgs/person1.jpg"
          update="08/21 01:07"
        />
        <ProjectCard
          name="person2"
          image="/assets/imgs/person2.jpg"
          update="08/22 22:32"
        />
        <ProjectCard
          name="person3"
          image="/assets/imgs/person3.jpg"
          update="08/23 12:21"
        />
      </div>
      <div
        className={`mt-[90px] grid grid-cols-3 gap-y-[30px] ${
          activeTab === "all" ? "hidden" : "block"
        }`}
      ></div>
    </div>
  );
}

export default Projects;
