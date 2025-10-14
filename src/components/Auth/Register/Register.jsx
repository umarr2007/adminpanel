import React from "react";
import "./register.css";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("you need to type the email");
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("you need to type the password");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }

    if (email && password.length >= 8) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="login_texts">
          <h1 className="login_title">CAMIOCA</h1>
          <p className="login_description">Intelligent Service</p>

          <form onSubmit={handleSubmit} className="login_form">
            <h2>Welcome back!</h2>
            <div className="email_input">
              <label>Email address</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "226px", background: "#f1f1f1" }}
                placeholder="example@mail.com"
              />
              {emailerror && (
                <p style={{ color: "red", fontSize: "12px" }}>{emailerror}</p>
              )}
            </div>{" "}
            <div className="password_input ">
              <label>Password</label>
              <Space direction="vertical">
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "226px", background: "#f1f1f1" }}
                  placeholder="Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                {passworderror && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {passworderror}
                  </p>
                )}
              </Space>
            </div>
            <p className="password_description">
              Use at least 8 characters with 1 number, <br /> and one special
              character.
            </p>
            <p className="forgot">Forgot password?</p>
            <Button
              htmlType="submit"
              style={{
                width: "226px",
                height: "35px",
                borderRadius: "34px",
              }}
              type="primary"
            >
              LOG IN
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
