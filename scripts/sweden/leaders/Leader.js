const Leader = (leader) => {
    return `
    <div class="swedish__leader__list">
              <div class="swedish__leader__names">${leader.name}</div>
              <div class="swedish__leader__title">${leader.title}</div>
              </div>
`
}

export default Leader