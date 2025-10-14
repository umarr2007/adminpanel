import React from "react";
import "./feedback.css";
import Header from "../Dashborad/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IoMdSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { MdViewTimeline } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { Table, Button } from "antd";
import { DatePicker } from "antd";
import { EditOutlined } from "@ant-design/icons";

function Feedback() {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 100,
    },
    {
      title: "Training",
      dataIndex: "training",
      key: "training",
      width: 400,
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
      key: "instructor",
      width: 200,
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
      width: 100,
    },
    {
      title: "",
      key: "action",
      width: 50,
      render: () => (
        <EditOutlined style={{ color: "#1677ff", cursor: "pointer" }} />
      ),
    },
  ];

  const data = [
    {
      key: 1,
      date: "24 Apr",
      training: "Security Awareness",
      instructor: "Keithlyn O'Hara",
      hours: "1.00",
    },
    {
      key: 2,
      date: "16 Feb",
      training: "Induction program: Office user manual",
      instructor: "Matthew Brandstock",
      hours: "1.00",
    },
    {
      key: 3,
      date: "16 Feb",
      training: "Induction program: Security",
      instructor: "Chris Columbus",
      hours: "1.00",
    },
    {
      key: 4,
      date: "11 Feb",
      training:
        "Induction program: Capability profile and corporate CV. Dashboard Overview",
      instructor: "Chris Columbus",
      hours: "1.50",
    },
    {
      key: 5,
      date: "03 Feb",
      training: "Induction program: Career development in company",
      instructor: "Arnold Harris",
      hours: "2.00",
    },
    {
      key: 6,
      date: "01 Feb",
      training: "Induction program: Office policy",
      instructor: "Arnold Harris",
      hours: "0.50",
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
                onClick={() => navigate("/training")}
                className="training_box_icon"
              >
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
            <div className="feedback_box">
              <div className="passed_trainings_header">
                <h3 className="passed_title">Passed trainings:</h3>
                <div className="year_box">
                  <DatePicker style={{ width: "184px" }} />
                </div>
              </div>

              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered={false}
                className="passed_table"
                scroll={{ x: true }} // ✅ "max-content" emas!
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Feedback;
