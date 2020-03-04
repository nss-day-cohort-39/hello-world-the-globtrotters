const Landmark = (landmarkObject) => {
    return `
        <li>${landmarkObject.name}<br>
        (Region: ${landmarkObject.location})</li>
        `
}

export default Landmark