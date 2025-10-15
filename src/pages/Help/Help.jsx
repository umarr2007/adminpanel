import React from "react";
import "./help.css";
import Header from "../Dashborad/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function Help() {
  return (
    <section>
      <Header />
      <div className="container">
        <div className="section_wrapper">
          <Sidebar />
          <div className="admin_box">
            <div className="admin_placeholder">
              <span className="dot"></span>
              <span className="text">Help Page</span>
              <span className="dots">...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
