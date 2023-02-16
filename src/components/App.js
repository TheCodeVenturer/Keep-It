import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { db } from "../db";
import Note from "./Note";
import Header from "./header";
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import "../CSS/App.css"

const App = () => {
  const [notes, setNotes] = useState([]);
  useLiveQuery(async () => {
    const storedNotes = await db.notes.toArray();
    setNotes(storedNotes);
  }, []);

  const addNote = async (note, title) => {
    try {
      const time = new Date().toLocaleString();
      await db.notes.add({ note, title, time });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (note, title) => {
    addNote(note, title);
  };
  const handleDelete = async (id) => {
    await db.notes.delete(id);
  };
  return (
    <>
      <Header handleSubmit={handleSubmit} />
      <div className="noteContainer">
        {notes.length>0?notes.map((ele) => (
          <Note
            id={ele.id}
            title={ele.title}
            desc={ele.note}
            dateAndTime={ele.time}
            handleDelete={handleDelete}
          />
        )):
        <div className="empty">Your NotePad is Empty<br/><Battery0BarIcon/></div>
        }
      </div>
    </>
  );
};

export default App;
