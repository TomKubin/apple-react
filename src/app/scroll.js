import ScrollMagic from 'scrollmagic'
/*import { TimelineMax } from '../lib/TweenMax.min.js'
import '../lib/animation.gsap.js'

console.log("here");

const main = document.querySelector(".mainVid");
const video = main.querySelector("video");
const text = main.querySelector("h1");

const section = document.querySelector("section");
const end = section.querySelector("h1");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 500,
    triggerElemnt: main,
    triggerHook: 0.5
})
.addIndicators()
.addTo(controller);
*/

const main = document.querySelector(".mainVid");
if(main != null){
    const video = main.querySelector("video");
    const text = main.querySelector("h1");
}

const section = document.querySelector("section");
if(section != null){
    const end = section.querySelector("h1");
}

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: main,
    triggerHook: 0.5
})
.addTo(controller);

if(main){
    console.log("working main");
}