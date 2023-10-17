import React from "react";

function SquareDivs() {
  const numberOfElements = 50; 

  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">{
       Array.from({ length: numberOfElements }).map((_, index) => (
    <div key={index} className={`w-12 h-12 ${(index + 1) % 2 === 0 ? 'bg-green-500' : 'bg-blue-500'} flex items-center justify-center text-white text-lg font-bold rounded-lg`}
    >
      
      {index+1<10? `0${index+1}`:index+1}
    </div>
  ))}
    </div>
  );
}

export default SquareDivs;
