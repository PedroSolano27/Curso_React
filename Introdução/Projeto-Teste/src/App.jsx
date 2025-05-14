import './App.css';
import FirstComponent from './components/FirstComponent';
import ExpressionComponent from './components/ExpressionComponent';
import Events from './components/Events';
import Imagem2 from './assets/img2.png';
import { useState } from 'react';
import ListComponent from './components/ListComponent';
import ShowName from './components/ShowName';

function App() {
  const [number, changeNumber] = useState(10);

  return (
    <>
      <h1>Introdução ao React</h1>

      <section>
        <FirstComponent/>
        <ExpressionComponent/>
        <Events/>
      </section>

      <section>
        <img src="/img1.jpg" alt="Imagem 1"/>
        <img src={Imagem2} alt="Imagem 2"/>
      </section>

      <section>
        <h4>Número: {number}</h4>
        <button onClick={function(){changeNumber(15);}}>Mudar número</button>
      </section>

      <section>
        <ListComponent/>
      </section>
      
      <section>
        <ShowName name="Pedro" age={20} email="pedro@123"/>
      </section>

    </>
  );
}

export default App;