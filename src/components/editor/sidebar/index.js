import { useSelector } from "react-redux";
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
      {sidebarReducer.selectedTool === "clock" && <Clock />}
      {sidebarReducer.selectedTool === "style" && <Style />}
      {sidebarReducer.selectedTool === "cloth" && <Cloth />}
      {sidebarReducer.selectedTool === "crop" && <Crop />}
      {sidebarReducer.selectedTool === "mixer" && <Mixer />}
      {sidebarReducer.selectedTool === "photo" && <Photo />}
    </div>
  );
}

export default App;
