import { useEffect, useState } from "react"
import { Country } from "./types"

/**
 *
 * @description Questão 3: Faça uma requisição para a API de países e retorne o país com a maior e a menor população da Europa.
 *
 * @returns {React.FC} React Component
 */
const Questão04: React.FC = () => {
  // State to control loading
  const [loading, setLoading] = useState(false)

  // State to control data
  const [data, setData] = useState<Country[] | undefined>()

  // Promise To get the data
  const getData = new Promise<Country[]>( resolve => {
    resolve([
      { capital: ["Dublin"], population: 4994724 },
      { capital: ["Nicosia"], population: 1207361 },
      { capital: ["Madrid"], population: 47351567 },
    ])
  })

  // Show data
  const showData = () => {
    // If there is no data, return null
    if (!data) return null

    // Get the biggest and smallest population
    const populations = data.map((item) => item.population)
    const max = Math.max(...populations)
    const min = Math.min(...populations)
    return data
      .filter((item) => item.population === max || item.population === min) // Filter the countries with the biggest and smallest population
      .map((item) => {
        return (
          <div
            style={{
              margin: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
              borderRadius: 10,
            }}
          >
            <p>{`Capital: ${item.capital}`}</p>
            <p>{`Population: ${item.population}`}</p>
          </div>
        )
      }) // Show the countries
  }

  // Fetch data on component mount
  useEffect(() => {
    setLoading(true)
    getData.then((data) => {
      setData(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <h1>Questão 4</h1>
      <div
        style={{
          height: "100%",
          width: "50%",
          margin: 20,
        }}
      >
        {loading ? <p>Loading...</p> : <p>{showData()}</p>}
      </div>
    </>
  )
}

export { Questão04 }
