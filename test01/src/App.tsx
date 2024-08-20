import { Questão01A } from './question1/Questão01'
import { Questão02 } from './question2/Questão02'
import { Questão03 } from './question3/Questão03'
import { Questão04 } from './question4/Questão04'
import { Questão05 } from './question5/Questão05'

function App() {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B4CEE3",
        border: "1px solid black",
        overflow: "auto",
        height: "fit-content",
        borderRadius: 10,
      }}
    >
      <Questão01A/>
      <Questão02/>
      <Questão03/>
      <Questão04/>
      <Questão05/>
    </div>
  )
}

export default App
