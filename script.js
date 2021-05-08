window.onscroll = function() { scrolltop() };

function scrolltop() {

    let pixelsFromTop = document.documentElement.scrollTop

    let transformAmount = 1 + pixelsFromTop / 500

    let objectLeft = document.getElementById("objectLeft")
    let objectRight = document.getElementById("objectRight")
    let objectMiddle = document.getElementById("objectMiddle")
    let objectBottom = document.getElementById("objectBottom")

    objectLeft.style.top = pixelsFromTop / 1.2 + "px"

    objectRight.style.top = pixelsFromTop / 1.2 + "px"

    objectMiddle.style.transform = "scale(" + transformAmount + ")"

    objectBottom.style.left = pixelsFromTop / 1.5 + "px"
}