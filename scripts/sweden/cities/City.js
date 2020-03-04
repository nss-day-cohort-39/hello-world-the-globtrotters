const City = (city) => {
    return `
    <div class="swedish__city__list">
              <div class="swedish__city__names">${city.name}</div>
              <div class="swedish__city__population">Population: ${city.population}</div>
              </div>
`
}

export default City