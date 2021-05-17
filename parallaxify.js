window.onscroll = function parallax() {

    let pixelsFromTop = document.documentElement.scrollTop

    let itemsToParallax = document.getElementsByClassName("parallaxify")

    for (let item of itemsToParallax) {

        if (!item.dataset.speedMultiplier) {

            item.dataset.speedMultiplier = "0.5"
        }
        item.style.position = "relative"

        item.style.top = pixelsFromTop * item.dataset.speedMultiplier + "px"
    }

    let imagesToParallax = document.getElementsByClassName("parallaxifyBg")

    for (let item of imagesToParallax) {

        if (!item.dataset.speedMultiplier) {

            item.dataset.speedMultiplier = "0.5"
        }
        console.log(item)
        item.style.backgroundPositionY = pixelsFromTop * item.dataset.speedMultiplier + "px"
    }
}