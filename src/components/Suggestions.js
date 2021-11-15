import React from "react";
import SuggestedUser from "./SuggestedUser";
import benImage from "./../img/benkelly.jpeg";
import chynnaImage from "./../img/chynna.jpeg";
import ericaImage from "./../img/erica.jpeg";
import melissaImage from "./../img/terrifying-melissa.jpeg"



const suggestionList = [
  {
    name: 'Melissa',
    location: 'Underworld',
    image: melissaImage
  },
  {
    name: 'Erica',
    location: 'Upperworld',
    image: ericaImage
  },
  {
    name: 'Chynna',
    location: 'Middleworld',
    image: chynnaImage
  },
  {
    name: 'Ben',
    location: 'Lowerworld',
    image: benImage
  }
];


function Suggestions() {
  return (
    <React.Fragment>
    <div class="suggestedUserDiv">
      <h2>Suggested Users</h2>
      {suggestionList.map((suggestedUser) =>
      <SuggestedUser name={suggestedUser.name}
      location = {suggestedUser.location} 
      image={suggestedUser.image}/>
      )}
    </div>
    </React.Fragment>
  );
}
export default Suggestions;