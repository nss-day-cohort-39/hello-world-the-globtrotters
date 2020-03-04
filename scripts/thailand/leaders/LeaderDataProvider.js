const leaderList = [
    {
        name: "Prayut Chan-o-cha",
        office: "Prime Minister"
    },

    {
        name: "Yingluck Shinawatra",
        office: "Former Prime Minister"
    },

    {
        name: "Niwatthamrong Boonsongpaisan",
        office: "Former Acting Prime Minister"
    }
]

export const useLeader = () => {
    return leaderList.slice()
}