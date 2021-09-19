var readlineSync = require('readline-sync');

var askUserName = readlineSync.question("Hey dude! What's your name: ");

console.log("Welcome, "+ askUserName +"!");

var askAge = readlineSync.question("Enter your age: ");

if(askAge > 18){
  console.log("Yeahh! Let's get started.")
}else(
  console.log("Great Brotho!")
)

console.log("Let's see how much do you know me");

var score = 0;

var scoreboard = [
  {name : "Lovely Bhaiyaa",
  score : 3
  },
  {name : "Saxxy Guy",
  score : 1
  }
]

function play(question, answer){
  var ans = readlineSync.question(question);

  if(ans.toUpperCase() === answer.toUpperCase()){
    console.log("Yeahh!! You are right.")
    score++;
  }else{
    console.log("Nohh Mann!!")
  }

  console.log("Your current score is: "+ score);
  console.log('______________________________')
}

var questions = [
  {question : "What nickname did I have as a child:-\na. aman\nb. patlu\nc. chotu\nans: ",
  answer: "Aman"},
  {question: "My favourite colour?\na. black\nb. green\nc. yellow\nans: ",
  answer: "Green"},
  {question : "Do I prefer dogs or cats?\nans: ",
  answer : "dogs"}
]

for (var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Great! YOU SCORED:- " + score);
console.log("Check out other people scores aslo:-")

for(var i = 0; i < scoreboard.length; i++){
  var serialNo = i+1;
  console.log(serialNo +". " + scoreboard[i].name + ":- " + scoreboard[i].score);
}

console.log("_____________________________")
console.log("until next time, Love Love!");

