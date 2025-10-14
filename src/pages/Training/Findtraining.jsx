import React from "react";
import Header from "../Dashborad/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IoMdSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { MdViewTimeline } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "antd";
import { Select } from "antd";
import { Checkbox, Radio } from "antd";
import "./findtraining.css";
import { DatePicker } from "antd";
function Findtraining() {
  const navigate = useNavigate();
  return (
    <section>
      <Header />
      <div className="container">
        <div className="section_wrapper">
          <Sidebar />
          <div className="section_top_wrapper">
            <div className="top_box_wrapper">
              <div
                onClick={() => navigate("/training")}
                className="training_box_icon"
              >
                <div className="project_icon">
                  <MdViewTimeline className="box_icon" />
                  <h2 className="project_icon_title">Training timetable</h2>
                </div>
              </div>

              <div className="training_box_icon">
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

              <div onClick={() => navigate("/registration")} className="training_box_icon">
                <div className="project_icon">
                  <MdQuiz className="box_icon" />
                  <h2 className="project_icon_title">Training registration</h2>
                </div>
              </div>
            </div>
            <div className="findtraining_box">
              <h2 className="findtraining_box_title">Filter</h2>
              <div className="findtraining_box_inputs">
                <div className="find_wrapper">
                  <div className="findtraining_input">
                    <label>Field of knowledge</label>
                    <Select
                      defaultValue="All"
                      onChange={() => {}}
                      className="findtraining_select"
                    >
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">Lucy</Select.Option>
                      <Select.Option value="tom">Tom</Select.Option>
                    </Select>
                  </div>
                  <div className="findtraining_input">
                    <label>Field of knowledge</label>
                    <Select
                      className="findtraining_select"
                      defaultValue="All"
                      onChange={() => {}}
                    >
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">Lucy</Select.Option>
                      <Select.Option value="tom">Tom</Select.Option>
                    </Select>
                  </div>

                  <div className="findtraining_input">
                    <label>Field of knowledge</label>
                    <Select
                      className="findtraining_select"
                      defaultValue="All"
                      onChange={() => {}}
                    >
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">Lucy</Select.Option>
                      <Select.Option value="tom">Tom</Select.Option>
                    </Select>
                  </div>
                </div>
                <div className="period">
                  <div className="findtraining_input">
                    <label>Field of knowledge</label>
                    <Select
                      className="findtraining_select"
                      defaultValue="All"
                      onChange={() => {}}
                    >
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">Lucy</Select.Option>
                      <Select.Option value="tom">Tom</Select.Option>
                    </Select>
                  </div>
                  <div className="findradio">
                    <div className="radio_item">
                      <Radio value="a" />
                      <span>actual dates</span>
                    </div>
                    <div className="radio_item">
                      <Radio value="b" />
                      <span>planned</span>
                    </div>
                  </div>
                </div>

                <div className="date">
                  <div className="findtraining_input">
                    <label>Start date:</label>
                    <DatePicker className="findtraining_select" />
                  </div>

                  <div className="findtraining_input">
                    <label>Finish date:</label>
                    <DatePicker className="findtraining_select" />
                  </div>
                </div>

                <div className="find_checkbox">
                  <Checkbox id="inactive_checkbox" />
                  <span>Show inactive trainings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Findtraining;
