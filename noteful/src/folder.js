import React from "react";

const folder = () => {
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
          <li>
            <div>
              <h2>Note 1</h2>
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
        </ul>

        <button>Add note</button>
      </section>
    </div>
  );
};

export default folder;

{
  /* <Route
path="/note/:noteId"
render={routeProps => {
    const {noteId} = routeProps.match.params;
    const note = findNote(notes, noteId) || {};
    const folder = findFolder(folders, note.folderId);
    return <NotePageNav {...routeProps} folder={folder} />;
}}
/> */
}
