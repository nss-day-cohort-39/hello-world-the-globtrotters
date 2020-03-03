import City from './City.js';
import { useCities } from './CityDataProvider.js';


const CityList = () => {

    // Get a reference to the `<article class="content">` element
    const cityElement = document.querySelector(".swedish__city__container")
    const cities = useCities()

    // Generate all of the HTML for all of the fish
    let cityHTMLRepresentations = ""
    for (const cityObjects of cities) {
        cityHTMLRepresentations += City(cityObjects)
    }

        // Add a section, and all of the fish to the DOM
        cityElement.innerHTML = `
        ${cityHTMLRepresentations}
`   
}

export default CityList