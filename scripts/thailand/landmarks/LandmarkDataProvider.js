const landmarkList = [
    {
        name: "Temple of the Emerald Buddha",
        location: "Bangkok"
    },

    {
        name: "Phi Phi Islands",
        location: "Krabi Province"
    },

    {
        name: "The Grand Palace",
        location: "Bangkok"
    }
]

export const useLandmark = () => {
    return landmarkList.slice()
}