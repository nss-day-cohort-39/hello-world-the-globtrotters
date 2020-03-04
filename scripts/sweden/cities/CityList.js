import City from './City.js';
import { useCities } from './CityDataProvider.js';


const CityList = () => {

    const cityElement = document.querySelector(".swedenCities")
    const cities = useCities()

    let cityHTMLRepresentations = ""
    for (const cityObjects of cities) {
        cityHTMLRepresentations += City(cityObjects)
    }

    cityElement.innerHTML = `
        <h4>Major Cities</h4>
        ${cityHTMLRepresentations}
`
}

export default CityList