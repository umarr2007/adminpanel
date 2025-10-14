import React, { useState } from "react";
import {
  MdDashboard,
  MdPeople,
  MdOutlineOnDeviceTraining,
} from "react-icons/md";
import { GoProjectRoadmap, GoCalendar } from "react-icons/go";
import { BsHourglass } from "react-icons/bs";
import { VscReport } from "react-icons/vsc";
import { RiAdminLine } from "react-icons/ri";
import { IoHelp } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <MdDashboard className="icon" />,
      path: "/dashboard",
    },
    { title: "People", icon: <MdPeople className="icon" />, path: "/people" },
    {
      title: "Projects",
      icon: <GoProjectRoadmap className="icon" />,
      path: "/projects",
    },
    {
      title: "Calendar",
      icon: <GoCalendar className="icon" />,
      path: "/yearcalendar",
    },
    {
      title: "Training",
      icon: <MdOutlineOnDeviceTraining className="icon" />,
      path: "/training",
    },
    {
      title: "Timesheet",
      icon: <BsHourglass className="icon" />,
      path: "/timesheet",
    },
    {
      title: "Reports",
      icon: <VscReport className="icon" />,
      path: "/reports",
    },
    {
      title: "Administration",
      icon: <RiAdminLine className="icon" />,
      path: "/admin",
    },
    { title: "Help", icon: <IoHelp className="icon" />, path: "/help" },
  ];

  const checkIsActive = (path) => {
    const current = location.pathname;
    if (current === path || current.startsWith(`${path}/`)) return true;

    const specialCases = {
      "/people": ["/allpeople"],
      "/projects": ["/allproject"],

      "/training": ["/findtraining", "/feedback", "/quiz", "/registration"],
      "/timesheet": ["/timesheet"],
      "/admin": ["/settings", "/users", "/permissions"],
    };

    for (const [main, subs] of Object.entries(specialCases)) {
      if (subs.some((sub) => current.startsWith(sub)) && path === main) {
        return true;
      }
    }
    return false;
  };
  return (
    <section>
      <div className="sidebar_container">
        <div className="menu_btn" onClick={() => setOpen(!open)}>
          ⮞
        </div>

        <div className={open ? "sidebar_box active" : "sidebar_box"}>
          <button onClick={() => setOpen(false)} className="close_btn">
            Close
          </button>

          {menuItems.map((item, index) => {
            const isActive = checkIsActive(item.path);
            return (
              <NavLink
                to={item.path}
                key={index}
                className={isActive ? "box_wrapper active" : "box_wrapper"}
              >
                <div className="box_left">{item.icon}</div>
                <div className="box_right">
                  <h2 className="box_title">{item.title}</h2>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
