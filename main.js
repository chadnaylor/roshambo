const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const beats = { rock: 'scissors', paper: 'rock', scissors: 'paper' }

class computerPlayer {
    constructor() {
    }

    generateMove() {
        return Object.keys(beats)[Math.floor(Math.random() * 3)]
    }

    decideWinner(playerMove, computerMove) {
        if (playerMove === computerMove) return 'No one'
        if (beats[playerMove] === computerMove) return 'Player'
        else return 'Computer'
    }

    static playGame(playerMove) {
        let computer = new computerPlayer()
        console.log('Playing a game of Roshambo against the computer.')
        console.log(`Player plays ${playerMove}!`)
        if (!beats[playerMove]) {
            console.log(`INVALID MOVE. You played ${playerMove}. Must play rock, paper, or scissors.`)
        } else {
            let computerMove = computer.generateMove()
            console.log(`Computer plays ${computerMove}!`)
            console.log(`~${computer.decideWinner(playerMove, computerMove)} wins.~`)
        }
    }
}

computerPlayer.playGame(argv.move)
