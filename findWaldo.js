function findWaldo(arr, found) {
    // console.log(arr, found)
    arr.forEach(function (element, i) {
        // console.log(element, i)
        if (element === "Waldo") {
            console.log(element)
            found(i);
        }
    })
}

function actionWhenFound(i) {
    console.log("Found Waldo at Index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);