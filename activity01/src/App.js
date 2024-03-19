import Dad from "./components/q1/01Dad";
import * as PC from "./components/q2/02MyPC";
import World from "./components/q3/03Battle";

function App() {
  return (
    <div className="App">
      <h1>Aluno: José Vinícius Evangelista Dias de Souza</h1>
      <h1>Matrícula: 537071</h1>
      <div style={{height:3,width:100,backgroundColor:'black',marginTop:10}}/>
      <h1>Q1</h1>
      <div style={{height:3,width:100,backgroundColor:'black'}}/>
        <Dad />
      <h1>Q2</h1>
      <div style={{height:3,width:100,backgroundColor:'black'}}/>
        <PC.Motherboard name="MSI B450M" price={100}/>
        <PC.Memory name="Corsair Vengeance LPX 16GB" price={150}/>
        <PC.GraphicsCard name="Gigabyte GeForce RTX 2060" price={300}/>
        <h1>Q3</h1>
        <div style={{height:3,width:100,backgroundColor:'black'}}/>
        <World />
    </div>
    
  );
}

export default App;
