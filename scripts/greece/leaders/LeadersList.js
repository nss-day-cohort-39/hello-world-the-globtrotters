
import { useLeaders } from "./LeaderDataProvider.js";
import Leaders from "./Leaders.js";






const LeadersList = () => {
    let LeadersObjectsArray = useLeaders()
    const LeadersListContatiner = document.querySelector(".greece__leaderslist")
    LeadersListContatiner.innerHTML = `
    <h4>Major Leaders</h4>
    <ul class="greece__leaders">
    </ul>
    `
    const contentTarget = document.querySelector(".greece__leaders")
    for (const LeadersObject of LeadersObjectsArray) {
        const LeadersHTMLRepresentation = Leaders(LeadersObject)
        contentTarget.innerHTML += LeadersHTMLRepresentation

    }
}

export default LeadersList