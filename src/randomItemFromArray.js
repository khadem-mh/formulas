const randomItemFromArray = (arr, randomCount) => {
    const shuffled = arr.sort(() => .5 - Math.random())
    return shuffled.slice(0, randomCount)
}