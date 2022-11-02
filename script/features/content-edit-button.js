function contentEditButton () {
    
// edit button
let mainContainer = document.querySelector(".main");
let editButton = document.querySelector(".button--edit");
let button = document.querySelector(".button--menutoggle");
let editCheck = false

editButton.addEventListener("click", function() { 
    if (editCheck) {
        document.designMode = "off"
        editCheck = false
        editButton.innerHTML = "EDIT";
        button.classList.remove("button--edit-acitve")
        mainContainer.classList.remove("main--edit-active")
        return
    }
    document.designMode = "on"
    editCheck = true
    mainContainer.classList.add("main--edit-active")
    button.classList.add("button--edit-acitve")
    editButton.innerHTML = "EXIT";
})
    console.log("edit button imported");
}



export {contentEditButton};