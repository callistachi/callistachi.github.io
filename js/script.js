ScrollReveal().reveal('.hero', {delay: 400});
ScrollReveal().reveal('#about-me', {delay: 300});
ScrollReveal().reveal('#work-experience', {delay: 300});
ScrollReveal().reveal('#skills', {delay: 300});
ScrollReveal().reveal('#languages', {delay: 300});
ScrollReveal().reveal('#projects', {delay: 300});
ScrollReveal().reveal('#contact', {delay: 300});

$('#circle').circleProgress({
  value: 0.5,
  size: 400,
  thickness: 50,
  startAngle: -Math.PI/2,
  fill: {
    color: '#35E8C6'
  },
  emptyFill: 'rgba(36, 18, 41, 1)',
  animation: {
    duration: 1500,
    easing: 'circleProgressEasing'
  }
});

const cursor = document.querySelector('.cursor');
const cursor_outline = document.querySelector('.cursor-outline');
// var hoverItems = document.querySelector('.hover-item');
// const hoverItems = document.getElementsByClassName('hover-item');
// const hoverItems = document.getElementsByClassName('hover-test');
// const hoverItems = document.getElementsByTagName("a");
// const target = $(event.target);
// const isLinkTag = target.is('a');
// const isHovered = cursor.hasClass('cursor-hover');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 5)+"px;");
})

document.addEventListener('mousemove', e => {
  cursor_outline.setAttribute("style", "top: "+(e.pageY - 25)+"px; left: "+(e.pageX - 25)+"px;");
})

document.addEventListener('click', () => {
  cursor.classList.add("cursor-click");

  setTimeout(() => {
    cursor.classList.remove("cursor-click");
  }, 300)
}) 

// let a_tags = [...document.querySelectorAll('a')];

// a_tags = a_tags.map((child,index) => {
//   child.addEventListener('mouseenter', (e) => {
//     console.log(e.target)
//     cursor_outline.classList.add("cursor-outline-hover");
//     cursor.classList.add("cursor-hover");
//   })
//   return child;
// })

// a_tags = a_tags.map((child,index) => {
//   child.addEventListener('mouseleave', (e) => {
//     console.log(e.target)
//     cursor_outline.classList.remove("cursor-outline-hover");
//     cursor.classList.remove("cursor-hover");
//   })
//   return child;
// })

let hover_items = [...document.getElementsByClassName('hover-item')];

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