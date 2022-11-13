import './App.css';
import AnotherList from './components/AnotherList';

function App() {

  const myItens=['Vue','Angular','React']

  return (
    <div className="App">
      <h1>Rendering lists</h1>
      <AnotherList itens={myItens}/>
       
    </div>
  );
}

export default App;
