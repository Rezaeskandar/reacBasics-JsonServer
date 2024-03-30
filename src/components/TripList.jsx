import React from "react";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import bootsrap from "bootstrap/dist/css/bootstrap.min.css";

const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3000/trip");
  const { data: trips, loading ,error } = useFetch(url);

  return (
    <>
      <div>TripList</div>
      <ul>
        {loading && <div>Loading Trips...</div>}
        {error && <div>{error}</div>}
        {trips && trips.map((trip) => (
          <li key={trip.id}>
            <div className="card">
              <div className="card-body">
                {trip.name}
                {trip.price} SEK : {trip.location}
              </div>
            </div>
          </li>
        ))}
        <br />

        <button
          type="button"
          className="btn btn-outline-primary m-1"
          onClick={() => setUrl("http://localhost:3000/trips?location=Iran")}
        >
          Iranian Trips
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setUrl("http://localhost:3000/trips")}
        >
          All Trips
        </button>
      </ul>
    </>
  );
};

export default TripList;
