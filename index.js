
var quotes = [
    "“Be yourself; everyone else is already taken.” ― Oscar Wilde",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ― Bernard M. Baruch",
    "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.” ― William W. Purkey",
    "“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein",
    "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi",
    "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt",
    '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
    '"It is better to fail in originality than to succeed in imitation." — Herman Melville',
    "'Do or do not, there is no try.' - Master Oogway"
]
function randomQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('random_quote').innerHTML = quotes[randomNumber];
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '93de44178bmsh6622f6cc46c4996p14c418jsn72d2322a812d',
		'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
	}
};

fetch('https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Next%20meme%3A&bottom=Using%20meme%20generator%20API&meme=Condescending-Wonka&font_size=20&font=Impact', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));