//On page load event listener
(function(){backgroundGen()})();
function backgroundGen() {
    //If everything works out change color
    var key;
    var tempInt = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
    key = (tempInt.length < 6) ? "0".repeat(6 - tempInt.length) + tempInt : tempInt;
    document.body.bgColor = "#" + key;
}
