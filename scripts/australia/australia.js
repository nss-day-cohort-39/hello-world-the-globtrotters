const australia = () => {}


import { useCities } from "./CityDataProvider.js"
import { useLandmarks } from "./LandmarkDataProvider.js"
import { useLeaders } from "./LeaderDataProvider.js"

useCities()
useLandmarks()
useLeaders()

const citiesList = () => {
  const City = cityObject => {
    return `<li>${cityObject}</li>`
  }
  const citiesUl = document.querySelector(".australia .cities")
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
  const landmarksUl = document.querySelector(".australia .landmarks")
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
  const leadersUl = document.querySelector(".australia .leaders")
  const leaderObjectArray = useLeaders()
  let leaderHTMLRepresentations = ""

  for (const leaderObject of leaderObjectArray) {
    leadersUl.innerHTML += Leader(leaderObject)
  }

  leadersUl.innerHTML += `
    ${leaderHTMLRepresentations}
  `
}



citiesList()
landmarksList()
leadersList()

export default australia