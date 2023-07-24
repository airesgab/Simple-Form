const input = document.querySelectorAll(".input");

input.forEach(
    (eachinput) => { eachinput.addEventListener
    ("invalid", () => {
        eachinput.classList.add('invalid')})  

})

    input.forEach(
        (eachinput) => { eachinput.addEventListener
        ("change", () => {
            eachinput.classList.add('filledfield')})  

})

