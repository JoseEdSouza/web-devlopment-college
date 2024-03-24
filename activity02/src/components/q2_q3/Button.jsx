function Button({onClick,label}){
    return (
        <div style={{marginBottom:"10px"}}>
            <button onClick={onClick}>{label}</button>
        </div>
        
    )
}

export default Button