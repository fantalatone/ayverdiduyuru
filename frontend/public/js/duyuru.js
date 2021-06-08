const allAnnouncements = document.querySelectorAll("div.card")
const editFormTitle = document.querySelector("input#title.ed")
const editFormContent = document.querySelector("textarea#content.ed")
const editFormId = document.querySelector("input#id.ed")
const editFormIdDelete = document.querySelector("input#id.de")
const editFormFile = document.querySelector("input#banner.ed")
const editFormButton = document.querySelector("button#edit")
const deleteFormButton = document.querySelector("button#delete")
let isSomethingSelected = false;

function editCard(i) {

    if (isSomethingSelected == false) {
        editFormTitle.removeAttribute("disabled");
        editFormContent.removeAttribute("disabled");
        editFormFile.removeAttribute("disabled");
        editFormButton.removeAttribute("disabled");
        deleteFormButton.removeAttribute("disabled");
    }
    isSomethingSelected = true;
    
    allAnnouncements.forEach(a => {
        a.classList.remove("text-white")
        a.classList.remove("bg-primary")
    })
    if(allAnnouncements[i].childNodes.length == 1) {
        allAnnouncements[i].classList.add("text-white")
        allAnnouncements[i].classList.add("bg-primary")
        editFormTitle.value = allAnnouncements[i].childNodes[0].childNodes[1].textContent
        editFormContent.value = allAnnouncements[i].childNodes[0].childNodes[3].textContent
        editFormId.setAttribute("value", allAnnouncements[i].childNodes[0].childNodes[0].textContent)
        editFormIdDelete.setAttribute("value", allAnnouncements[i].childNodes[0].childNodes[0].textContent)
    } else if (allAnnouncements[i].childNodes.length == 2) {
        allAnnouncements[i].classList.add("text-white")
        allAnnouncements[i].classList.add("bg-primary")
        editFormTitle.value = allAnnouncements[i].childNodes[1].childNodes[1].textContent
        editFormContent.value = allAnnouncements[i].childNodes[1].childNodes[3].textContent
        editFormId.setAttribute("value", allAnnouncements[i].childNodes[1].childNodes[0].textContent)
        editFormIdDelete.setAttribute("value", allAnnouncements[i].childNodes[1].childNodes[0].textContent)
    }
    
}

function collapseEmojis(id) {
    var element = document.getElementById(id)
    var tf = element.getAttribute("aria-expanded")
    element.firstElementChild.className = tf === "true" ? "fas fa-chevron-up" : "fas fa-chevron-down"
        // element.childNodes[0].className = "fas fa-chevron-down"
}