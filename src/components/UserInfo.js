import React from "react";
import userImage from "./../img/userPortrait.jpg";
import UserLinks from "./UserLinks";

function UserInfo(){
  const userName = "Kevin";
  return (
    <div id="userInfoContainer">
      <div id="userInfoBlock">
        <img src={userImage} id="userPortrait" />
        <h3 id="userName">{userName}</h3>
        <div id="userLinksDiv">
          <UserLinks/>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;