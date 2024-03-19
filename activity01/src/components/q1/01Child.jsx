function Child({height, weight}) {
    const bmi = weight / (height * height);

    return (
        <div>
            <h3>Child</h3>
            <p>Height: {height}m</p>
            <p>Weight: {weight}kg</p>
            <p>BMI: {bmi.toFixed(2)}</p>
            {(bmi < 18 && <h3>under-weight</h3>) 
            || (bmi > 25 && <h3>over-weight</h3>) 
            || <h4>healthy</h4>}
        </div>
    )
}

export default Child;