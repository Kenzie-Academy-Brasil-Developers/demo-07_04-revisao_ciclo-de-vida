import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [intervalId, setIntervalId] = useState();

  // Ciclo de vida - MONTAGEM
  useEffect(() => {
    // console.log("montagem - Clock");
    const timeId = setInterval(() => setTime(new Date()), 1000);

    setIntervalId(timeId);
  }, []);

  const stopClock = () => {
    clearInterval(intervalId);
    setIntervalId();
  };

  // Ciclo de vida - DESMONTAGEM (O componente possui alguma lógica ou state que precisa ser parado ou reinicializado)
  useEffect(() => {
    return () => {
      //   console.log("Desmontagem- Clock");
      clearInterval(intervalId);
      setIntervalId();
    };
  }, []);

  //   console.log("Renderização - Clock");

  return (
    <>
      <h1>{time.toLocaleTimeString("pt-BR")}</h1>
      <button onClick={stopClock}>Pausar</button>
    </>
  );
};

export default Clock;
