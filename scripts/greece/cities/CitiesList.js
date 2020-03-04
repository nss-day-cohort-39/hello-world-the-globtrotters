import { useCities } from "./CityDataProvider.js";
import Cities from "./Cities.js";

const CitiesList = () => {
    let CitiesObjectsArray = useCities()
    const CitiesListContatiner = document.querySelector(".greece__citieslist")
    CitiesListContatiner.innerHTML = `
    <h4>Major Cities</h4>
    <ul class="greece__cities">
    </ul>
    `
    const contentTarget = document.querySelector(".greece__cities")
    for (const cityObject of CitiesObjectsArray) {
        const CitiesHTMLRepresentation = Cities(cityObject)
        contentTarget.innerHTML += CitiesHTMLRepresentation

    }
}

export default CitiesList