const Leader = (leaderObject) => {
    return `
        <li>${leaderObject.name}<br>
        (Office: ${leaderObject.office})</li>
        `
}

export default Leader