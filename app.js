let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let movie = document.querySelector('.movie');

const quotes = [
    {
        quote:"May the Force be with you",
        movie: "Star Wars (1977)"
    },
    {
        quote:"Go ahead, make my day.",
        movie: "Sudden Impact (1983)"
    },
    {
        quote:"A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
        movie: "The Silence of the Lambs (1991)"
    },
    {
        quote:"Show me the money!",
        movie: "Jerry Maguire (1996)"
    },
    {
        quote:"You can't handle the truth",
        movie: "A Few Good Men (1992)"
    },
    {
        quote:"You're gonna need a bigger boat.",
        movie: "Jaws (1975)"
    },
    {
        quote:"I'll be back.",
        movie: "The Terminator (1984)"
    },
    {
        quote:"If you build it, he will come.",
        movie: "Field of Dreams (1989)"
    },
    {
        quote:"I see dead people.",
        movie: "The Sixth Sense (1999)"
    },
    {
        quote:"Hasta la vista, baby.",
        movie: "Terminator 2: Judgment Day (1991)"
    }
];

btn.addEventListener('click', function() {
    
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    movie.innerText = quotes[random].movie;

} )

