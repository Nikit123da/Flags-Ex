import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Galery() {



        useEffect(() => 
        {
            const getData = async (url = 'https://countriesnow.space/api/v0.1/countries/info?returns=flag') => 
            {
                try
                {
                    let temp =  await axios(url);   
                } 
                catch(error)
                {
                    console.log(error)
                }   
            }
            getData();
        },[])

  return (
    <div>

    </div>
  )
}

//? yarn build - builds the site template for you, can add the dist folder into the netlify to make the site 
//? avaliable, or add the dsit folder to the calssroom to send the task.

export default Galery