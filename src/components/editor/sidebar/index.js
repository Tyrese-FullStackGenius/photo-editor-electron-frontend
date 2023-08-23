import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import Clock from "./clock";
import Cloth from "./cloth";
import Crop from "./crop";
import Mixer from "./mixer";
import Style from "./style";
import Photo from "./photo";

function App(props) {
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  return (
    <div className={`${props.className}`} style={{ ...props.style }}>
      {sidebarReducer.selectedTool === "clock" && (
        <Clock
          className={`${props.className}`}
          style={{ ...props.style, height: "calc(100% - 50px)" }}
        />
      )}
      {sidebarReducer.selectedTool === "style" && (
        <Style
          className={`${props.className}`}
          style={{ ...props.style, height: "calc(100% - 50px)" }}
        />
      )}
      {sidebarReducer.selectedTool === "cloth" && (
        <Cloth
          className={`${props.className}`}
          style={{ ...props.style, height: "calc(100% - 50px)" }}
        />
      )}
      {sidebarReducer.selectedTool === "crop" && (
        <Crop
          className={`${props.className}`}
          style={{ ...props.style, height: "calc(100% - 50px)" }}
        />
      )}
      {sidebarReducer.selectedTool === "mixer" && (
        <Mixer
          className={`${props.className}`}
          style={{ ...props.style, height: "calc(100% - 50px)" }}
        />
      )}
      {sidebarReducer.selectedTool === "photo" && (
        <Photo className={`${props.className}`} style={{ ...props.style }} />
      )}
      {sidebarReducer.selectedTool !== "crop" &&
        sidebarReducer.selectedTool !== "clock" && (
          <div className="flex p-[10px]">
            <button className="h-[30px] leading-[30px] bg-[#423D4C] w-full rounded-[5px]">
              123
            </button>
            <div className="w-[20px]" />
            <button className="h-[30px] leading-[30px] bg-[#423D4C] w-full rounded-[5px] flex">
              <div className="w-full h-full">123</div>
              <div className="w-[30px] h-full bg-[#393443] border-l border-[#524D5C] rounded-r-[5px]">
                <Icon
                  icon="mdi:hexagon-slice-6"
                  className="h-[20px] w-[20px] m-[5px]"
                />
              </div>
            </button>
          </div>
        )}
      {sidebarReducer.selectedTool === "crop" && (
        <div className="flex p-[10px]">
          <button className="h-[30px] leading-[30px] bg-[#423D4C] w-full rounded-[5px]">
            123
          </button>
          <div className="w-[20px]" />
          <button className="h-[30px] leading-[30px] bg-[#FFE24C] w-full rounded-[5px]">
            123
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
