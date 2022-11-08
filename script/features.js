import {addComponent} from './features/component-loader.js';
import {navigation} from './features/navigation.js';
import {contentEditButton} from './features/content-edit-button.js';
import {contentClasses} from './features/content-classes.js';
import {verticalScroll} from './features/vertical-scroll.js';
import {accordion} from './features/accordion.js';


function components () {
    addComponent("hero", "section-hero");
    addComponent("about", "section-about");
    addComponent("work", "section-work");
    addComponent("contact", "section-contact");
    addComponent("footer", "footer");
}

function features () {
    navigation();
    contentEditButton();
    contentClasses();
    verticalScroll();
    accordion();
}



export {features, components};