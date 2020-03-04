import { useLeader } from './LeaderDataProvider.js';
import Leader from "./Leader.js";



const leaderList = () => {
    const leaderObjectsArray = useLeader()
    const contentTarget = document.querySelector(".thaiList__Leaders")
    for (const leaderObject of leaderObjectsArray) {
        const leaderHTMLRepresentation = Leader(leaderObject)
        contentTarget.innerHTML += leaderHTMLRepresentation
    }
}

export default leaderList