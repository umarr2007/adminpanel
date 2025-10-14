import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../Dashborad/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import dayjs from "dayjs";
import { Select } from "antd";
import { DatePicker } from "antd";

const { Option } = Select;

function YearCalendar() {
  const months = Array.from({ length: 12 }, (_, i) => dayjs().month(i));
  
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <section>
      <Header />
      <div className="container">
        <div className="section_wrapper">
          <Sidebar />
          <div className="calendar_box">
            <h2 className="calendar_box_title">Time management</h2>
            <div className="calendar_select_wrapper">
              <div className="wrapper_left">
                <div className="calendar_select">
                  <label>Branch</label>
                  <Select className="select_branch" placeholder="Select">
                    <Option value="1">Paris</Option>
                    <Option value="2">America</Option>
                  </Select>
                </div>
                <div className="calendar_select">
                  <label>Select the date</label>
                  <DatePicker className="select_date" picker="year" />
                </div>
              </div>

              <div className="working_right">
                <div className="working">
                  <div className="working_wrapper">
                    <div className="working_left">
                      <h3 className="working_title">247</h3>
                      <p className="working_description">
                        working <br /> days
                      </p>
                    </div>
                    <hr className="working_line" />

                    <div className="working_right">
                      <h3 className="working_right_title">118</h3>
                      <p className="working_right_description">
                        non-working days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="year-grid">
              {months.map((m, i) => (
                <div key={i} className="calendar-card">
                  <div className="calendar-title">{monthNames[m.month()]}</div>
                  <Calendar
                    activeStartDate={m.toDate()}
                    view="month"
                    showNavigation={false}
                    selectRange={false}
                  />
                  <div className="days-info">
                    <p>
                      <span>Working days:</span> <b>19</b>{" "}
                    </p>{" "}
                    <p className="non-working">
                      <span>No-working days:</span> <b>8</b>{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YearCalendar;
