import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PeopleIcon from "@material-ui/icons/People";
import TodayIcon from "@material-ui/icons/Today";
import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";

function AdminDrawer() {
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
              console.log("edit classes");
              history.push("/editclasses");
            }}
          >
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary={"Edit Class"} />
          </ListItem>
          <ListItem
            button={true}
            onClick={() => {
              console.log("edit student");
              history.push("/editstudent");
            }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={"Edit Student"} />
          </ListItem>
          <ListItem
            button={true}
            onClick={() => {
              console.log("edit teacher");
              history.push("/editteacher");
            }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={"Edit Teacher"} />
          </ListItem>
          <ListItem
            button={true}
            onClick={() => {
              console.log("edit calendar");
              history.push("/editcalendar");
            }}
          >
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText primary={"Edit Calendar"} />
          </ListItem>
        </List>
      </div>
    );
  };

  return (
    <div>
      <div>
        <Button onClick={toggleDrawer(true)}>
          <EditIcon style={{ color: "white" }} />
        </Button>
        <Drawer open={show} onClose={toggleDrawer(false)}>
          {menu()}
        </Drawer>
      </div>
    </div>
  );
}

export default AdminDrawer;
