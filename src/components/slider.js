import Slider from "rc-slider";
import { useState } from "react";

function App({
  from,
  to,
  defaultValue,
  step,
  showText,
  text,
  sliderColor,
  ...rest
}) {
  const [currentValue, setValue] = useState(defaultValue || 0);
  return (
    <div className={`my-slider ${rest.className}`} style={{ ...rest.style }}>
      {showText !== false && (
        <div className="flex">
          <div className="mr-auto h-[28px] leading-[28px]">{text}</div>
          <div className="ml-auto h-[28px] leading-[28px]">{currentValue}</div>
        </div>
      )}
      <Slider
        min={from !== undefined ? from : -100}
        max={to !== undefined ? to : 100}
        step={step !== undefined ? step : 1}
        value={currentValue}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
}

export default App;
