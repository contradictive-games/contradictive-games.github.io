//Make dynamic public key
var key;
var keyGen = setInterval(
    function () {
        //Generate key
        var tempInt = Math.floor(Math.random() * 999999);
        //Get key length
        var length = Math.log(tempInt) * Math.LOG10E + 1 | 0;
        //0 pad key
        key = (length < 6) ? "0".repeat(6 - length) + tempInt.toString() : tempInt.toString();
    }, 1000)
//On page load event listener
document.addEventListener("DOMContentLoaded", function () {
    var staticKey = key;
    backgroundGen(key, key); /*Calls background function*/ 
})
function backgroundGen(k, sk) {
    //If static key not passed just ignore it
    if (typeof (sk) == 'undefined')
        sk = "000000";
    //Check key got passed
    if (typeof (k) == undefined) {
        console.log("No key provided");
        throw ('No key');
    }
    //Check key is a valid key
    else if (k.length != 6 || sk.length != 6){
        console.log('Key is invalid');
        throw ('Invalid key');
    }
    //If static key is passed and is valid then set private key
    var privateKey = (typeof (privateKey) == 'undefined') ? sk : privateKey;
    //Check keys match
    if (k != privateKey) {
        console.log("Keys do not match");
        throw ('Key mismatch');
    }
    //If everything works out change color
    var color = "#";
    var letters = '0123456789ABCDEF'.split('');
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.bgColor = color;
}
