import { useLandmarks } from "./LandMarkDataProvider.js";
import Landmarks from "./Landmarks.js";





const LandmarksList = () => {
    let LandmarksObjectsArray = useLandmarks()
    const LandmarksListContatiner = document.querySelector(".greece__landmarkslist")
    LandmarksListContatiner.innerHTML = `
    <h4>Major Landmarks</h4>
    <ul class="greece__landmarks">
    </ul>
    `
    const contentTarget = document.querySelector(".greece__landmarks")
    for (const LandmarksObject of LandmarksObjectsArray) {
        const LandmarksHTMLRepresentation = Landmarks(LandmarksObject)
        contentTarget.innerHTML += LandmarksHTMLRepresentation

    }
}

export default LandmarksList