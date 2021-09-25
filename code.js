function countdownTimer() { //creates a function for whenever the start button is clicked
    console.log("countdownTimer function run"); // prints to the console that the countdown timer started
 //I created a for loop below, because I got sick and tired of seeing the timer run off of 85 lines of code, as opposed to 18
    for (var ct=10;ct>=0;ct--) { //creates a for loop. Critera are ct is set equal to 10, before each iteration, check to see if ct is larger than or equal to 1, and subtract 1 from ct after each iteration 
        (function(currTime) { //creates a function that uses the parameter currTime (which will be used later)
            setTimeout(function(){ //creates a function that can be set to only happen after a certain time
                if (currTime == 0) {    
                    document.getElementById("countdownStatus").innerHTML = ("Blastoff!!"); //sets the countdownStatus in the linked HTML file to change to the parameter currTime, times the number 5
                    console.log("Changed to Blastoff!!"); //prints the parameter currTime times the number 5 to the console, followed by 'seconds'
                    console.log(currTime);
                }
                else if (currTime < 6) {
                    document.getElementById("countdownStatus").innerHTML = ("Warning Less than ½ way to launch, time left = " + currTime * 5);
                    console.log(currTime * 5 + " seconds - warning");
                    console.log(currTime);
                }
                else {
                    document.getElementById("countdownStatus").innerHTML = (currTime * 5);
                    console.log(currTime * 5 + " seconds");
                    console.log(currTime);
                }
            },(500 * (-currTime +10))); //sets the amount of time that the function waits before executing. Since you have to wait 5 seconds between each iteration, the countdown will wait for a multiple of 5 seconds for each iteration. For example, for the 40 second mark, which is 8*5, the function will wait for 5000 ms(5 seconds)*(-8) + 10. 5 seconds times 2 equals 10 seconds, and 50-40=10. I'm really bad at explaining this stuff. If you read this far, sorry for your brain.
        })(ct); //ends the function, and sets the parameter used in the main function to ct, the variable defined in the for loop
    }
}

function sandboxRun() {
    console.log("SandboxRun Started");
    var a = 5;
    if (a == 5) {
        document.getElementById("sandboxArea").innerHTML = "a does in fact equal 5"
    } else {
        document.getElementById("sandboxArea").innerHTML = "a does not equal 5"
    }
}

function playCraps(){ //creates a function that runs whenever the Play Craps button is clicked
    console.log("Craps game initiated") //prints Craps game initiated to the console
    document.body.background = "https://thumbs.gfycat.com/SecondTartCygnet-max-1mb.gif"; //sets the background to be a pair of tumbling dice
    var die1 = Math.ceil(Math.random() *6); //sets a variable for die 1 that is a random number between 0-1, multiplied by 6, and rounded up to the nearest whole number
    var die2 = Math.ceil(Math.random() *6); //sets a variable for die 2 that is a random number between 0-1, multiplied by 6, and rounded up to the nearest whole number
    document.getElementById("dieRes1").innerHTML = die1; //changes die1 in the linked HTML document to the die1 variable value
    document.getElementById("dieRes2").innerHTML = die2; //changes die2 in the linked HTML document to the die2 variable value
    var diceSum = die1 + die2; //sets the diceSume variable to the sum of die1 and die2 added together
    document.getElementById("diceSum").innerHTML = diceSum; //chnages diceSum in the linked HTML document to the diceSum variable value
    if (diceSum == 7 || diceSum == 11) { //checks if the diceSume is equal to either 7 or a11
        document.getElementById("crapsStatus").innerHTML = "CRAPS! YOU LOSE" //changes crapsStatus in the linked HTML document to a loss message
        console.log("loss"); //prints loss to the console
    }else if (die1 == die2 && die1 % 2 == 0) { //checks if both dice are equal, and cheks if the remainder of die1 divided by 2 is equal to 0 (to check if the number is even)
        document.getElementById("crapsStatus").innerHTML = "DOUBLES! YOU WIN!" //changes crapsStatus in the linked HTML document to a win message
        console.log("win"); //prints win to the console
    }
    else { //for any other conditions, other than the ones dictated above
        document.getElementById("crapsStatus").innerHTML = "You didn't lose and you didn't win. Please try again" //changes crapsStatus in the linked HTML document to a non-win/non-lose message
        console.log("N/A"); //prints N/A to the console
    }
}