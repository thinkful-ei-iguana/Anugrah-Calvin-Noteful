import React from 'react';

const note = () => {
    return (
        <div>
            <header className="mainHeader">
                <link to="/">Noteful</link>
            </header>

            <section className="sideBar">
            <button>Go Back</button>
            <h2>Folder 3</h2>
            </section>

            <section className="mainSection">
                <div>
                <h2>Note 1</h2>
                <p>Date modified info</p>
                <button>Delete Note</button>
                </div>

                <p>note content lorem impsum blah</p>

            </section>
        </div>
    )

}

export default note;