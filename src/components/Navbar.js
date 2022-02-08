import React from "react";

function Navbar(){
  return (
    <React.Fragment>
      <div>
        <button onClick={this.handleClick}>Home</button>
        <button onClick={this.handleClick}>Daily Market Schedule</button>
        <button onClick={this.handleClick}>Monthly Produce Schedule</button>
      </div>
    </React.Fragment>
  );
}

export default Navbar;