import React, { useState } from 'react';
import './App.css';

const App = () => {
  let time = new Date().toLocaleTimeString();  //Built-in function
  const [data, newData] = useState(time);  //Time is fetched from the system's clock
  // data -> current time
  //newData -> updated time

  const updateTime = () => {     //To update time 
    time = new Date().toLocaleTimeString(); 
    newData(time);
  };

  setInterval(updateTime,1000); //For every 1 second the time gets updated automatically 
  //1000 milisecond = 1second

  return(
    <>
    <h1 className='time'> {data} </h1>
    </>
  );
}
export default App;