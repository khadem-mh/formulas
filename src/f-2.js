let customScroll = document.getElementById('scroll')

const scrollHorizontal = () => {
    let scrollPercent = window.scrollY / (document.body.clientHeight - window.innerHeight)
    let scrollPercentRoundede = Math.round(scrollPercent * 100)
    customScroll.style.width = scrollPercentRoundede + '%'
}

window.addEventListener('scroll', scrollHorizontal)