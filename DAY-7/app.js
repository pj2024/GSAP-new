function seprateSpans() {
    let a = document.querySelectorAll("nav h3 a");
    let clutter = "";
    a.forEach((elem)=>{
        let item = elem.textContent.split("")
        item.forEach((elemIn) =>{
            clutter += `<span>${elemIn}</span>`;
        });
    });
}

function h3Anim() {
    let h3 = document.querySelector("nav h3");
    let span = document.querySelectorAll("nav h3 a span");
    h3.addEventListener("mouseover", ()=>{
       span.forEach((elem)=>{
        //  gsap.to(elem,{
        //     transform:"translateY(-100%)",
        //     duration:0.6
        //  })

        console.log(elem);
       });
    });
}

h3Anim()
seprateSpans();