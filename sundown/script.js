
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// remeber not to give any height width for attributed to main as it is juat a wrapper

// following is the code for one Element
// var elem = document.querySelector(".elem")
// var cover= document.querySelector("#image-block")
// elem.addEventListener("mouseenter",function(){
//     cover.style.display ="block"
// })
// elem.addEventListener("mouseleave",function(){
//     cover.style.display ="none"
// })
var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})


// <!-- DIVISONAL PAGE -->
var design =document.querySelector("#Design")
var project =document.querySelector("#Project")
var execution=document.querySelector("#Execution")
var conoverlay=document.querySelector("#con-overlay")
var conright=document.querySelector("#con-right")
var para=document.querySelector("#covopara")
design.addEventListener("click", function(){
    design.style.color ="#ff0000"
    project.style.color = `grey`
    execution.style.color = `grey`
    conoverlay.style.display = 'block'
    conoverlay.style.marginTop = "0px"
    conright.style.backgroundImage =`url(https://images.unsplash.com/photo-1654626935419-d5de88269ab3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
})
project.addEventListener("click", function(){
    design.style.color = `grey`
    project.style.color ="#ff0000"
    execution.style.color = `grey`
    conoverlay.style.display = 'block'
    conoverlay.style.marginTop = "80px"
    conright.style.backgroundImage =`url(https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp)`

})
execution.addEventListener("click", function(){
    design.style.color = `grey`
    project.style.color = `grey`
    execution.style.color ="#ff0000"
    conoverlay.style.display = 'block'
    conoverlay.style.marginTop = "170px"
    conright.style.backgroundImage =`url(https://images.unsplash.com/photo-1629723095068-d1d3f04cc1fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
})

// swipwe code

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        loop:true,
    });
}
swiperAnimation()