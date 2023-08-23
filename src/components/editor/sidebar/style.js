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
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                from={0}
                to={100}
                defaultValue={0}
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
                defaultValue={0}
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
                defaultValue={0}
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
                defaultValue={0}
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
                defaultValue={0}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
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
                defaultValue={0}
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
                defaultValue={0}
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
                defaultValue={0}
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
                defaultValue={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                from={0}
                to={100}
                defaultValue={0}
              />
              <div>
                <div className="h-[28px] leading-[28px]">123123</div>
                <div className="flex">
                  <button className="w-[28px] h-[28px] mr-[5px] bg-[#312C3B]">
                    <Icon
                      icon="jam:stop-sign"
                      className="w-[20px] h-[20px] m-[4px] text-gray-500"
                    />
                  </button>
                  <button className="w-[28px] h-[28px] mr-[5px] bg-[#B4C1BE]" />
                  <button className="w-[28px] h-[28px] mr-[5px] bg-[#AEA0A6]" />
                  <button className="w-[28px] h-[28px] mr-[5px] bg-[#ACB9B6]" />
                  <button className="w-[28px] h-[28px] mr-[5px] bg-[#B5B19D]" />
                  <button className="w-[28px] h-[28px] mr-[5px] bg-[#84665C]" />
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
          <Accordion.Item eventKey="3" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
              <div className="flex">
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
                <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mx-[4px]">
                  12
                </button>
              </div>
              <div className="mt-[10px]">
                <div className="h-[28px] leading-[28px]">123123</div>
                <div className="flex">
                  <Slider
                    className="w-full slider-gray slider-filled-white"
                    text="123"
                    from={0}
                    to={100}
                    defaultValue={0}
                  />
                  <button className="w-[18px] h-[18px] mx-[10px] mt-[26px] bg-[#312C3B]">
                    <Icon
                      icon="material-symbols:link"
                      className="w-[14px] h-[14px] m-[2px] text-gray-500"
                    />
                  </button>
                  <Slider
                    className="w-full slider-gray slider-filled-white"
                    text="123"
                    from={0}
                    to={100}
                    defaultValue={0}
                  />
                </div>
              </div>
              <div>
                <div className="h-[28px] leading-[28px]">123123</div>
                <div className="flex">
                  <Slider
                    className="w-full slider-gray slider-filled-white"
                    text="123"
                    startPoint={0}
                  />
                  <button className="w-[18px] h-[18px] mx-[10px] mt-[26px] bg-[#312C3B]">
                    <Icon
                      icon="material-symbols:link"
                      className="w-[14px] h-[14px] m-[2px] text-gray-500"
                    />
                  </button>
                  <Slider
                    className="w-full slider-gray slider-filled-white"
                    text="123"
                    startPoint={0}
                  />
                </div>
              </div>
              <div>
                <div className="h-[28px] leading-[28px]">123123</div>
                <div className="flex">
                  <Slider
                    className="w-full slider-gray slider-filled-white"
                    text="123"
                    startPoint={0}
                  />
                  <button className="w-[18px] h-[18px] mx-[10px] mt-[26px] bg-[#312C3B]">
                    <Icon
                      icon="material-symbols:link"
                      className="w-[14px] h-[14px] m-[2px] text-gray-500"
                    />
                  </button>
                  <Slider
                    className="w-full slider-gray slider-filled-white"
                    text="123"
                    startPoint={0}
                  />
                </div>
              </div>
              <div>
                <div className="h-[28px] leading-[28px]">123123</div>
                <div className="flex">
                  <Slider
                    className="w-full slider-gray slider-filled-white"
                    text="123"
                    startPoint={0}
                  />
                  <button className="w-[18px] h-[18px] mx-[10px] mt-[26px] bg-[#312C3B]">
                    <Icon
                      icon="material-symbols:link"
                      className="w-[14px] h-[14px] m-[2px] text-gray-500"
                    />
                  </button>
                  <Slider
                    className="w-full slider-gray slider-filled-white"
                    text="123"
                    startPoint={0}
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
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                startPoint={0}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                from={0}
                to={5}
                defaultValue={0}
                dots
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
              <Accordion className="my-accordion bg-[#181322] mb-[10px]">
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
                      defaultValue={70}
                    />
                    <Slider
                      className="w-full slider-gray slider-filled-white"
                      text="123"
                      from={0}
                      to={100}
                      defaultValue={70}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
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
                defaultValue={0}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
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
                defaultValue={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                startPoint={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                startPoint={0}
              />
              <div className="flex">
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
                <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mx-[4px]">
                  12
                </button>
              </div>
              <div className="flex mt-[20px]">
                <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mr-[4px]">
                  12
                </button>
                <button className="h-[28px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[4px] mx-[4px]">
                  12
                </button>
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
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
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
                defaultValue={0}
              />
              <Slider
                className="w-full slider-gray slider-filled-white"
                text="123"
                startPoint={0}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9" className="border-bottom-black">
            <Accordion.Header>123</Accordion.Header>
            <Accordion.Body>
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
                defaultValue={0}
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
                defaultValue={0}
              />
              <div className="flex">
                <Slider
                  className="w-full slider-gray slider-filled-white"
                  text="123"
                  from={0}
                  to={100}
                  defaultValue={0}
                />
                <button className="w-[18px] h-[18px] mx-[10px] mt-[26px] bg-[#312C3B]">
                  <Icon
                    icon="material-symbols:link"
                    className="w-[14px] h-[14px] m-[2px] text-gray-500"
                  />
                </button>
                <Slider
                  className="w-full slider-gray slider-filled-white"
                  text="123"
                  from={0}
                  to={100}
                  defaultValue={0}
                />
              </div>
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
                defaultValue={0}
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
                defaultValue={0}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Scrollbar>
    </div>
  );
}

export default App;
