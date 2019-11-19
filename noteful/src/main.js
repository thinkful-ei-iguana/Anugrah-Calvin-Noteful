import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
//import Note from "/note";

// class Main extends Component {

const Main = () => {
  return (
    <div>
      <header className="mainHeader">
        <Link to="/">Noteful</Link>
      </header>

      <section className="sideBar">
        <ul>
          <li className="folder">Folder 1</li>
          <li className="folder">Folder 2</li>
          <li className="folder">Folder 3</li>
        </ul>
        <button>Add folder</button>
      </section>

      <section className="mainSection">
        <ul>
          <li>
            <div>
              <h2><Link to="/note">Note 1</Link></h2>
              <p>Date modified info</p>
              <button>Delete Note</button>
            </div>
          </li>

          <li>
            <div>
              <h2>Note 2</h2>
              <p>Date modified info</p>
              <button>Delete Note</button>
            </div>
          </li>

          <li>
            <div>
              <h2>Note 3</h2>
              <p>Date modified info</p>
              <button>Delete Note</button>
            </div>
          </li>

          <button>Add Note</button>
        </ul>
      </section>
    </div>
  );
};

export default Main;
