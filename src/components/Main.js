import React from "react";
import Home from "./Home";
import YearlyProduce from "./YearlyProduce";
import MonthSchedule from "./MonthSchedule";

function Main(props){
  let thing;
  if(props.content === "home"){
    thing = <Home />
  }else if(props.content === "mSchedule"){
    thing = <MonthSchedule marketSchedule={props.marketSchedule}/>
  }else if(props.content === "yProduce"){
    thing = <YearlyProduce availableProduce = {props.availableProduce}/>
  }
  return(
    <React.Fragment>
      <div>
        {thing}
      </div>
    </React.Fragment>
  );
}
export default Main;