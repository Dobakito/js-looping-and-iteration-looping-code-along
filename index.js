function writeCards(ppl, word) {
  let cards = []
  for (let l = 0; l < ppl.length; l++) {
    cards.push(`Thank you, ${ppl[l]}, for the wonderful ${word} gift!`);
  }
  return cards
}

function countDown(num){
  let n = num ;
  while (n >= 0) {
    console.log(n--)
  }
}
