import React from "react";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={() => navigate("/profile")}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <img
            src="/user.svg"
            alt="profile"
            style={{ width: "24px", height: "24px" }}
          />
          <span style={{ fontWeight: "500", color: "#333", fontSize: "14px" }}>
            My details
          </span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="/calendar.svg"
            alt="calendar"
            style={{ width: "24px", height: "24px" }}
          />
          <span style={{ fontWeight: "500", color: "#333", fontSize: "14px" }}>
            My Calendar
          </span>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="/umbrella.svg"
            alt="vacations"
            style={{ width: "24px", height: "24px" }}
          />
          <span style={{ fontWeight: "500", color: "#333", fontSize: "14px" }}>
            Vacations
          </span>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="/document.svg"
            alt="cv"
            style={{ width: "24px", height: "24px" }}
          />
          <span style={{ fontWeight: "500", color: "#333", fontSize: "14px" }}>
            Corporate CV
          </span>
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="/rocket.svg"
            alt="review"
            style={{ width: "24px", height: "24px" }}
          />
          <span style={{ fontWeight: "500", color: "#333", fontSize: "14px" }}>
            Performance review
          </span>
        </div>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      placement="bottomRight"
      popupRender={(menu) => (
        <div
          style={{
            borderRadius: "14px",
            background: "#fff",
            marginTop: "20px",
          }}
        >
          {menu}
        </div>
      )}
    >
      <button className="dropdown_btn">
        <img src="/buttons.svg" alt="menu" />
      </button>
    </Dropdown>
  );
};

export default ProfileDropdown;
