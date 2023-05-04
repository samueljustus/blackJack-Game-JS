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
const myDeck = generateDeck();


const drawCard = (deck) => {
    const randomCardIndex = Math.floor(Math.random() * deck.length)
    const card = deck[randomCardIndex]
    deck.splice(randomCardIndex, 1)
    return card

}
const playerHand = []
const dealerHand = []


playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck))
playerHand.push(drawCard(myDeck))
dealerHand.push(drawCard(myDeck))

console.log(playerHand);
console.log(dealerHand);
console.log(myDeck.length)















     