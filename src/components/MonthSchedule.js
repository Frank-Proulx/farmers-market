import React from "react";

function MonthSchedule(props){
  return(
    <React.Fragment>
      <div id="monthlySchedule">
        <h3>Daily Schedule For This Month</h3>
        {props.marketSchedule.map((e,index)=>{
          return(
          <div key = {index+"div"}>
            
            <h3>{e.day}</h3>
            <p>{e.location}</p>
            <p>{e.hours}</p>
            <p>{e.booth}</p>
          </div>)
        })}
        </div>
    </React.Fragment>
  );
}
export default MonthSchedule;


