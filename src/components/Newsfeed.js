import React from "react";
import Posts from "./Posts";  
import UserPost from "./UserPost";
import artImage from "./../img/art.png";
import scottImage from "./../img/ts-hutley.jpeg";
import erikImage from "./../img/erik.jpeg";

const postList = [
  {
    name: 'Erik',
    twit: '* "The Imperial March" plays softly on the piano in the background *',
    image: erikImage
  },
  {
    name: 'Art',
    twit: 'Why does nobody believe that I am spiderman?  I look like spiderman. I talk like spiderman. I have spiderman Underoos.',
    image: artImage
  },
  {
    name: 'T.S. Hutley',
    twit: 'What do you mean which Tool album is my favorite? IT\'S ALL OF THEM! I want to know if the text wraps around. So I just going to keep typing for a bit to see. Let\'s go to career services! What really is a career though? And what is service? It all seems so abstract, like two boats floating along water exactly the same way a bowling ball wouldnt.',
    image: scottImage
  }
]

function Newsfeed() {
  return (
    <React.Fragment>
      <div class="feed">
        <UserPost />
        {postList.map((posts) => 
        <Posts name={posts.name}
        postText={posts.twit}
        image={posts.image}/>
        )}
      </div>
    </React.Fragment>
  );
}

export default Newsfeed;