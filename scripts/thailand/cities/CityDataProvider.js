const cityList = [
    {
        name: "Bangkok",
        region: "Central"
    },

    {
        name: "Nonthaburi",
        region: "Central"
    },

    {
        name: "Nakhon Ratchasima",
        region: "Northeastern"
    }
]

export const useCity = () => {
    return cityList.slice()
}