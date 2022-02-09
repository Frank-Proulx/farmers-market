import React from "react";

function TodayMonth(props) {
  return(
    <React.Fragment>
      <div id="today-month">
        <h3>Produce Available In: {props.availableProduce.month}</h3>
        <ul>
          {props.availableProduce.selection.map((s,index)=>
            <li key={index}>{s}</li>
          )}
        </ul>
        <hr/>
        <h3>{props.marketSchedule.day}'s Location:</h3>
        <p>{props.marketSchedule.location}</p>
        <p>{props.marketSchedule.hours}</p>
        <p>{props.marketSchedule.booth}</p>
      </div>
      
    </React.Fragment>
  );
}

export default TodayMonth;