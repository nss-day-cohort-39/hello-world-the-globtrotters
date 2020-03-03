const turkey = () => {}

import { useCities } from "./CityDataProvider.js"
import { useLandmarks } from "./LandmarkDataProvider.js"
import { useLeaders } from "./LeaderDataProvider.js"
import { useItinerary } from "./ItineraryDataProvider.js"

useCities()
useLandmarks()
useLeaders()
useItinerary()

const citiesList = () => {
  const City = cityObject => {
    return `<li>${cityObject}</li>`
  }
  const citiesUl = document.querySelector(".cities")
  const cityObjectArray = useCities()
  let cityHTMLRepresentations = "" 
  
  for (const cityObject of cityObjectArray) {
    citiesUl.innerHTML += City(cityObject)
  }
  
  citiesUl.innerHTML += `
    ${cityHTMLRepresentations}
  `
}

const landmarksList = () => {
  const Landmark = landmarkObject => {
    return `<li>${landmarkObject}</li>`
  }
  const landmarksUl = document.querySelector(".landmarks")
  const landmarkObjectArray = useLandmarks()
  let landmarkHTMLRepresentations = ""

  for (const landmarkObject of landmarkObjectArray) {
    landmarksUl.innerHTML += Landmark(landmarkObject)
  }

  landmarksUl.innerHTML += `
    ${landmarkHTMLRepresentations}
  `
}

const leadersList = () => {
  const Leader = leaderObject => {
    return `<li>${leaderObject}</li>`
  }
  const leadersUl = document.querySelector(".leaders")
  const leaderObjectArray = useLeaders()
  let leaderHTMLRepresentations = ""

  for (const leaderObject of leaderObjectArray) {
    leadersUl.innerHTML += Leader(leaderObject)
  }

  leadersUl.innerHTML += `
    ${leaderHTMLRepresentations}
  `
}

const itineraryList = () => {
  const Itinerary = itineraryObject => {
    return `<li>${itineraryObject}</li>`
  }
  const itineraryUl = document.querySelector(".itinerary")
  const itineraryObjectArray = useItinerary()
  let itineraryHTMLRepresentations = ""

  for (const itineraryObject of itineraryObjectArray) {
    itineraryUl.innerHTML += Itinerary(itineraryObject)
  }

  itineraryUl.innerHTML += `
    ${itineraryHTMLRepresentations}
  `
}

citiesList()
landmarksList()
leadersList()
itineraryList()

export default turkey