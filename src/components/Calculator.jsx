import React, { useState } from "react";

// import icons
import { RiDivideLine } from "react-icons/ri";
import { RiDeleteBack2Line } from "react-icons/ri";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = e => setResult(result.concat(e.target.id))

  const clear = () => setResult("")

  const deleteEl = () => setResult(result.slice((0, -1)))

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    }
    catch (error) {
      setResult("Error")
    }
  }
 
 
  return (
    <div className=" h-screen bg-black flex justify-center items-center  ">
       
      <div className=" h-[700px] border border-violet-900 bg-gray-700 justify-start rounded-lg ">
        <div className="">
       
        <div className="text-cyan-700 border-b-4 border-black  text-5xl pr-5 h-[220px] w-full bg-gray-400 font-bold text-right bottom-0 right-0 pt-40 rounded-lg">{result}</div>
         
          {/* Buttons */}
          <div className="flex-col flex space-y-5 px-3 pt-4 ">
          
            {/* Row 2 */}
            <div className="space-x-5 flex flex-row">
              <button onClick={clear} className="btn-normal">
                AC
              </button>
              <button onClick={deleteEl} className="btn-normal">
                DEL
              </button>
              <button id="%"  onClick={handleClick} className="btn-normal">
               %
              </button>
              <button id="/" onClick={handleClick} className="btn-normal items-center justify-center flex">
              ÷
              </button>
            </div>
            {/* row 3 */}
            <div className="space-x-5 flex flex-row">
              <button id="7" onClick={handleClick} className="btn-normal">
                7
              </button>
              <button id="8" onClick={handleClick} className="btn-normal">
                8
              </button>
              <button id="9" onClick={handleClick} className="btn-normal">
                9
              </button>
              <button id="*" onClick={handleClick} className="btn-normal">
                x
              </button>
            </div>
            {/* row 4 */}
            <div className="space-x-5 flex flex-row">
              <button id="4" onClick={handleClick} className="btn-normal">
                4
              </button>
              <button id="5" onClick={handleClick} className="btn-normal">
                5
              </button>
              <button id="6" onClick={handleClick} className="btn-normal">
                6
              </button>
              <button id="-" onClick={handleClick} className="btn-normal">
                -
              </button>
            </div>
            {/* row 5 */}
            <div className="space-x-5 flex flex-row">
              <button id="1" onClick={handleClick} className="btn-normal">
                1
              </button>
              <button id="2" onClick={handleClick} className="btn-normal">
                2
              </button>
              <button id="3" onClick={handleClick} className="btn-normal">
                3
              </button>
              <button id="+" onClick={handleClick} className="btn-normal">
                +
              </button>
            </div>
            {/* row 6 */}
            <div className="space-x-5 flex flex-row">
              <button id="." onClick={handleClick} className="btn-normal">
                .
              </button>
              <button id="0" onClick={handleClick} className="btn-normal">
                0
              </button>
             <button id="=" onClick={calculate} className="w-[220px] btn-normal ">
                =
             </button>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Calculator;
