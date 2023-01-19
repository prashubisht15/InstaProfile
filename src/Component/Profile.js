import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./apply.css";
const Profile = () => {
  const url1 = "https://jsonplaceholder.typicode.com/users/1";
  const [profileInfo, setProfileInfo] = useState([]);
  const makeApiCall = async () => {
    try {
      const response = await axios.get(url1);
      setProfileInfo(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    makeApiCall();
  }, []);
  //   const profileInfoSize = Object.keys(profileInfo).length;
  return (
    <header>
      <div className="container">
        <div className="profile">
          <div className="profile-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0WvAWqi2RuykBzJgI_0Oh2xnSS0ngheJOm0MKmJzOA&s"></img>
          </div>
          <div className="profile-user-settings">
            <h1 className="profile-user-name">{profileInfo.username}</h1>
            <button className="btn profile-edit-btn">follow</button>
            <button className="btn profile-edit-btn">message</button>
          </div>
          <div className="profile-stats">
            <ul>
              <li>
                <span className="profile-stat-count">5000 </span>posts
              </li>
              <li>
                <span className="profile-stat-count">150k </span>followers
              </li>
              <li>
                <span className="profile-stat-count">286 </span>following
              </li>
            </ul>
          </div>
          <div className="profile-bio">
            <p>
              <span className="profile-real-name">{profileInfo.name}</span>
            </p>
            <p>
              <span className="profile-real-name">{profileInfo.website}</span>
            </p>
            {/* <p><span className="profile-real-name">{profileInfo["company"]["catchPhrase"]}</span></p> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Profile;
