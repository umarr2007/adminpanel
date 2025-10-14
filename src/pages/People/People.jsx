import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../Dashborad/Header";
import { IoMdSearch } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { Input } from "antd";
import { Select } from "antd";
import "./people.css";
import { Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Check } from "@mui/icons-material";

const { Option } = Select;

function People() {
  const navigate = useNavigate();

  return (
    <section>
      <Header />

      <div className="container">
        <div className="section_wrapper">
          <Sidebar />

          <div className="section_top_wrapper">
            <div className="people_box_wrapper">
              <div className="people_box">
                <div className="people_icon">
                  <IoMdSearch className="box_icon" />
                  <h2 className="people_box_title">Find person</h2>
                </div>
              </div>
              <div
                onClick={() => navigate("/allpeople")}
                className="people_box"
              >
                <div className="people_icon">
                  <MdPeopleAlt className="box_icon" />
                  <h2 className="people_box_title">All people</h2>
                </div>
              </div>
            </div>
            <div className="inputs_box">
              <h2 className="input_title">Filter</h2>
              <div className="input_wrapper">
                {/* LEFT SIDE */}
                <div className="input_left">
                  <div className="input_name">
                    <label className="input_label">Name</label>
                    <Input placeholder="Search" />
                  </div>

                  <div className="input_name">
                    <label className="input_label">Email address</label>
                    <Input placeholder="example@mail.com" />
                  </div>

                  <div className="about_me">
                    <div className="input_name">
                      <label className="input_label">Login</label>
                      <Input placeholder="Search" />
                    </div>
                    <div className="input_name">
                      <label className="input_label">Branch</label>
                      <Input placeholder="Search" />
                    </div>
                    <div className="input_name">
                      <label className="input_label">1C id</label>
                      <Input placeholder="Search" />
                    </div>
                    <div className="input_name">
                      <label className="input_label">Practice</label>
                      <Input placeholder="Search" />
                    </div>
                  </div>

                  <div className="user_select">
                    <label className="input_label">User type</label>
                    <Select placeholder="Select" style={{ width: "100%" }}>
                      <Option value="1">Option 1</Option>
                      <Option value="2">Option 2</Option>
                    </Select>
                  </div>

                  <div className="user_select">
                    <label className="input_label">User contract type</label>
                    <Select placeholder="Select" style={{ width: "100%" }}>
                      <Option value="1">Option 1</Option>
                      <Option value="2">Option 2</Option>
                    </Select>
                  </div>
                </div>

                <div className="input_right">
                  <div className="input_name">
                    <label className="input_label">CV</label>
                    <Input placeholder="Search" />
                    <div className="checkboxes">
                      <div className="inputs_checkbox">
                        <Checkbox id="inactive_checkbox" />
                        <span className="checkbox_label">Capability</span>
                      </div>

                      <div className="inputs_checkbox">
                        <Checkbox id="inactive_checkbox" />
                        <span className="checkbox_label">Technology</span>
                      </div>

                      <div className="inputs_checkbox">
                        <Checkbox id="inactive_checkbox" />
                        <span className="checkbox_label">Certificate</span>
                      </div>
                      <div className="inputs_checkbox">
                        <Checkbox id="inactive_checkbox" />
                        <span className="checkbox_label">Course</span>
                      </div>
                    </div>
                  </div>

                  <div className="input_name radio_label capabilities">
                    <div className="label_wrapper">
                      <label className="input_label">Capabilities</label>
                      <div className="radio_wrapper">
                        <div>
                          <Radio />
                          <span>AND</span>
                        </div>

                        <div>
                          <Radio />
                          <span>OR</span>
                        </div>
                      </div>
                    </div>
                    <Input placeholder="Search Capabilities" />
                  </div>

                  <div className="input_name radio_label technology">
                    <div className="label_wrapper">
                      <label className="input_label">Technology</label>
                      <div className="radio_wrapper">
                        <div>
                          <Radio />
                          <span>AND</span>
                        </div>

                        <div>
                          <Radio />
                          <span>OR</span>
                        </div>
                      </div>
                    </div>
                    <Input placeholder="Search Technology" />
                  </div>

                  <div className="input_name radio_label certificates">
                    <div className="label_wrapper">
                      <label className="input_label">Certificates</label>
                      <div className="radio_wrapper">
                        <div>
                          <Radio />
                          <span>AND</span>
                        </div>

                        <div>
                          <Radio />
                          <span>OR</span>
                        </div>
                      </div>
                    </div>
                    <Input placeholder="Search Certificates" />
                  </div>

                  <div className="input_name radio_label courses">
                    <div className="label_wrapper">
                      <label className="input_label">Courses</label>
                      <div className="radio_wrapper">
                        <div>
                          <Radio />
                          <span>AND</span>
                        </div>

                        <div>
                          <Radio />
                          <span>OR</span>
                        </div>
                      </div>
                    </div>
                    <Input placeholder="Search Courses" />
                  </div>

                  <div className="edu">
                    <div className="input_name">
                      <label className="input_label">Education</label>
                      <div className="edu_wrapper">
                        <Select placeholder="Select" style={{ width: "100%" }}>
                          <Option value="1">Option 1</Option>
                          <Option value="2">Option 2</Option>
                        </Select>
                        <Input placeholder="Search for specialization" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom_wrapper">
                <div className="bottom_left">
                  <Checkbox />
                  <label htmlFor="user-type" className="bottom_title">
                    Show User Type, Login, Start Date, 1C Id
                  </label>
                </div>

                <div className="bottom_left">
                  <Checkbox />
                  <label htmlFor="user-type" className="bottom_title">
                    Show User Type, Login, Start Date, 1C Id
                  </label>
                </div>

                <div className="bottom_left">
                  <Checkbox />
                  <label htmlFor="user-type" className="bottom_title">
                    Show current assignments{" "}
                  </label>
                </div>

                <div className="bottom_left">
                  <Checkbox />
                  <label htmlFor="user-type" className="bottom_title">
                    Include terminated employees{" "}
                  </label>
                </div>
              </div>
              <div className="box_button">
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

export default People;
