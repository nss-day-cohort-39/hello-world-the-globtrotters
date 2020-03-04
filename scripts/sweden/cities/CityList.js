import City from './City.js';
import { useCities } from './CityDataProvider.js';


const CityList = () => {

    const cityElement = document.querySelector(".swedenItems__cities")
    const cities = useCities()

    let cityHTMLRepresentations = ""
    for (const cityObjects of cities) {
        cityHTMLRepresentations += City(cityObjects)
    }

        cityElement.innerHTML = `
        ${cityHTMLRepresentations}
`   
}

export default CityList