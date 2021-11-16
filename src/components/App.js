import React from "react";
import Header from "./Header";
import Body from "./Body";
import Suggestions from "./Suggestions";

function App(){
  return (
    <React.Fragment>
      <div class="container">
        <Header />
        <Body />
      </div>
    </React.Fragment>
  );
}

export default App;