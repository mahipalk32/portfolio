import React from "react";
import photo from "../images/wallpaper1.jpg";

function Profile() {
  return (
    <div
      style={{
        display: "flex",
        // marginLeft: "aut0",
        // marginRight: "auto",
        justifyContent: "center",
        alignItems:"center"
      }}
    >
      <div
        style={{
          backgroundColor: "#0B2447",
          width: "300px",
          height: "300px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "175px",
        }}
      >
        <div
          style={{
            backgroundColor: "#B8E8FC",
            width: "85%",
            height: "85%",
            margin: "auto",
            marginTop: "25px",
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
