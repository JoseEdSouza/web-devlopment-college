import { ListItem } from "./types"

/**
 * 
 * @description Questão 1: Dado o array de objetos, retorne o maior elemento.
 * 
 * @returns React Component
 */
const Questão01A: React.FC = () => {
  const lista: ListItem[] = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 },
  ]

  return (
    <div
      style={{
        margin: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Questão 01</h1>
      {/* 
        Chama o componente Questão01B passando a lista de itens como propriedade
      */}
      <Questão01B lista={lista} />
    </div>
  )
}

// Props for Questão01B
type Questão01BProps = {
  lista: ListItem[]
}

/**
 * 
 * @param param0  Lista de itens
 * @returns  React Component
 */
function Questão01B({ lista }: Questão01BProps) {
  
  // Show the biggest element
  const ShowBigestElement = (item: ListItem) => {
    return (
      <div>
        <p
          style={{
            margin: 20,
            fontSize: 20,
            color: "black",
          }}
        >
          {`Na posição ${
            lista.indexOf(item) + 1
          }, o maior elemento é: ${Math.max(item.a, item.b, item.c)}`}
        </p>
      </div>
    )
  }

  return <div>{lista.map((item) => ShowBigestElement(item))}</div>
}

export { Questão01A, Questão01B }
