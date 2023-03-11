var inputNumber = prompt('Please enter an integer');
var total = 1;

for (i = 0; i < inputNumber; i++){
    total = total * (inputNumber - i);
}

alert(inputNumber + '! = ' + total);