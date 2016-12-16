
function backgroundGen() {
    //If everything works out change color
    var tempInt = Math.floor(Math.random() * 16777215).toString(16);
    var key = (tempInt.length < 6) ? "0".repeat(6 - tempInt.length) + tempInt : tempInt;
    document.body.style.backgroundColor = "#" + key;
}

backgroundGen();