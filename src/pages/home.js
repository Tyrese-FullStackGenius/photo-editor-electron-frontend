import Projects from "../components/home/projects";
import { Scrollbar } from "smooth-scrollbar-react";

function App() {
  return (
    <Scrollbar
      plugins={{
        overscroll: {
          effect: "bounce",
        },
      }}
      className="h-full"
    >
      <div className="px-[45px] pt-[100px] pb-[40px]">
        <Projects />
      </div>
    </Scrollbar>
  );
}

export default App;
