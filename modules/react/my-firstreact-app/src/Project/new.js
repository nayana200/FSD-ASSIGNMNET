import React from "react";
import "./emp_dashboard.css";

import img2 from "./images/SmartHr_Logo.png";

const App = () => {
  return (
    <div className="container-fulid">
      <div class="navbar d-flex justify-content-between">
        <ul class="nav">
          <li class="nav-link">
            <img src={img2} className="image-navbar" alt="" />
          </li>
          <li class="nav-link">
            {" "}
            <svg
              style={{ color: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-bar-chart-steps"
              viewBox="0 0 16 16"
            >
              <path
                d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z"
                fill="white"
              ></path>
            </svg>
          </li>
          <li class="nav-link">
            <h1 class="navar-text">Dreams Technologies</h1>
          </li>
        </ul>
        <ul class="nav">
          <li class="nav-link navar-text-list">serach</li>

          <li class="nav-link navar-text-list">icon</li>

          <li class="nav-link navar-text-list">admin</li>
        </ul>
      </div>
    </div>
  );
};
export default App;
