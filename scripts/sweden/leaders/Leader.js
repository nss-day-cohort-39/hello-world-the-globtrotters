const Leader = (leader) => {
    return `
    <div class="swedenLeaders__list">
        <div class="sweden--leader--name">${leader.name}</div>
        <div class="sweden--leader--title">${leader.title}</div>
    </div>
`
}

export default Leader