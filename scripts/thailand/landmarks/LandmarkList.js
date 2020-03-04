import { useLandmark } from './LandmarkDataProvider.js';
import Landmark from "./Landmark.js";



const landmarkList = () => {
    const landmarkObjectsArray = useLandmark()
    const contentTarget = document.querySelector(".thaiList__Landmarks")
    for (const landmarkObject of landmarkObjectsArray) {
        const landmarkHTMLRepresentation = Landmark(landmarkObject)
        contentTarget.innerHTML += landmarkHTMLRepresentation
    }
}

export default landmarkList