const LandmarksList = [
    {
        landmark: "Acropolis"
    },
    {
        landmark: "Parthenon"
    },
    {
        landmark: "White Tower"
    }
]

export const useLandmarks = () => {
    return LandmarksList.slice()
}

