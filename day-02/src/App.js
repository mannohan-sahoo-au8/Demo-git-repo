import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        className="image"
        src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wyT0?ver=77cc"
        alt="background"
      ></img>
      <form className="login">
        <h1 className="headtag">LOGIN FORM</h1>
        <label htmlFor="UserName">UserName</label>
        <br />
        <input
          type="text"
          name="userName"
          className="login-input"
          placeholder="Username"
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          className="login-input1"
          placeholder="Password"
        ></input>
        <br />
        <button className="button">Login</button>
      </form>
    </div>
  );
}

export default App;
