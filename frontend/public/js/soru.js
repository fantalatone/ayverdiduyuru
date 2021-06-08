const allQuestions = document.querySelectorAll("div.card")
const answer = document.querySelector("textarea#answer")
const deleteId = document.querySelector("input#iddelete")
const deleteFormButton = document.querySelector("button#delete")
const answerId = document.querySelector("input#id")
const answerButton = document.querySelector("button#answer")
let isSomethingSelected = false;

function editCard(i) {

    if (isSomethingSelected == false) {
        answerButton.removeAttribute("disabled")
        answer.removeAttribute("disabled")
        deleteFormButton.removeAttribute("disabled");
    }
    isSomethingSelected = true;
    
    allQuestions.forEach(a => {
        a.classList.remove("text-white")
        a.classList.remove("bg-primary")
    })
    allQuestions[i].classList.add("text-white")
    allQuestions[i].classList.add("bg-primary")
    answer.value = allQuestions[i].childNodes[0].childNodes[3].textContent.substring(26)
    answerId.setAttribute("value", allQuestions[i].childNodes[0].childNodes[0].textContent)
    deleteId.setAttribute("value", allQuestions[i].childNodes[0].childNodes[0].textContent)
}

function collapseEmojis(id) {
    var element = document.getElementById(id)
    var tf = element.getAttribute("aria-expanded")
    element.firstElementChild.className = tf === "true" ? "fas fa-chevron-up" : "fas fa-chevron-down"
}