import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import obeyImage from "./../img/obey.jpeg";


function Header(){
  return (
    <React.Fragment>
      <img src={obeyImage} alt="they live politician" />
      <Nav />
      <Search />
    </React.Fragment>
  );
}

export default Header;