import React from 'react';

export default function MovieSearch(prop){
    const {movie} = prop;
    return(
        <div className="card-list">
                {movie.filter(test => test.poster_path).map(test => {
                  return (
                    <div className="card-box" key={test.id}>
                      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${test.poster_path}`}
                      alt={test.title + 'poster'}/>
                      <div className="movie-content">
                        <h3 className="card--title">{test.title}</h3>
                        <p><small>RELEASE DATE: {test.release_date}</small></p>
                        <p><small>RATING: {test.vote_average}</small></p>
                        <p className="card--desc">{test.overview}</p>
                      </div>

                    </div>
                  )
                  })}
          </div>    
    )
}