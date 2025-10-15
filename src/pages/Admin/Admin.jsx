import React from "react";
import Header from "../Dashborad/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./admin.css";

function Admin() {
  return (
    <section>
      <Header />
      <div className="container">
        <div className="section_wrapper">
          <Sidebar />
          <div className="admin_box">
            <div className="admin_placeholder">
              <span className="dot"></span>
              <span className="text">Admin Page</span>
              <span className="dots">...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
