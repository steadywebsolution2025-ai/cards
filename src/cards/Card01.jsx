import Image from "/resort_image_guatemala.jpg";
import { features } from ".";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function Card01() {
  const [active, setActive] = useState(false);
  return (
    <div className="w-[300px] h-fit flex flex-col bg-[#FFFFFF] shadow-[0px_0px_14px_-1px_rgba(0,_0,_0,_0.15)] rounded-xl overflow-hidden">
      <div className="w-full h-[150px]">
        <img src={Image} alt="" className="w-full h-full" />
      </div>
      <div className="w-full h-full flex flex-col px-[12px] pt-[8px] pb-6">
        {/* first heading */}
        <div className="flex justify-between items-center capitalize">
          <h1 className="text-[#252525] text-xl font-medium">
            guatemala resort
          </h1>
          <p className="text-lg">$769</p>
        </div>

        {/* 2nd heading */}
        <div className="mt-2">
          <p className="text-[#555555] text-sm">
            Experience a cliffside loft with iconic white walls, blue domes and
            magical sunset views.
          </p>
        </div>

        {/* 3rd heading */}
        <div className="w-full flex flex-wrap gap-1 mt-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-[rgba(0,0,0,.05)] shadow-[0px_0px_0px_.15px_rgba(0,_0,_0,_0.75)]"
              >
                <Icon size={14} />
                <p className="text-xs capitalize">{item.label}</p>
              </div>
            );
          })}
        </div>
        {/* footer */}
        <div className="grid grid-cols-[.15fr_1fr] place-content-center mt-2">

          <button
            onClick={() => setActive(!active)}
            className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full shadow-[0px_0px_0px_.25px_rgba(0,_0,_0,_0.75)] relative overflow-visible"
          >
            {active ? (
              <Heart
                size={16}
                fill="red"
                stroke="none"
                className="heart-active"
              />
            ) : (
              <Heart size={14} className="heart-inactive" />
            )}
          </button>

          <button className="w-auto py-2 text-sm rounded-full capitalize cursor-pointer shadow-[0px_0px_0px_.25px_rgba(0,_0,_0,_0.75)]">
            book now
          </button>
        </div>
      </div>
    </div>
  );
}
