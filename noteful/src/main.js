import React from "react";
import "./main.css";

// class Main extends Component {

const Main = () => {
  return (
  <div>
    <header className="mainHeader">
      {/* <link to="/">Noteful</link> */}
    </header>

    <section className="sideBar">
      <ul>
        <li>Folder 1</li>
        <li>Folder 2</li>
        <li>Folder 3</li>
      </ul>
      <button>Add folder</button>
    </section>

    <section className="mainSection">
      <ul>
        <li><div>
          <h2>Note 1</h2>
          <p>Date modified info</p>
          <button>Delete Note</button>
          </div></li>

          <li><div>
          <h2>Note 2</h2>
          <p>Date modified info</p>
          <button>Delete Note</button>
          </div></li>

          <li><div>
          <h2>Note 3</h2>
          <p>Date modified info</p>
          <button>Delete Note</button>
          </div></li>

       <button>Add Note</button>
      </ul>
    </section>

  </div>
  )};

export default Main;
