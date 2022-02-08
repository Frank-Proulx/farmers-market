import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
// import Home from "./Home";
// import YearlyProduce from "./YearlyProduce";
// import MonthSchedule from "./MonthSchedule";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visibleOnMain: "home"
    };
    this.handleClick = this.handleClick.bind(this);  
  }

  handleClick = (value) => this.setState({ visibleOnMain: value});
  

  render() {
    return ( 
      <React.Fragment>
        <Navbar 
          handleClick={this.handleClick}
        />
        <Body
          mainContent={this.state.visibleOnMain}
        />
      </React.Fragment>
    );
  }
}
    
  
export default App;