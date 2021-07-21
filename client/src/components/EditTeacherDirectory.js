import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Teacher from "./Teacher";
import EditPopup from "./EditPopup";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 12fr)",
  },
  paper: {
    height: 200,
    width: 300,
  },
}));

export default function EditDirectory() {
  const classes = useStyles();
  const [population, setPopulation] = useState([]);
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    const url = new URL(
      "http://localhost:8000/student/teacher-directory/retrieve"
    );
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        setPopulation(obj);
      });
  }, [, changing]);

  function removeFromDirectory(person) {
    const url = new URL("http://localhost:8000/admin/teacher-directory/remove");
    url.searchParams.append("first", person.first);
    url.searchParams.append("last", person.last);

    return fetch(url).then(setChanging(!changing));
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2vh",
        }}
      >
        <div style={{ display: "flex" }}>
          <Typography style={{ fontSize: "20px" }}>
            Add to teacher directory:
          </Typography>
          <EditPopup type="teacher" />
        </div>
      </div>

      <div style={{ marginLeft: "8vw", marginTop: "2vh" }}>
        <Grid container justify="center" spacing={2} className={classes.grid}>
          {population.map((person) => (
            <Grid item>
              <Paper className={classes.paper}>
                <Teacher teacher={person} />
                <br />
                <IconButton
                  onClick={() => removeFromDirectory(person)}
                  style={{ marginLeft: "250px" }}
                >
                  <Delete />
                </IconButton>
                <div style={{ marginLeft: "250px" }}>
                  <EditPopup type="teacher" />
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
