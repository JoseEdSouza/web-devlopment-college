import { useState } from "react"

/**
 * 
 * @description Questão 2: Crie uma aplicação que exiba uma imagem de um pokémon. A cada clique de um botão, a imagem deve ser virada.
 * 
 * @returns {React.FC} React Component
 */

const Questão02: React.FC = () => {
  // State to control the image side  
  const [isBack, setIsBack] = useState(false)

  // Base URL for the image
  const baseUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    isBack ? "back" : ""
  }/25.png`

  return (
    <>
      <div
        style={{
          margin: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Questão 02</h1>
        <img
          src={baseUrl}
          style={{
            width: 200,
            height: 200,
            margin: 20,
            border: "1px solid black",
            borderRadius: 10,
          }}
        ></img>
        <button
          onClick={() => setIsBack(!isBack)}
          style={{
            width: 100,
            height: 50,
            backgroundColor: "beige",
            color: "black",
            fontSize: 20,
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
          }}
        >
          Virar
        </button>
      </div>
    </>
  )
}

export { Questão02 }
