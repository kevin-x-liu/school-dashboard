import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fontsource/roboto";

function CalendarView() {
  const [data, setData] = useState([]);

  const [calEvent, setCalEvent] = useState([]);

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
        formatEvent(obj);
      });
  }

  useEffect(() => {
    console.log("refresh");
    newFetch();
  }, []);

  console.log(data);
  console.log(calEvent);

  const formatEvent = (res) => {
    return setCalEvent(
      res.map((e) => ({
        title: e.title,
        start: e.start,
        end: e.end,
        detail: e.detail,
      }))
    );
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
      }}
    >
      <div style={{ fontFamily: "roboto" }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          height="90vh"
          headerToolbar={headerFormat}
          events={calEvent}
        />
      </div>
    </div>
  );
}

export default CalendarView;
