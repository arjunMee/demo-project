import React,{useState} from 'react'
import './App.css';

function App() {

  const [query, setQuery] = useState("")

  function SearchMovie(){
    console.log("hello");
  }

  return (
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
  );
}

export default App;
