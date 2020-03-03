console.log("LandmarkDataProvider.js  ✅")

const leaders = [
  {
    leader: "Mustafa Kemal Atatürk",
    leader: "Abdülhalik Renda",
    leader: "Celâl Bayar"
  }
]

export const useLeaders = () => {
  return leaders.slice()
}
