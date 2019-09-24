


(function(){

let CoinFlipButton = document.querySelector("#CoinFlipButton");


CoinFlipButton.addEventListener("click", function () {
    if (Math.random() > .5) {
        console.log("heads");
        // document.write("heads")
    }
    else {
        console.log("tails");
        // document.write("tails");
    }
    //outputs the string to the browsers console
    // console.log("hello from coin-flip.js");
})
})();









// (function(){

//     //outputs string to the body of the document
//     document.write("hello from coin-flip.js");
//     if(Math.random()>.5){
//         console.log ("heads");
//         document.write("heads")
//     }
//     else
//     {console.log("tails");
//     document.write("tails");}
//     //outputs the string to the browsers console
//     console.log("hello from coin-flip.js");

// })();








