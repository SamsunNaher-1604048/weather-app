import axios from "axios";
import React, { useEffect, useState } from "react";
import Maindata from "./Component/Maindata";


const App = () => {
  const [City, Setcity] = useState("London");
  const [Data, Setdata] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=bf4e1a3d9c2e247ea2a1f8b7b54b6d22&units=metric`
    );
    console.log(data.data);
    Setdata(data.data);
  };

 const Background=(des)=>{
  if(des==='01d'||des==="01n"){
    return "bg-[url('../public/hot.jpg')]"
  }
  else if(des==="02d"||des==="02n"||des==="03d"||des==="03n"|| des==="04d"||des==="04n"){
    return " bg-[url('../public/cloud.jpg')]"
  }
  else if(des==="09d"||des==="09n"||des==="10d"||des==="10n"){
    return " bg-[url('../public/rain.jpg')]"
  }
  else if(des==="11d"||des==="11n"){
    return "bg-[url('../public/thunder.jpg')]"
  }
  else if(des==="13d"||des==="13n"){
    return "bg-[url('../public/cold.jpg')]"
  }
  else if(des==="50d"||des==="50n"){
    return "bg-[url('../public/fog.jpg')]"
  }
 }

  const { main, name, sys, weather,wind } = Data;

  return (
    <div className={`h-screen  bg-cover bg-center overflow-hidden ${weather?Background(weather[0].icon):Background("01d")}`}>
      <Maindata  main={main} name={name} sys={sys} weather={weather} City={City} Setcity={Setcity}  getData={ getData } wind={wind}/>
     </div>
    
  );
};

export default App;
