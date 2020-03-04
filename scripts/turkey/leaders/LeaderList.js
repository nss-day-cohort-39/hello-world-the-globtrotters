import Leader from "./Leader.js"
import { useLeaders } from "./LeaderDataProvider.js"

const LeaderList = () => {
  
  const leadersUl = document.querySelector(".panel__leaders")
  const leaderObjectArray = useLeaders()
  let leaderHTMLRepresentations = ""

  for (const leaderObject of leaderObjectArray) {
    leadersUl.innerHTML += Leader(leaderObject)
  }

  leadersUl.innerHTML += `
    ${leaderHTMLRepresentations}
  `
}

export default LeaderList