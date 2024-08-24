var tl = gsap.timeline();

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function menu() {
  let xB = document.querySelector(".xross_btn");
  let xC = document.querySelector(".xross_container");
  let x = document.querySelector(".xross");
  let l1 = document.querySelector(".line1");
  let l2 = document.querySelector(".line2");
  let flag = 0;

  xB.addEventListener("click", function () {
    if (flag == 0) {
      xC.style.right = "0%";
      x.style.right = "0.8%";
      l1.style.transform = "rotate(48deg) translate(3px,3px)";
      l2.style.transform = "rotate(-48deg) translate(2px,-5px)";
      flag = 1;
    } else {
      xC.style.right = "-100%";
      x.style.right = "-100%";
      l1.style.transform = "";
      l2.style.transform = "";
      flag = 0;
    }
  });

  let xA = document.querySelectorAll(".xross ul li a");
  xA.forEach((cursor) => {
    cursor.addEventListener("click", function () {
      xC.style.right = "-100%";
      x.style.right = "-100%";
      l1.style.transform = "";
      l2.style.transform = "";
      flag = 0;
    });
  });
}
function loader() {
  tl.to(".p", {
    y: "60vh",
    duration: 0.3,
  });

  tl.to(".o", {
    y: "60vh",
    duration: 0.3,
  });

  tl.to(".r", {
    y: "60vh",
    duration: 0.3,
  });

  tl.to(".t", {
    y: "60vh",
    duration: 0.3,
  });

  tl.to(".f", {
    y: "60vh",
    duration: 0.3,
  });

  tl.to(".oo", {
    y: "60vh",
    duration: 0.3,
  });

  tl.to(".l", {
    y: "60vh",
    duration: 0.3,
  });

  tl.to(".i", {
    y: "60vh",
    duration: 0.3,
  });

  tl.to(".ooo", {
    y: "60vh",
    duration: 0.3,
  });

  tl.to(".c", {
    y: "60vh",
    duration: 0.3,
  });

  tl.to("#loader", {
    top: "-100vh",
    borderBottomLeftRadius: "20vw",
    borderBottomRightRadius: "20vw",
    delay: 0.3,
    duration: 0.5,
  });
}
function animation() {
  tl.from(".hero_text h1", {
    y: "15vh",
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".hero_text h2", {
    y: "15vh",
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".hero_text p", {
    y: "15vh",
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".xross_btn", {
    x: "10vh",
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".about_head h1", {
    y: "10vh",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      markers: false,
      start: "top 60%",
      end: "top 40%",
      scrub: 1,
    },
  });

  tl.from(".about_img", {
    x: "10vh",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      markers: false,
      start: "top 10%",
      end: "top 5%",
      scrub: 1,
    },
  });

  tl.from(".about_detail", {
    x: "10vh",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      markers: false,
      start: "top -10%",
      end: "top -15%",
      scrub: 1,
    },
  });

  tl.from(".left_ido h1", {
    y: "10vh",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      markers: false,
      start: "top 80%",
      end: "top 70%",
      scrub: 1,
    },
  });

  tl.from(".right_ido h1", {
    y: "10vh",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      markers: false,
      start: "top 65%",
      end: "top 55%",
      scrub: 1,
    },
  });
}
function scroller() {
  window.addEventListener("scroll", function () {
    let hero = this.document.querySelector(".hero_text");
    hero.classList.toggle("changes", this.window.scrollY > 600);
  });
}
function cursor() {
  let cursor = document.querySelector(".cursor");
  let main = document.querySelector("main");
  let card1 = document.querySelector(".card1");
  let card2 = document.querySelector(".card2");
  let card3 = document.querySelector(".card3");
  let page4 = document.querySelector("#page4");
  let page5 = document.querySelector("#page5");
  let xrossB = document.querySelector(".xross_btn");
  let xross = document.querySelector(".xross_container");
  let xrossA = document.querySelectorAll(".xross_container ul li a");

  main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  card1.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 10,
    });
  });

  card1.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 1,
    });
  });

  card2.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 10,
    });
  });

  card2.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 1,
    });
  });

  card3.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 10,
    });
  });

  card3.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 1,
    });
  });

  card3.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 10,
    });
  });

  card3.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 1,
    });
  });

  page4.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      display: "none",
    });
  });

  page5.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
    });
  });

  xrossB.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  xross.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
}
function work() {
  let div1 = document.querySelector(".div1");
  let div2 = document.querySelector(".div2");
  let div3 = document.querySelector(".div3");
  let div4 = document.querySelector(".div4");
  let workC = document.querySelector(".work_cursor");
  let div1V = document.querySelector(".div1 .video_container video");
  let div4V = document.querySelector(".div4 .video_container video");
  div1.addEventListener("mousemove", function (dets) {
    gsap.to(workC, {
      x: dets.x - 60,
      y: dets.y - 75,
      scale: 1,
    });
  });

  div1.addEventListener("mouseenter", function () {
    gsap.to(div1V, {
      play: true,
    });
  });
  
  div1.addEventListener("mouseleave", function (dets) {
    gsap.to(workC, {
      scale: 0,
    });

    gsap.to(div1V, {
      pause: true,
      currentTime: 0,
      duration: 0.2,
      ease: "power1.inOut",
    });
  });

  div1.addEventListener("click", function () {
    console.log("click");
    window.open("https://akashnegi62.github.io/create/", "_blank");
  });

  div2.addEventListener("mousemove", function (dets) {
    gsap.to(workC, {
      x: dets.x - 60,
      y: dets.y - 75,
      scale: 1,
    });
  });
  div2.addEventListener("mouseleave", function (dets) {
    gsap.to(workC, {
      scale: 0,
    });
  });

  div3.addEventListener("mousemove", function (dets) {
    gsap.to(workC, {
      x: dets.x - 60,
      y: dets.y - 75,
      scale: 1,
    });
  });
  div3.addEventListener("mouseleave", function (dets) {
    gsap.to(workC, {
      scale: 0,
    });
  });

  div4.addEventListener("mousemove", function (dets) {
    gsap.to(workC, {
      x: dets.x - 60,
      y: dets.y - 75,
      scale: 1,
    });
  });

  div4.addEventListener("mouseenter", function () {
    gsap.to(div4V, {
      play: true,
    });
  });

  div4.addEventListener("mouseleave", function (dets) {
    gsap.to(workC, {
      scale: 0,
    });

    gsap.to(div4V, {
      pause: true,
      currentTime: 0,
      duration: 0.2,
      ease: "power1.inOut",
    });
  });
 
  div4.addEventListener("click", function () {
    console.log("click");
    window.open("https://akashnegi62.github.io/CocaCola/", "_blank");
  });
}
function updateClock() {
  const now = new Date();

  // Get hours, minutes, and seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Format minutes and seconds
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Format time as HH:MM:SS AM/PM
  const timeString = `${hours}:${minutes}:${seconds} | ${ampm}`;

  // Display time
  document.getElementById("clock").textContent = timeString;
  setInterval(updateClock, 1000);
}
function Arrow() {
  let arrowBtn = document.querySelector(".arrow");
  arrowBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  });

  gsap.from(".arrow", {
    y: 30,
    repeat: -1,
    yoyo: true,
    duration: 0.7,
  });
}

menu();

loader();

animation();

scroller();

cursor();

work();

updateClock();

Arrow();
