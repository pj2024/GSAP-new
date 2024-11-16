function breakH1() {
    let h1 = document.querySelector("#main h1");
    let h1Text = h1.textContent;

    wordCon = h1Text.split("");
    // console.log(wordCon)
    len = Math.floor(wordCon.length/2); 
    // console.log(len)
    let clutter = "";

    wordCon.forEach((elem, index)=>{
        if (index<len) {
            clutter += `<span class="a">${elem}</span>`
        }else{
            clutter += `<span class="b">${elem}</span>`
        }
    });

    h1.innerHTML = clutter;
}

// gsap.from("h1 span", {
//     y:50,
//     duration:0.6,
//     delay:0.5,
//     // stagger:0.19, //if stagger value in negative then animation is in reverse
//     stagger:-0.18,
//     opacity:0
// })

function gsapAnim() {
    gsap.from("h1 .a",{
        y:80,
        delay:0.6,
        duration:0.6,
        stagger:0.18,
        opacity:0
    })
    
    gsap.from("h1 .b",{
        y:80,
        delay:0.6,
        duration:0.6,
        stagger:-0.18,
        opacity:0
    })
}
breakH1()
gsapAnim()