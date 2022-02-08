import React from "react";
import Header from "./Header";
import Body from "./Body";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visibleOnMain: "home"
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let mainContent = null;
    switch(this.state.visibleOnMain){
      case "home":
        mainContent = <Home />
        break;
      case "mSchedule":
        mainContent = <MonthSchedule />
        break;
      case "yProduce":
        mainContent = <YearProduce />
        break;
    }
  
    return ( 
      <React.Fragment>
        <Header />
        <Body />
      </React.Fragment>
    );
  }
}
export default App;