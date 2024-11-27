function loderanimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.3,
    delay: 0.5,
    duration: 0.8,
    // repeat: Infinity,
  });
  tl.from("#line-part1 h5", {
    opacity: 0,
    onStart: function () {
      var h5 = document.querySelector("#line-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5.innerHTML = grow++;
        } else {
          h5.innerHTML = grow;
          console.log(grow);
        }
      }, 33);
    },
  });
  tl.to("#last-line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    delay: 4,
    duration: 0.4,
  });
  tl.from("#page1", {
    delay: 0.3,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from(".hero h1, #hero3 h2, #hero3 h3 ", {
    y: 140,
    stagger: 0.2,
    delay: -0.5,
  });
}
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
  Shery.makeMagnet("#nav-topright li");
}

loderanimation();
cursorAnimation();
