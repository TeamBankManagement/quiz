"use client";
import { AppContext } from "@/context/AppContext";
import React, { useContext, useState } from "react";

const Option = ({ opt, index }) => {
  const [check, setCheck] = useState(false);

  return (
    <>
      <div className="flex items-center space-x-2  lg:mt-2 w-11/12" key={index}>
        <input
          type="checkbox"
          // checked={check}
          className=" w-24 h-24 text-indigo-600"
          // onClick={()=>setCheck(!check)}
        />

        <p className="font-bold text-lg lg:text-4xl text-blue-500">{index+1}</p>
        <img src={`/Questions/${opt}`} alt="option" className="mt-2 mb-2" />
      </div>
      <div class="h-px flex-1 bg-slate-500 dark:bg-navy-500"></div>


    </>
  );
};

export default Option;
