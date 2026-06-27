// Quotes Array
const quotes = [
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },

    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        text : "when one door closes, sometimes we need to turn the knob to open another",
        author: "J.A TRAN"
    },

    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text : "life is one darn thing after another",
        author: "calvin coolidge"
    },

    

    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },

    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
     
    {
        text:"Dreams transforms into thoughts and thoughts results in action.",
        author: "Dr.APJ Abdul kalam"
    },
    {
        text:"change the world by being urself ",
        author :"AMY POEHLER"

    },
    {
        text:"u have to dreams before ur dreams can come true",
        author :"Dr. APJ Abdul kalam"
    }
     
];


// Select HTML elements
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("btn");


// Function to generate random quote
function generateQuote() {

    let randomNumber = Math.floor(Math.random() * quotes.length);

    quote.innerText = `"${quotes[randomNumber].text}"`;

    author.innerText = `- ${quotes[randomNumber].author}`;
}


// Generate quote when button is clicked
button.addEventListener("click", generateQuote);


// Generate first quote automatically when page opens
generateQuote();