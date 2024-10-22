const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let flashcard = flashcards[currentIndex].term;
    let card = document.getElementById("card-content");
    card.innerText = flashcard;
}

// The rest of the code you will write is apart of event listeners

// This line will display the card when the page is refreshed
window.onload = displayCard;

let card = document.getElementById("card-content");
let prev = document.getElementById("prev-btn");
let next = document.getElementById("next-btn");
let add = document.getElementById("add-card-btn");
let termAdd = document.getElementById("new-term");
let defAdd = document.getElementById("new-definition")
function updateScreen(){
    card.addEventListener('click', function(){
        if(showingTerm){
            card.innerText = flashcards[currentIndex].definition;
        }
        else{
            card.innerText = flashcards[currentIndex].term;
        }
        showingTerm = !showingTerm;
    })
    prev.addEventListener('click', function(){
        if (currentIndex === 0){
            currentIndex = flashcards.length - 1;
        }
        else {
            currentIndex = currentIndex - 1
        }
        displayCard();
    })
    next.addEventListener('click', function(){
        if (currentIndex === flashcards.length - 1){
            currentIndex = 0;
        }
        else {
            currentIndex = currentIndex + 1
        }
        displayCard();
    })
    add.addEventListener('click', function(){
        if (!(termAdd.value === "Enter term") && !(defAdd.value === "Enter definition")){
            flashcards.push({ term: termAdd.value, definition: defAdd.value });
        }
        termAdd.value = "";
         defAdd.value = "";
    })
}
updateScreen();
