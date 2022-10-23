let userName = window.prompt('enter username: ')
let increase = 2;
let number = Math.floor((Math.random() * increase) + 1);
console.log(number)
let guess = window.prompt(`${userName} select a number from 1-2`);
let win = true;

let stage = 1;

let game = () => {
    while (win === true){
    if (guess == number){
          alert(`${ userName} you win`);
        increase++
        stage++
        number = Math.floor((Math.random() * increase) + 1);
       console.log(number)
       guess = window.prompt(`stage(${stage}) ${userName} select a number from 1-${increase}`)

        win = true
    }else{
        
        alert(`you lose at stage(${stage})`)
        break;
    }

}
}

game();
