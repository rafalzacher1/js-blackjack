/**
 * Blackjack
 **/

// Card variables
// Creates an array of suits of cards in a global variable
let suits = ['hearts', 'clubs', 'diamonds', 'spades'],
    // Creates an array of different card values in a global variable
    values = ['a', 'k', 'q', 'j', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

// Initialize storage cache for images. 
if ('caches' in window) {
    // Cache API is supported.
    console.log("True");

    caches.open("cards-cache").then(function (cache) {
        // Cache opened successfully.
        console.log("Cache created");

        cache
            .add("/cards/back.png")
            .then(() => console.log("Data added to cache."))
            .catch((error) => console.log("Error adding data to cache: ", error))

    }).catch(function (error) {
        // Failed to open cache.
        console.log("Cache failed");
    });

    // You can add your code here.
    let cards = [];

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card_url = "/cards/" + values[j] + "-" + suits[i] + ".png";
            cards.push(card_url);

            console.log(cards[j]);
        }
    }

    caches.open("cards-cache").then((cache) => {
        cache
            .addAll(cards)
            .then(() => console.log("Data added to cache."))
            .catch((error) => console.error("Error adding data to cache:", error));
    });

} else {
    // Cache API is not supported.
    console.log("False");
}

// DOM variables
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button'),
    hitStay = document.getElementById('hit_stay');

// Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

// Changes the display of hit and stay button to none to make it invisible
hitButton.style.display = 'none';
stayButton.style.display = 'none';

// Event listener is created to make the buttons visible and change the text
newGameButton.addEventListener('click', function () {
    clear_cards();

    gameStarted = true;
    gameOver = false;
    playerWon = false;

    // Deck of cards are created for the dealer and the player
    deck = create_deck();
    shuffle_deck(deck);
    dealerCards = [get_next_card(), get_next_card()];
    playerCards = [get_next_card(), get_next_card()];

    // The styles are changed when the game starts
    newGameButton.style.display = 'none';
    hitStay.style.display = 'inline';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    show_status();
});

// Event listener is created to add cards
hitButton.addEventListener('click', function () {
    // A new card will be pushed into the player's deck
    playerCards.push(get_next_card());
    check_for_end_of_game();
    // Text area is updated
    show_status();
});

// Event listener is created to stay with the current cards
stayButton.addEventListener('click', function () {
    gameOver = true;
    check_for_end_of_game();
    // Text area is updated
    show_status();
});