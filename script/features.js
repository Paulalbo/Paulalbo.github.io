import {navigation} from './features/navigation.js';
import {contentEditButton} from './features/content-edit-button.js';
import {contentClasses} from './features/content-classes.js';
import {verticalScroll} from './features/vertical-scroll.js';


function features () {
    navigation();
    contentEditButton();
    contentClasses();
    verticalScroll();
    console.log("features import");
}



export {features};