








(function(){
        
        let amount = 47
        
        let num_of_twenties = amount / 20

        amount = amount % 20 


        let num_of_tens = amount / 10

        amount = amount % 10
        

        let num_of_fives = amount / 5

        amount = amount % 5

        
        let num_of_ones = amount / 1

        amount = amount % 1

let arrayAmount = [Math.floor(num_of_twenties), Math.floor(num_of_tens), 
        Math.floor(num_of_fives), num_of_ones]



console.log(arrayAmount)

})();






// (function(){

//         let amount = 2.35

//         let num_of_tens = amount / 10

//         amount = 2.35 % 10

// console.log(num_of_tens)

// })();

// (function(){

//         let amount = .235

//         let num_of_fives = amount / 5

//         amount = .235 % 5

// console.log(num_of_fives)
// })();


//         amount = .235


