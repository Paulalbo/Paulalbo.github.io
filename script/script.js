import {features, components} from './features.js';

components();

// should be fixed, it will only delay the feature function for 500ms
setTimeout(features, 500);