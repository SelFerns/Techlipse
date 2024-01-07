import React from "react";
import "./EventCard.css"
export default function EventCard({ event }) {
    return (
        <div className="card mb-3 card-width">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={process.env.PUBLIC_URL + event.imgURL} className="img-fluid rounded-top" alt="something.img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text">{event.description}</p>
                        {/* Add any other content */}
                    </div>
                </div>
            </div>
        </div>
    );
}
