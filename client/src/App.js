import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  let [dogImage, setDogImage] = useState(null)

  useEffect(() => {
    fetch("http://localhost:5000/")
    .then(response => response.json())

    .then(data => setDogImage(data.message))
  },[])

  return (
    <h1>{dogImage}</h1>
  );
}

export default App;