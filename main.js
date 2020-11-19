const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

let move = argv.move
console.log('Playing a game of Roshambo against the computer.')
console.log(`Player plays ${move}!`)

if (move !== 'rock' && move !== 'paper' && move !== 'scissors') {
    console.log(`INVALID MOVE. You played ${move}. Must play rock, paper, or scissors.`)
} else if (move === 'rock') {
    console.log(`Computer plays paper!`)
} else if (move === 'paper') {
    console.log(`Computer plays scissors!`)
} else if (move === 'scissors') {
    console.log(`Computer plays rock!`)
}

console.log(`~Computer wins.~`)