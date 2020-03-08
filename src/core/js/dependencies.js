// -----------------------------------------------------------------------------
//  DEPENDENCIES
// -----------------------------------------------------------------------------
//
//  All used dependencies from the package.json must be saved here.
//
//  The DEPENDENCIES object is a global point where the all dependencies
//  are saved. It helps to understand what dependencies are really used,
//  what are not used, but listed in the package.json, and allows to
//  "turn-on" and "turn-off" dependencies in the whole project by commenting
//  only one line of code.
//


// We disable ESLint for this file. We use different "require" and "import"
// statements here and usually it shows a lot of errors.

/* eslint-disable */



// https://github.com/ianstormtaylor/to-slug-case
const toSlugCase = require('to-slug-case');



// https://barba.js.org/
import barba from '@barba/core';



// https://animejs.com/
import anime from 'animejs/lib/anime.es';



// https://alvarotrigo.com/fullPage/
import fullpage from 'fullpage.js';



// https://threejs.org/
const THREE = require('three');


// https://www.npmjs.com/package/postprocessing
import * as postprocessing from 'postprocessing';



// https://github.com/typekit/webfontloader
const WebFont = require('webfontloader');



// -----------------------------------------------------------------------------


const DEPENDENCIES = {
    toSlugCase,
    barba,
    anime,
    fullpage,
    THREE,
    postprocessing,
    WebFont
};

export default DEPENDENCIES;

/* eslint-enable */
