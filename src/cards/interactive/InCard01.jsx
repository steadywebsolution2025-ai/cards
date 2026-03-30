import Image from "../../../public/manImage.jpg";
import { BadgeCheck, Heart } from "lucide-react";
import { useState } from "react";
export default function InCard01() {
  const [active, setActive] = useState(false);
  return (
    <div className="w-[280px] h-[375px] p-2 flex flex-col justify-start items-center bg-[#FFFFFF] shadow-[0px_0px_14px_-1px_rgba(0,_0,_0,_0.15)] rounded-xl overflow-hidden">
      <div className="w-full flex flex-col">
        {/* first header */}
        <div className="">
          <div className="w-full h-[250px] rounded-lg overflow-hidden">
            <img
              src={Image}
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex justify-center items-start flex-col capitalize">
            <h1 className="flex justify-center items-center text-[#252525] text-lg font-medium">
              john doe
              <span>
                <BadgeCheck size={19} fill="#24961c" stroke="#fff" />
              </span>
            </h1>
            <p className="text-[#555555] text-xs">
              Designer and developer who focused on simplicity and usability.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="w-full grid grid-cols-[.15fr_1fr] place-content-center mt-4 gap-2 relative z-10">
        <button
          onClick={() => setActive(!active)}
          className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full shadow-[0px_0px_0px_.29px_rgba(0,0,0,1)]"
        >
          {active ? (
            <Heart
              size={16}
              fill="red"
              stroke="none"
              className="heart-active"
            />
          ) : (
            <Heart size={14} stroke="#000" className="heart-inactive" />
          )}
        </button>

        <button className="w-auto py-2 text-sm text-[#000] rounded-full capitalize cursor-pointer shadow-[0px_0px_0px_.29px_rgba(0,0,0,_1)]">
          book now
        </button>
      </div>
    </div>
  );
}
