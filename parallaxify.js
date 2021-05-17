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

            let top = (item.getBoundingClientRect().top / window.innerHeight * 100).toFixed(0)

            return top
        }
        console.log(getPosition(item))

        if (!item.dataset.speedMultiplier) {

            item.dataset.speedMultiplier = "0.5"
        }
        if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

            item.style.backgroundAttachment = "fixed"
        } else {

            item.style.backgroundAttachment = "none"
            item.style.backgroundPositionY = getPosition(item) * item.dataset.speedMultiplier + "%"
        }
    }
}