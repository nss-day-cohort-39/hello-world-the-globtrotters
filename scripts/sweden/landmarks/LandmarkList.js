import Landmark from "./Landmark.js"
import { useLandmarks } from "./LandmarkDataProvider.js"


const LandmarkList = () => {

    const landmarkElement = document.querySelector(".swedenLandmarks")
    const landmarks = useLandmarks()

    let landmarkHTMLRepresentations = ""
    for (const landmarkObjects of landmarks) {
        landmarkHTMLRepresentations += Landmark(landmarkObjects)
    }

        landmarkElement.innerHTML = `
        <h4>Landmarks</h4>
        ${landmarkHTMLRepresentations}
`   
}

export default LandmarkList