import React from "react";
import photo from "../images/wallpaper1.jpg";
import "../components-css/profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="ptofile-child1">
        <div className="ptofile-sub-child1">
          <img src={photo} alt="My Photo" className="ptofile-photo" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
