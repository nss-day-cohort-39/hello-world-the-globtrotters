import Leader from './Leader.js';
import { useLeaders } from './LeaderDataProvider.js';


const LeaderList = () => {

    const leaderElement = document.querySelector(".swedish__heads__of__state__container")
    const leaders = useLeaders()

    let leaderHTMLRepresentations = ""
    for (const leaderObjects of leaders) {
        leaderHTMLRepresentations += Leader(leaderObjects)
    }

        leaderElement.innerHTML = `
        ${leaderHTMLRepresentations}
`   
}

export default LeaderList