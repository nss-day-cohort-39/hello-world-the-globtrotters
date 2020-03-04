import Itinerary from "./Itinerary.js"
import { useItinerary } from "./ItineraryDataProvider.js"

const ItineraryList = () => {

  const itineraryUl = document.querySelector(".panel__itinerary")
  const itineraryObjectArray = useItinerary()

  let itineraryHTMLRepresentations = ""
  for (const itineraryObject of itineraryObjectArray) {
    itineraryUl.innerHTML += Itinerary(itineraryObject)
  }

  itineraryUl.innerHTML += `
    ${itineraryHTMLRepresentations}
  `
}

export default ItineraryList