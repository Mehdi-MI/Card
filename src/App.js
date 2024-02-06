import React from 'react';
import './App.css';

function App() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-picture" src="/audi_rs6.jpg" alt="" />
        <div className="profile-info">
          <div>
            <h1 className="name">Hasbellaoui Mehdi</h1>
            <p className="username">@hasbellaouimehdi</p>
          </div>
          <div>
          <button className="follow-button">Follow</button>
          </div>
        </div>
      </div>
      <div className="profile-body">
        <p className="bio">Full-stack developer, @Mehdi</p>
      </div>
      <div className="stats">
        <span className="following">4 Following</span>
        <span className="followers">97.1K Followers</span>
      </div>
    </div>
  );
}

export default App;
