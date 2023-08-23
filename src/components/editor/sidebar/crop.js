import { Accordion, Dropdown } from "react-bootstrap";
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
              <Dropdown className="my-dropdown">
                <Dropdown.Toggle className="h-[28px] py-0 rounded-[4px] border-0 w-full text-left">
                  123
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>123</Dropdown.Item>
                  <Dropdown.Item>123</Dropdown.Item>
                  <Dropdown.Item>123</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>123</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>123</Dropdown.Item>
                  <Dropdown.Item>123</Dropdown.Item>
                  <Dropdown.Item>123</Dropdown.Item>
                  <Dropdown.Item>123</Dropdown.Item>
                  <Dropdown.Item>123</Dropdown.Item>
                  <Dropdown.Item>123</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="w-full flex">
                <div class="w-full relative flex">
                  <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                    $
                  </span>
                  <input
                    className="w-full h-[28px] my-[20px] bg-transparent border border-black outline-0 rounded-[5px] pl-[40px]"
                    type="number"
                  />
                </div>
                <Icon
                  icon="uiw:swap"
                  className="h-[12px] w-[36px] my-[28px] mx-[10px]"
                />
                <div class="w-full relative flex">
                  <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                    $
                  </span>
                  <input
                    className="w-full h-[28px] my-[20px] bg-transparent border border-black outline-0 rounded-[5px] pl-[40px]"
                    type="number"
                  />
                </div>
                <Dropdown className="my-dropdown my-[20px] ml-[10px]">
                  <Dropdown.Toggle className="h-[28px] py-0 rounded-[4px] border-0 w-full text-left">
                    123
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>123</Dropdown.Item>
                    <Dropdown.Item>123</Dropdown.Item>
                    <Dropdown.Item>123</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>123</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>123</Dropdown.Item>
                    <Dropdown.Item>123</Dropdown.Item>
                    <Dropdown.Item>123</Dropdown.Item>
                    <Dropdown.Item>123</Dropdown.Item>
                    <Dropdown.Item>123</Dropdown.Item>
                    <Dropdown.Item>123</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div class="relative flex">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                  $
                </span>
                <input
                  className="w-full h-[28px] my-[20px] bg-transparent border border-black outline-0 rounded-[5px] pl-[40px] pr-[60px]"
                  // type="number"
                />
                <span class="absolute inset-y-0 right-0 pr-2 flex items-center">
                  123123
                </span>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
              <div className="flex justify-between">
                <button className="w-[20px] h-[20px] p-[5px]">
                  <Icon
                    icon="carbon:rotate-counterclockwise"
                    className="w-[15px] h-[15px]"
                  />
                </button>
                <button className="w-[20px] h-[20px] p-[5px]">
                  <Icon
                    icon="carbon:rotate-clockwise"
                    className="w-[15px] h-[15px]"
                  />
                </button>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* <Slider className="slider-gray" text="123" /> */}
        </Accordion>
      </Scrollbar>
    </div>
  );
}

export default App;
