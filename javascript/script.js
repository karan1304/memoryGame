const symbols=['🥝','🍇','🍍','🍋','🍊','🍒','🍓','🍉'];

let filppedCards=[];
let matchedCards=[];
const cards=[...symbols, ...symbols];

function shuffleArray(arr)
{

for(let i=arr.length-1;i>0;i--)
{
    const j=Math.floor(Math.random() * (i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
}

}

function filpCard(card)
{
    if(filppedCards.length<2 && !filppedCards.includes(card) && !matchedCards.includes(card))
    {
        card.classList.add('flipped');
        filppedCards.push(card);
    if(filppedCards.length === 2)
    {
        setTimeout(matchCards, 1000);
    }
}
}

function matchCards()
{
 const [card1, card2]=filppedCards;
    if(card1.textContent === card2.textContent)
    {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1,card2);
        
    }   
    else
    {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    filppedCards=[];

    if(matchedCards.length === cards.length)
    {
        setTimeout(()=>alert("CCongratulations! You matched all the pairs."),500);
    }
}
function createCard(symbol)
{
    const card=document.createElement('div');
    card.classList.add('card');
    card.textContent=symbol;

    card.addEventListener('click',()=> filpCard(card));
    return card;
}

function initializeGame()
{
    shuffleArray(cards);
    const memoryGame=document.getElementById('memory-game');
    cards.forEach(symbol => 
        {
            const card=createCard(symbol);
            memoryGame.appendChild(card);
        });
}

initializeGame();