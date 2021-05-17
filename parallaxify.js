window.addEventListener("scroll", parallax)

function parallax() {

    let pixelsFromTop = document.documentElement.scrollTop

    let itemsToParallax = document.getElementsByClassName("parallaxify")

    for (let item of itemsToParallax) {

        if (!item.dataset.speedMultiplier) {

            item.dataset.speedMultiplier = "0.7"
        }
        if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {


        } else {
            item.style.position = "relative"

            item.style.top = pixelsFromTop * item.dataset.speedMultiplier + "px"
        }
    }

    let imagesToParallax = document.getElementsByClassName("parallaxifyBg")

    for (let item of imagesToParallax) {

        function getPosition(item) {

            let top = item.getBoundingClientRect().top

            return top
        }

        if (!item.dataset.speedMultiplier) {

            item.dataset.speedMultiplier = "0.7"
        }
        if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

            item.style.backgroundAttachment = "fixed"
        } else {

            item.style.backgroundAttachment = "none"
            item.style.backgroundPositionY = getPosition(item) * -1 * item.dataset.speedMultiplier + "px"
        }
    }
}