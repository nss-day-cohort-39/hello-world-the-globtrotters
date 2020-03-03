import City from './City.js';
import { useCities } from './CityDataProvider.js';


const CityList = () => {

    const cityElement = document.querySelector(".swedish__city__container")
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