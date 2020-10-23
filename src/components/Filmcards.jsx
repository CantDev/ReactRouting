import React from 'react';
import Films from './Films';
import { Link } from "react-router-dom";

function Filmcards(props) {
    return (

        <div class="card" >
            <div class="card-body">
                <h5 class="card-title">{props.oneFilm.title}</h5>
                <p class="card-text">{props.oneFilm.description}</p>
                <Link to={`/Films/${props.oneFilm.id}`}>
                    <button className="btn btn-dark">See More</button>
                </Link>
            </div>
        </div>
    )
}

export default Filmcards