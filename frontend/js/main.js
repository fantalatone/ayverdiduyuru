const tabContainers = document.getElementsByClassName("tabContainer")
const tabButtons = document.getElementsByClassName("tabBtn")

function tabHandler(i) {
    for (let j = 0; j < tabContainers.length; j++) {
        tabContainers[j].classList.remove("focus")
        tabButtons[j].classList.remove("active")
        if (j == i) {
            tabContainers[j].classList.add("focus")
            tabButtons[j].classList.add("active")
        }
    }
}