// A function is created to shuffle the deck of cards
function shuffle_deck(deck, quantity) {
    if (quantity === 0) {
        return
    }

    // Random number is generated to get a random card
    let swapIdx = Math.trunc(Math.random() * deck.length);
    // Random card is stored in a variable
    let temporary = deck[swapIdx];
    // Ordered card is stored in a variable from the array
    deck[swapIdx] = deck[quantity];
    // The ordered card is swapped with the random card
    deck[quantity] = temporary;

    shuffle_deck(deck, quantity - 1);
};