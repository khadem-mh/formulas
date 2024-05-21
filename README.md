# <p align="center"> Hi👋</p>
<p align="center">This page contains a variety of application formulas that are used in various projects that we develop frontend programmers ♥
</p>

<br/><br/>

## <img src="https://img.shields.io/badge/-333333?style=flat&logo=javascript"> f-1.js
```javascript
const randomItemFromArray = (arr, randomCount) => {
    const shuffled = arr.sort(() => .5 - Math.random())
    return shuffled.slice(0, randomCount)
}
```

## <img src="https://img.shields.io/badge/-333333?style=flat&logo=javascript"> f-2.js
```javascript
let customScroll = document.getElementById('scroll')

const scrollHorizontal = () => {
    let scrollPercent = window.scrollY / (document.body.clientHeight - window.innerHeight)
    let scrollPercentRoundede = Math.round(scrollPercent * 100)
    customScroll.style.width = scrollPercentRoundede + '%'
}

window.addEventListener('scroll', scrollHorizontal)
```

## <img src="https://img.shields.io/badge/-333333?style=flat&logo=javascript"> f-3.js
```javascript
    let arr1 = [1, 2, 3, 4, 5]
    let arr2 = [6, 7, 8, 9, 10]

    let concatNumsArray = [...arr1, ...arr2]
```
