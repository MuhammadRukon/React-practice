import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import notesArr from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notesArr.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
