import React from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const Details = ({Open,Setopen,City,Setcity, getData,main,wind,weather }) => {
  return (
    <div>
      <AiOutlineClose onClick={()=>Setopen(!Open)} className="text-white text-2xl md:hidden mt-3"/>
      <div className='flex flex-row justify-center m-4'>
        <input className='outline-none  bg-transparent border-b border-white w-4/6 text-white' value={City} onChange={(e)=>Setcity(e.target.value)}/>
        <AiOutlineSearch className='text-white text-4xl' onClick={()=>getData()}/>
      </div>
      <div className=' text-white text-center font-extralight space-y-6 mt-10 mx-5 text-xl'>
        <p>Feel Like: {main?main.feels_like:" "}°</p>
        <hr/>
        <p>Humidity: {main?main.humidity:" "}%</p>
        <hr/>
        <p>Temp_max: {main?main.temp_max: " "}°</p>
        <hr/>
        <p>Temp_min: {main?main.temp_min: " "}°</p>
        <hr/>
        <p>Wind Speed: {wind?wind.speed:" "}Km/h</p>
        <hr/>
        <p>Weather Detail: {weather?weather[0].description:" "}</p>

      </div>
    </div>
  )
}

export default Details
