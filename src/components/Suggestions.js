import React from "react";
import SuggestedUser from "./SuggestedUser";


const suggestionList = [
  {
    name: 'Melissa',
    location: 'Underworld'
  },
  {
    name: 'Erica',
    location: 'Upperworld'
  },
  {
    name: 'Kevin',
    location: 'Middleworld'
  },
  {
    name: 'Ben',
    location: 'Lowerworld'
  }
];


function Suggestions() {
  return (
    <React.Fragment>
    <div class="suggestedUserDiv">
      {suggestionList.map((suggestedUser) =>
      <SuggestedUser name={suggestedUser.name}
      location = {suggestedUser.location} />
      )}
    </div>
    </React.Fragment>
  );
}
export default Suggestions;