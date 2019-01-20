import React from "react";

const NavBar = ({ user, changeView, logout, getProducts }) => {
  return (
    <nav className="navbar navbar-expand-lg navv">

      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button> */}
      <div className=""  >
        <ul className="navUl">
          {// if the user is not authenticated
          !user && (
            <React.Fragment>
              <li
                className="navList"
                onClick={() => changeView("home")}
              >
                <div className="nav-link">Home</div>
              </li>
              <li
                className="navList"
                onClick={() => changeView("login")}
              >
                <div className="nav-link"> Login</div>
              </li>
              <li
                className="navList"
                onClick={() => changeView("signup")}
              >
                <div className="nav-link">Signup</div>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li className="navList" onClick={() => logout()}>
                <div className="nav-link">Logout</div>
              </li>
            </React.Fragment>
          )
          // if the user authenticated
          }
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;