function rps(p1, p2){

    /*options:

    rock, papper = p2
    rock, scissors = p1

    rock, rock = draw

    paper, rock = p1
    paper, scissors = p2 

    paper, paper = draw

    scissors, rock = p2
    scissors, paper = p1

    scissors, scissors = draw

    */
   // if p1 === p2 ? draw

    //if both strings are equal it's a draw!
    if(p1 === p2 ) return "Draw!";
    //switch case to evaluate  evry scenario above
    switch(true){
        case p1==="rock":
            return p2 === "paper" ? "Player 2 won!" : "Player 1 won!"
        case p1 === "paper":
            return p2 === "rock" ? "Player 1 won!" : "Player 2 won!"
        case p1 === "scissors":
           return p2 === "rock" ? "Player 2 won!" : "Player 1 won!"
    }

};