import React from "react";
import Header from "../Dashborad/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IoMdSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { MdViewTimeline } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { Table } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import "./quiz.css";
import { SmileOutlined } from "@ant-design/icons";


function Quiz() {
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
      title: "Quiz",
      dataIndex: "quiz",
      key: "quiz",
    },
    {
      title: "Passed",
      dataIndex: "passed",
      key: "passed",
      width: 200,
    },
    {
      title: "single",
      dataIndex: "single",
      key: "single",
      width: 100,
    },
    {
      title: "",
      key: "action",
      width: 50,
      render: () => (
        <SmileOutlined style={{ color: "#27ae60", cursor: "pointer" }} />
      ),
    },
  ];

  const data = [
    {
      key: "1",
      date: "24 Apr",
      training: "Security Awareness",
      quiz: "Quiz 1",
      passed: "25 Apr",
      single: "No",
    },
    {
      key: "2",
      date: "24 Apr",
      training: "Security Awareness",
      quiz: "Quiz 1",
      passed: "25 Apr",
      single: "No",
    },
    {
      key: "3",
      date: "24 Apr",
      training: "Security Awareness",
      quiz: "Quiz 1",
      passed: "25 Apr",
      single: "No",
    },
    {
      key: "4",
      date: "24 Apr",
      training: "Security Awareness",
      quiz: "Quiz 1",
      passed: "25 Apr",
      single: "No",
    },
    {
      key: "5",
      date: "24 Apr",
      training: "Security Awareness",
      quiz: "Quiz 1",
      passed: "25 Apr",
      single: "No",
    },
    {
      key: "6",
      date: "24 Apr",
      training: "Security Awareness",
      quiz: "Quiz 1",
      passed: "25 Apr",
      single: "No",
    },
  ];

  const column = [
    {
      title: "Date", // Ustun sarlavhasi
      dataIndex: "date", // Ma'lumot nomi (data ichidan)
      key: "date",
      width: 100,
    },

    {
      title: "Quizname",
      dataIndex: "quizname",
      key: "quizname",
      width: 400,
    },

    {
      title: "single",
      dataIndex: "single",
      key: "single",
      width: 100,
    },
    {
      title: "Quiztime",
      dataIndex: "quiztime",
      key: "quiztime",
    },
    {
      title: "count",
      dataIndex: "count",
      key: "count",
    },
  ];

  const dates = [
    {
      key: "1",
      date: "24 Apr",
      quizname: "Hibernate 3.0",
      single: "Yes",
      quiztime: "Infinitive",
      count: "49",
    },
    {
      key: "2",
      date: "16 Apr",
      quizname: "EJB",
      single: "Yes",
      quiztime: "Infinitive",
      count: "5",
    },
    {
      key: "3",
      date: "24 Apr",
      quizname: "Hibernate 3.0",
      single: "Yes",
      quiztime: "Infinitive",
      count: "49",
    },
    {
      key: "4",
      date: "16 Apr",
      quizname: "EJB",
      single: "Yes",
      quiztime: "Infinitive",
      count: "5",
    },
    {
      key: "5",
      date: "24 Apr",
      quizname: "Hibernate 3.0",
      single: "Yes",
      quiztime: "Infinitive",
      count: "49",
    },
    {
      key: "6",
      date: "16 Apr",
      quizname: "EJB",
      single: "Yes",
      quiztime: "Infinitive",
      count: "5",
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

              <div className="training_box_icon">
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
            <div className="quiz_box">
              <div className="quiz_text">
                <h2 className="quiz_title">Passed quizzes:</h2>
                <DatePicker style={{ width: "184px" }} />
              </div>
              <div className="quiz_box">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  bordered={false}
                  className="quiz_table"
                  scroll={{ x: true }}
                />
              </div>
            </div>

            <div className="quiz_box">
              <div className="quiz_text">
                <h2 className="quiz_title">Independent quizzes:</h2>
                <DatePicker style={{ width: "184px" }} />
              </div>
              <div className="quiz_table">
                <Table
                  columns={column}
                  dataSource={dates}
                  bordered={false}
                  className="quiz_table"
                  scroll={{ x: true }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quiz;
