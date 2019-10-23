import React from 'react';
import axios from 'axios';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '',
                  year: '',
                  poster: ''};

    this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
    this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
    this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeMovieTitle(e) {
    this.setState({title: e.target.value});
  }
  handleChangeMovieYear(e) {
    this.setState({year: e.target.value});
  }
  handleChangeMoviePoster(e){
    this.setState({poster: e.target.value});
  }

  handleSubmit(e) {
    alert('Movie: ' + this.state.title + "\nYear: " + this.state.year + "\nPoster URL: " + this.state.poster);
    console.log("Movie: " + this.state.title + "\nYear: " + this.state.year + "\nPoster URL: " +  this.state.poster);
    e.preventDefault();
  

  const newMovie = {
    title:this.state.title,
    year:this.state.year,
    poster:this.state.poster
  }//const

  axios.post('http://localhost:4000/api/movies',newMovie)
    .then()
    .catch();

 }//handle submit 
 
 
  render() {
    return (
      <div>
        <h3> Hello from the Create component</h3>
      
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
        <label>
           Movie Title:
        </label>
          <input type="text" 
          value={this.state.title} 
          onChange={this.handleChangeMovieTitle} />
        
        </div>
        <div className='form-group'>
        <label>
          Year Released:
        </label>
          <input type="text" 
          value={this.state.year} 
          onChange={this.handleChangeMovieYear} />
        
        </div>
        <div className='MoviePoster'>
        <label>
          Movie Poster:
         </label> 
         <textarea
          rows='3'
          className='form-control'
          value={this.state.poster} 
          onChange={this.handleChangeMoviePoster} />
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
  
}

export default Create;