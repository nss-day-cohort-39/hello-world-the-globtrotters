import { useCity } from './CityDataProvider.js';
import City from "./City.js";



const cityList = () => {
    const cityObjectsArray = useCity()
    const contentTarget = document.querySelector(".thaiList__Cities")
    for (const cityObject of cityObjectsArray) {
        const cityHTMLRepresentation = City(cityObject)
        contentTarget.innerHTML += cityHTMLRepresentation
    }
}

export default cityList