import { useLocation, useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import router from "../../routes";

const Component = () => {
  const navigate = useNavigate();
  const currentPath = useLocation()?.pathname;
  const routerPaths = router[0]["children"].map((route) => route["path"]);

  const goBack = () => {
    navigate(routerPaths[routerPaths.indexOf(currentPath) - 1]);
  };
  const closeSlide = () => console.log("closeSlide");

  return (
    <div className="flex justify-between w-full">
      <div className="float-left">
        <Icon
          icon="ri:home-line"
          className="w-[32px] h-[32px] m-[8px] text-white"
        />
      </div>
      <div>
        <button className="h-[48px] py-0 px-[16px] m-0">button2</button>
        <button className="h-[48px] py-0 px-[16px] m-0 bg-[#241F2E]">
          button3
        </button>
      </div>
      <div className="float-right flex">
        <button className="h-[32px] py-[4px] px-[16px] my-[8px] mx-[12px] bg-[#24281C]">
          button1
        </button>
        <Icon
          icon="mingcute:user-4-fill"
          className="w-[24px] h-[24px] m-[12px] text-[#494D41]"
        />
        <Icon
          icon="icon-park-twotone:handle-right"
          className="w-[24px] h-[24px] m-[12px] text-[#494D41]"
        />
        <button className="h-[32px] py-[4px] px-[16px] my-[8px] mx-[12px] bg-[#F0D244] text-black">
          button1
        </button>
        <Icon
          icon="material-symbols:menu"
          className="w-[24px] h-[24px] m-[12px] text-[#494D41]"
        />
        <Icon
          icon="fe:minus"
          className="w-[24px] h-[24px] m-[12px] text-[#494D41]"
        />
        <Icon
          icon="codicon:chrome-maximize"
          className="w-[24px] h-[24px] m-[12px] text-[#494D41]"
        />
        <Icon
          icon="material-symbols:close"
          className="w-[24px] h-[24px] m-[12px] text-[#494D41]"
        />
      </div>
    </div>
  );
};

export default Component;
