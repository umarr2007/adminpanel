import React from "react";
import Header from "../Dashborad/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./projects.css";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineInbox } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { Input } from "antd";
import { Select } from "antd";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
function Projects() {
  const navigate = useNavigate();
  return (
    <section>
      <Header />
      <div className="container">
        <div className="section_wrapper">
          <Sidebar />
          <div className="section_top_wrapper">
            <div className="top_box_wrapper">
              <div className="project_box_icon">
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
            <div className="project_box">
              <h2 className="project_box_title">Filter</h2>
              <div className="project_wrapper">
                <div className="project_left">
                  <div className="custom_input">
                    <label>Project name</label>
                    <Input className="project_input" placeholder="Search" />
                  </div>

                  <div className="custom_input">
                    <label>Short name</label>
                    <Input className="project_input" placeholder="Search" />
                  </div>

                  <div className="custom_input">
                    <label>Project description</label>
                    <Input className="project_input" placeholder="Search" />
                    <p>Notion: Full-text searching</p>
                  </div>
                </div>
                <div className="project_right">
                  <div className="custom_input">
                    <label>Budget type</label>
                    <Select className="project_input" placeholder="Select">
                      <Option value="1">Option 1</Option>
                      <Option value="2">Option 2</Option>
                    </Select>
                  </div>

                  <div className="custom_input">
                    <label>Status</label>
                    <Select className="project_select" placeholder="Select">
                      <Option value="1">Option 1</Option>
                      <Option value="2">Option 2</Option>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="select_wrapper">
                <div className="custom_input">
                  <label>Practice</label>
                  <Select className="custom_select" placeholder="Select">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                  </Select>{" "}
                </div>

                <div className="custom_input">
                  <label>Account</label>
                  <Select className="custom_select" placeholder="Select">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                  </Select>{" "}
                </div>

                <div className="custom_input">
                  <label>Start date from:</label>
                  <Select className="custom_select" placeholder="Select">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                  </Select>{" "}
                </div>

                <div className="custom_input">
                  <label></label>
                  <Select className="custom_select" placeholder="Select">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                  </Select>{" "}
                </div>

                <div className="custom_input">
                  <label>Source type</label>
                  <Select className="custom_select" placeholder="Select">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                  </Select>{" "}
                </div>

                <div className="custom_input">
                  <label>Status</label>
                  <Select className="custom_select" placeholder="Select">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                  </Select>{" "}
                </div>

                <div className="custom_input">
                  <label>Finish date from:</label>
                  <Select className="custom_select" placeholder="Select">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                  </Select>{" "}
                </div>

                <div className="custom_input">
                  <label></label>
                  <Select className="custom_select" placeholder="Select">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                  </Select>{" "}
                </div>

                <div className="custom_input">
                  <label>Billing entity</label>
                  <Select className="custom_select" placeholder="Select">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                  </Select>{" "}
                </div>

                <div className="custom_input">
                  <label>Industry</label>
                  <Select className="custom_select" placeholder="Select">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                  </Select>{" "}
                </div>

                <div className="custom_input">
                  <label>Search mode</label>
                  <Select className="big_select" placeholder="Select">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                  </Select>{" "}
                </div>
              </div>
              <div className="project_button">
                <Button
                  htmlType="submit"
                  style={{
                    width: "112px",
                    height: "36px",
                    borderRadius: "31px",
                    background: "transparent",
                    border: "2px solid #4f4f4f",
                    color: "#4f4f4f",
                    fontWeight: "600",
                  }}
                  type="primary"
                >
                  Clear
                </Button>

                <Button
                  htmlType="submit"
                  style={{
                    width: "112px",
                    height: "36px",
                    borderRadius: "31px",
                    background: "#27ae60",
                  }}
                  type="primary"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
