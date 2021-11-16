import React from "react";
import UserInfo from "./UserInfo";
import Newsfeed from "./Newsfeed";
import Suggestions from "./Suggestions";

function Body(){
  return (
    <React.Fragment>
      <div class="bodyContainer">
        <div class="gridItem1">
          <UserInfo />
        </div>
        <div class="gridItem3">
          <Newsfeed />
        </div>
        <div class="gridItem2">
          <Suggestions />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Body;