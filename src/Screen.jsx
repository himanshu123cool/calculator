import React from "react";

function Screen( {screenVal} ) {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <input type="text" id="screen" value={screenVal} readOnly/>
        </div>
      </div>
    </>
  );
}

export default Screen;
