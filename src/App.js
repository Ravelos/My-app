import './App.css';
import {useState} from 'react'
import YourName from './components/YourName';
import Greetings from './components/Greetings';

function App() {

  const [name, setName]=useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
       <YourName setName={setName} />
       <Greetings name={name}/>
    </div>
  );
}

export default App;
