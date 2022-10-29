import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name ='Matheus';

  const newName = name.toUpperCase()

  function addition(a,b){
    return a + b;
  }

  const url='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg'
  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <h2>Hello, {newName}</h2>
      <p>Addition: {2+2}</p>
      <p>Addition: {addition(1,2)}</p>
      <img src={url} alt='Minha imagem' />
      <HelloWorld/>
    </div>
  );
}

export default App;
