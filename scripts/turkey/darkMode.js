document
  .querySelector(".darkToggle")
  .addEventListener("click", theClickEvent => {
    darkMode()
  })

const darkMode = () => {
  var element = document.body
  element.classList.toggle("dark-mode")
}

export default darkMode