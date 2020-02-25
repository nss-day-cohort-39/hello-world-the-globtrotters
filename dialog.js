const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
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
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button-turkey").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#dialog-turkey")
            theDialog.showModal()
        }
    )
    document.querySelector("#button-sweden").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#dialog-sweden")
            theDialog.showModal()
        }
    )
    document.querySelector("#button-greece").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#dialog-greece")
            theDialog.showModal()
        }
    )
    document.querySelector("#button-thailand").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#dialog-thailand")
            theDialog.showModal()
        }
    )

}
    export default initializeDetailButtonEvents