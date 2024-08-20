import React, { useState } from "react"
import { MyContext } from "./context"

const Questão05: React.FC = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Questão 05</h1>
      <p></p>
      <Pai />
    </div>
  )
}

//context provider
const Pai: React.FC = () => {
  const [count, setCount] = useState(0)
  // access my context

  const context = { increment: () => setCount(count + 1) } // increment function

  return (
    <MyContext.Provider value={context}>
      <div style={{ width: "90%" }}>
        <h1>Pai</h1>
        <div
          style={{
            margin: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            border: "1px solid black",
            borderRadius: 10,
            fontSize: 20,
          }}
        >
          {count}
        </div>
        <Filho />
      </div>
    </MyContext.Provider>
  )
}

const Filho: React.FC = () => {
  return (
    <div>
      <h2>Filho</h2>
      <p
        style={{
          margin: 20,
          fontSize: 20,
          color: "black",
        }}
      >
        Aqui, o filho apenas chama o componente Neto
      </p>
      <Neto />
    </div>
  )
}

const Neto: React.FC = () => {
  // access my context
  const { increment } = React.useContext(MyContext)

  return (
    <div>
      <h3>Neto</h3>
      <p
        style={{
          margin: 20,
          fontSize: 20,
          color: "black",
        }}
      >
        Aqui, o neto apenas chama a função increment do contexto, que incrementa
        o valor do contador em 1, o que faz com que o valor seja exibido no
        componente Pai
      </p>
      <button onClick={increment}>Incrementar</button>
    </div>
  )
}

export { Questão05 }
