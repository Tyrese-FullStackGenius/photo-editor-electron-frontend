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
        <Accordion defaultActiveKey={["1", "2", "3"]} className="my-accordion">
          <Accordion.Item eventKey="1" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
              <div className="flex">
                <div className="mr-auto h-[28px] leading-[28px]">123</div>
                <div className="ml-auto">
                  {/* <Icon
                  icon="line-md:switch-filled-to-switch-off-filled-transition"
                  className="h-[28px] w-[36px] cursor-pointer"
                /> */}
                  <Icon
                    icon="line-md:switch-off-filled-to-switch-filled-transition"
                    className="h-[28px] w-[36px] cursor-pointer text-gray-500"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="mr-auto h-[28px] leading-[28px]">123</div>
                <div className="ml-auto">
                  {/* <Icon
                  icon="line-md:switch-filled-to-switch-off-filled-transition"
                  className="h-[28px] w-[36px] cursor-pointer"
                /> */}
                  <Icon
                    icon="line-md:switch-off-filled-to-switch-filled-transition"
                    className="h-[28px] w-[36px] cursor-pointer text-gray-500"
                  />
                </div>
              </div>
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                from={0}
                to={100}
                defaultValue={0}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
              <div className="flex">
                <button className="h-[32px] bg-[#393443] w-full">123</button>
                <button className="h-[32px] bg-[#181322] w-full">123</button>
              </div>
              <div className="grid grid-cols-4 gap-[5px] mt-[20px]">
                <div className="w-full h-[90px] bg-[#423D4C] text-center ">
                  <img
                    className="w-full"
                    src="/assets/imgs/theme1.png"
                    alt="mix-sample"
                  />
                  <span>123123</span>
                </div>
                <div className="w-full h-[90px] bg-[#423D4C] text-center ">
                  <img
                    className="w-full"
                    src="/assets/imgs/theme1.png"
                    alt="mix-sample"
                  />
                  <span>123123</span>
                </div>
                <div className="w-full h-[90px] bg-[#423D4C] text-center ">
                  <img
                    className="w-full"
                    src="/assets/imgs/theme1.png"
                    alt="mix-sample"
                  />
                  <span>123123</span>
                </div>
                <div className="w-full h-[90px] bg-[#423D4C] text-center ">
                  <img
                    className="w-full"
                    src="/assets/imgs/theme1.png"
                    alt="mix-sample"
                  />
                  <span>123123</span>
                </div>
                <div className="w-full h-[90px] bg-[#423D4C] text-center ">
                  <img
                    className="w-full"
                    src="/assets/imgs/theme1.png"
                    alt="mix-sample"
                  />
                  <span>123123</span>
                </div>
                <div className="w-full h-[90px] bg-[#423D4C] text-center ">
                  <img
                    className="w-full"
                    src="/assets/imgs/theme1.png"
                    alt="mix-sample"
                  />
                  <span>123123</span>
                </div>
                <div className="w-full h-[90px] bg-[#423D4C] text-center ">
                  <img
                    className="w-full"
                    src="/assets/imgs/theme1.png"
                    alt="mix-sample"
                  />
                  <span>123123</span>
                </div>
                <div className="w-full h-[90px] bg-[#423D4C] text-center ">
                  <img
                    className="w-full"
                    src="/assets/imgs/theme1.png"
                    alt="mix-sample"
                  />
                  <span>123123</span>
                </div>
              </div>
              <Slider
                className="w-full slider-gray slider-filled-white mt-[10px]"
                text="123"
                from={0}
                to={100}
                defaultValue={0}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
              <div className="flex">
                <button className="h-[32px] bg-[#393443] w-full">123</button>
                <button className="h-[32px] bg-[#181322] w-full">123</button>
              </div>
              <div className="flex mt-[20px]">
                <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mr-[4px]">
                  12
                </button>
                <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mx-[4px]">
                  12
                </button>
                <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mx-[4px]">
                  12
                </button>
                <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mx-[4px]">
                  12
                </button>
              </div>
              <img
                src="/assets/imgs/img4.png"
                className="w-full my-[20px]"
                alt="upload"
              />
              <div className="h-[28px] leading-[28px]">123123</div>
              <Slider
                className="w-full slider-gray slider-filled-white mt-[10px]"
                text="123"
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white mt-[10px]"
                text="123"
                startPoint={0}
              />
              <div className="flex">
                <div className="mr-auto h-[28px] leading-[28px]">123</div>
                <div className="ml-auto">
                  {/* <Icon
                  icon="line-md:switch-filled-to-switch-off-filled-transition"
                  className="h-[28px] w-[36px] cursor-pointer"
                /> */}
                  <Icon
                    icon="line-md:switch-off-filled-to-switch-filled-transition"
                    className="h-[28px] w-[36px] cursor-pointer text-gray-500"
                  />
                </div>
              </div>
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                from={0}
                to={100}
                defaultValue={0}
              />
              <Slider className="w-full slider-blue-yellow" text="123" />
              <Slider
                className="w-full slider-gray slider-filled-white mt-[10px]"
                text="123"
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white mt-[10px]"
                text="123"
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                from={0}
                to={100}
                defaultValue={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                from={0}
                to={100}
                defaultValue={100}
              />
              <div className="h-[28px] leading-[28px] mt-[10px]">123123</div>
              <Slider
                className="w-full slider-gray slider-filled-white mt-[10px]"
                text="123"
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white mt-[10px]"
                text="123"
                startPoint={0}
              />
              <div className="h-[28px] leading-[28px] mt-[10px]">123123</div>
              <Slider
                className="w-full slider-gray slider-filled-white mt-[10px]"
                text="123"
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white mt-[10px]"
                text="123"
                startPoint={0}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Scrollbar>
    </div>
  );
}

export default App;
