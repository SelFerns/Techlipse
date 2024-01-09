import React from "react";
import "./Register.css";
export default function Registration() {
    return (
        <>
            <h1 className="custom-font title">Registration</h1>
            <form>
                <div class="container mb-3">
                    <h5 className="custom-font">Introduction Video</h5>
                    <label htmlFor="Participant1" class="form-label">Participant 1</label>
                    <input type="Text" class="form-control" id="Participant1" aria-describedby="emailHelp" />
                </div>
                <div class="container mb-3">
                    <h5 className="custom-font">Reel it</h5>
                    <label htmlFor="Participant1" class="form-label">Participant 1</label>
                    <input type="Text" class="form-control" id="Participant1" aria-describedby="emailHelp" />
                </div>
                <div class="container mb-3">
                    <h5 className="custom-font">Meme</h5>
                    <label htmlFor="Participant1" class="form-label">Participant 1</label>
                    <input type="Text" class="form-control" id="Participant1" aria-describedby="emailHelp" />
                    <button type="submit" class="btn btn-primary my-3">Submit</button>
                </div>
            </form>
        </>
    );
}