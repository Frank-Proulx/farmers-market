import React from "react";

function MonthSchedule(props){
  return(
    <React.Fragment>
        <h3>Month Schedule</h3>
        {props.marketSchedule.map((e,index)=>{
          return(
          <div key = {index+"div"}>
            <hr/>
            <h3>{e.day}</h3>
            <p>{e.location}</p>
            <p>{e.hours}</p>
            <p>{e.booth}</p>
          </div>)
        })}
    </React.Fragment>
  );
}
export default MonthSchedule;


