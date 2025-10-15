import React from "react";
import Register from "./components/Auth/Register/Register";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Dashborad/Header";
import Static from "./components/Static/Static";
import People from "./pages/People/People";
import Allpeople from "./pages/Allpeople/Allpeople";
import Projects from "./pages/Projects/Projects";
import YearCalendar from "./pages/Calendar/YearCalendar";
import Reports from "./pages/Reports/Reports";
import Allproject from "./pages/Projects/Allproject";
import Profile from "./pages/Profile/Profile";
import Training from "./pages/Training/Training";
import Findtraining from "./pages/Training/Findtraining";
import Feedback from "./pages/Training/Feedback";
import Quiz from "./pages/Training/Quiz";
import Registration from "./pages/Training/Registration";
import Timesheet from "./pages/Timesheet/Timesheet";
import Admin from "./pages/Admin/Admin";
import Help from "./pages/Help/Help";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Register />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              <Header />
              <Static />
            </div>
          }
        />

        <Route path="/people" element={<People />} />
        <Route path="/allpeople" element={<Allpeople />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="yearcalendar" element={<YearCalendar />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/allproject" element={<Allproject />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/training" element={<Training />} />
        <Route path="/findtraining" element={<Findtraining />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/help" element={<Help />} />



      </Routes>
    </div>
  );
}

export default App;
