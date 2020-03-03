console.log("scripts/turkey/main.js  ✅")

import useCities from "./CityDataProvider.js"
import useLandmarks from "./LandmarkDataProvider.js"
import useLeaders from "./LeaderDataProvider.js"

useCities()
useLandmarks()
useLeaders()

export default turkey