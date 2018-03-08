
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

init();


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

  window.addEventListener('scroll', debounce(scaleResLogo, 10));
  window.addEventListener('scroll', debounce(checkScrollHome, 20));

  tellStory();
}

function scaleResLogo(event) {
  if (document.querySelector('.jumbotron__logo') != null) {
    let elToScale = document.querySelector('.jumbotron__logo');
    elToScale.style.cssText = `width: ${(80 - window.scrollY/10)}%`;
  }
};

function checkScrollHome(event) {
  const whoSection = document.querySelector('.home__who-we-are');
  const whatSection = document.querySelector('.home__what-we-do');
  const whySection = document.querySelector('.home__why-it-matters');
  const blogSection = document.querySelector('.home__blog');
  const sections = [whoSection, whatSection, whySection, blogSection];

  sections.forEach(section => {
    // halfway through the section
    const slideInAt = (window.scrollY + window.innerHeight) - section.clientHeight/2;
    // bottom of the section
    const sectionBottom = section.offsetTop + section.clientHeight;
    const isHalfShown = slideInAt > section.offsetTop;
    const isNotScrolledPast = window.scrollY < sectionBottom;
    if (isHalfShown && isNotScrolledPast) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  })
};

function tellStory() {
  console.log('%c🐵', consoleColors.image);
  wait(1000);
  console.log('%cOh… Hello there!', consoleColors.teal);
}
// who-we-are
function initWho() {
  console.log('who');
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

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
};
