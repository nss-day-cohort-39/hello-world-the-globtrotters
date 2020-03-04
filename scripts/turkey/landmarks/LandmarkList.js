import Landmark from "./Landmark.js"
import { useLandmarks } from "./LandmarkDataProvider.js"

const LandmarksList = () => {
  
  const landmarksUl = document.querySelector(".panel__landmarks")
  const landmarkObjectArray = useLandmarks()
  let landmarkHTMLRepresentations = ""

  for (const landmarkObject of landmarkObjectArray) {
    landmarksUl.innerHTML += Landmark(landmarkObject)
  }

  landmarksUl.innerHTML += `
    ${landmarkHTMLRepresentations}
  `
}

export default LandmarksList