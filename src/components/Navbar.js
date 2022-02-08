import React from "react";

class Navbar extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    const test = this.props.handleClick;
    return (
      <React.Fragment>
        <div>
          <button onClick={()=> test("home")}>Home</button>
          <button onClick={()=> test("mSchedule")}>Daily Market Schedule</button>
          <button onClick={()=> test("yProduce")}>Monthly Produce Schedule</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;