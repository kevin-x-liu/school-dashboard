import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Student from "./Student";

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

export default function Directory() {
  const classes = useStyles();
  const [population, setPopulation] = useState([]);

  useEffect(() => {
    const url = new URL(
      "http://localhost:8000/student/student-directory/retrieve"
    );
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        setPopulation(obj);
      });
  }, []);

  return (
    <div style={{ marginLeft: "8vw", marginTop: "5vh" }}>
      <Grid container justify="center" spacing={2} className={classes.grid}>
        {population.map((person) => (
          <Grid item>
            <Paper className={classes.paper}>
              <Student student={person} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
