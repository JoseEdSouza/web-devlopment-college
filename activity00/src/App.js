import './App.css';
import MyData1 from './components/atividade00/01MeusDados';
import MyData2 from './components/atividade00/02MeusDados';
import Temperature from './components/atividade00/03Temperatura';


function App() {
  
  return (
    <div className="App">
      <MyData1/>
      <div style={{borderTop: '3px solid #bbb'}}/>
      <MyData2
        name="José Vinícius Evangelista Dias de Souza"
        course="Software Engineering"
        university="UFC"
      />
      <div style={{borderTop: '3px solid #bbb'}}/>
      <Temperature k={373} c={100} f={212}/>
    </div>
  );
}

export default App;
