import React from "react";
import StudentNavbar from "./navbars/studentNavbar";
import TeacherNavbar from "./navbars/teacherNavbar";
import AdminNavbar from "./navbars/adminNavbar";
import CalendarView from "./calendar/calendarView";
import { Route, Switch } from "react-router-dom";
import TeacherDirectory from "./components/TeacherDirectory";
import EditTeacherDirectory from "./components/EditTeacherDirectory";
import StudentDirectory from "./components/StudentDirectory";
import EditStudentDirectory from "./components/EditStudentDirectory";

import CalendarEdit from "./calendar/calendarEdit";

function App() {
  return (
    <div>
      <AdminNavbar />
      <Switch>
        <Route path="/teacherdir" component={TeacherDirectory} />
        <Route path="/editteacher" component={EditTeacherDirectory} />
        <Route path="/studentdir" component={StudentDirectory} />
        <Route path="/editstudent" component={EditStudentDirectory} />
        <Route path="/calendar" component={CalendarView} />
        <Route path="/editcalendar" component={CalendarEdit} />
        <Route path="/" exact component={CalendarView} />
      </Switch>
    </div>
  );
}

export default App;
