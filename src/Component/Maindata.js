import React, { useState } from "react";
import Details from "./Details";
import { AiOutlineMenu } from "react-icons/ai";

const Maindata = ({main,name,sys,weather,City,Setcity, getData,wind}) => {
   
    const[Open,Setopen]=useState(false)
  return (
    <div className="flex flex-row">
      <div className=" w-4/6 flex justify-between">
        <div className="flex items-end flex-row text-white mb-10 lg:ml-10 ml-3">
            <div className="text-center">
                <p className="text-3xl">{name}, {sys?sys.country:" "}</p>
                <p className="text-7xl">{main?main.temp:" "}°</p>
                <p  className="text-3xl">{weather?weather[0].main:" "}</p>

            </div>
            <div className={`${Open?"flex":"hidden"} md:flex`} >
              <img   alt="hello" src={`http://openweathermap.org/img/wn/${weather?weather[0].icon:" "}@2x.png`}/>
            </div>
          
        </div>
        <div className={`${Open?"flex":"hidden"} md:hidden -mx-60 `}>
          <AiOutlineMenu className="text-white text-2xl mt-3" onClick={()=>Setopen(!Open)} />
        </div>
      </div>
      <div className={`bg-black bg-opacity-40 h-screen lg:w-4/12 md:w-5/12 w-9/12 md:translate-x-0 ${Open?"translate-x-96":" translate-x-0"}`}>
        <Details Open={Open} Setopen={Setopen} City={City} Setcity={Setcity}  getData ={ getData } main={main} wind={wind} weather={weather}/>
      </div>
    </div>
  );
};

export default Maindata;
