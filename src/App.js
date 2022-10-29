import './App.css';
import SayMyName from './components/SayMyName';
import Person from './components/Person'


function App() {

  const name1 = 'Jesus';

  return (
    <div className="App">
      <SayMyName name="Matheus" />
      <SayMyName name="Robert" />
      <SayMyName name={name1} />
      <Person 
      name = "Julio"
      age = "45"
      profession = "Analist"
      picture = "https://s2.glbimg.com/3fuYf90x9fdl1KC1J_vcdv3y4D8=/600x400/smart/e.glbimg.com/og/ed/f/original/2022/08/02/gettyimages-1412406808.jpg"
      />
    </div>
  );
}

export default App;
