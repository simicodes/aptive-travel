import React from "react";
import SelectCard from "./SelectCard";

import Borabora from "../assets/borabora.jpg";
import Borabora2 from "../assets/borabora2.jpg";
import KeyWest from "../assets/keywest.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";

const Select = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid after: sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* <div className="relative">
        <img src={Maldives} alt="/" />
        <div className="absolute bg-gray-900/30 top-0 left-0 w-full h-full">
          <p className="left-4 bottom-4 text-xl font-bold text-white absolute">Maldives</p>
        </div>
      </div> */}
      {/* Cut to card component      */}
      <SelectCard bg={Borabora} text="Bora Bora" />
      <SelectCard bg={Borabora2} text="Canada" />
      <SelectCard bg={Maldives} text="Maldives" />
      <SelectCard bg={Maldives3} text="United Kingdom" />
      <SelectCard bg={KeyWest} text="Australia" />
      <SelectCard bg={Maldives2} text="New Zealand" />
    </div>
  );
};

export default Select;
