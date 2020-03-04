const initializeDetailButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".button-close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }

    document.querySelector(".cardTurkey").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#dialog-turkey")
            theDialog.showModal()
        }
    )
    document.querySelector(".cardSweden").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#dialog-sweden")
            theDialog.showModal()
        }
    )
    document.querySelector(".cardGreece").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#dialog-greece")
            theDialog.showModal()
        }
    )
    document.querySelector(".cardThailand").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#dialog-thailand")
            theDialog.showModal()
        }
    )

}
    export default initializeDetailButtonEvents