import { Typography } from "@material-ui/core";

export default function Student({ student }) {
  return (
    <div>
      <div style={{ height: "10px" }}></div>
      <Typography align="center" style={{ fontSize: "20px" }}>
        {student.first} {student.last}
      </Typography>
      <Typography style={{ fontSize: "15px", marginLeft: "5px" }}>
        &nbsp;Grade: {student.grade}
      </Typography>
      <Typography style={{ fontSize: "15px", marginLeft: "5px" }}>
        &nbsp;Phone Number: {student.contact[0]}
      </Typography>
      <Typography style={{ fontSize: "15px", marginLeft: "5px" }}>
        &nbsp;Email: {student.contact[1]}
      </Typography>
    </div>
  );
}
