import React from "react";
import Header from "../Dashborad/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AiOutlineInbox } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { MdViewTimeline } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import "./training.css";
import { DatePicker } from "antd";
import { Select } from "antd";
import { Badge, Calendar } from "antd";

function Training() {
  const navigate = useNavigate();

  const getListData = (value) => {
    let listData = [];
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." },
        ];
        break;
      case 15:
        listData = [
          { type: "warning", content: "This is warning event" },
          { type: "success", content: "This is very long usual event......" },
          { type: "error", content: "This is error event 1." },
          { type: "error", content: "This is error event 2." },
          { type: "error", content: "This is error event 3." },
          { type: "error", content: "This is error event 4." },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };
  return (
    <section>
      <Header />
      <div className="container">
        <div className="section_wrapper">
          <Sidebar />
          <div className="section_top_wrapper">
            <div className="top_box_wrapper">
              <div className="training_box_icon">
                <div className="project_icon">
                  <MdViewTimeline className="box_icon" />
                  <h2 className="project_icon_title">Training timetable</h2>
                </div>
              </div>

              <div
                onClick={() => navigate("/findtraining")}
                className="training_box_icon"
              >
                <div className="project_icon">
                  <IoMdSearch className="box_icon" />
                  <h2 className="project_icon_title">Find training</h2>
                </div>
              </div>

              <div
                onClick={() => navigate("/feedback")}
                className="training_box_icon"
              >
                <div className="project_icon">
                  <MdFeedback className="box_icon" />
                  <h2 className="project_icon_title">Feedback</h2>
                </div>
              </div>

              <div
                onClick={() => navigate("/quiz")}
                className="training_box_icon"
              >
                <div className="project_icon">
                  <MdAccountCircle className="box_icon" />
                  <h2 className="project_icon_title">Quizzes</h2>
                </div>
              </div>

              <div
                onClick={() => navigate("/registration")}
                className="training_box_icon"
              >
                <div className="project_icon">
                  <MdQuiz className="box_icon" />
                  <h2 className="project_icon_title">Training registration</h2>
                </div>
              </div>
            </div>
            <div className="training_box">
              <h2 className="training_box_title">Filter</h2>
              <div className="training_wrapper">
                <div className="training_checkbox">
                  <label htmlFor="year">Select the date</label>
                  <DatePicker className="training_date" />
                </div>

                <div className="training_checkbox">
                  <label htmlFor="year">Branch</label>
                  <Select className="training_select" placeholder="Select">
                    <Option value="1">Paris</Option>
                    <Option value="2">America</Option>
                  </Select>
                </div>

                <div className="training_checkbox">
                  <label htmlFor="year">Branch</label>
                  <Select className="training_select" placeholder="All">
                    <Option value="1">Paris</Option>
                    <Option value="2">America</Option>
                  </Select>
                </div>

                <div className="training_checkbox">
                  <label htmlFor="year">Field of knowledge</label>
                  <Select className="training_select" placeholder="All">
                    <Option value="1">Paris</Option>
                    <Option value="2">America</Option>
                  </Select>
                </div>

                <div className="training_checkbox">
                  <label htmlFor="year">Language</label>
                  <Select className="training_select" placeholder="All">
                    <Option value="1">Paris</Option>
                    <Option value="2">America</Option>
                  </Select>
                </div>
                <div className="training_border">
                  <h3 className="training_border_title">Note</h3>
                  <p className="training_border_description">
                    Training time is displayed in <br /> your local time
                  </p>
                </div>
              </div>
            </div>
            <Calendar
              style={{ borderRadius: "14px", padding: "10px" }}
              cellRender={cellRender}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Training;
