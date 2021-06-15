import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <>
      <h1 className="heading">React Movie Search</h1>
      <App />
    </>
 ,document.getElementById('root')
);




// <div className="card--content">
  // <h3 className="card--title">{movie.title}</h3>
  // <p><small>RELEASE DATE: {movie.release_date}</small></p>
  // <p><small>RATING: {movie.vote_average}</small></p>
  // <p className="card--desc">{movie.overview}</p>
// </div>