let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let currentEndIndex = 4

let displayArr = arr.slice(0, currentEndIndex)

function loadMore() {
  currentEndIndex += 4
  displayArr = arr.slice(0, currentEndIndex)
}

loadMore()

console.log(displayArr)

loadMore()
console.log(displayArr)
