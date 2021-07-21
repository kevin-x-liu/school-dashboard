import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

export default function EditPopup({ type }) {
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCreate = () => {
    addToDirectory();
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleFirst = (e) => {
    setFirst(e.target.value);
  };
  const handleLast = (e) => {
    setLast(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  function addToDirectory() {
    const url = new URL(
      "http://localhost:8000/admin/" + type + "-directory/add"
    );

    url.searchParams.append("first", first);
    url.searchParams.append("last", last);
    url.searchParams.append("phone", phone);
    url.searchParams.append("email", email);

    console.log(url);
    fetch(url).then((resp) => {
      return resp.json();
    });
  }

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <EditIcon></EditIcon>
      </IconButton>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>New {type}</DialogTitle>
        <DialogContent align="center">
          <TextField
            variant="outlined"
            label="First Name"
            onChange={(e) => handleFirst(e)}
          />
          <TextField
            variant="outlined"
            label="Last Name"
            onChange={(e) => handleLast(e)}
          />
          <TextField
            variant="outlined"
            label="Phone Number"
            onChange={(e) => handlePhone(e)}
          />
          <TextField
            variant="outlined"
            label="Email"
            onChange={(e) => handleEmail(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleCreate} variant="outlined" color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
