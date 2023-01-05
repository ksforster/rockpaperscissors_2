
/* Function generates computer choice rock, paper or scissors */

function getComputerChoice() {
  selectNumber = Math.floor(Math.random() * 3);
  /* test check console.log(selectNumber); */
  switch (selectNumber) {
    case 0:
      /* test check console.log('rock'); */
      return "rock";
      break;
    case 1:
      /* test check console.log('paper'); */
      return "paper";
      break;
    case 2:
      /* test check console.log('scissors'); */
      return "scissors";
      break;
  }
}
/* Function generates users choice rock, paper or scissors */

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  /* test check userInput console.log(userInput); */

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    
    return userInput;
  } else {
    console.log("You have an error in your code!");
  }
};

function determineWinner(userChoice, computerChoice) {
  
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer has won!";
    } else {
      return "You have won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
}


function playGame() {
   

    /* Getting the user choice from dropdown menu*/
            const selectElement = document.querySelector('#choice');
            selectElement.addEventListener('change', (event ) => {
            result = document.querySelector('.result');

    /* gathering the computer's choice and the user's choice */

         computerChoice = getComputerChoice();
         userChoice = getUserChoice(event.target.value);

         
   
         /* THIS IS A TEST TO SEE IF READING USER CHOICES AND COMPUTERCHOICE IS WORKING - SETUP FOR IMAGE DISPLAYING */
        
        
         if (event.target.value === 'rock' && computerChoice === 'rock'){
                 /* console.log("rock rock"); */
                  document.getElementById("gameImages").innerHTML = 
            "<img src = './resources/images/game images/rock_rock2a.jpg'>";
                                                                               
             } else if (event.target.value === 'rock' && computerChoice === 'paper'){
                  /* console.log("rock paper"); */ 
                  document.getElementById("gameImages").innerHTML =
                "<img src = './resources/images/game images/rock_paper2a.jpg'>";

                                  
             } else if (event.target.value === 'rock' && computerChoice === 'scissors'){
                  /* console.log("rock scissors"); */

                  document.getElementById("gameImages").innerHTML
                  = "<img src = './resources/images/game images/rock_scissors2a.jpg'>";

               
             } else if (event.target.value === 'paper' && computerChoice === 'rock'){
                  /* console.log('paper rock'); */ 
                  document.getElementById("gameImages").innerHTML
                  = "<img src = './resources/images/game images/paper_rock2a.jpg'>";

                 
             } else if (event.target.value === 'paper' && computerChoice === 'paper'){
                  /* console.log('paper paper'); */
                  document.getElementById("gameImages").innerHTML
                  = "<img src = './resources/images/game images/paper_paper2a.jpg'>";

              
             } else if (event.target.value === 'paper' && computerChoice === 'scissors'){
                  /* console.log('paper scissors'); */
                  document.getElementById("gameImages").innerHTML
                  = "<img src = './resources/images/game images/paper_scissors2a.jpg'>";

                  
             } else if (event.target.value === 'scissors' && computerChoice === 'rock'){
                  /* console.log('scissors rock'); */
                  document.getElementById("gameImages").innerHTML
                  = "<img src = './resources/images/game images/scissors_rock2a.jpg'>";

                 
                   
             } else if (event.target.value === 'scissors' && computerChoice === 'paper'){
                  /* console.log('scissors paper'); */
                  document.getElementById("gameImages").innerHTML
                  = "<img src = './resources/images/game images/scissors_paper2a.jpg'>";

           
             } else if (event.target.value === 'scissors' && computerChoice === 'scissors'){
                  /* console.log('scissors scissors'); */
                  document.getElementById("gameImages").innerHTML
                  = "<img src = './resources/images/game images/scissors_scissors2a.jpg'>";

                     }

/* The next two lines writes the choices and the results of the winner to html <p> tag */
   
      var results1 = `You selected ${event.target.value} computer selected ${computerChoice}.`;

      document.getElementById("results").innerHTML = results1;
      
      var winner1 = `${determineWinner(userChoice, computerChoice)} `;
      document.getElementById("winner").innerHTML = winner1;
    
    reset();
     });   
}
/*
      document.getElementById("results").innerHTML = `User selected ${event.target.value} and computer selected ${computerChoice}.`;
              
      document.getElementById("winner").innerHTML = `${determineWinner(userChoice, computerChoice)} `;
*/
      /* resets dropdown menu for next play */

 function reset (){
    var dropDown = document.getElementById("choice");
    dropDown.selectedIndex = 0;
        
 }

 

 
 playGame();
 
