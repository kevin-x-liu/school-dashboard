import React from "react";
import StudentDrawer from "./studentDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

function TeacherNavbar() {
  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              width: "35vw",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <StudentDrawer />

            <Button component={Link} to="/edit">
              <EditIcon style={{ color: "white" }} />
            </Button>
          </div>
          <div
            style={{
              width: "30vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">Thomas Jefferson ES Dashboard </Typography>
            <img
              src="./slug.png"
              alt="slug picture"
              width="50vw"
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div
            style={{
              width: "35vw",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="inherit"
              onClick={() => {
                handleLogout();
              }}
            >
              LOGOUT
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TeacherNavbar;
