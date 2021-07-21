import { Typography } from "@material-ui/core";

export default function Teacher({ teacher }) {
  return (
    <div>
      <div style={{ height: "10px" }}></div>
      <Typography align="center" style={{ fontSize: "20px" }}>
        {teacher.first} {teacher.last}
      </Typography>
      <Typography style={{ fontSize: "15px", marginLeft: "5px" }}>
        &nbsp;Phone Number: {teacher.contact[0]}
      </Typography>
      <Typography style={{ fontSize: "15px", marginLeft: "5px" }}>
        &nbsp;Email: {teacher.contact[1]}
      </Typography>
    </div>
  );
}
