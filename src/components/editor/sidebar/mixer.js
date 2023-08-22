import { Icon } from "@iconify/react";
import { Accordion, Dropdown } from "react-bootstrap";
import { Scrollbar } from "smooth-scrollbar-react";
import Slider from "../../slider";

function App(props) {
  return (
    <div className={`${props.className}`} style={{ ...props.style }}>
      <div className="w-full flex flex-col p-[10px] border-b border-black">
        <img
          src="/assets/imgs/img1.png"
          className="w-full h-[72px]"
          alt="mix"
        />
        <div className="flex my-[10px] text-white">
          <div className="h-[28px] leading-[28px] mr-auto">123123</div>
          <div className="ml-auto">
            <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mx-[1px]">
              123123
            </button>
            <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mx-[1px]">
              123123
            </button>
          </div>
        </div>
      </div>
      <Scrollbar
        plugins={{
          overscroll: {
            effect: "bounce",
          },
        }}
        style={{ height: "calc(100% - 140px)" }}
      >
        <Accordion defaultActiveKey="1" className="my-accordion">
          <Accordion.Item eventKey="1">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body className="grid grid-cols-4 gap-[5px]">
              <div className="w-full h-[90px] bg-[#423D4C] text-center ">
                <img
                  className="w-full"
                  src="/assets/imgs/theme1.png"
                  alt="mix-sample"
                />
                <span>123123</span>
              </div>
              <div className="w-full h-[90px] bg-[#423D4C] text-center">
                <img
                  className="w-full"
                  src="/assets/imgs/theme1.png"
                  alt="mix-sample"
                />
                <span>123123</span>
              </div>
              <div className="w-full h-[90px] bg-[#423D4C] text-center">
                <img
                  className="w-full"
                  src="/assets/imgs/theme1.png"
                  alt="mix-sample"
                />
                <span>123123</span>
              </div>
              <div className="w-full h-[90px] bg-[#423D4C] text-center">
                <img
                  className="w-full"
                  src="/assets/imgs/theme1.png"
                  alt="mix-sample"
                />
                <span>123123</span>
              </div>
              <div className="w-full h-[90px] bg-[#423D4C] text-center">
                <img
                  className="w-full"
                  src="/assets/imgs/theme1.png"
                  alt="mix-sample"
                />
                <span>123123</span>
              </div>
              <div className="w-full h-[90px] bg-[#423D4C] text-center">
                <img
                  className="w-full"
                  src="/assets/imgs/theme1.png"
                  alt="mix-sample"
                />
                <span>123123</span>
              </div>
              <div className="w-full h-[90px] bg-[#423D4C] text-center">
                <img
                  className="w-full"
                  src="/assets/imgs/theme1.png"
                  alt="mix-sample"
                />
                <span>123123</span>
              </div>
              <div className="w-full h-[90px] bg-[#423D4C] text-center">
                <img
                  className="w-full"
                  src="/assets/imgs/theme1.png"
                  alt="mix-sample"
                />
                <span>123123</span>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
              <div className="flex">
                <div className="mr-auto h-[28px] leading-[28px]">123</div>
                <div className="ml-auto flex">
                  <Dropdown className="my-dropdown">
                    <Dropdown.Toggle className="h-[28px] py-0 rounded-[4px]">
                      123
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Icon
                    icon="circum:picker-half"
                    className="w-[20px] h-[20px] m-[4px]"
                  />
                </div>
              </div>
              <Slider className="slider-blue-yellow" text="123" />
              <Slider className="slider-green-purple" text="123" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
              <Slider className="slider-gray" text="123" />
              <Slider className="slider-gray" text="123" />
              <Slider className="slider-gray" text="123" />
              <Slider className="slider-gray" text="123" />
              <Slider className="slider-gray" text="123" />
              <Slider className="slider-gray" text="123" />
              <Slider className="slider-gray" text="123" />
              <Slider className="slider-gray" text="123" />
              <Slider className="slider-gray" text="123" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
              <div className="grid grid-cols-7">
                <Icon icon="mdi:leaf" className="w-[24px] h-[24px]" />
                <Icon
                  icon="material-symbols:circle"
                  className="w-[24px] h-[24px] text-white"
                />
                <Icon
                  icon="material-symbols:circle"
                  className="w-[24px] h-[24px] text-red-500"
                />
                <Icon
                  icon="material-symbols:circle"
                  className="w-[24px] h-[24px] text-green-500"
                />
                <Icon
                  icon="material-symbols:circle"
                  className="w-[24px] h-[24px] text-blue-500"
                />
                <div />
                <Icon
                  icon="clarity:dot-circle-line"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <img
                src="/assets/imgs/img2.png"
                className="w-full border-[4px] border-black rounded-[8px] my-[10px]"
                alt="spectre"
              />
              <Slider className="slider-gray" text="123" />
              <Slider className="slider-gray" text="123" />
              <Slider className="slider-gray" text="123" />
              <Slider className="slider-gray" text="123" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>HSL</Accordion.Header>
            <Accordion.Body>
              <div className="flex">
                <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mx-[4px]">
                  123123
                </button>
                <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mx-[4px]">
                  123123
                </button>
                <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mx-[4px]">
                  123123
                </button>
              </div>
              <Slider className="slider-violet-orange" text="123" />
              <Slider className="slider-red-yellow" text="123" />
              <Slider className="slider-orange-green" text="123" />
              <Slider className="slider-yellow-cyan" text="123" />
              <Slider className="slider-green-blue" text="123" />
              <Slider className="slider-cyan-purple" text="123" />
              <Slider className="slider-blue-violet" text="123" />
              <Slider className="slider-purple-red" text="123" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
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
                      to={150}
                    />
                  </Accordion.Header>
                  <Accordion.Body>
                    <Slider
                      className="w-full slider-gray slider-filled-white"
                      text="123"
                      from={0.5}
                      to={3}
                      step={0.1}
                      defaultValue={1}
                    />
                    <Slider
                      className="w-full slider-gray slider-filled-white"
                      text="123"
                      from={0}
                      to={100}
                      defaultValue={25}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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
                      defaultValue={0}
                    />
                  </Accordion.Header>
                  <Accordion.Body>
                    <Slider
                      className="w-full slider-gray slider-filled-white"
                      text="123"
                      from={0}
                      to={100}
                      defaultValue={50}
                    />
                    <Slider
                      className="w-full slider-gray slider-filled-white"
                      text="123"
                      from={0}
                      to={100}
                      defaultValue={0}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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
                      defaultValue={0}
                    />
                  </Accordion.Header>
                  <Accordion.Body>
                    <Slider
                      className="w-full slider-gray slider-filled-white"
                      text="123"
                      from={0}
                      to={100}
                      defaultValue={50}
                    />
                    <Slider
                      className="w-full slider-gray slider-filled-white"
                      text="123"
                      from={0}
                      to={100}
                      defaultValue={50}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>123</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>123</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Scrollbar>
    </div>
  );
}

export default App;
