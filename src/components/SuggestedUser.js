import React from "react";
import PropTypes from "prop-types";

function SuggestedUser(props){
  return (
    <React.Fragment>
      <div class="friends">
        <div class="friendFaces">
          <img src={props.image} />
        </div>
        <div class="friendInfo">
          <h3>{props.name}</h3>
          <p>{props.location}</p>
          <input type="submit" value="Follow" />
        </div>
      </div>
    </React.Fragment>
  );
}

SuggestedUser.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string
};

export default SuggestedUser;