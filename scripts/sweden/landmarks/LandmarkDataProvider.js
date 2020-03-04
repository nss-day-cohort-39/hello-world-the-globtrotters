const swedishLandmarks = [
    {
        name: "Malmö’s Turning Torso",
        description: "First twisted skyscraper in the world."
    },
    {
        name: "Svettekörka",
        description: "Complex sauna made from recycled materials."
    },
    {
        name: "Jukkasjärvi",
        description: "World’s first ice hotel"
    },
]

export const useLandmarks = () => {
    return swedishLandmarks.slice()
}