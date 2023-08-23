import { Accordion } from "react-bootstrap";
import { Scrollbar } from "smooth-scrollbar-react";
import { Icon } from "@iconify/react";
import Slider from "../../slider";

function App(props) {
  return (
    <div className={`${props.className}`} style={{ ...props.style }}>
      <Scrollbar
        plugins={{
          overscroll: {
            effect: "bounce",
          },
        }}
        className="h-full"
      >
        <Accordion defaultActiveKey="1" className="my-accordion">
          <Accordion.Item eventKey="1" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
              <Accordion
                defaultActiveKey="1"
                className="my-accordion bg-[#181322] mb-[10px]"
              >
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <Slider
                      className="w-full slider-gray slider-filled-white"
                      text="123"
                      from={0}
                      to={100}
                    />
                  </Accordion.Header>
                  <Accordion.Body>
                    <Slider
                      className="w-full slider-gray-lightgreen"
                      text="123"
                      from={0}
                      to={100}
                      defaultValue={100}
                    />
                    <Slider
                      className="w-full slider-gray-lightgreen"
                      text="123"
                      from={0}
                      to={100}
                      defaultValue={100}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Scrollbar>
    </div>
  );
}

export default App;
