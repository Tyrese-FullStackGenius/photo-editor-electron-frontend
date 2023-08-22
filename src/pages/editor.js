import Toolbar from "../components/editor/toolbar";
import ImageLib from "../components/editor/imagelib";
import Sidebar from "../components/editor/sidebar";
import Editor from "../components/editor/editor";

function App() {
  return (
    <div className="w-full h-full bg-[#241F2E] flex">
      <div className="h-full" style={{ width: "calc(100% - 330px)" }}>
        <Editor
          className="w-full border border-black"
          style={{ height: "calc(100% - 150px)" }}
        />
        <ImageLib className="w-full h-[150px] border border-black" />
      </div>
      <Sidebar className="w-[280px] h-full border border-black" />
      <Toolbar className="w-[50px] h-full border border-black" />
    </div>
  );
}

export default App;
