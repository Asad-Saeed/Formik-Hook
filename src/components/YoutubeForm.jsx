import React from "react";

const YoutubeForm = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Formic Library</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="email">Email Address:</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="channel">Channel Name:</label>
        <input id="channel" name="channel" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
