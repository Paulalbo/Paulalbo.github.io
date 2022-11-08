function accordion () {
    // Accordion classes
    
    
    let accTriggers = document.querySelectorAll(".acc-container .headline");
    let accContents = document.querySelectorAll(".acc-container .paragraph");
    
    accTriggers.forEach((accTrigger) => {
        accTrigger.classList.add("acc__trigger");
        accTrigger.addEventListener("click", () => {
            accTrigger.classList.toggle("acc__trigger--open")
            console.log("acc open")
        })
    });
    accContents.forEach((accContent) => {
        accContent.classList.add("acc__content");
    });

    console.log("init accordion");
}



export {accordion};

