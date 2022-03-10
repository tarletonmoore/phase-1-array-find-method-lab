// code your solution here
function superbowlWin(array) {
    let item = array.find(object => object.result === "W")
    if (item) {
        return item.year
    }
}