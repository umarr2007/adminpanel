import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IoMdSearch } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import Header from "../Dashborad/Header";
import { Pagination } from "antd";

import { useNavigate } from "react-router-dom";
import "./allpeople.css";
function Allpeople() {
  const navigate = useNavigate();

  const data = [
    {
      fullname: "Konstantin Konstantinopolsky",
      branch: "London",
      division: "Management",
      userType: "Delivery billable",
      contractType: "Employee",
      startDate: "12.01.2013",
      id: 14321,
    },
    {
      fullname: "Andrew Salgado",
      branch: "London",
      division: "Management",
      userType: "Delivery billable",
      contractType: "Employee",
      startDate: "21.04.2014",
      id: 21345,
    },
    {
      fullname: "Magdalena Edinborough",
      branch: "Liverpool",
      division: "Operation",
      userType: "Delivery billable",
      contractType: "Subcontractor",
      startDate: "02.11.2015",
      id: 1894,
    },
    {
      fullname: "Matt Travis",
      branch: "Liverpool",
      division: "Management",
      userType: "Delivery billable",
      contractType: "Employee",
      startDate: "02.11.2016",
      id: 135567,
    },
    {
      fullname: "Daniel Wellington",
      branch: "Manchester",
      division: "Operation",
      userType: "Delivery billable",
      contractType: "Employee",
      startDate: "02.11.2012",
      id: 10973,
    },
    {
      fullname: "Lucia Mirosini",
      branch: "Leeds",
      division: "Finance",
      userType: "Delivery billable",
      contractType: "Employee",
      startDate: "02.11.2011",
      id: 6324,
    },
    {
      fullname: "Anette Brown",
      branch: "London",
      division: "Operation",
      userType: "Delivery billable",
      contractType: "Employee",
      startDate: "02.11.2005",
      id: 4322,
    },
    {
      fullname: "Christian Lambrou",
      branch: "London",
      division: "Finance",
      userType: "Delivery billable",
      contractType: "Employee",
      startDate: "02.11.2009",
      id: 4521,
    },
    {
      fullname: "Phil Collins",
      branch: "Manchester",
      division: "Finance",
      userType: "Delivery billable",
      contractType: "Subcontractor",
      startDate: "02.11.2008",
      id: 1422,
    },
    {
      fullname: "Winston Holliday",
      branch: "London",
      division: "Operation",
      userType: "Delivery billable",
      contractType: "Employee",
      startDate: "02.11.2017",
      id: 45667,
    },
    {
      fullname: "Carla Andrade",
      branch: "London",
      division: "Operation",
      userType: "Delivery billable",
      contractType: "Employee",
      startDate: "02.11.2017",
      id: 98871,
    },
  ];

  return (
    <section>
      <Header />
      <div className="container">
        <div className="section_wrapper">
          <Sidebar />
          <div className="section_top_wrapper">
            <div className="people_box_wrapper">
              <div onClick={() => navigate("/people")} className="people_box">
                <div className="people_icon">
                  <IoMdSearch className="box_icon" />
                  <h2 className="people_box_title">Find person</h2>
                </div>
              </div>
              <div className="people_box">
                <div className="people_icon">
                  <MdPeopleAlt className="box_icon" />
                  <h2 className="people_box_title">All people</h2>
                </div>
              </div>
            </div>
            <div className="active_people_wrapper">
              <div className="active_people_text">
                <h2 className="active_people_title">List of active people</h2>
                <button className="active_people_btn">Export to Excel</button>
              </div>
              <div className="table-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th className="table-cell">Delivery billable</th>
                      <th className="table-cell">Delivery unbillable</th>
                      <th className="table-cell">Administration</th>
                      <th className="table-cell">CEO</th>
                      <th className="table-cell">Sales</th>
                      <th className="table-cell">Marketing</th>
                      <th className="table-cell">Finance</th>
                      <th className="table-cell">HR</th>
                      <th className="table-cell">IT</th>
                      <th className="table-cell">Legal</th>
                      <th className="table-cell">PPS</th>
                      <th className="table-cell">L & D</th>
                      <th className="table-cell">OG</th>
                      <th className="table-cell">OBS</th>
                      <th className="table-cell">EBO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-number">233</td>
                      <td className="table-number">11</td>
                      <td className="table-number">8</td>
                      <td className="table-number">1</td>
                      <td className="table-number">15</td>
                      <td className="table-number">11</td>
                      <td className="table-number">8</td>
                      <td className="table-number">4</td>
                      <td className="table-number">3</td>
                      <td className="table-number">2</td>
                      <td className="table-number">15</td>
                      <td className="table-number">1</td>
                      <td className="table-number">5</td>
                      <td className="table-number">2</td>
                      <td className="table-number">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="all_wrapper">
              <div className="allpeople_box">
                <h2 className="allpeople_box_title">Filter</h2>
                <div className="allpeople_checkbox_wrapper">
                  <div className="filter_section">
                    <h3 className="filter_subtitle">Regions</h3>
                    <div className="checkbox_item">
                      <input
                        className="mycheckbox"
                        type="checkbox"
                        defaultChecked
                      />
                      <label className="label_text">UK (111)</label>
                    </div>
                    <div className="checkbox_item">
                      <input className="mycheckbox" type="checkbox" />
                      <label className="label_text">US (98)</label>
                    </div>
                    <div className="checkbox_item">
                      <input className="mycheckbox" type="checkbox" />
                      <label className="label_text">France (45)</label>
                    </div>
                  </div>

                  <div className="filter_section">
                    <h3 className="filter_subtitle">Branches</h3>
                    <div className="checkbox_item">
                      <input
                        className="mycheckbox"
                        type="checkbox"
                        defaultChecked
                      />
                      <label className="label_text">London (111)</label>
                    </div>
                    <div className="checkbox_item">
                      <input className="mycheckbox" type="checkbox" />
                      <label className="label_text">Liverpool (12)</label>
                    </div>
                    <div className="checkbox_item">
                      <input className="mycheckbox" type="checkbox" />
                      <label className="label_text">Manchester (45)</label>
                    </div>

                    <div className="checkbox_item">
                      <input className="mycheckbox" type="checkbox" />
                      <label className="label_text">Leeds (3)</label>
                    </div>

                    <div className="checkbox_item">
                      <input className="mycheckbox" type="checkbox" />
                      <label className="label_text">Cardiff (1)</label>
                    </div>
                  </div>
                  <div className="filter_section">
                    <h3 className="filter_subtitle">Divisions</h3>
                    <div className="checkbox_item">
                      <input
                        className="mycheckbox"
                        type="checkbox"
                        defaultChecked
                      />
                      <label className="label_text">Management (43)</label>
                    </div>
                    <div className="checkbox_item">
                      <input className="mycheckbox" type="checkbox" />
                      <label className="label_text">Finance (10)</label>
                    </div>
                    <div className="checkbox_item">
                      <input className="mycheckbox" type="checkbox" />
                      <label className="label_text">Legal (1)</label>
                    </div>

                    <div className="checkbox_item">
                      <input className="mycheckbox" type="checkbox" />
                      <label className="label_text">Operation (1)</label>
                    </div>

                    <div className="checkbox_item">
                      <input className="mycheckbox" type="checkbox" />
                      <label className="label_text">IT (1)</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tables">
                <div className="employee-table-container">
                  <h3 className="employee-title">Found: 110</h3>
                  <table className="employee-table">
                    <thead>
                      <tr>
                        <th className="employee-th">Full name</th>
                        <th className="employee-th">Branch</th>
                        <th className="employee-th">Division</th>
                        <th className="employee-th">User type</th>
                        <th className="employee-th">Contract type</th>
                        <th className="employee-th">Start date</th>
                        <th className="employee-th">ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, index) => (
                        <tr key={index} className="employee-tr">
                          <td className="employee-td">{row.fullname}</td>
                          <td className="employee-td">{row.branch}</td>
                          <td className="employee-td">{row.division}</td>
                          <td className="employee-td">{row.userType}</td>
                          <td className="employee-td">{row.contractType}</td>
                          <td className="employee-td">{row.startDate}</td>
                          <td className="employee-td">{row.id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Pagination
                    style={{ margin: "20px" }}
                    defaultCurrent={1}
                    total={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Allpeople;
