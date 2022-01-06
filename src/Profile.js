import * as React from "react";
import './profile.css';
export function Profile() {
  return (
    <div id="Profile" className="profile">
      <div className="content">
        <img
          id="profilepic"
          src="https://avatars.githubusercontent.com/u/90443069?v=4"
          alt="Rajkumar"
        />
        <div class="css-typing">
          <p>Raj here, Enthusiastic web developer.</p> 
          <p>I adore creating beautiful and functional webpages </p>
          <p>that intuitively solve problems.</p>
        </div>
      </div>
    </div>
  );
}
