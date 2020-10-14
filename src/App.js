import React from 'react';
import Menu from './Menu.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="h1">Jugando y Aprendiendo</h1>
        <p>
          Los estudiantes de la Institución Educativa Santos Ángeles Custodios, de los grados de tercero a quinto de primaria; carecen de conocimiento en la asignatura de tecnología e informática. Esto es causado por la falta de teoría ya que los profesores tienen enfoque en el funcionamiento de la máquina y como resultado se tiene la necesidad de evaluar más teoría, temas en los que haya falencia tales como, historia, herramientas y exponentes tecnológicos.
        </p>

        <li>Mariana Acebedo</li>
        <li>Camnila Arias</li>
        <li>Veronia arcila</li>
        <li>Katherine Zapata</li>

        <div className="App">
          <ul>
            <Category name="Inicio"  item ={['¿Qué es Jugando y Aprendiendo?']} icon="file-texto-o" />
            <Category name="Explicación"  item ={['Tema #1', 'Tema #2', 'Tema #3' ]} icon= "cube" />
            <Category name="Evaluación"  item ={['Historia de la tenología', 'Herramientas Tecnológicas', 'Exponentes Tecnológicos']}/>
            <Category name="Progreso"  item ={['']}/>
            <Category name="Profeosres"  item ={['Preguntas', 'Posibles respuestas', 'Respuestas Corectas']}/>
            <Category name="Ayuda"  item ={['']}/>
            <Category name="Ajustes"  item ={['']}/>
          </ul>
        </div>

      </header>
    </div>
  );
}

export default App;
