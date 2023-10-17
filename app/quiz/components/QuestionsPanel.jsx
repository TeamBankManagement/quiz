'use client'
import React, { useContext, useState } from 'react'
import Option from './Option';
import Question from './Question';
import { Qdata } from '../data/Data';
import { AppContext } from '@/context/AppContext';

const QuestionsPanel = () => {
  const {qno,setQno} = useContext(AppContext);
  return (
    <>
      <div className=" card1 col-span-12 lg:col-span-8">
      <div className="mt-3 flex flex-col justify-between px-4 sm:flex-row sm:items-center sm:px-5">
        <div className="flex flex-1 items-center justify-between space-x-2 sm:flex-initial">
          <h2 className="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Questions No: {qno}
          </h2>
        
        </div>
        {/* <div className="hidden space-x-2 sm:flex">
        
          <button className="flex items-center justify-center h-8 w-8 rounded-full text-xs font-medium hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 hover:text-slate-800 focus:text-slate-800 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 dark:hover:text-navy-100 dark:focus:text-navy-100">
          <svg fill="#000000" width="20px" height="20px" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" id="arrow">
  <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z"/>
</svg>
          </button>
        </div> */}
      </div>
      
      <div className="ax-transparent-gridline mt-2 px-2 ">
       {/* <Chart chartData={ordersOverview}/> */}
       <div class="overflow-y-auto h-60 sm:h-96 w-full top-0 right-0 scrollbar-sm overflow-x-hidden">
              {/* Scroll Card here */}
              {
                
                  <Question data={Qdata.filter(item => item.id === qno)} key='1'/>   
               
              }
             
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pt-5'>
  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
  onClick={()=>setQno(qno+1)}>Save & Next</button>
  <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Save & Mark for Review</button>
  <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Clear response</button>
  <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Mark for Review & Next</button>
</div>



      </div>
      
      
    </div>
    </>
  )
}

export default QuestionsPanel
