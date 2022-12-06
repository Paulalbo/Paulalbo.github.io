import {addComponent} from './features/component-loader.js';
import {contentClasses} from './features/content-classes.js';
import {verticalScroll} from './features/vertical-scroll.js';
import {scrollFrameAnimation} from './features/scroll-frame-animation.js';
import {accordion} from './features/accordion.js';
import {observeAdd} from './features/observer.js';


async function features () {
    await addComponent("hero", "main");
    await addComponent("info", "section-info");
    await addComponent("experience", "section-about");
    await addComponent("work", "section-work");
    await addComponent("contact", "section-contact");
    await addComponent("footer", "footer");
    await scrollFrameAnimation();
    contentClasses();
    verticalScroll();
    accordion();
    observeAdd(".section-info", "section-info--active");
    observeAdd(".headline--animate", "headline--animated");
}



export {features};