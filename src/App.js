import React from 'react';
import './App.css';

function App() {

  const [count, setCount] = React.useState(0)

  const changeNumber = (number) => {
    setCount(count + number)

  }

  return (
    <div className='App'>
    <p> {count} </p>
    <button onClick={()=>changeNumber(1)}>hello</button>
    <button onClick={()=>changeNumber(-1)}>hello</button>

    </div>
);
}

export default App;
