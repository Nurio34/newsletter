
const form = document.querySelector("form")
const email = document.querySelector("#email")
const validationEl = document.querySelector(".validation")

    form.addEventListener("submit", (e)=> {
        e.preventDefault()

        if(email.checkValidity() = false) {
            validationEl.classList.add("visible")
            console.log("ok");
        } else {
            
        }
        
    })
console.log(validationEl);

