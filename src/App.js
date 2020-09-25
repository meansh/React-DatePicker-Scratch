import React from 'react';
import './App.css';
import MyDatePicker from './MyDatePicker/MyDatePicker'

function onChange(timestamp) {
  console.log(timestamp);
}

function App() {
  return (
    <div className="App">
      <h1>Hello, please select the date.</h1>
       <MyDatePicker onChange={onChange}/> 
    </div>
  );
}

export default App;