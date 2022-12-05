function observeAdd(object, newClass) {
    const getObjects = document.querySelectorAll(`${object}`)

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(`${newClass}`);
            }
        })
    })

    getObjects.forEach(getObject => {
        observer.observe(getObject)
    })
  }
  
  
  
  export {observeAdd};