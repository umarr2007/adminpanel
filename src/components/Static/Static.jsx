import React from "react";
import "./static.css";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Static() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container">
        <div className="section_wrapper">
          <Sidebar />
          
          <div className="static_box_wrapper">
            <div className="static_box">
              <h2 className="static_box_title">Company Facts</h2>
              <p className="static_box_description">Employees</p>
              <div className="static_box_img">
                <img src="/diagrams.svg" alt="" />
              </div>
              <div className="static_box_text">
                <p className="country">Paris</p>
                <p className="country">Bangkok</p>
                <p className="country">San Francisco</p>
              </div>
            </div>

            <div className="static_box">
              <h2 className="static_box_title">Statistics</h2>
              <div className="static_box_img">
                <img src="/diagnos.svg" alt="" />
              </div>
              <div className="static_box_text">
                <p className="country">Paris</p>
                <p className="country">Bangkok</p>
                <p className="country">San Francisco</p>
              </div>
            </div>

            <div className="static_box">
              <h2 className="static_box_title">Assigned Risks</h2>
              <p className="no_risk">There are no risks assigned.</p>
            </div>

            <div className="static_box">
              <h2 className="static_box_title">Assigned Action Items</h2>
              <p className="no_risk">There are no action items assigned.</p>
            </div>
          </div>
          <div className="static_box_button">
            <button className="static_box_btn  ">Add Widget</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Static;



