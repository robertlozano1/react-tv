import { Fragment } from "react";
import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((show, index) => (
        <Fragment key={show.name}>
          <a className="show" onClick={() => setSelectedShow(show)}>
            {show.name}
          </a>
          {index < shows.length - 1 && <span className="separator">|</span>}
        </Fragment>
      ))}
    </nav>
  );
}
