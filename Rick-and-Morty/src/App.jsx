import { useEffect } from 'react';
import { useState } from 'react'
import './App.css';
import { Pagina } from './componentes/pagina';
import { api } from './services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [lista, setLista] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    async function getRicky() {
      try {
        const res = await api.get('character?page=' + pagina, {
          params: {
            limit: 20,
            offset: 20
          }
        });
        setLista(res.data.results);
        console.log(res)
      } catch (error) {
        console.log(error);
      }
    }
    getRicky();
  }, [pagina]);

  const avancar = () => {
    setPagina(pagina + 1);
  };
  const retroceder = () => {
    pagina > 1 ? setPagina(pagina - 1) : toast.warning('Esta é a página inicial. Impossível retroceder!');
  };

  return (
    <div className="App">
      <header className='header'>
        <h1>PERSONAGENS DE RICK AND MORTY</h1>
        <p>Clique para avançar / retroceder página</p>
      </header>
      <main>
        <div className='botao'>
          <h3>Você está na página <span>{pagina}</span></h3>
          <div className='botao__botoes'>
            <button onClick={retroceder}> Anterior </button>
            <button onClick={avancar}> Próximo </button>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ul className='lista'>
          {lista.map((personagem) => (
            <Pagina key={personagem.id} personagem={personagem} />
          ))}
        </ul>
      </main>
    </div>
  )
}
export default App
