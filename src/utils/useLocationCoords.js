
import { useState, useEffect } from "react";
import { weatherApiKey } from "../constants/constants"; 
import { loadOptions } from "@babel/core";
const useLocationCoord = () =>{
    const [coords, setCoords] = useState()
    //console.log(typeof(setCoords))
    
    
    const [local, setLocal] = useState("")
    console.log(local)
    useEffect(() =>{
        getCoordinates()
    },[])

    async function getCoordinates(){
      //  console.log("entry")
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=8a35b4c73b3b72e10b6ad66a8ec3aacd`)
        const json = await data.json()
        //console.log(json?.coord)
        setCoords(json?.coord)
    } 
    console.log(coords)
    return {setLocal,coords,getCoordinates}
}

export default useLocationCoord