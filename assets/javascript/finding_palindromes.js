
(function(){

let word = "racecar"

let characterArray = word.split('')
// console.log(characterArray)
let reverseCharacterArray = characterArray.reverse()
// console.log(reverseCharacterArray)
let reverseWord = reverseCharacterArray.join('') 
// console.log(reverseWord)



if (word === reverseWord) {
    console.log("true");
  } else {
    console.log("false");
  }

// //   let Word =   ["1", "2", "3", "4", "5", "6", "7"]

// //   let TestWord = ["7", "6", "5", "4", "3", "2", "1"]

// // OR 

//  let Word = palindrome
//  let palindrome = {a, b, c, d, e, f, g}


// //     if Word = TestWord
// //     console.log("True")
// // }
// // else
// // {
// // console.log("False")
// // }

})();

       