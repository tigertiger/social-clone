import React from "react";
import PropTypes from "prop-types";

function SuggestedUser(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.location}</p>
    </React.Fragment>
  );
}

SuggestedUser.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string 
};

export default SuggestedUser;