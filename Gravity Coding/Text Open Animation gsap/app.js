let tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#page2",
        scroll: "body",
        markers:true,
        start:"50% 50%",
        end:"100% 50%",
        scrub:3,
        pin:true
    }
})
tl.to("#top",{
    top:"-100%",
    duration:2
},'anim')
tl.to("#bottom",{
    bottom:"-100%",
    duration:2
},'anim')

tl.from("#center h3",{
    y:"150%"
})