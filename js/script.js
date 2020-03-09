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
