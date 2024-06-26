# <p align="center"> Hi👋</p>
<p align="center">This page contains a variety of application formulas that are used in various projects that we develop frontend programmers ♥
</p>

<br/><br/>

## <img src="https://img.shields.io/badge/-333333?style=flat&logo=javascript"> `randomChooseItemFromArray.js`
```javascript
const randomChooseItemFromArray = (arr, randomCount) => {
    const shuffled = arr.sort(() => .5 - Math.random())
    return shuffled.slice(0, randomCount)
}
```

## <img src="https://img.shields.io/badge/-333333?style=flat&logo=javascript"> `scrollHorizontal.js`
```javascript
let customScroll = document.getElementById('scroll')

const scrollHorizontal = () => {
    let scrollPercent = window.scrollY / (document.body.clientHeight - window.innerHeight)
    let scrollPercentRoundede = Math.round(scrollPercent * 100)
    customScroll.style.width = scrollPercentRoundede + '%'
}

window.addEventListener('scroll', scrollHorizontal)
```

## <img src="https://img.shields.io/badge/-333333?style=flat&logo=javascript"> `concatinationArray.js`
```javascript
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]

let concatNumsArray = [...arr1, ...arr2]
```

## <img src="https://img.shields.io/badge/-333333?style=flat&logo=javascript"> `sortingArray.js`
```javascript
let arr1 = [2, 6, 1, 4, 7, 0, 3, 9, 10, 5, 8]
let numsArrSort = arr1.sort((a, b) => { return a - b })
```

## <img src="https://img.shields.io/badge/-333333?style=flat&logo=javascript"> `determinationCountNumber.js`
```javascript
let arr1 = [2, 6, 1, 4, 7, 0, 3, 7, 9, 10, 5, 8, 5, 2]

let numberReapet = numsArrSort.reduce((prev, current) => {
    return { ...prev, [current]: (prev[current] || 0) + 1 }
}, {})

for (let num in numberReapet) {
    nums += ` ${num} `
    console.log(nums);
}
```

## <img src="https://img.shields.io/badge/-333333?style=flat&logo=javascript"> `findMaxNumber.js`
```javascript
let arr1 = [2, 6, 1, 4, 7, 0, 3, 7, 9, 10, 5, 8, 5, 2]

let maxNumber = arr1.reduce((prevNum, currentNum) => {
if (prevNum < currentNum) return currentNum
else return prevNum
}, 0)
```

## <img src="https://img.shields.io/badge/-333333?style=flat&logo=javascript"> `findMinNumber.js`
```javascript
let arr1 = [2, 6, 1, 4, 7, 0, 3, 7, 9, 10, 5, 8, 5, 2]

let minNumber = arr1.reduce((prevNum, currentNum) => {
if (prevNum > currentNum) return currentNum
else return prevNum
}, 0)
```

## <img src="https://img.shields.io/badge/-333333?style=flat&logo=javascript"> `getOutAreaBox.js`
```javascript
let getPositionElem = boxElem.getBoundingClientRect()

if (
    event.clientY < getPositionElem.top ||
    event.clientY > (getPositionElem.top + getPositionElem.height) ||
    event.clientX > (getPositionElem.left + getPositionElem.width) ||
    event.clientX < getPositionElem.left
) {
    console.log('outside');
}
```
