import React from 'react'


function Button({btnValueCalculate}) {

    const button = [
      {
      key : '1',
      value : '+',
    },
    {
      key : '2',
      value : '-',
    },
    {
      key : '3',
      value : '*',
    },
    {
      key : '4',
      value : '/',
    },
    {
      key : '5',
      value : '7',
    },
    {
      key : '6',
      value : '8',
    },
    {
      key : '7',
      value : '9',
    },
    {
      key : '8',
      value : 'Back',
    },
    {
      key : '9',
      value : '4',
    },
    {
      key : '10',
      value : '5',
    },
    {
      key : '11',
      value : '6',
    },
    {
      key : '12',
      value : '1',
    },
    {
      key : '13',
      value : '2',
    },
    {
      key : '14',
      value : '3',
    },
    {
      key : '15',
      value : '0',
    },
    {
      key : '16',
      value : '.',
    },
    {
      key : '17',
      value : 'C',
    },
    {
      key : '18',
      value : '=',
      style : {
        height : '160px'
      }
    },
  ]

  return (
    <>
     <div className="row">
              <div className="col-12" id="btn_box">
                {button.map((btnVal)=>{
                   return ( <div className="mybtn" onClick={btnValueCalculate} key={btnVal.key}>{btnVal.value}</div>)
                })}    
        </div>
    </div> 
    </>
  )
}

export default Button
