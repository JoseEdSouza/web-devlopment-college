import { useEffect, useState } from "react"
import { Country } from "./types"

/**
 *
 * @description Questão 3: Faça uma requisição para a API de países e retorne o país com a maior e a menor população da Europa.
 *
 * @returns {React.FC} React Component
 */
const Questão03: React.FC = () => {
  // State to control loading
  const [loading, setLoading] = useState(false)

  // State to control data
  const [data, setData] = useState<Country[] | undefined>()

  const baseUrl =
    "https://restcountries.com/v3.1/region/europe?fields=capital,population"

  // Fetch data from API
  const fetchData = async () => {
    setLoading(true)
    await fetch(baseUrl)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }

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
    fetchData()
  }, [])

  return (
    <>
      <h1>Questão 3</h1>
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

export { Questão03 }
