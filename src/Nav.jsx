import React from "react";
import "./Nav.css";

function Nav() {
  const updateMenu = () => {};

  return (
    <nav className="menu">
      <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />
      <label></label>
      <a href="https://www.figma.com/">
        <img
          className="logo"
          src="data:image/png;base64,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"
        ></img>
      </a>
      <ul>
        <li>
          <a className="dropdown-arrow" href="#">
            Prodects
          </a>
          <ul className="sub-menus">
            <li>
              <a href="#">Figma</a>
            </li>
            <li>
              <a href="#">FigJam</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-arrow" href="#">
            Enterprise
          </a>
          <ul className="sub-menus">
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Contact Sales</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a className="dropdown-arrow" href="#">
            Recourses
          </a>
          <ul className="sub-menus">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Template</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Parent</a>
            </li>
            <li>
              <a href="#">Plugin and widgets</a>
            </li>
            <li>
              <a href="#">Best Practices</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-arrow" href="#">
            Community
          </a>
          <ul className="sub-menus">
            <li>
              <a href="#">Events and Live Streams</a>
            </li>
            <li>
              <a href="#">Education Programs</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Contact Sales</a>
        </li>
        <li>
          <a href="#">log in</a>
        </li>
        <li>
          <button className="btn btn-primary">Get Started for Free</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
