import './App.css';

function App() {

  const name ='Matheus';

  const newName = name.toUpperCase()

  function soma(a,b){
    return a + b;
  }

  const url='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg'
  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <h2>Hello, {newName}</h2>
      <p>Soma: {2+2}</p>
      <p>Soma: {soma(1,2)}</p>
      <img src={url} alt='Minha imagem' />

    </div>
  );
}

export default App;
