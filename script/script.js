import {features} from './features.js';

await features();

const heroInfo = document.querySelector(".hero-info")
const sectionInfo = document.querySelector(".section")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      heroInfo.classList.toggle("hero-info--active", entry.isIntersecting)
    })
  })

observer.observe(sectionInfo)