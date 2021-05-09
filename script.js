window.onscroll = function() { scrolltop() };

function scrolltop() {

    let pixelsFromTop = document.documentElement.scrollTop

    let transformAmount = 1 + pixelsFromTop / 500

    let objectLeft = document.getElementById("objectLeft")
    let objectRight = document.getElementById("objectRight")
    let objectMiddle = document.getElementById("objectMiddle")
    let objectBottom = document.getElementById("objectBottom")

    objectLeft.style.top = 200 + pixelsFromTop * 0.8 + "px"

    objectRight.style.top = 300 + pixelsFromTop * 0.5 + "px"

    objectMiddle.style.transform = "scale(" + transformAmount + ")"

    objectBottom.style.left = pixelsFromTop * 1.2 + "px"
}