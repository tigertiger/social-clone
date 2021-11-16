import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div class="friends">
        <div class="friendFacesPosts">
          <img src={props.image} width="90px" />
        </div>
        <div class="friendInfoPosts">
          <h4>{props.name}</h4>
          <p>{props.postText}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  postText: PropTypes.string
}

export default Post;