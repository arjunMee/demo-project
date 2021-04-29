import React,{useState} from 'react'
import './App.css';

function App() {
   //states- input query, movies
  const [query, setQuery] = useState("step up")

  //create the state for movies, and update that state appropriate
  const [movie, setMovie] = useState([])

  const [test] = useState([3,5,6,3,3]);
  const [test1] = useState([{num:3},{num:3},{num:4},{num:9},{num:5}]);

  async function SearchMovie(e){
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=2134f52591bc943264d33b4bd3b203c9&language=en-US&query=${query}&page=1&include_adult=false`;
    
    try{
      const pro = await fetch(url);
      const res = await pro.json();
      console.log(res);
      setMovie(res.results);
    }catch(err){
      console.error(err);
    }
  }

  console.log(movie)
  console.log(test1)

  // const exa = !query ? "none" : "block";
  return (
    <>
        <form className="form" onSubmit={SearchMovie}>
            <label className="label" htmlFor="query">
              Movie Name
              <input 
                className="input"
                type="text"
                name="query"
                placeholder="e.g. Step Up"
                value={query}
                onChange={e => setQuery(e.target.value)}/>
            </label>
            <button className="button" type="submit">Search</button>
        </form>

        <div>
              <h1 style={{textAlign:"center", display: !query ? "none" : "block" }}><small>you might be searching for : {query}</small></h1>
        </div>


        {/* {movies.filter(movie => movie.poster_path).map(movie => ( */}
                   
          <div className="card-list">
             <p className="test">
                {test.map(test => test + 10)}
             </p>
             
             <p className="test">
                {test1.map(test => test.num )}
             </p>
             
             <div className="test">
                {movie.map(test => {
                  return (<p key={test.id}>{test.id}</p>)
                  })}
             </div>
          </div>    
      </>
  );
}

export default App;
