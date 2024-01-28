// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [movies, setMovies] = useState({})
  useEffect(() => {
    fetch('/movies')
    .then((r)=> r.json())
    .then(movies=> setMovies(movies))
    // {console.log('Data: ', movies)}
  }, []);

  console.log (movies)
  
  return (
    <div className="App">
      <h1>Fullstack Development</h1>
      <h2>Check console to  see the data!</h2>
    </div>
  );
}

export default App;
