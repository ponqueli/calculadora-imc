import { useState } from "react";
import "./App.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState('');

  function calcularIMC(){
    const alt = altura/100;
    const imc = peso/ (alt * alt);

    if( imc < 18.6 ){
      setMensagem(`Seu IMC é de ${ imc.toFixed(2) }, abaixo do peso!`,  );
    }else if(imc >= 18.6 && imc < 24.9 ){
      setMensagem(`Seu IMC é de ${ imc.toFixed(2) }, no peso ideal!`);
    }else if(imc >= 24.9 && imc < 34.9 ){
      setMensagem(`Seu IMC é de ${ imc.toFixed(2) }, levemente acima do peso!`);
    }else if(imc >=34.9){
      setMensagem(`Seu IMC é de ${ imc.toFixed(2) }, acima do peso! Cuidado com a Obesidade!`);
    }
  }

  return (
    <div className="app">
      <h1> Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Informe o peso em (kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Informe a altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          onKeyUp={(e) => (e.key === "Enter" ? calcularIMC() : {})}
        />

        <button onClick={calcularIMC}>Calcular</button>
      </div>

      <h2>{ mensagem }</h2>
    </div>
  );
}
