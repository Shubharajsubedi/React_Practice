import axios from "axios"
import { useState,useEffect } from "react"

export const Movie = ()=> {

    const[data,setData]=useState([])
    const API = "https://dummyjson.com/quotes"


const getMoviesdata=async ()=> {
    try{
        const res= await axios.get(API)
        setData(res.id)
        console.log(res)
    }catch(error){
        console.log("error",error)
    }
}

   useEffect(()=>{
    getMoviesdata();
   },[])


   return (
    <ul>
        {
            data.map()
        }
    </ul>
   )
}