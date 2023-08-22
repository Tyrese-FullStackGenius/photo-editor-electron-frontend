import React, { useState } from "react";
function RecycleCard(props) {
  const handleInnerButtonClick = (event) => {
    event.stopPropagation();
    toggleMenu();
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <button className="w-[250px] h-[250px] rounded-[5px] border-2">
      <div
        className="h-[190px] bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="bg-[#241f2d] w-full h-[56px] flex justify-between">
        <div className="ml-[20px] my-auto">
          <p className="text-white text-left">{props.name}</p>
          <p className="text-left">还剩 {props.remain}天</p>
        </div>
        <button
          className="my-auto height-[20px] text-[20px] mr-[10px] hover:opacity-100 active:opacity-50"
          onClick={handleInnerButtonClick}
        >
          •••
          {menuOpen && (
            <div className="absolute text-left p-[10px] rounded shadow text-white text-[15px] bg-black">
              <ul>
                <li>还原</li>
                <hr></hr>
                <li>彻底删除</li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </button>
  );
}

export default RecycleCard;
