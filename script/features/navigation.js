function navigation () {
    let menuButton = document.querySelector(".button--menutoggle");
    let mainContainer = document.querySelector(".main");
    menuButton.addEventListener("click", () => {
        mainContainer.classList.toggle("main--active-menu")
    })
    console.log("init nabnigation");
}



export {navigation};

