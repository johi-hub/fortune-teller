import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
const [data, setData]= useState('What does the future hold?')


const getData = () => {
  axios.get("/api/fortune")
  .then(resp => setData(resp.data))
  .catch(error => console.log(error))
}


  const handleClick = () => {
  getData();
  }

  return (
    <div className="App">
    <div className="crystal-ball">
    <h1> THE FORTUNE TELLER </h1>
    <h3> {data}</h3>
    <button className="button" onClick={handleClick}>Click Here</button>
    </div>
    </div>
  );
}

export default App;
