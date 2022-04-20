import { useEffect, useState } from "react";
import "./App.css";
import BooksList from "./components/BooksList";
import Clock from "./components/Clock";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [load, setLoading] = useState(false);

  // CICLO DE VIDA REACT
  // MONTAGEM
  useEffect(() => {
    setLoading(true);
  }, []);

  // ATUALIZAÇÃO
  useEffect(() => {
    if (load) {
      // CASO NÃO COLOQUE UMA CONDIÇÃO ESSA LÓGICA SERÁ EXECUTADA NA MONTAGEM
      console.log("Atualização");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  // DESMONTAGEM
  useEffect(() => () => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        {isVisible && <Clock />}
        <button onClick={() => setIsVisible(!isVisible)}>
          Desligar Relógio
        </button>

        <BooksList />
      </header>
    </div>
  );
}

export default App;
