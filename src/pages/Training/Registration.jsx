import React from "react";
import "./registration.css";
import Header from "../Dashborad/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { MdViewTimeline } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { Table, DatePicker, Select, Pagination } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Option } = Select;

function Registration() {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Training",
      dataIndex: "training",
      key: "training",
    },
    {
      title: "Initiator",
      dataIndex: "initiator",
      key: "initiator",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
    },
    {
      title: "",
      key: "action",
      render: () => (
        <PlusCircleOutlined style={{ color: "#1677ff", fontSize: 18 }} />
      ),
    },
  ];

  const data = [
    {
      key: "1",
      training: "Security Awareness",
      initiator: "Andrew Blick",
      owner: "25 Apr",
      language: "EN",
      field: "Process",
    },
    {
      key: "2",
      training: "Induction program: Office user manual",
      initiator: "",
      owner: "16 Feb",
      language: "EN",
      field: "Process",
    },
    {
      key: "3",
      training: "Induction program: Security",
      initiator: "",
      owner: "16 Feb",
      language: "RU",
      field: "Process",
    },
    {
      key: "4",
      training:
        "Induction program: Capability profile and corporate CV. Dashboard Overview",
      initiator: "",
      owner: "12 Feb",
      language: "RU",
      field: "Soft Skills",
    },
    {
      key: "5",
      training: "Induction program: Career development in company",
      initiator: "",
      owner: "03 Feb",
      language: "RU",
      field: "Process",
    },
    {
      key: "6",
      training: "Induction program: Office policy",
      initiator: "Hans Fillipinho",
      owner: "20 Jan",
      language: "FR",
      field: "Process",
    },
    {
      key: "7",
      training: "Risk management",
      initiator: "",
      owner: "18 Jan",
      language: "FR",
      field: "Testing",
    },
    {
      key: "8",
      training: "Product development",
      initiator: "",
      owner: "14 Jan",
      language: "FR",
      field: "Dev",
    },
    {
      key: "9",
      training: "SCRUM",
      initiator: "",
      owner: "05 Jan",
      language: "FR",
      field: "Support",
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
            <div className="notraining_box">
              <div className="notraining_text">
                <div className="notraining_img">
                  <img src="/registration.svg" alt="" />
                </div>
                <h3 className="notraining_title">
                  There are no training registrations.
                </h3>
              </div>
            </div>
            <div className="notraining_table_box">
              <div className="notraining_select">
                <div className="notraining_left">
                  <h2 className="quiz_title">Available trainings:</h2>
                  <DatePicker style={{ width: "184px" }} />
                </div>
                <div className="notraining_right">
                  <Select
                    placeholder="Field"
                    style={{ width: 184 }}
                    allowClear
                    options={[
                      { value: "Process", label: "Process" },
                      { value: "Dev", label: "Dev" },
                      { value: "Testing", label: "Testing" },
                    ]}
                  />
                </div>
              </div>
              <div className="notraining_table">
                <Table
                  className="available_table"
                  columns={columns}
                  dataSource={data}
                  scroll={{ x: 500 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
