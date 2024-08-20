export const getNestedData = (props, src = null) => {
    if (src == null)
        return null
    const [propToSearch, ...restProps] = [props].flat()
    const result = src[propToSearch];
    return restProps.length === 0 ? result : getNestedData(restProps, result)
}


export const createAccessString = (props) => {
    const [first,...data] = [props].flat()
    return data.reduce((acc, curr) => `${acc}.${curr}`, `${first}`)
}

export const access = (path, object) => {
    if(object == null) return null
    return createAccessString(path).split('.').reduce((o, i) => o[i], object)
}