let answerUser = prompt("Requesting user Info, how do you answer, Yes or No?");

if(answerUser === "Yes" || answerUser === "yes" || answerUser === "YES"){
  
  alert("Info being sent to console.");
  inputYes()
}
  else if(answerUser === "no" || answerUser === "No" || answerUser === "NO"){

    alert("User's answer was no, therefore not able to get info.");
  }

function inputYes() { 

let languageUsed = console.log("Current language used: " + navigator.language);
  
let whichBrowser = console.log("Browser is being compiled with: " +navigator.platform);

  
let whichVersionUsed = console.log("Broswer's Version: " +  navigator.appVersion); 
  
let currentDate = new Date();
console.log("It is currently: " +currentDate.toUTCString());
  
}


