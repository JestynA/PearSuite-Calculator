import { useState } from 'react';
import './App.css';

function App() {
  const [prevNumber, setPrevNumber] = useState<number | null>(null)
  const [prevOperation, setPreOperation] = useState<string | null>(null)
  const [currentNumber, setCurrentNumber] = useState<number | null>(null)

  const buttonClick = (number: number) => {
    setCurrentNumber( prev => prev !== null ? Number(String(prev).concat(String(number))) : number)
  }

  const handleOperation = (operation: string) => {
    if(operation !== '=') setPreOperation(operation)
    if(!prevNumber && currentNumber !== null) setPrevNumber(currentNumber)
    else if(prevNumber !== null && currentNumber !== null){
      if(prevOperation === '=') return
      let result = 0
      if(operation === '='){
        prevOperation === '+' ? result = currentNumber + prevNumber : result = prevNumber - currentNumber
      }
      else {
        prevOperation === '+' ? result = currentNumber + prevNumber : result = prevNumber - currentNumber
      }
      setPrevNumber(result)
      setPreOperation(operation)
    } 
    setCurrentNumber(null) 
  }

  const handleClear = () => {
    if(currentNumber !== null) return setCurrentNumber(null)
    else {
      setPrevNumber(null) 
      setPreOperation(null)
    }
  }
  return (
    <div className="App">
      <div id = 'calculator'>
        <div id ='result'>
          <p id ='runningTotal'>{prevNumber === 0 ? null : prevNumber}</p>
          <hr/>
          <p id ='currentNumber'>{prevOperation !== null ? prevOperation : null}{currentNumber === 0 ? null : currentNumber}</p>
        </div>
        <div id = 'buttonsContainer'>
          <div id = 'numbers'>
            <button onClick = {() => buttonClick(0)}>0</button>
            <button onClick = {() => buttonClick(1)}>1</button>
            <button onClick = {() => buttonClick(2)}>2</button>
            <button onClick = {() => buttonClick(3)}>3</button>
            <button onClick = {() => buttonClick(4)}>4</button>
            <button onClick = {() => buttonClick(5)}>5</button>
            <button onClick = {() => buttonClick(6)}>6</button>
            <button onClick = {() => buttonClick(7)}>7</button>
            <button onClick = {() => buttonClick(8)}>8</button>
            <button onClick = {() => buttonClick(9)}>9</button>
            <button onClick = {handleClear}>C</button>
            </div>
          <div id ='operations'>
            <button onClick = {() => handleOperation('+')}>+</button>
            <button onClick = {() => handleOperation('-')}>-</button>
            <button onClick = {() => handleOperation('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
