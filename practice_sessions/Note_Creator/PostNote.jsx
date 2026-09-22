 import { useState,useEffect } from "react";
 import { getPostAdmin } from "../src/api/PostApi";

 export const PostNote =()=>{
    const[data, setdata]=useState([])



    const getPostData = async () => {
        const res = await getPostAdmin();
        console.log(res.data);
        setdata(res)
    };

    useEffect(()=>{ 
        getPostData();
    },[])

    return (
        <div>
            <section>
                <ul>
                    {data.map((curELM)=>{
                        const {userId,id,title,body} = curELM;
                        return <li key={id}>
                            <p>{userId}</p>
                            <p>{title}</p>
                            <p>{body}</p>
                            
                        </li>


                    })}
                </ul>
            </section>
        </div>
    )

 }