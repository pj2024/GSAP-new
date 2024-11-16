// let tl = gsap.timeline({paused:true})
let tl = gsap.timeline()
tl.to(".slider-con",{
    right:0,
    duration:0.6
})

tl.from(".slider-con a", {
    x:200,
    duration:1,
    stagger:0.3,
    opacity:0,
})

tl.from("#crossicon",{
    opacity:0
})

tl.pause()
const menu = document.querySelector("nav h4 i")
menu.addEventListener("click",()=>{
    tl.play()
})

const cross = document.querySelector("#crossicon")
cross.addEventListener("click",()=>{
    tl.reverse()
})