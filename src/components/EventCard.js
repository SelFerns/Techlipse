import React from "react";
import "./EventCard.css";

export default function EventCard({ event }) {
  return (
    <div className="card mb-3 card-width">
      <div className="row g-0">
        <div className="col-md-4">
          <img
          src={event.img}
            className="img-fluid rounded-top"
            alt="something.img"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title custom-font">{event.name} lll</h5>
            <p className="card-text">{event.desc} kkk</p>
          </div>
        </div>
      </div>
    </div>
  );
}
