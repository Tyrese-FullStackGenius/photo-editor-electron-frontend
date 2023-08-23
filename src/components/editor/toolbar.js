import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { shopSelect } from "../../redux/actions/sidebarAction";

function App(props) {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  return (
    <div
      className={`${props.className} flex flex-col`}
      style={{ ...props.style }}
    >
      <button
        className={`w-full h-[50px] hover:bg-[#494453] ${
          sidebarReducer.selectedTool === "mixer" && "bg-[#494453]"
        }`}
        onClick={() => dispatch(shopSelect("mixer"))}
      >
        <Icon
          icon="radix-icons:mixer-horizontal"
          className="w-[20px] h-[20px] m-[15px]"
        />
      </button>
      <button
        className={`w-full h-[50px] hover:bg-[#494453] ${
          sidebarReducer.selectedTool === "style" && "bg-[#494453]"
        }`}
        onClick={() => dispatch(shopSelect("style"))}
      >
        <Icon icon="bx:face" className="w-[20px] h-[20px] m-[15px]" />
      </button>
      <button
        className={`w-full h-[50px] hover:bg-[#494453] ${
          sidebarReducer.selectedTool === "photo" && "bg-[#494453]"
        }`}
        onClick={() => dispatch(shopSelect("photo"))}
      >
        <Icon icon="heroicons:photo" className="w-[20px] h-[20px] m-[15px]" />
      </button>
      <button
        className={`w-full h-[50px] hover:bg-[#494453] ${
          sidebarReducer.selectedTool === "cloth" && "bg-[#494453]"
        }`}
        onClick={() => dispatch(shopSelect("cloth"))}
      >
        <Icon
          icon="icon-park-outline:clothes-sweater"
          className="w-[20px] h-[20px] m-[15px]"
        />
      </button>
      <button
        className={`w-full h-[50px] hover:bg-[#494453] ${
          sidebarReducer.selectedTool === "crop" && "bg-[#494453]"
        }`}
        onClick={() => dispatch(shopSelect("crop"))}
      >
        <Icon
          icon="material-symbols:crop-sharp"
          className="w-[20px] h-[20px] m-[15px]"
        />
      </button>
      <button
        className={`w-full h-[50px] hover:bg-[#494453] ${
          sidebarReducer.selectedTool === "clock" && "bg-[#494453]"
        }`}
        onClick={() => dispatch(shopSelect("clock"))}
      >
        <Icon icon="mdi:clock-outline" className="w-[20px] h-[20px] m-[15px]" />
      </button>
      <Icon icon="ph:minus-thin" className="w-[30px] h-[30px] mx-[10px]" />
      <button className="w-full h-[50px] hover:bg-[#494453]">
        <Icon icon="ic:baseline-plus" className="w-[30px] h-[30px] m-[10px]" />
      </button>
    </div>
  );
}

export default App;
