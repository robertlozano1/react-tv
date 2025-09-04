import { useState } from "react";
import { tvShows } from "./shows/data.js";
import ShowSelection from "./shows/ShowSelection.jsx";
import ShowDetails from "./shows/ShowDetails.jsx";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows, setShows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(shows[0]);

  return (
    <>
      <header>
        <div className="header-title">
          <img
            src="/images/logo_dark.svg"
            alt="React TV Logo"
            className="logo"
          />
          <h1>React TV</h1>
        </div>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
