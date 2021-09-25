function checkCreds() { /*creates a function by the name of checkCreds*/ 
    var fname = document.getElementById("fname").value; /*creates a variable for the user's first name*/
    console.log("First name is " + fname); /*prints the output of the first name to the console*/
    var lname = document.getElementById("lname").value; /*creates a variable for the user's last name*/
    console.log("Last name is " + lname); /*prints the output of the last name to the console*/
    var badgeid = document.getElementById("badgeid"); /*creates a variable for the user's badge ID*/
    console.log("Badge ID is " + badgeid); /*prints the output of the badge ID to the console*/
    var fullname = fname + " " + lname; /*concatenates the first and last names with a space, to ensure that the number of characters in the name is being judged correctly*/
    console.log("Full name is " + fullname); /*prints the user's full name to the console*/

    if (fullname.length > 20 || fullname.length < 3) { /*cheecks if the user's name is less than 3 characters or more than 20 characters, to avoid any memory overflows or data-handling errors*/
        document.getElementById("loginstatus").innerHTML = "Full name is invalid. Please try again. . ."; /*tells the user in the loginstatus that there is something wrong with their name*/
        console.log(fullname + " is too short or long."); /*prints the error to the console*/
    } else if (badgeid > 999 || badgeid < -999 || badgeid == 0) { /*checks if the badge ID is greater than 999, less than -999, or equal to 0, which are all invalid ID numbers*/
        document.getElementById("loginstatus").innerHTML = "Badge ID is invalid. Please try again. . ."; /*tells the user in the loginstatus that there is something wrong with their badge ID*/
        console.log(badgeid + " is invalid."); /*prints the error to the console*/
    } else {
        console.log(fullname + "/" + badgeid + " are valid credentials\nLogging you in. . ."); /*tells the user in the loginstatus that their credentials are valid*/
        alert("Access Granted, " + fullname + ". Welcome!"); /*creates an alert to allow the user to confirm that they are moving past the login page*/
        location.replace("home.html"); /*moves the user to the home page of the UAT Space Website*/
    }
}