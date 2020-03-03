const swedishCities = [
    {
    name:"Stockholm",
    population: "975,000"
    },
    {
    name:"Gothenburg",
    population: "570,000"
    },
    {
    name:"Malmö",
    population: "316,000"
    },
]

export const useCities = () => {
    return swedishCities.slice()
}