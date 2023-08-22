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
      {sidebarReducer.selectedTool === "clock" && (
        <Clock className={`${props.className}`} style={{ ...props.style }} />
      )}
      {sidebarReducer.selectedTool === "style" && (
        <Style className={`${props.className}`} style={{ ...props.style }} />
      )}
      {sidebarReducer.selectedTool === "cloth" && (
        <Cloth className={`${props.className}`} style={{ ...props.style }} />
      )}
      {sidebarReducer.selectedTool === "crop" && (
        <Crop className={`${props.className}`} style={{ ...props.style }} />
      )}
      {sidebarReducer.selectedTool === "mixer" && (
        <Mixer className={`${props.className}`} style={{ ...props.style }} />
      )}
      {sidebarReducer.selectedTool === "photo" && (
        <Photo className={`${props.className}`} style={{ ...props.style }} />
      )}
    </div>
  );
}

export default App;
