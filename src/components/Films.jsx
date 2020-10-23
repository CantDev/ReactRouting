import React, { Component } from 'react';
import Filmcards from './Filmcards'


class Films extends Component {
    constructor() {
        super();
        this.state = {
            films: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    isLoaded: true,
                    films: json,

                });

            })

            .catch((err) => console.log(err));
    }

    render() {
       return (
            this.state.films.map((ghibiliFilms) => (
                <Filmcards oneFilm={ghibiliFilms} />
            )
            )
       )
    };

}

export default Films;