let randomNum = 25;
let guessNumber = true;
while(0 < randomNum, 100 > randomNum){
    let guess = prompt('Toog taana uu');
    if(guess < randomNum){
        alert('Tanii oruulsan too ni baga baina')
    }else if(guess > randomNum){
        alert('Tanii oruulsan too ni ih baina')
    }else if(guess == randomNum){
        alert('Bayr hvrgey ta toog taala')
    }
}