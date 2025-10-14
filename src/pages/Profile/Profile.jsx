import React from "react";
import Header from "../Dashborad/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./profile.css";
import { Input } from "antd";
import { Button } from "antd";
import { BsFillPencilFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { RiMore2Fill } from "react-icons/ri";
import { FaCalendarDay } from "react-icons/fa6";
import { FaUmbrella } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { Table, Select } from "antd";

import { PiReadCvLogoFill } from "react-icons/pi";
const { Option } = Select;

function Profile() {
  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className="status-dot"
          style={{ backgroundColor: status.color }}
        />
      ),
      width: 100,
    },
    {
      title: "Profile Task",
      dataIndex: "profile",
      key: "profile",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Task",
      dataIndex: "task",
      key: "task",
    },
    {
      title: "Start date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
    },
  ];

  const data = [
    {
      key: "1",
      status: { color: "#27AE60" },
      profile: "Profile 1",
      role: "Specialist",
      task: "Management",
      startDate: "11.06.2019",
      capacity: "35%",
    },
    {
      key: "2",
      status: { color: "#27AE60" },
      profile: "Profile 2",
      role: "Specialist",
      task: "Support",
      startDate: "12.02.2019",
      capacity: "65%",
    },
  ];
  return (
    <section>
      <Header />
      <div className="container">
        <div className="section_wrapper">
          <Sidebar />
          <div className="section_top_wrapper">
            <div className="profile_box">
              <div className="profile_text">
                <h2 className="profile_title">My details</h2>
                <button className="profile_edit">
                  <BsFillPencilFill className="edit_icon" />
                </button>
              </div>
              <div className="profile_wrapper">
                <div className="profile_left">
                  <div className="profile_checkbox">
                    <label> Name</label>
                    <Input className="profile_input" type="text" />
                  </div>
                  <div className="practice_wrapper">
                    <div className="profile_checkbox">
                      <label>Practice</label>
                      <Input className="profile_input" type="text" />
                    </div>

                    <div className="profile_checkbox">
                      <label>Branch</label>
                      <Input className="profile_input" type="text" />
                    </div>
                  </div>

                  <div className="profile_checkbox">
                    <label>Division</label>
                    <Input className="profile_input" type="text" />
                  </div>

                  <div className="profile_checkbox">
                    <label>Login</label>
                    <Input className="profile_input" type="text" />
                  </div>
                </div>

                <div className="profile_right">
                  <div className="profile_checkbox">
                    <label>Title</label>
                    <Input className="profile_input" type="text" />
                  </div>

                  <div className="practice_wrapper">
                    <div className="profile_checkbox">
                      <label>Contract</label>
                      <Input className="profile_input" type="text" />
                    </div>

                    <div className="profile_checkbox">
                      <label>Grade</label>
                      <Input className="profile_input" type="text" />
                    </div>
                  </div>

                  <div className="profile_checkbox">
                    <label>Division manager</label>
                    <Input className="profile_input" type="text" />
                  </div>

                  <div className="practice_wrapper">
                    <div className="profile_checkbox">
                      <label>Status history</label>
                      <Input className="profile_input" type="text" />
                    </div>

                    <div className="profile_checkbox">
                      <label></label>
                      <Input className="profile_input" type="text" />
                    </div>
                  </div>
                </div>
                <div className="profile_bottom">
                  <div className="profile_img_wrapper">
                    <img className="profile_img" src="/profile.svg" alt="" />
                  </div>

                  <h3 className="profile_name">Dominique Charpentier</h3>
                  <p className="profile_position">CEO</p>
                  <div className="profile_button_wrapper">
                    <button className="profile_button">
                      <MdEmail className="profile_icon" />
                    </button>

                    <button className="profile_button">
                      <MdPhone className="profile_icon" />
                    </button>
                    <button className="profile_button">
                      <RiMore2Fill className="profile_icon" />
                    </button>
                  </div>
                  <div className="detail_box">
                    <div className="detail_wrapper">
                      <div className="detail_left">
                        <FaCalendarDay className="detail_icon" />
                      </div>

                      <div className="detail_right">
                        <h5 className="detail_title">Calendar</h5>
                      </div>
                    </div>

                    <div className="detail_wrapper">
                      <div className="detail_left">
                        <FaUmbrella className="detail_icon" />
                      </div>

                      <div className="detail_right">
                        <h5 className="detail_title">Vacations</h5>
                      </div>
                    </div>

                    <div className="detail_wrapper">
                      <div className="detail_left">
                        <GiSandsOfTime className="detail_icon" />
                      </div>

                      <div className="detail_right">
                        <h5 className="detail_title">Timesheet</h5>
                      </div>
                    </div>

                    <div className="detail_wrapper">
                      <div className="detail_left">
                        <PiReadCvLogoFill className="detail_icon" />
                      </div>

                      <div className="detail_right">
                        <h5 className="detail_title">Corporate CV</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile_box">
              <div className="profile-card">
                <div className="profile-header">
                  <h2>Profile</h2>
                  <Select
                    style={{ width: 184 }}
                    defaultValue="Filter"
                    size="middle"
                  >
                    <Option value="filter">Filter</Option>
                    <Option value="active">Active</Option>
                    <Option value="completed">Completed</Option>
                  </Select>
                </div>

                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  bordered={false}
                  className="profile-table"
                  scroll={{
                    x: 800, // gorizontal scroll
                    y: 240, // vertikal scroll (balandlik)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
