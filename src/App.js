import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className ="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 79004543</h2>

        <span>Rua teste algum</span>
        <span>Complemento teste algum</span>
        <span>Vila rosa</span>
        <span>Sao Paulo</span>

      </main>



    </div>
  );
}

export default App;