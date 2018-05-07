
const consoleColors = {
  "gray": "font-size: 22px; font-weight: bold; color: #1B2B34;",
  "red": "font-size: 22px; font-weight: bold; color: #D8DEE9;",
  "orange": "font-size: 22px; font-weight: bold; color: #F99157;",
  "yellow": "font-size: 22px; font-weight: bold; color: #FAC863;",
  "green": "font-size: 22px; font-weight: bold; color: #99C794;",
  "teal": "font-size: 22px; font-weight: bold; color: #5FB3B3;",
  "blue": "font-size: 22px; font-weight: bold; color: #6699CC;",
  "purple": "font-size: 22px; font-weight: bold; color: #C594C5;",
  "image": "font-size: 36px;"
}

document.addEventListener("DOMContentLoaded", function() {
  init();
});

function menuHandler(e) {
  e.preventDefault();
  var burger = document.querySelector(".hamburger");
  var mobileMenu = document.querySelector(".mobile-menu");
  burger.classList.toggle("is-active");
  mobileMenu.classList.toggle("visible");
}

function init() {
  // menu listener
  var menu = document.querySelector(".hamburger");
  menu.addEventListener("click", menuHandler, false);
  // get page
  const page = window.location.pathname.split('/')[1];
  switch (page) {
    case '':
      initHome();
    break;
    case 'who-we-are':
      initWho();
      break;
    case 'what-we-do':
      initWhat();
      break;
    case 'our-work':
      initWork();
      break;
    case 'blog':
      initBlog();
      break;
    case 'contact':
      initContact();
      break;
  };
};

// home
function initHome() {
  scrollHome();
  tellStoryHome();
}

function scrollHome() {
  const controller = new ScrollMagic.Controller();

  //logo drawing
  const logoTween = new TimelineLite();
  logoTween.from("#logo-r", 0.25, {scale:0.25, opacity:0, transformOrigin: "center"}, "+=0.2")
  .from("#logo-e", 0.25, {scale:0.25, opacity: 0, transformOrigin: "center"}, "-=0.1")
  .from("#logo-s", 0.25, {scale:0.25, opacity: 0, transformOrigin: "center"}, "-=0.1")
  .from("#logo-o", 0.25, {scale:0.25, opacity: 0, transformOrigin: "center"}, "-=0.1")
  .from("#logo-l", 0.25, {scale:0.25, opacity: 0, transformOrigin: "center"}, "-=0.1")
  .from("#logo-u", 0.25, {scale:0.25, opacity: 0, transformOrigin: "center"}, "-=0.1")
  .from("#logo-t", 0.25, {scale:0.25, opacity: 0, transformOrigin: "center"}, "-=0.1")
  .from("#logo-i", 0.25, {scale:0.25, opacity: 0, transformOrigin: "center"}, "-=0.1")
  .from("#logo-o2", 0.25, {scale:0.25, opacity:0, transformOrigin: "center"}, "-=0.1")
  .from("#logo-n", 0.25, {scale:0.25, opacity:0, transformOrigin: "center"}, "-=0.1")

  // logo scrolling
  new ScrollMagic.Scene({
    triggerElement: ".home__kvp",
    offset: 250
  })
  .setTween("#res-logo", 1, {scale: 0.75})
  .addTo(controller);

  // who-we-are
  const whoTween = new TimelineLite();
  whoTween.from(".home__who-we-are--text", 0.75, {rotation: 2})
    .from("#ian", 0.75, {scale: 0.95, rotation: -2})
    .from("#taylor", 0.75, {scale: 0.95, rotation: 1.2});

  new ScrollMagic.Scene({
    triggerElement: "#who-we-are",
    duration: 200
  })
  .setTween(whoTween)
  .addTo(controller);

  //testimonial
  tweenFromLeft("testimonial", controller);

  // what-we-do
  tweenFromRight("what-we-do--header", controller);
  tweenFromLeft("what-we-do--strategy", controller);
  const whatTween = new TimelineLite();
  whatTween.from(".what-we-do--section", 0.75, {scale: 0.25, opacity: 0, transformOrigin: "center"});

  new ScrollMagic.Scene({
    triggerElement: ".what-we-do--section",
    duration: 200
  })
  .setTween(whatTween)
  .addTo(controller);

  // how-we-differ
  tweenFromLeft("how-we-differ", controller);

  // why-it-matters
  tweenFromRight("why-it-matters", controller);
}

function tellStoryHome() {
  const storyController = new ScrollMagic.Controller();
  let chapter = 0;

  new ScrollMagic.Scene({
    triggerElement: ".home__kvp"
  })
  .on("enter", function(e) {
    if(chapter == 0) {
      chapter++;
      console.log('%c🐵', consoleColors.image);
      console.log('%cOh… Hello there! I\'m Chimp, the resident code monkey at Resolution.', consoleColors.teal);
      console.log('%cI\'m somewhat surprised to see you here. I don\'t get a lot of visitors.', consoleColors.teal);
    }
  })
  .addTo(storyController);

  new ScrollMagic.Scene({
    triggerElement: "#who-we-are"
  })
  .on("enter", function(e) {
    if(chapter == 1){
      chapter++;
      console.clear();
      console.log('%c🐵', consoleColors.image);
      console.log('%cI guess you either like code or are interested in something I\'ve done here.', consoleColors.teal);
      console.log('%cThat\'s super cool. Most people don\'t pay attention to these things.', consoleColors.teal);
      console.log('%cI obsess over them.', consoleColors.teal);
    }
  })
  .addTo(storyController);

  new ScrollMagic.Scene({
    triggerElement: ".testimonial"
  })
  .on("enter", function(e) {
    if(chapter == 2){
      chapter++;
      console.clear();
      console.log('%c🙈', consoleColors.image);
      console.log('%cMost people, even other agencies, would rather ignore development.', consoleColors.teal);
      console.log('%cI know. I\'ve looked at their code. It\'s scary.', consoleColors.teal);
    }
  })
  .addTo(storyController);

  new ScrollMagic.Scene({
    triggerElement: "#why-it-matters"
  })
  .on("enter", function(e) {
    if(chapter == 3){
      chapter++;
      console.clear();
      console.log('%c🐵', consoleColors.image);
      console.log('%cIt\'s not just pride in my craft…', consoleColors.teal);
      console.log('%cGood code makes my sites faster and improves SEO.', consoleColors.teal);
    }
  })
  .addTo(storyController);
}

// who-we-are
function initWho() {
  scrollWho();
}

function scrollWho() {
  const controller = new ScrollMagic.Controller();
  const tl = TweenLite.from(".jumbotron", 1, {scale: 0, opacity: 0});

  tweenFromLeft("strategy", controller);
  tweenFromRight("designers", controller);
  tweenFromLeft("developers", controller);
  tweenFromRight("story", controller);
  tweenFromLeft("taylor", controller);
  tweenFromRight("ian", controller);
  // tweenFromLeft("jennifer", controller);
  tweenFromLeft("nicolette", controller);
}

// what-we-do
function initWhat() {
  scrollWhat();
}

function scrollWhat() {
  const controller = new ScrollMagic.Controller();
  const tl = TweenLite.from(".jumbotron", 1, {scale: 0, opacity: 0});

  tweenFromLeft("brand-card", controller);
  tweenFromRight("creative-card", controller);
  tweenFromLeft("web-card", controller);
  tweenFromRight("graphic-card", controller);
  tweenFromLeft("digital-card", controller);
  tweenFromRight("content-card", controller);
}

// our-work
function initWork() {
  console.log('work');
}

// blog
function initBlog() {
  console.log('blog');
  window.addEventListener('scroll', debounce(colorHeaderImg, 10));
}

// contact
function initContact() {
  scrollContact();
}

function scrollContact() {
  const controller = new ScrollMagic.Controller();
  const tl = TweenLite.from(".jumbotron", 1, {scale: 0, opacity: 0});
}

function colorHeaderImg(event) {
  if (document.querySelector('.zoom') != null) {
    const elToColor = document.querySelector('.zoom');
    elToColor.style.cssText = `filter: hue-rotate(${window.scrollY/4}deg)`;
  }
};


function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return min + (max - min) * Math.random();
};

function getOffset( el ) {
  var _x = 0;
  var _y = 0;
  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

// animation functions
function tweenFromLeft(el, controller) {
  let c = controller;
  const element = document.getElementById(`${el}`);
  new ScrollMagic.Scene({
    triggerElement: element,
    duration: 200
  })
  .setTween(TweenLite.from(element, 1, {x: -1200, opacity: 0}))
  .addTo(c);
}

function tweenFromRight(el, controller) {
  let c = controller;
  const element = document.getElementById(`${el}`);
  new ScrollMagic.Scene({
    triggerElement: element,
    duration: 200
  })
  .setTween(TweenLite.from(element, 1, {x: 1200, opacity: 0}))
  .addTo(c);
}

