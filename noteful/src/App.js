import React, { Component } from "react";
import Main from "./main";
import Note from "./note"
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Main} />

        <Route exact path="/note" component={Note} />

      </div>)
    //<Main />;
  }
}

export default App;

// basic / route
// /folder
// /folder.id
// /note
// /note.id

//route for every url
//route for
