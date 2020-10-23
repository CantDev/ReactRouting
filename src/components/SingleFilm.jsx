import React, { Component } from 'react';
import { Link } from "react-router-dom"

class SingleFilm extends Component {
    constructor() {
        super();
        this.state = {
            film: {},
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then((res) => res.json())
            .then((film) => {
                this.setState({
                    isLoaded: true,
                    film: film,
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">{this.state.film.title}</h5>
                    <p class="card-text">{this.state.film.description}</p>
                    <Link to={`/Films/${this.state.film.url}`}>
                        <button className="btn btn-dark">See Raw Data</button>
                    </Link>
                </div>
            </div>
        )
    };

}

export default SingleFilm;