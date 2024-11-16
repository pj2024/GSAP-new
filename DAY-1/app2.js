let tl = gsap.timeline();

tl.from("nav h1",{
    y:-10,
    opacity:0,
    delay:1,
    duration:.5,
    // stagger:.5
})

tl.from(".menu-opt h3", {
    y:-10,
    opacity:0,
    duration:1,
    stagger:.2
})