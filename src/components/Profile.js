import React from "react";
import photo from "../images/wallpaper1.jpg";

function Profile() {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "aut0",
        marginRight: "auto",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          width: "400px",
          height: "400px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "200px",
        }}
      >
        <div
          style={{
            backgroundColor: "aqua",
            width: "85%",
            height: "85%",
            margin: "auto",
            marginTop: "30px",
            overflow: "hidden",
            borderRadius: "175px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={photo}
            alt="My Photo"
            style={{
              width: "85%",
              height: "85%",
              borderRadius: "150px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
