function svgAnimation() {
    var initialPath = `M 20 100 Q 500 100 990 100`;
    var finalPath = `M 20 100 Q 500 100 990 100`;

    var string = document.querySelector("#string");
    string.addEventListener("mousemove", (dets)=>{
        initialPath = `M 20 100 Q ${dets.x} ${dets.y} 990 100`;

        gsap.to("svg path", {
            attr:{d:initialPath}, //attr for attribute 
            duration:0.1,
            ease:"power3.out"
        })
    });

    string.addEventListener("mouseleave", (dets)=>{
        gsap.to("svg path", {
            attr:{d:finalPath},
            duration:1.5,
            ease:"elastic.out(1,0.2)"
        })
    });
}

function greenCircle(){
    let circle = document.querySelector("#greenC");
    let body = document.querySelector("body");


    body.addEventListener("mouseenter", ()=>{
        gsap.to(circle,{
            opacity:1,
            scale:1
        })
    });

    body.addEventListener("mouseleave", ()=>{
        gsap.to(circle,{
            opacity:0,
            scale:0.5
        })
    });
    body.addEventListener("mousemove", (dets)=>{
        gsap.to(circle, {
            x:dets.x,
            y:dets.y
        })
    });
}

svgAnimation();
greenCircle()