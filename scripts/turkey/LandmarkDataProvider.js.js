console.log("LandmarkDataProvider.js  ✅")

const landmarks = [
  {
    landmark: "Hagia Sophia",
    landmark: "Blue Mosque",
    landmark: "Topkapi Palace"
  }
]

export const useLandmarks = () => {
  return landmarks.slice()
}
