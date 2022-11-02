function verticalScroll () {
      
    //gsap vertical scroll

    gsap.registerPlugin(ScrollTrigger);

    // BOXES

    let sections = gsap.utils.toArray(".section-about__box, .section-about__headline");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".section-about",
        pin: true,
        scrub: true,
        end: () => "+=" + document.querySelector(".section-about").offsetWidth
      }
    });
    


    console.log("vertical scroll imported");
}



export {verticalScroll};