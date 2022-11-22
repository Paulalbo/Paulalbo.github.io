import {addComponent} from './features/component-loader.js';
import {navigation} from './features/navigation.js';
import {contentEditButton} from './features/content-edit-button.js';
import {contentClasses} from './features/content-classes.js';
import {verticalScroll} from './features/vertical-scroll.js';
import {accordion} from './features/accordion.js';


async function features () {
    await addComponent("navigation", "body");
    await addComponent("hero", "section-hero");
    await addComponent("about", "section-about");
    await addComponent("work", "section-work");
    await addComponent("contact", "section-contact");
    await addComponent("footer", "footer");
    navigation();
    contentEditButton();
    contentClasses();
    verticalScroll();
    accordion();
}



export {features};