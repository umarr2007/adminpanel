import React from "react";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineInbox } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import Header from "../Dashborad/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import "./allproject.css";
import { Checkbox } from "antd";
import { Pagination } from "antd";

function Allproject() {
  const navigate = useNavigate();

  const data = [
    {
      practice: "ENG",
      project: "ABC app",
      short: "ABCAPP",
      status: "In progress",
      start: "11.01.2008",
      end: "11.01.2009",
      account: "ABC",
      region: "Latin America",
      industry: "Utilities",
      source: "Customer",
      billing: "Corporation",
    },
  ];
  return (
    <section>
      <Header />
      <div className="container">
        <div className="section_wrapper">
          <Sidebar />

          <div className="section_top_wrapper">
            <div className="top_box_wrapper">
              <div
                onClick={() => navigate("/projects")}
                className="project_box_icon"
              >
                <div className="project_icon">
                  <IoMdSearch className="box_icon" />
                  <h2 className="project_icon_title">Find project</h2>
                </div>
              </div>

              <div
                onClick={() => navigate("/allproject")}
                className="project_box_icon"
              >
                <div className="project_icon">
                  <AiOutlineInbox className="box_icon" />
                  <h2 className="project_icon_title">All projects</h2>
                </div>
              </div>

              <div className="project_box_icon">
                <div className="project_icon">
                  <MdAccountCircle className="box_icon" />
                  <h2 className="project_icon_title">Accounts</h2>
                </div>
              </div>
            </div>
            <div className="project_list_box">
              <h2 className="project_list_title">Project list</h2>
              <div className="list_wrapper">
                <div className="list_left">
                  <p className="list_title">Industry</p>
                </div>
                <div className="list_right">
                  <button className="industry-btn">All</button>
                  <button className="industry-btn">Banking</button>
                  <button className="industry-btn">Financial</button>
                  <button className="industry-btn">Government</button>
                  <button className="industry-btn">Healthcare</button>
                  <button className="industry-btn">Hi-Tech</button>
                  <button className="industry-btn">Insurance</button>
                  <button className="industry-btn">ISV</button>
                  <button className="industry-btn">Logistics</button>
                  <button className="industry-btn">Media</button>
                  <button className="industry-btn">Pharma</button>
                  <button className="industry-btn">Public</button>
                  <button className="industry-btn">Retail</button>
                  <button className="industry-btn">Technology</button>
                  <button className="industry-btn">Telecom</button>
                  <button className="industry-btn">Utilities</button>
                  <button className="industry-btn">Internal</button>
                  <button className="industry-btn">Others</button>
                </div>
              </div>
              <div className="all_project_wrapper">
                <div className="checkbox_list">
                  <div className="status_left">
                    <p className="status_text">Status</p>
                  </div>
                  <div className="status_right">
                    <input type="checkbox" id="user-type" />
                    <label htmlFor="user-type" className="status_title">
                      Progress{" "}
                    </label>
                  </div>
                  <div className="status_right">
                    <input type="checkbox" id="user-type" />
                    <label htmlFor="user-type" className="status_title">
                      Upcoming{" "}
                    </label>
                  </div>
                  <div className="status_right">
                    <input type="checkbox" id="user-type" />
                    <label htmlFor="user-type" className="status_title">
                      Suspended{" "}
                    </label>
                  </div>
                  <div className="status_right">
                    <input type="checkbox" id="user-type" />
                    <label htmlFor="user-type" className="status_title">
                      Completed{" "}
                    </label>
                  </div>
                  <div className="status_right">
                    <input type="checkbox" id="user-type" />
                    <label htmlFor="user-type" className="status_title">
                      Anticipated{" "}
                    </label>
                  </div>
                </div>

                <div className="progress">
                  <p className="progress_text">
                    In progress : <span>581</span>
                  </p>

                  <p className="progress_text">
                    Upcoming :<span>2</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="project_table_wrapper">
              <div className="table_header">
                <p className="found_text">Found: 5611</p>
                <button className="export_btn">⬇ Export to Excel</button>
              </div>

              <table className="project_table">
                <thead>
                  <tr>
                    <th className="project_th">Practice</th>
                    <th className="project_th">Project name</th>
                    <th className="project_th">Short name</th>
                    <th className="project_th">Status</th>
                    <th className="project_th">Start date</th>
                    <th className="project_th">End date</th>
                    <th className="project_th">Account</th>
                    <th className="project_th">Region</th>
                    <th className="project_th">Industry</th>
                    <th className="project_th">Source type</th>
                    <th className="project_th">Billing entry</th>
                  </tr>
                </thead>

                <tbody>
                  {Array(9)
                    .fill(data[0])
                    .map((item, i) => (
                      <tr key={i}>
                        <td className="project_td">{item.practice}</td>
                        <td className="project_td">{item.project}</td>
                        <td className="project_td">{item.short}</td>
                        <td className="project_td">{item.status}</td>
                        <td className="project_td">{item.start}</td>
                        <td className="project_td">{item.end}</td>
                        <td className="project_td">{item.account}</td>
                        <td className="project_td">{item.region}</td>
                        <td className="project_td">{item.industry}</td>
                        <td className="project_td">{item.source}</td>
                        <td className="project_td ">{item.billing}</td>
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
    </section>
  );
}

export default Allproject;
