import Landmark from "./Landmark.js"
import { useLandmarks } from "./LandmarkDataProvider.js"


const LandmarkList = () => {

    const landmarkElement = document.querySelector(".swedish__landmark__container")
    const landmarks = useLandmarks()

    let landmarkHTMLRepresentations = ""
    for (const landmarkObjects of landmarks) {
        landmarkHTMLRepresentations += Landmark(landmarkObjects)
    }

        landmarkElement.innerHTML = `
        ${landmarkHTMLRepresentations}
`   
}

export default LandmarkList