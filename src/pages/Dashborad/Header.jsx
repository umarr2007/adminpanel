import React from "react";
import "./dashboard.css";
import { useState } from "react";
import { Dropdown } from "antd";
import ProfileDropdown from "./Dropdown";
import { Input } from "antd";
function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <header className="header">
        <div className="header_container">
          <div className="header_wrapper">
            <div className="header_left">
              <div className="dashboard_box">
                <div className="dashboard_wrapper">
                  <img src="/man.svg" alt="" />
                  <h2 className="dashboard_name">Dominique Ch.</h2>
                  <ProfileDropdown />
                </div>
              </div>
            </div>

            <div className="header_right">
              <div className="header_right_inputs">
                <div className="left">
                  <img src="/lupa.svg" alt="search" />
                  <Input placeholder="Search" />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
