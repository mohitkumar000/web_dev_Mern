import { useState } from "react";
import "./App.css";

function App() {

  const[count,SetCount] = useState(0);
  function decreaseHandler() {
    SetCount(count-1);

    
  } 
  function increaseHandler() {
    SetCount(count+1);

    
  } 
  function resetHandler(){
    SetCount(0);
  }
  return (
   <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[pink] flex-col gap-10">
    <div className="text-[blue] font-medium text-2xl">Increment & Decrement</div> 
    <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[brown]">
      <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[black] text-5xl">
        -
      </button>
      <div className="text-center font-bold gap-12 text-5xl">
        {count}

      </div>
      <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[black] text-5xl" >
        +
      </button>
    </div>
    <button onClick={resetHandler} className="bg-[blue] text-white px-5 py-2 rounded-sm text-lg">
      Reset 
    </button>
   </div>
  );
}

export default App;
