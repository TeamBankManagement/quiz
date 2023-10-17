import React from 'react'
import SquareDivs from './SquareDivs'

const NoOfQuestions = () => {
  return (
    <>
     <div className="col-span-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:col-span-4 lg:grid-cols-2 lg:gap-6">
      {/* Status */}
      <div className="card col-span-2 px-4 pb-5 sm:px-5">
        <div className="flex items-center justify-between py-3">
          <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Status
          </h2>
          <div x-data="usePopper({placement:'bottom-end',offset:4})"  className="inline-flex">
            <button x-ref="popperRef" className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
       
          </div>
        </div>
        <div className="flex grow space-x-5">
          
          <div className="flex">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-lg font-bold rounded-lg">
          01
        </div>
        <p className="ml-2">Not Visited</p>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-red-500 flex items-center justify-center text-white text-lg font-bold rounded-lg">
          02
        </div>
        <p className="ml-2">Not Answered</p>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-green-500 flex items-center justify-center text-white text-lg font-bold rounded-lg">
          03
        </div>
        <p className="ml-2">Answered</p>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center text-white text-lg font-bold rounded-lg">
          04
        </div>
        <p className="ml-2">Marked for Review</p>
      </div>
      {/* Continue adding divs with different styles as needed */}
    </div>
          
          </div>
        
        </div>
      </div>
     {/* No of Questions */}
      <div className="card col-span-2 px-4 pb-5 sm:px-5 h-80">
        <div className="flex items-center justify-between py-3">
          <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
            No of Questions
          </h2>
          <div x-data="usePopper({placement:'bottom-end',offset:4})"  className="inline-flex">
            <button x-ref="popperRef" className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
       
          </div>
        </div>
        <div className="flex">
          
          <div class="overflow-y-auto h-60 w-full top-0 right-0 scrollbar-sm">
              {/* Scroll Card here */}
        <SquareDivs/>


          </div>
        </div>
      </div>
      
     
    </div>  
    </>
  )
}

export default NoOfQuestions