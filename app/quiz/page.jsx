import React from 'react'
import NoOfQuestions from './components/NoOfQuestions'
import Questions from './components/QuestionsPanel'
import Header from './components/Headers'
import QuizHeader from './components/QuizHeader'

const page = () => {
  return (
    <>
    <Header/>
    <QuizHeader/>
      <div className="main-content w-full px-[var(--margin-x)] pb-8 ">
      <div className="main-content w-full px-[var(--margin-x)] pb-8">
  <div className="mt-4  grid grid-cols-12 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
  <Questions/>
  <NoOfQuestions/>
     
</div>
</div>
</div>
    </>
  )
}

export default page