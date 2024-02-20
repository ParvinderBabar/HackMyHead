const firstUser = prompt('Enter your choice (rock, paper, or scissors):');


const secondUser = 'rock'; 

if (firstUser === secondUser) {
  alert("its a tie.none wins");
}
else if (
    (firstUser === 'rock' || firstUser === 'ROCK' && secondUser === 'scissors')||
  (firstUser === 'paper'||firstUser ==='PAPER' && secondUser === 'rock') ||
  (firstUser === 'scissors' ||firstUser ==='SCISSORS'&& secondUser === 'paper')
)
{
  alert('You win the game');
} else
{
    alert('second user win the game.!');
}

