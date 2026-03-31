import { useState, useEffect } from "react";
import { BadgeCheck, ChevronUp, MoveUpRight } from "lucide-react";
import Image from "/manImage.jpg";

const Card = () => {
  const [active, setActive] = useState(() => {
    return JSON.parse(localStorage.getItem("cardState")) || false;
  });

  useEffect(() => {
    localStorage.setItem("cardState", JSON.stringify(active));
  }, [active]);

  return (
    <div className="w-[280px] h-auto p-2 flex flex-col justify-start items-center bg-white shadow-[0px_0px_14px_-1px_rgba(0,_0,_0,_0.15)] rounded-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0px_12px_40px_-10px_rgba(0,0,0,0.25)]">
      <div className="w-full h-[300px] overflow-hidden flex flex-col relative">
        {/* Header */}
        <div
          className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            active ? "" : "w-full grid grid-cols-[auto_1fr] gap-3 items-center"
          }`}
        >
          {/* Image */}
          <div
            className={`overflow-hidden flex justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              active ? "w-full h-[210px] rounded-lg" : "w-12 h-12 rounded-full"
            }`}
          >
            <img
              src={Image}
              alt=""
              className="w-full h-full object-cover object-top transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105"
            />
          </div>

          {/* Content */}
          <div
            className={`flex flex-col capitalize transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              active ? "mt-2" : "mt-0"
            }`}
          >
            <h1 className="flex items-center text-[#252525] font-medium text-lg">
              john doe
              <span
                className={`ml-1 flex items-center transition-all duration-300 ${
                  active
                    ? ""
                    : "bg-green-100 border border-green-600 rounded-full px-2 py-[2px]"
                }`}
              >
                <BadgeCheck
                  size={active ? 18 : 14}
                  fill="#22c55e"
                  stroke="#fff"
                />

                {!active && (
                  <p className="text-[10px] text-[#555] tracking-wide ml-1">
                    verified
                  </p>
                )}
              </span>
            </h1>

            <p
              className={`text-[#555] leading-[1.3] transition-all duration-500 ${
                active ? "text-sm opacity-100" : "text-xs opacity-80"
              }`}
            >
              Designer and developer who focuses on simplicity and usability.
            </p>
          </div>
        </div>

        {/* body */}
        <div
          className={` bg-red-500 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
            active
              ? "max-h-0 -translate-y-2"
              : "h-[220px] translate-y-0 mt-2"
          }`}
        >
          <p className="text-sm font-medium">hello</p>
          <p className="text-xs text-[#555] leading-[1.4]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut incidunt
            optio molestias laborum aspernatur veniam consequuntur tempora nisi
            magni! Iure voluptatum cupiditate laborum.
          </p>
          <p className="text-xs text-[#555] leading-[1.4]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut incidunt
            optio molestias laborum aspernatur veniam consequuntur tempora nisi
            magni! Iure voluptatum cupiditate laborum.
          </p>
          <p className="text-xs text-[#555] leading-[1.4]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut incidunt
            optio molestias laborum aspernatur veniam consequuntur tempora nisi
            magni! Iure voluptatum cupiditate laborum.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full grid grid-cols-[auto_1fr] gap-2 mt-auto relative z-10">
        {/* Toggle Button */}
        <button
          onClick={() => setActive(!active)}
          className="py-2 flex justify-center items-center cursor-pointer rounded-lg gap-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.3)] hover:bg-black/10 hover:scale-[1.02]"
        >
          <ChevronUp
            size={18}
            className={`transition-all duration-500 ${
              active ? "translate-y-2" : "-translate-y-2 rotate-180"
            }`}
          />
        </button>

        {/* Hire Button */}
        <button className="py-2 flex justify-center items-center cursor-pointer rounded-lg gap-1 bg-black text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black/85 hover:scale-[1.01]">
          <p className="text-sm capitalize">hire me</p>
          <MoveUpRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default Card;
