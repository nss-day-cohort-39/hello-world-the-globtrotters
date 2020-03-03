console.log("CityDataProvider.js  ✅")

const cities = [
  {
    city: "Istanbul",
    city: "Ankara",
    city: "Bodrum"
  }
]

export const useCities = () => {
  return cities.slice()
}
