import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@material-ui/core";
import AddEvent from "./addEvent";
import DeleteEvent from "./deleteEvent";

function CalendarEdit() {
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const [date, setDate] = useState("");

  const [title, setTitle] = useState("");

  const [start, setStart] = useState("");

  const [end, setEnd] = useState("");

  const [detail, setDetail] = useState("");

  const [change, setChange] = useState(true);

  const [eventOpen, setEventOpen] = useState(false);

  const [id, setId] = useState("");

  const headerFormat = {
    start: "dayGridMonth,dayGridWeek,dayGridDay",
    center: "title",
    end: "today prev,next",
  };

  function newFetch() {
    const url = new URL("http://localhost:8000/student/calendar/retrieve");

    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        setData(obj);
      });
  }

  useEffect(() => {
    console.log("refresh");
    newFetch();
  }, [change]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEventOpen(false);
  };

  const handleAdd = () => {
    setOpen(false);
    let temp = {
      title: title,
      start: new Date(date + "T" + start).valueOf(),
      end: new Date(date + "T" + end).valueOf(),
      detail: detail,
      id: title + new Date(date + "T" + start).valueOf(),
    };

    AddEvent(temp).then(() => {
      setChange(!change);
    });
  };

  const handleDataClick = (info) => {
    handleOpen();
    setDate(info.dateStr);
  };

  const handleEventClick = (info) => {
    setTitle(info.event.title);
    setStart(String(info.event.start).slice(15, 21));
    setId(info.event.id);
    setEventOpen(true);
  };

  const handelDelete = () => {
    DeleteEvent(id).then(() => {
      setChange(!change);
    });

    setEventOpen(false);
  };

  return (
    <div
      style={{
        width: "96vw",
        display: "block",
        justifyContent: "center",
        marginLeft: "2vw",
        marginRight: "2vw",
        marginTop: "2vh",
        fontFamily: "roboto",
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="90vh"
        headerToolbar={headerFormat}
        events={data}
        dateClick={(info) => {
          handleDataClick(info);
        }}
        eventClick={(info) => {
          handleEventClick(info);
        }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Event to {date}</DialogTitle>
        <DialogContent>
          <form style={{ width: "15vw" }}>
            <div>
              <TextField
                label="title"
                fullWidth
                margin="normal"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                label="start time"
                helperText="ex 05:30"
                fullWidth
                margin="normal"
                onChange={(e) => {
                  setStart(e.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                label="end time"
                helperText="ex 14:45"
                fullWidth
                margin="normal"
                onChange={(e) => {
                  setEnd(e.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                label="details"
                multiline
                fullWidth
                rows={4}
                margin="normal"
                onChange={(e) => {
                  setDetail(e.target.value);
                }}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={eventOpen} onClose={handleClose}>
        <DialogTitle>
          remove {title} at {start}
        </DialogTitle>
        <DialogContent style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handelDelete}>delete</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CalendarEdit;
