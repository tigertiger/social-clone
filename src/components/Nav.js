import React from "react";

function Nav(){
  return(
    <React.Fragment>
      <div class="navDiv">
      <input class="navButton" id="home" type="submit" value="Home"/>
      <input class="navButton" id="notifications" type="submit" value="Notifications"/>
      <input class="navButton" id="messages" type="submit" value="Messages"/>
    </div>
    </React.Fragment>
  );
}
export default Nav;