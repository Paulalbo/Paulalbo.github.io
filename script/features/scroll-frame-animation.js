function scrollFrameAnimation () {
      
  const canvas = document.querySelector(".canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const context = canvas.getContext("2d");
  const frameCount = 35;
  
  const getZeroes = (index) => {
    if (index < 10) {
        return "000";
    } else if (index < 100) {
        return "00";
    } else {
        return "0";
    }
  };
  
  const CurrentFrame = (index) => {
    if (canvas.width > 1250) {
      return `./images/${getZeroes(index)}${index}.jpg`;
    }
    if (canvas.width <= 1250) {
      return `./images/mobile-${getZeroes(index)}${index}.jpg`;
    }
  };
  
  
  const images = [];
  let imgFrame = { frame: 0 };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = CurrentFrame(i);
    images.push(img);
  }
  
  gsap.to(imgFrame, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.5,
      pin: "canvas",
      end: "100%",
    },
    onUpdate: render,
  });

  
  images[0].onload = render;
  
  function render() {
    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;
  
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[imgFrame.frame], 0, 0);
  }
  
    


    console.log("scroll frame animation imported");
}



export {scrollFrameAnimation};