'use client'
import React, { useState } from 'react'
import Option from './Option'

const Question = ({data}) => {

  return (
    <>   
    <img src={`/Questions/${data[0].question}`}  className='' />  
{
    data[0].option.map((opt,index)=> 
     <Option opt={opt} index={index} key={index}/>  
    )
    }
    </>
  )
}

export default Question