import React from "react";
import moment from "moment";

function Header() {
  return (
    <header className="app-header">
      <h1>My Day</h1>
      <div>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
    </header>
  );
}

export default Header;
