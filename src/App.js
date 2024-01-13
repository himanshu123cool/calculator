import React, { useState } from "react";
import Screen from "./Screen";
import Heading from "./Heading";
import Button from "./Button";

function App() {

  const [val, setVal] = useState("");

  const calculate = (event)=>{
      let buttonText = event.target.innerText
    if(buttonText==='C'){
      setVal("");
    }
    else if(buttonText==='='){
      let result = eval(val);
      setVal(result);
    }
    else if(buttonText==='Back'){
      let backValue = val.slice(0, -1); 
      setVal(backValue);
    }
    else{
      let newValue = val + buttonText
      setVal(newValue);
    };
  }
  return (
    <>
      <div className="container-fluid" id="container_box">
        <Heading/>
        <div className="row d-flex align-items-center justify-content-center flex-column">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4" id="calculator_box">
            <Screen screenVal={val}/>
            <Button btnValueCalculate={calculate}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
