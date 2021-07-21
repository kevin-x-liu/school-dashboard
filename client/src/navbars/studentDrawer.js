import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PeopleIcon from "@material-ui/icons/People";
import TodayIcon from "@material-ui/icons/Today";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

function StudentDrawer() {
  const [show, setShow] = useState(false);

  const history = useHistory();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShow(open);
  };

  const menu = () => {
    return (
      <div>
        <List>
          <ListItem
            button={true}
            onClick={() => {
              console.log("classes");
              history.push("/classes");
            }}
          >
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary={"Classes"} />
          </ListItem>
          <ListItem
            button={true}
            onClick={() => {
              console.log("student dir");
              history.push("/studentdir");
            }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={"Student Directory"} />
          </ListItem>
          <ListItem
            button={true}
            onClick={() => {
              console.log("teacher dir");
              history.push("/teacherdir");
            }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={"Teacher Directory"} />
          </ListItem>
          <ListItem
            button={true}
            onClick={() => {
              console.log("calendar");
              history.push("/calendar");
            }}
          >
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText primary={"Calendar"} />
          </ListItem>
        </List>
      </div>
    );
  };

  return (
    <div>
      <div>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon style={{ color: "white" }} />
        </Button>
        <Drawer open={show} onClose={toggleDrawer(false)}>
          {menu()}
        </Drawer>
      </div>
    </div>
  );
}

export default StudentDrawer;
