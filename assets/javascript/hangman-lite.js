(function(){

    let word = "Peter"

    let letter = "e"

    
    let letterCount = (word.match(new RegExp(letter, "g")) || []).length;
    console.log(letterCount)



    if (letterCount >0) {
        document.write("Yeah, the letter "+ letter +" exists " + letterCount + " times in my word")
    } else {
        document.write("Nope, that letter doesn't exist in my word.")
    }

    document.write("hello from hangman-lite.js");

})();