import React from "react";

function UserLinks(){
  return(
    <React.Fragment>
    <input class="userButton" id="twits" type="submit" value="Twits"/>
    <input class="userButton" id="following" type="submit" value="Following"/>
    <input class="userButton" id="followers" type="submit" value="Followers"/>
    </React.Fragment>
  );
}

export default UserLinks;