import './App.css';
import React, {useState} from 'react';

function App() {

  function nextVerb() {
    setIge("estar");
    setEset("perfecto");
    setAlany("tú");
  }

  function checkVerb() {
    setEredmeny("Helyes");
  }

  let [ige, setIge] = useState("ser");
  let [eset, setEset] = useState("jelen");
  let [alany, setAlany] = useState("yo");
  let [eredmeny, setEredmeny] = useState("");

  return (
    <div className="App">
      <p>
        Eset
      </p>

      <div>
        <div>
          <input type="checkbox" id='jelen' name='Jelen'/> Jelen
        </div>
        <div>
          <input type="checkbox" id='jovo' name='Jövő'/> Jövő
        </div>
        <div>
          <input type="checkbox" id='perfecto' name='Közelmúlt (Pretérito perfecto)'/> Közelmúlt (Pretérito perfecto)
        </div>
        <div>
          <input type="checkbox" id='indefinido' name='Elbeszélő múlt (Pretérito indefinido)'/> Elbeszélő múlt (Pretérito indefinido)
        </div>
      </div>

      <p>
        Ige: {ige}
      </p>
      <p>
        Eset: {eset}
      </p>
      <p>
        Alany: {alany}
      </p>

      <p>
        Ragozás: <input type='text'/>
      </p>

      <p>
        Eredmény: {eredmeny}
      </p>

      <p>
        <button id='ok' onClick={checkVerb}>Ellenőrzés</button>
        <span> </span>
        <button id='next' onClick={nextVerb}>Következő</button>
      </p>
    </div>
  );
}

export default App;
