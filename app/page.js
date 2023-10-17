import Link from 'next/link';
import React from 'react';

function App() {
  return (

    <div className="h-screen flex flex-col">
      <div className="bg-blue-500 p-9">
      <Link href='/quiz'>
        Start Quiz
      </Link>
      </div>
      
      
    </div>
  );
}

export default App;
