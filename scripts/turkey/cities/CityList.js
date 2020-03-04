import City from "./City.js"
import { useCities } from "./CityDataProvider.js"

const CityList = () => {

  const citiesUl = document.querySelector(".panel__cities")
  const cityObjectArray = useCities()

  let cityHTMLRepresentations = ""
  for (const cityObject of cityObjectArray) {
    citiesUl.innerHTML += City(cityObject)
  }

  citiesUl.innerHTML += `
    ${cityHTMLRepresentations}
  `
}

export default CityList