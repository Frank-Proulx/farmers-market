import React from "react";

function TodayMonth(props) {
  return(
    <React.Fragment>
      <div>
        <h3>{props.availableProduce.month}</h3>
        <ul>
          {props.availableProduce.selection.map((s)=>
            <li>{s}</li>
          )}
        </ul>
        <hr/>
        <h3>{props.marketSchedule.day}</h3>
        <p>{props.marketSchedule.location}</p>
        <p>{props.marketSchedule.hours}</p>
        <p>{props.marketSchedule.booth}</p>
      </div>
      
    </React.Fragment>
  );
}

export default TodayMonth;