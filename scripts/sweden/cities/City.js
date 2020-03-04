const City = (city) => {
    return `
        <div class="swedenItems__cities__list">
              <div class="sweden--city--name">${city.name}</div>
              <div class="sweden--city--population">Population: ${city.population}</div>
            </div>
`
}

export default City