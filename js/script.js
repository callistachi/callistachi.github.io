ScrollReveal().reveal('.hero', {delay: 400});
ScrollReveal().reveal('#about-me', {delay: 300});
ScrollReveal().reveal('#work-experience', {delay: 300});
ScrollReveal().reveal('#projects', {delay: 300});
ScrollReveal().reveal('#contact', {delay: 300});

const cursor = document.querySelector('.cursor');
const cursor_outline = document.querySelector('.cursor-outline');
const heart = document.querySelector('#heart');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 5)+"px;");
})

document.addEventListener('mousemove', e => {
  cursor_outline.setAttribute("style", "top: "+(e.pageY - 25)+"px; left: "+(e.pageX - 25)+"px;");
})

let hover_items = [...document.getElementsByClassName('hover-item')];
let a_tags = [...document.querySelectorAll('a')];

hover_items = hover_items.map((child,index) => {
  child.addEventListener('mouseenter', (e) => {
    console.log(e.target)
    cursor_outline.classList.add("cursor-outline-hover");
    cursor.classList.add("cursor-hover");
  })
  return child;
})

hover_items = hover_items.map((child,index) => {
  child.addEventListener('mouseleave', (e) => {
    console.log(e.target)
    cursor_outline.classList.remove("cursor-outline-hover");
    cursor.classList.remove("cursor-hover");
  })
  return child;
})

a_tags = a_tags.map((child,index) => {
  child.addEventListener('mouseenter', (e) => {
    console.log(e.target)
    cursor_outline.classList.add("cursor-outline-hover");
    cursor.classList.add("cursor-hover");
  })
  return child;
})

a_tags = a_tags.map((child,index) => {
  child.addEventListener('mouseleave', (e) => {
    console.log(e.target)
    cursor_outline.classList.remove("cursor-outline-hover");
    cursor.classList.remove("cursor-hover");
  })
  return child;
})

document.addEventListener('click', () => {
  cursor.classList.add("cursor-click");

  setTimeout(() => {
    cursor.classList.remove("cursor-click");
  }, 300)
})

document.addEventListener('click', () => {
  heart.classList.toggle("heart-active");
})

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $("#hamburgerMenu").toggleClass("is-active2");
  });
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": false
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});