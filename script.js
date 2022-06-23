
let personagens = ["sonic","tails","knucles","amy","eggman"]

l(personagens)

personagens.unshift("Starline")

l(personagens)

personagens.pop()

l(personagens)

personagens.push("Kit","Surge")

l(personagens)

personagens.shift()

l(personagens)

let numbers = [7,5,6,3,8,9,2,1,4]

l(numbers)

numbers.sort(function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
})

l(numbers)

function l(a){
    console.log(a)
}
