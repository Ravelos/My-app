import './App.css';
import Event from './components/Event';
import Form from './components/Form';

function App() {


  return (
    <div className="App">
      <h1>Testing events</h1>
      <Event number="1"/>
      <Event number="2"/>
      <Form/>  
    </div>
  );
}

export default App;
