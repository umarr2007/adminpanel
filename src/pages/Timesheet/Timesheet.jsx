import React from "react";
import Header from "../Dashborad/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./timesheet.css";
import { DatePicker } from "antd";
import { Select, Button, Table } from "antd";

const { Option } = Select;

function Timesheet() {
  const days = [
    "15 / Mon",
    "16 / Tue",
    "17 / Wed",
    "18 / Thu",
    "19 / Fri",
    "20 / Sat",
    "21 / Sun",
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Activity",
      dataIndex: "activity",
      key: "activity",
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
    },
    {
      title: "Comments",
      dataIndex: "comments",
      key: "comments",
    },
  ];

  const data = [
    {
      key: "1",
      date: "15 Jan",
      project: "Project 1",
      role: "Specialist",
      activity: "Development",
      hours: "8:00",
      comments: "Prepared a presentation for CEO",
    },
    {
      key: "2",
      date: "15 Jan",
      project: "Project 2",
      role: "Specialist",
      activity: "Development",
      hours: "8:00",
      comments: "Prepared a presentation for CEO",
    },
  ];

  return (
    <section>
      <Header />
      <div className="container">
        <div className="section_wrapper">
          <Sidebar />
          <div className="section_top_wrapper">
            <div className="timesheet_date">
              <h5 className="timesheet_date_title">My timesheet</h5>
              <div className="timesheet_date_wrapper">
                <div className="calendar_select">
                  <label>Select the date</label>
                  <DatePicker style={{ width: "184px" }} />
                </div>

                <div className="timesheet_date_button">
                  <Button
                    style={{
                      width: "180px",
                      borderRadius: "30px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                    type="primary"
                  >
                    MY TIMESHEET’S REPORT{" "}
                  </Button>
                </div>
              </div>
            </div>
            <div className="timesheet_button_box">
              <div className="timesheet_wrapper">
                <div className="button_select">
                  <label>Project</label>
                  <Select placeholder="E_Interview" style={{ width: "auto" }}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </Select>
                </div>

                <div className="button_select">
                  <label>Role</label>
                  <Select placeholder="E_Interview" style={{ width: "auto" }}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </Select>
                </div>

                <div className="button_select">
                  <label>Activity</label>
                  <Select placeholder="E_Interview" style={{ width: "auto" }}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </Select>
                </div>
                <div className="woml">
                  <div className="button_select">
                    <label>15 / Mon</label>
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <label>15 / Mon</label>
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <label>15 / Mon</label>
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <label>15 / Mon</label>
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <label>15 / Mon</label>
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <label>15 / Mon</label>
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <label>15 / Mon</label>
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                </div>
              </div>

              <div className="timesheet_wrapper">
                <div className="button_select">
                  <Select placeholder="E_Interview" style={{ width: "auto" }}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </Select>
                </div>

                <div className="button_select">
                  <Select placeholder="E_Interview" style={{ width: "auto" }}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </Select>
                </div>

                <div className="button_select">
                  <Select placeholder="E_Interview" style={{ width: "auto" }}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </Select>
                </div>
                <div className="woml">
                  <div className="button_select">
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                  <div className="button_select">
                    <Button style={{ width: "56px" }}>4.00</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="timesheet_table">
              <h2 className="timesheet_table_title">Comments</h2>
              <Table
                className="table_time"
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ x: true }}
              />
            </div>
            <div className="assigned_wrapper">
              <div className="assigned_left">
                <div className="assigned_box">
                  <h4 className="assigned_box_title">
                    Projects you are assigned to (12)
                  </h4>

                  <div className="assigned_button_wrapper">
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Bench_Engineering
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Bench_Engineering
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Company_Web_Site{" "}
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Company_Web_Event{" "}
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Company_Web_Event{" "}
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Company_Web_Event{" "}
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Company_Web_Event{" "}
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Company_Web_Event{" "}
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Company_Web_Event{" "}
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Company_Web_Event{" "}
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Company_Web_Event{" "}
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #2f80ed",
                        borderRadius: "30px",
                      }}
                    >
                      E_Company_Web_Event{" "}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="assigned_right">
                <div className="legend_box">
                  <h3 className="legend_box_title">Legend</h3>
                  <div className="legend_button_wrapper">
                    <div className="legend_button">
                      <Button
                        style={{
                          width: "40px",
                          background: "#2f80ed",
                          color: "#fff",
                        }}
                      >
                        8.00
                      </Button>
                      <h4 className="legend_button_title">Workday</h4>
                    </div>

                    <div className="legend_button">
                      <Button
                        style={{
                          width: "40px",
                          background: "#eb5757",
                          color: "#fff",
                        }}
                      >
                        8.00
                      </Button>
                      <h4 className="legend_button_title">Holiday</h4>
                    </div>

                    <div className="legend_button">
                      <Button
                        style={{
                          width: "40px",
                          background: "#fff",
                          color: "#fff",
                        }}
                      ></Button>
                      <h4 className="legend_button_title">Today</h4>
                    </div>

                    <div className="legend_button">
                      <Button
                        style={{
                          width: "40px",
                          background: "#27ae60",
                          color: "#fff",
                        }}
                      ></Button>
                      <h4 className="legend_button_title">
                        Day off had (paid)
                      </h4>
                    </div>

                    <div className="legend_button">
                      <Button
                        style={{
                          width: "40px",
                          background: "#2f80ed",
                          color: "#fff",
                        }}
                      >
                        8.00
                      </Button>
                      <h4 className="legend_button_title">
                        Overtime/undertime
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timesheet;
