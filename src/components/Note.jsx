import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InfoIcon from "@mui/icons-material/Info";
import "../CSS/Note.css";

const Note = (props) => {
  const [mouseEnterInfo, setMouseEnterInfo] = useState(false);
  return (
    <div className="notes">
      <h2>{props.title}</h2>
      <div
        className="info"
        onMouseEnter={() => setMouseEnterInfo(true)}
        onMouseOut={() => setMouseEnterInfo(false)}
      >
        {mouseEnterInfo ? (
          <p className="dateTime">{props.dateAndTime}</p>
        ) : (
          <InfoIcon sx={{ color: "white" }} />
        )}
      </div>
      <div className="description">{props.desc}</div>
      <div className="deleteIcon">
        <DeleteForeverIcon
          sx={{ color: "#000" }}
          onClick={() => {
            props.handleDelete(props.id);
          }}
        />
      </div>
    </div>
  );
};

export default Note;
