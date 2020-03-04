import Itinerary from "./Itinerary.js"
import { useItinerary } from "./ItineraryDataProvider.js"

const ItineraryList = () => {

  const itineraryUl = document.querySelector(".swedenItinerary")
  const itineraryObjectArray = useItinerary()

  let itineraryHTMLRepresentations = ""
  for (const itineraryObject of itineraryObjectArray) {
    itineraryHTMLRepresentations += Itinerary(itineraryObject)
  }

  itineraryUl.innerHTML += `
    <h2 class="swedenItinerary__title">One Week Itinerary</h2>
    <ul class="swedenItinerary__list">
   ${itineraryHTMLRepresentations}
    </ul>
    
  `
}

export default ItineraryList