import React, { useState } from "react";
import ProjectCard from "./projectcard";
import RecycleCard from "./recyclecard";
import { Icon } from "@iconify/react";
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";

function Projects(props) {
  const [activeTab, setActiveTab] = useState("all");

  const renderTooltip = (tooltipText) => (
    <Tooltip id="tooltip">{tooltipText}</Tooltip>
  );

  const [showNewProjectModal, setShowNewProjectModal] = useState(false);

  const handleNewProject = () => {
    setShowNewProjectModal(false);
  };

  const [showClearTrashModal, setShowClearTrashModal] = useState(false);

  const handleClearTrash = () => {
    setShowClearTrashModal(false);
  };

  const trashdata = [
    {
      name: "person3",
      image: "/assets/imgs/person3.jpg",
      remain: 30,
    },
  ];

  const projectsdata = [
    {
      name: "person1",
      image: "/assets/imgs/person1.jpg",
      update: "08/21 01:07",
    },
    {
      name: "person2",
      image: "/assets/imgs/person2.jpg",
      update: "08/22 22:32",
    },
    {
      name: "person3",
      image: "/assets/imgs/person3.jpg",
      remain: 30,
    },
  ];
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
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip(
            "回收站内的项目和图片最多保留30天, 之后将永久删除"
          )}
        >
          <button className="h-[15px]">
            <Icon icon="ph:question-fill" className="w-[15px] h-[15px]" />
          </button>
        </OverlayTrigger>
      </div>
      <div
        className={`fixed right-[10px] flex gap-[10px] ${
          activeTab === "all" ? "hidden" : "block"
        }`}
      >
        <p className="my-auto">共{trashdata.length}个项目</p>
        <button
          className="text-white bg-[#2b2f2f] px-[10px] py-[5px] hover:opacity-90 active:opacity-50 "
          onClick={() => setShowClearTrashModal(true)}
        >
          清空回收站
        </button>
      </div>
      <div
        className={`mt-[90px] grid grid-cols-3 gap-y-[30px] ${
          activeTab === "all" ? "block" : "hidden"
        }`}
      >
        <button
          className="w-[250px] h-[250px] hover:opacity-60 flex rounded-[5px] border-2"
          onClick={() => {
            setShowNewProjectModal(true);
          }}
        >
          <p className="text-[128px] my-auto mx-auto"> + </p>
        </button>
        {projectsdata.map((item, index) => (
          <ProjectCard
            name={item.name}
            image={item.image}
            update={item.update}
          />
        ))}
      </div>
      <Modal
        show={showNewProjectModal}
        onHide={() => {
          setShowNewProjectModal(false);
        }}
        centered
      >
        <div className="bg-[#000401] text-white">
          <div className="flex my-[15px]">
            <p className=" text-[25px] py-[10px] mx-auto ">创建新项目</p>
          </div>
          <div className="flex my-[15px]">
            <input className="text-[15px] py-[5px] px-[20px] mx-auto bg-[#2f242f] text-white w-[80%]"></input>
          </div>
          <div className="flex my-[15px]">
            <button
              className="text-black text-[20px] w-[60%] bg-[#ffff00] mx-auto opacity-90 hover:opacity-100 active:opacity-60"
              onClick={handleNewProject}
            >
              保存
            </button>
          </div>
        </div>
      </Modal>
      <div
        className={`mt-[90px] grid grid-cols-3 gap-y-[30px] ${
          activeTab === "all" ? "hidden" : "block"
        }`}
      >
        {trashdata.map((item, index) => (
          <RecycleCard
            name={item.name}
            image={item.image}
            remain={item.remain}
          />
        ))}
      </div>
      <Modal
        show={showClearTrashModal}
        onHide={() => {
          setShowClearTrashModal(false);
        }}
        centered
      >
        <div className="bg-[#000401] text-white">
          <div className="flex my-[15px]">
            <p className=" text-[25px] py-[10px] mx-auto ">是否清空回收站</p>
          </div>
          <div className="flex my-[15px]">
            <p className=" text-[20px] py-[10px] px-[30px] text-center mx-auto">
              清空回收站后将切蒂删除回收站内所有内容且不可还原，是否继续？
            </p>
          </div>

          <div className="flex my-[15px]">
            <button
              className="text-black text-[20px] w-[40%] bg-[#ffffff] mx-auto opacity-90 hover:opacity-100 active:opacity-60"
              onClick={() => {
                setShowClearTrashModal(false);
              }}
            >
              取消
            </button>
            <button
              className="text-black text-[20px] w-[40%] bg-[#ffff00] mx-auto opacity-90 hover:opacity-100 active:opacity-60"
              onClick={handleClearTrash}
            >
              确认
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Projects;
