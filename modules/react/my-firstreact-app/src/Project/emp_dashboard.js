import React from "react";
import "./emp_dashboard.css";
import img from "./images/06.jpg";
import img3 from "./images/client.jpg";
import img2 from "./images/SmartHr_Logo.png";
import { Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";
const Empdashboard = () => {
  return (
    <>
      <div className="container-fulid ">
        <div className="navbar d-flex justify-content-between">
          <ul className="nav">
            <li className="nav-link">
              <img src={img2} className="image-navbar" alt="logo" />
            </li>
            <li className="nav-link">
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
            <li className="nav-link">
              <h1 className="navar-text">Dreams Technologies</h1>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-link navar-text-list">
              {" "}
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-pill"
                  aria-label="Search"
                />
                search
              </Form>
            </li>

            <li className="nav-link navar-text-list">
              <i className="fa fa-bell"></i>
            </li>
            <Nav>
              <NavDropdown
                className="navar-text"
                title="English"
                text="white"
                style={{ color: "white" }}
              >
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <li class="nav-link navar-text-list ">
              <i className="fa fa-comment"></i>
            </li>

            <div className="dropdown show mt-2">
              <button
                className="btn dropdown-toggle"
                style={{ border: "transparent" }}
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="image-body" src={img3} alt="Profile" />
              </button>

              <div className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/myProfile">
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/myDashboard">
                    My Dashboard{" "}
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/signOut">
                    Signout
                  </a>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="container-fulid">
        <div className="card shawdow-lg border-0">
          <div className="card-body d-flex bd-highlight mb-3 shadow-lg p-2  mt-1 bg-body rounded">
            <img className="image-body1 mr-2" src={img3} alt="" />
            <h1 className="client-text">
              Welcome, Jhon Deo
              <br />
              <span className="client-text-para">Monday 20 23 12 May</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-8 ">
            <h6 className="content-text-para">TODAY</h6>
            <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
              <div className="icon text-center rounded-circle mr-3 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-monitor fea icon-ex-md text-primary"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="p-2 bd-highlight">
                Richard Miles is off sick today
              </div>
              <div className="ms-auto p-2 bd-highlight">
                <img className="image-body" src={img3} alt="" />
              </div>
            </div>
            <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
              <div className="icon text-center rounded-circle mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-monitor fea icon-ex-md text-primary"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="p-2 bd-highlight">You are away today</div>

              <div className="ms-auto p-2 bd-highlight">
                <img className="image-body" src={img3} alt="" />
              </div>
            </div>
            <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
              <div className="icon text-center rounded-circle mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-monitor fea icon-ex-md text-primary"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="p-2 bd-highlight">
                You are working from home today
              </div>

              <div className="ms-auto p-2 bd-highlight">
                <img className="image-body" src={img3} alt="" />
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <p className="content-text-para">PROJECTS</p>
            <div className="bd-highlight mb-3 shadow-lg pt-2 pb-4 mt-3 bg-body rounded">
              <div className=" card-title"></div>
              <div className="card-body d-flex justify-content-around">
                <div>
                  <h6 className="content-text text-center">71</h6>Total task
                </div>
                <div className="vr mb-3"></div>
                <div>
                  <h6 className="content-text text-center">15 HOURS</h6>
                  Remaining
                </div>
              </div>
              <div className="text-center mt-2">
                <h6 className="content-text">2</h6>Totol Projects
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <h6 className="content-text-para mt-4">TOMORROW</h6>
            <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
              <div className="icon text-center rounded-circle mr-3 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-user-check fea icon-ex-md text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              </div>
              <div className="p-2 bd-highlight">
                2 people will be away tomorrow
              </div>

              <div className="ms-auto p-2 bd-highlight">
                <img className="image-body" src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <p className="content-text-para">YOUR LEAVE</p>
            <div className="bd-highlight mb-3 shadow-lg pt-3 pb-2 mt-3 bg-body rounded">
              <div className=" card-title"></div>
              <div className="card-body d-flex justify-content-around">
                <div>
                  <h6 className="content-text text-center">4.5</h6>Leave Taken
                </div>
                <div className="vr mb-4"></div>
                <div>
                  <h6 className="content-text text-center">15 HOURS</h6>
                  Remaining
                </div>
              </div>
              <div className="text-center mt-2">
                <button className="btn btn-color">Apply Leave</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <h6 className="content-text-para">NEXT SEVEN DAYS</h6>
            <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
              <div className="icon text-center rounded-circle mr-3 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-monitor fea icon-ex-md text-primary"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="p-2 bd-highlight">
                2 people are going to be away
              </div>
              <div className="ms-auto p-2 bd-highlight">
                <img className="image-body" src={img3} alt="" />
              </div>
            </div>
            <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
              <div className="icon text-center rounded-circle mr-3 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-user-check fea icon-ex-md text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              </div>
              <div className="p-2 bd-highlight">
                Your First day to be on Thursday
              </div>

              <div className="ms-auto p-2 bd-highlight">
                <img className="image-body" src={img3} alt="" />
              </div>
            </div>
            <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
              <div className="icon text-center rounded-circle mr-3 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-user-check fea icon-ex-md text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              </div>
              <div className="p-2 bd-highlight">
                It's Spring Bank Holiday on Monday
              </div>
              <div className="ms-auto p-2 bd-highlight">
                <img className="image-body" src={img} alt="" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <p className="content-text-para mt-3">YOUR TIME OF ALLOWANCE</p>
            <div className="bd-highlight mb-3 shadow-lg pt-3 pb-3 mt-3 bg-body rounded">
              <div className=" card-title"></div>
              <div className="card-body d-flex justify-content-around">
                <div>
                  <h6 className="content-text text-center">5.0 HOURS</h6>
                  Approved
                </div>
                <div className="vr"></div>
                <div>
                  <h6 className="content-text text-center">15 HOURS</h6>
                  Remaining
                </div>
              </div>
              <div className="text-center mt-2">
                <button className="btn btn-color">Apply Time OFF</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empdashboard;
