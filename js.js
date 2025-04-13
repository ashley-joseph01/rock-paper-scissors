console.log("initializing js");

let human_score = 0;
let computer_score = 0;



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function get_human_choice() {

    return prompt("Please Choose: Rock, Paper, or Scissors");

}

function get_computer_choice() {
    let computer_random = getRandomInt(1,3);

    switch(computer_random) {
        case 1:
            return "rock"
            break;

        case 2:
            return "paper"
            break;

        case 3:
            return "scissors"
            break;

        default:
            return ""
    }

}

function playGame() {

    function playRound() {

        const human_choice = get_human_choice();
        const computer_choice = get_computer_choice();

        let human_outcome;
        let computer_outcome;

        console.log(`You chose: ${human_choice}`);
        console.log(`Computer chose: ${computer_choice}`);

        if (human_choice == "rock" && computer_choice == "rock") {
            human_outcome = "true";
            computer_outcome = "true";
        }

        else if (human_choice == "rock" && computer_choice == "paper") {
            human_outcome = "false";
            computer_outcome = "true";

        }

        else if (human_choice == "rock" && computer_choice == "scissors") {
            human_outcome = "true";
            computer_outcome = "false";

        }

        else if (human_choice == "paper" && computer_choice == "rock") {
            human_outcome = "true";
            computer_outcome = "false";

        }

        else if (human_choice == "paper" && computer_choice == "paper") {
            human_outcome = "true";
            computer_outcome = "true";

        }

        else if (human_choice == "paper" && computer_choice == "scissors") {
            human_outcome = "false";
            computer_outcome = "true";
    

        }

        else if (human_choice == "scissors" && computer_choice == "rock") {
            human_outcome = "false";
            computer_outcome = "true";

        }

        else if (human_choice == "scissors" && computer_choice == "paper") {
            human_outcome = "true";
            computer_outcome = "false";

        }

        else if (human_choice == "scissors" && computer_choice == "scissors") {
            human_outcome = "true";
            computer_outcome = "true";

        }

        else {
            human_outcome = ""
            computer_outcome = ""
        }

        
        // console.log(`outcomes`);
        // console.log(human_outcome);
        // console.log(computer_outcome);

        if (human_outcome == "true" & computer_outcome == "false") {
            console.log(`You Win! "${human_choice}" beats "${computer_choice}"`);
            human_score ++;
        }

        else if (human_outcome == "false" & computer_outcome == "true") {
            console.log(`You Lose! "${human_choice}" does not beat "${computer_choice}"`);
            computer_score ++;
        }
        
        else if (human_outcome == "true" & computer_outcome == "true") {
            console.log(`You Tied! "${human_choice}" is the same as "${computer_choice}"`)

        }

        else {
            console.log(`You Tied! "${human_choice}" is not a valid choice. The computer chose "${computer_choice}"`)

        }

        console.log(`SCORES`);
        console.log("- - -");
        console.log(`Your score: ${human_score}`);
        console.log(`Computer score: ${computer_score}`);

        
    }

    console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
    console.log(`Game Starting!`)

    console.log("Round One");
    console.log("- - - - - - - - - -");

    playRound();

    if (human_score > computer_score) {
        console.log(`You're Winning!`);
    }

    else if (human_score < computer_score) {
        console.log(`You're Losing!`);
    }

    else {
        console.log(`You are Tied!`);
    }

    console.log("- - - - - - - - - -");

    console.log("Round Two");
    console.log("- - - - - - - - - -");

    playRound();

    if (human_score > computer_score) {
        console.log(`You're Winning!`);
    }

    else if (human_score < computer_score) {
        console.log(`You're Losing!`);
    }

    else {
        console.log(`You are Tied!`);
    }

    console.log("- - - - - - - - - -");

    console.log("Round Three");
    console.log("- - - - - - - - - -");

    playRound();

    if (human_score > computer_score) {
        console.log(`You're Winning!`);
    }

    else if (human_score < computer_score) {
        console.log(`You're Losing!`);
    }

    else {
        console.log(`You are Tied!`);
    }

    console.log("- - - - - - - - - -");

    console.log("Round Four");
    console.log("- - - - - - - - - -");

    playRound();

    if (human_score > computer_score) {
        console.log(`You're Winning!`);
    }

    else if (human_score < computer_score) {
        console.log(`You're Losing!`);
    }

    else {
        console.log(`You are Tied!`);
    }

    console.log("- - - - - - - - - -");

    console.log("Round Five");
    console.log("- - - - - - - - - -");

    playRound();

    if (human_score > computer_score) {
        console.log(`You're Winning!`);
    }

    else if (human_score < computer_score) {
        console.log(`You're Losing!`);
    }

    else {
        console.log(`You are Tied!`);
    }

    console.log("- - - - - - - - - -");

    if (human_score > computer_score) {
        console.log(`You Won! ${human_score}-${computer_score}`);
    }

    else if (human_score < computer_score) {
        console.log(`You Lost! ${human_score}-${computer_score}`);
    }

    else {
        console.log(`You Tied! ${human_score}-${computer_score}`);
    }

    console.log(`Game Finished!`)
    console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")

 

}

playGame();
