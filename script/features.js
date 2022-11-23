import {addComponent} from './features/component-loader.js';
import {navigation} from './features/navigation.js';
import {contentClasses} from './features/content-classes.js';
import {verticalScroll} from './features/vertical-scroll.js';
import {scrollFrameAnimation} from './features/scroll-frame-animation.js';
import {accordion} from './features/accordion.js';


async function features () {
    //await addComponent("navigation", "body");
    await addComponent("hero", "main");
    //await addComponent("about", "section-about");
    await addComponent("work", "section-work");
    await addComponent("contact", "section-contact");
    await addComponent("footer", "footer");
    //navigation();
    contentClasses();
    //verticalScroll();
    scrollFrameAnimation();
    accordion();
}



export {features};