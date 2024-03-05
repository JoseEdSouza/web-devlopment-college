const Temperature = ({c,f,k}) => {
    const celsiusToFahrenheit = (c) => ((9 * c / 5) + 32)
    const fahrenheitToCelsius = (f) => ((5 * (f - 32)) / 9)
    const kelvinToCelsius = (k) => k - 273
    const kelvin = (k) => {
        return {
            "celsius": kelvinToCelsius(k),
            "faharenheit": celsiusToFahrenheit(kelvinToCelsius(k))
        }
    }
    const celsiusToFahrenheitTemp = celsiusToFahrenheit(c);
    const FahrenheitToCelsiusTemp = fahrenheitToCelsius(f);
    const kelvinTemp = kelvin(k);

    return (
        <div>
            <h2>Converter Temperaturas</h2>
            <p>{c} celsius para Fahrenheit: {celsiusToFahrenheitTemp.toFixed(2)}</p>
            <p>{f} fahrenheits para celsius: {FahrenheitToCelsiusTemp.toFixed(2)}</p>
            <p>{k} kelvin para celsius: {kelvinTemp.celsius.toFixed(2)}</p>
            <p>{k} kelvin para Fahrenheit: {kelvinTemp.faharenheit.toFixed(2)}</p>
        </div>
    )

}


export default Temperature;