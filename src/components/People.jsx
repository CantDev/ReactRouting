import React, { Component } from 'react';


class People extends Component {
    constructor() {
      super();
      this.state = {
        people: [],
        isLoaded: false,
      };
    }

    componentDidMount() {
    
    fetch("https://ghibliapi.herokuapp.com/people")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        isLoaded: true,
        people: json,
        

      });
    })
    .catch((err) => console.log(err));
    
}
 

render () {
    return (
        <h1></h1>
    )
}
}

export default People;