import React from "react";
import { useNavigate } from "react-router";

function ProjectCard(props) {
  const navigate = useNavigate();
  return (
    <button
      className="w-[250px] h-[250px] hover:opacity-60 rounded-[5px] border-2"
      onClick={() => navigate("/editor")}
    >
      <div
        className="h-[190px] bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="bg-[#241f2d] w-full h-[56px] flex">
        <div className="ml-[20px] my-auto">
          <p className="text-white text-left">{props.name}</p>
          <p className="text-left">更新时间：{props.update}</p>
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
