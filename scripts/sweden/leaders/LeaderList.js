import Leader from './Leader.js';
import { useLeaders } from './LeaderDataProvider.js';


const LeaderList = () => {

    const leaderElement = document.querySelector(".swedenItems__leaders")
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