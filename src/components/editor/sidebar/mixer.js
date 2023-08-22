function App(props) {
  return (
    <div className={`${props.className}`} style={{ ...props.style }}>
      <div className="w-full flex flex-col p-[10px] border-b border-black">
        <img src="/assets/imgs/mixPhoto.png" className="w-full" />
        <div className="flex my-[10px] text-white">
          <div className="h-[24px] leading-[24px] mr-auto">123123</div>
          <div className="ml-auto">
            <button className="h-[24px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[2px] mx-[1px]">
              123123
            </button>
            <button className="h-[24px] px-[10px] bg-[#312C3B] hover:bg-[#423D4C] rounded-[2px] mx-[1px]">
              123123
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
