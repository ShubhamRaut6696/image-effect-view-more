var main =document.querySelector("#main")
var cursor =document.querySelector(".cursor")
var imgss =document.querySelector(".imgsec")
main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.2,
        ease:"back.out"
    })
})

imgss.addEventListener("mouseenter", function(){
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:7
    })
})
imgss.addEventListener("mouseleave", function(){
     cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1
    })
})