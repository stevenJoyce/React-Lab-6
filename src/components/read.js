import React from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends React.Component {
  
    state={
        movies:[ ]
           
    };

    componentDidMount() {
      axios.get('http://localhost:4000/api/movies')
      .then((Response)=>{
        this.setState({movies:Response.data.movies});
      })
      .catch((error)=>{
        console.log(error);
      })
    
    }
  
  render(){
    return (
      <div>
        <h3>Read component</h3>
        <Movies myMovies={this.state.movies}></Movies>
      </div>
    );
  }
  
}

export default Read;