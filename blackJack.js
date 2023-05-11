const generateDeck = () => {

    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'Ace']
    const suits = ['Diamond', 'Heart', 'Club', 'Spade']
    const deck = [];

    for (let i = 0; i < cards.length; i++) {
        for (j = 0; j < suits.length; j++) {
            deck.push({cards: cards[i], suits: suits[j]})
        }
        
    }
    return deck;
}


const drawCard = (deck) => {
    const randomCardIndex = Math.floor(Math.random() * deck.length)
    const card = deck[randomCardIndex]
    deck.splice(randomCardIndex, 1)
    return card

}

const calcScore = (hand) => {
    let total = 0;
    for (const cardObject of hand) {
        console.log(cardObject.cards)
        if (cardObject.cards === 'K') {
            total += 10
        }
        else if (cardObject.cards === 'Q') {
            total += 10
        }
        else if (cardObject.cards === 'J') {
            total += 10
        }
        else if (cardObject.cards === 'Ace') {
            total += 1
        }
        else {
            total += parseInt(cardObject.cards)
        }
    }
    
    return total 
}



const myDeck = generateDeck();
const playerHand = []
const dealerHand = []
calcScore(playerHand)


playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck))
playerHand.push(drawCard(myDeck))
dealerHand.push(drawCard(myDeck))


console.log("starting player hand: ", playerHand)
console.log("starting player score: ", calcScore(playerHand))
console.log("startng dealer hand: ", dealerHand)
console.log("starting dealer score: ", calcScore(dealerHand))



while (true) {
    // deal player card
    playerHand.push(drawCard(myDeck))
    // check if player burst
    const playerScore = calcScore(playerHand)
    let dealerScore = calcScore(dealerHand)  
    if (playerScore > 21) {
        console.log(`you loose! your final score was :${playerScore} 
        while the dealer final score was: ${dealerScore}`)
        break;
    }
    // check if player hits 21
    if (playerScore === 21) {
        console.log(`you win! your final score was: ${playerScore} 
        while the dealer had${dealerScore}`)
        break;
    }

    // deal dealer card
    dealerHand.push(drawCard(myDeck))
    // check if dealer burst
    dealerScore = calcScore(dealerHand)
    if (dealerScore > 21) {
        console.log(`you win! your final score was: ${playerScore}
        while the dealer had ${dealerScore}`)
        break;
    }
    // check if dealer hits 21
    if (dealerScore === 21) {
        console.log(`you loose! your final score was :${playerScore} 
        while the dealer final score was: ${dealerScore}`)
        break;  
    }

}
console.log("ending player hand: ", playerHand)
console.log("ending player score: ", calcScore(playerHand))
console.log("ending dealer hand: ", dealerHand)
console.log("ending dealer score: ", calcScore(dealerHand))
















     