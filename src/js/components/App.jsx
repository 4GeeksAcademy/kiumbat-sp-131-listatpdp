import React from "react";



const SecondCounter = (props) =>{

  return(
    <div className="container"  style={{backgroundColor: "black"}}>
      {props.seconds}
      </div>

  )
}
export default SecondCounter;