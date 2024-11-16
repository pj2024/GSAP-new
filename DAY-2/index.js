gsap.from("#page1 #box",{
    scale:0,
    duration:1,
    delay:1,
    rotate:360
})

// gsap.from("#page2 #box",{
//     scale:0,
//     duration:1,
//     rotate:360,
//     scrollTrigger:"#page2 #box" //it will work also but for only understanding
// })

// gsap.from("#page2 #box", {
//     scale:0,
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller: "body",
//         markers: true,
//         start:"top 50%"
//     }
// })

// gsap.from("#page2 #box", {
//     scale:0,
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller: "body",
//         markers: true,
//         start:"top 50%",
//         end:"top 20%",
//         scrub:true   //it is used for scroll animation
//     }
// })


gsap.from("#page2 #box", {
    scale:0,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller: "body",
        markers: true,
        start:"top 50%",
        end:"top 20%",
        scrub:2 //1 to 5
    }
})

// gsap.to("#page3 h1", {
//     transform: "translateX(-100%)",
//     scrollTrigger:{
//         trigger:"#page3 h1",
//         scroller:"body",
//         start:"top 30%",
//         scrub:2,
//     }
// })

// when ever we use pin property we trigger: "parent div"

gsap.to("#page3 h1", {
    transform: "translateX(-100%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 0%",
        end:"top -150%", //go more slower
        scrub:2,
        pin:true //stay on top
    }
})
