import Leader from './Leader.js';
import { useLeaders } from './LeaderDataProvider.js';


const LeaderList = () => {

    const leaderElement = document.querySelector(".swedenLeaders")
    const leaders = useLeaders()

    let leaderHTMLRepresentations = ""
    for (const leaderObjects of leaders) {
        leaderHTMLRepresentations += Leader(leaderObjects)
    }

    leaderElement.innerHTML = `
        <h4>Leaders</h4>
        ${leaderHTMLRepresentations}
`
}

export default LeaderList