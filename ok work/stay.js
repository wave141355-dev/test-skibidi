const startscreen = document.getElementById("start-scr")
const startbutton = document.getElementById("start-btn")
const conscreen = document.getElementById("con-scr")
const formbutton = document.getElementById("form-btn")
const formscreen = document.getElementById("form-scr")
const thankyouscreen = document.getElementById("ty-page")
const registrationForm = document.getElementById("registration-form")

startbutton.addEventListener("click", () => {
    startscreen.classList.remove("active")
    conscreen.classList.add("active")
})
formbutton.addEventListener("click", () => {
    conscreen.classList.remove("active")
    formscreen.classList.add("active")
})

registrationForm.querySelectorAll(".choice-group").forEach(group => {
    const options = [...group.querySelectorAll('input[type="checkbox"]')]

    options.forEach(option => {
        option.addEventListener("change", () => {
            options.forEach(item => item.setCustomValidity(""))
            option.closest(".choice-card").classList.toggle("selected", option.checked)
        })
    })
})

registrationForm.addEventListener("submit", event => {
    event.preventDefault()

    for (const group of registrationForm.querySelectorAll(".choice-group")) {
        const options = [...group.querySelectorAll('input[type="checkbox"]')]
        if (!options.some(option => option.checked)) {
            options[0].setCustomValidity("Select at least one option in this group.")
        }
    }

    if (!registrationForm.reportValidity()) return

    formscreen.classList.remove("active")
    thankyouscreen.classList.add("active")
})
