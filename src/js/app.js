
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

function init() {
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
  // section flags
  let homeHello = false;
  let homeWho = false;
  let homeWhat = false;
  let homeWhy = false;
  let homeBlog = false;

  scrollHome();
  tellStoryHome();
}

function scrollHome() {
  const controller = new ScrollMagic.Controller();

  const whoTween = new TimelineLite();
  whoTween.to(".home__who-we-are--text", 0.75, {rotation: 2});
  whoTween.to("#ian", 0.75, {scale: 0.95, rotation: -2}, 0.1);
  whoTween.to("#taylor", 0.75, {scale: 0.95, rotation: 1.2}, 0.2);

  // logo scrolling
  TweenLite.from("#res-logo", 1.25, {scale: 0.5});
  new ScrollMagic.Scene({
    triggerElement: ".home__kvp"
  })
  .setTween("#res-logo", 1, {scale: 0.5})
  .addTo(controller);

  // who-we-are
  new ScrollMagic.Scene({
    triggerElement: "#who-we-are",
    offset: 300
  })
  .setTween(whoTween)
  .addTo(controller);
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

function scaleResLogo(event) {
  if (document.querySelector('.jumbotron__logo') != null) {
    let elToScale = document.querySelector('.jumbotron__logo');
    elToScale.style.cssText = `width: ${(80 - window.scrollY/10)}%`;
  }
};

// who-we-are
function initWho() {
  console.log('who');
  scrollWho();
}

function scrollWho() {
  const controller = new ScrollMagic.Controller();

}

// what-we-do
function initWhat() {
  console.log('what');
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
  console.log('contact');
}

function colorHeaderImg(event) {
  if (document.querySelector('.zoom') != null) {
    let elToScale = document.querySelector('.zoom');
    elToScale.style.cssText = `filter: hue-rotate(${window.scrollY/4}deg)`;
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
