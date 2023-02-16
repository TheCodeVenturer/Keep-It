import React, { useState } from "react";
import BookIcon from "@mui/icons-material/Book";
import "../CSS/Header.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';

const Header = (props) => {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [alert,setAlert] = useState("none");
  return (
    <div className="header">
      <h1>
        Keep It! <BookIcon sx={{ color: "#FF4500" }} fontSize="large" />
      </h1>
      <div style={{display:alert}} className="alert">
        Note Missing....
        <CancelIcon onClick={()=>{setAlert("none");}}/>
      </div>
      <div className="createNote">
        <input
          type="text"
          placeholder="Name the Note"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          autoFocus
          spellcheck="false"
        />
        <br/>
        <textarea
          spellcheck="false"
          type="text"
          placeholder="Add a Note...."
          onChange={(event) => {
            setNote(event.target.value);
            setAlert("none");
          }}
          value={note}
          rows="3"
        />
        <br/>
        <button
          type="submit"
          onClick={() => {
            if(note){
                if(!title)
                    props.handleSubmit(note,note.split(" ")[0]);
                else
                    props.handleSubmit(note, title);
            setNote("");
            setTitle("");
            }
            else{
                setAlert("block");
            }
          }}
        >
          <AddCircleOutlineIcon/>
        </button>
      </div>
    </div>
  );
};

export default Header;
