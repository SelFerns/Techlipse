import React from "react";
import "./Register.css";
export default function Registration() {
    return (
        <>
            <h1 >Registration</h1>
            <form>
                <div class="container mb-3">
                    <h3>Introduction Video</h3>
                    <label htmlFor="Participant1" class="form-label">Participant 1</label>
                    <input type="Text" class="form-control" id="Participant1" aria-describedby="emailHelp" />
                </div>
                <div class="container mb-3">
                    <h3>Reel it</h3>
                    <label htmlFor="Participant1" class="form-label">Participant 1</label>
                    <input type="Text" class="form-control" id="Participant1" aria-describedby="emailHelp" />
                </div>
                <div class="container mb-3">
                    <h3>Meme</h3>
                    <label htmlFor="Participant1" class="form-label">Participant 1</label>
                    <input type="Text" class="form-control" id="Participant1" aria-describedby="emailHelp" />
                    <button type="submit" class="btn btn-primary my-3">Submit</button>
                </div>
            </form>
        </>
    );
}