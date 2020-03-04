const City = (cityObject) => {
    return `
        <li>${cityObject.name}<br>
        (Region: ${cityObject.region})</li>
        `
}

export default City