import Image from "/resort_image_guatemala.jpg";
import { features } from "..";
import { Heart } from "lucide-react";
import { useState } from "react";

function Card02() {
  const [active, setActive] = useState(false);

  return (
    <div className="w-[280px] h-[395px] flex flex-col bg-[#FFFFFF] shadow-[0px_0px_14px_-2px_rgba(0,_0,_0,_0.1)] rounded-xl overflow-hidden relative">
      <div className="w-full h-full">
        <img
          src={Image}
          alt=""
          className="w-full h-full object-cover object-top-left"
        />
      </div>

      {/* Enhanced glass/glossy effect */}
      <div className="w-full h-fit flex flex-col px-[12px] pt-[8px] pb-6 absolute bottom-0 bg-gradient-to-b from-white/10 via-white/5 to-black/20 backdrop-blur-[12px] border-t border-white/30 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:rounded-xl before:pointer-events-none">
        {/* first heading */}
        <div className="flex justify-between items-center capitalize relative z-10">
          <h1 className="text-white text-xl font-medium drop-shadow-lg">
            guatemala resort
          </h1>
          <p className="text-white text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            $769
          </p>
        </div>

        {/* 2nd heading */}
        <div className="mt-2 relative z-10">
          <p className="text-white/80 text-sm drop-shadow-md">
            Experience a cliffside loft with iconic white walls, blue domes and
            magical sunset views.
          </p>
        </div>

        {/* 3rd heading */}
        <div className="w-full flex flex-wrap gap-1 mt-6 relative z-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 backdrop-blur-[24px] shadow-[0px_0px_0px_.05px_rgba(255,_255,_255,_.55)] border border-white/20"
              >
                <Icon size={14} stroke="#E7E7E7" />
                <p className="text-[#E7E7E7] text-xs capitalize drop-shadow-sm">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* footer */}
        <div className="grid grid-cols-[.15fr_1fr] place-content-center mt-2 gap-2 relative z-10">
          <button
            onClick={() => setActive(!active)}
            className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-white/10 backdrop-blur-[24px] shadow-[0px_0px_0px_.05px_rgba(255,_255,_255,_.55)] border border-white/20 hover:bg-white/20 transition-all duration-200 relative overflow-visible"
          >
            {active ? (
              <Heart
                size={16}
                fill="red"
                stroke="none"
                className="heart-active"
              />
            ) : (
              <Heart size={14} stroke="#E7E7E7" className="heart-inactive" />
            )}
          </button>

          <button className="w-auto py-2 text-sm text-[#E7E7E7] rounded-full capitalize cursor-pointer bg-white/10 backdrop-blur-[24px] shadow-[0px_0px_0px_.05px_rgba(255,_255,_255,_.55)] border border-white/20 hover:bg-white/20 transition-all duration-200">
            book now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card02;
