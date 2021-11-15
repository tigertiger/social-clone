import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import obeyImage from "./../img/obey.jpeg";


function Header(){
  return (
    <React.Fragment>
      <div class="container">
        <img src={obeyImage} alt="they live politician" height="400" id="obey" />
        <Nav />
        <Search />
        <br /><br />
        <hr />
      </div>
    </React.Fragment>
  );
}

export default Header;