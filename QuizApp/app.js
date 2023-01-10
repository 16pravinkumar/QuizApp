const quizDB = [
    {
        question: "Q.1: What is the full form of HTML? ",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markeup Language",
        d: "HyperText Markup Language",
        ans:"ans4"
    
    },
    {
        question: "Q.2: What is the full form of CSS? ",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        ans:"ans1"
    
    },
    {
        question: "Q.3: What is the full form of HTTP? ",
        a: "HyperText Transfer Product",
        b: "HyperText Transfer Protocols",
        c: "HyperText Test Product",
        d: "HyperText Transfer Protocol",
        ans:"ans4"
    
    },
    {
        question: "Q.4: What is the full form of Js? ",
        a: "JavaScript",
        b: "JustScripts",
        c: "JavaSupport",
        d: "Non of the above",
        ans:"ans4"
    
    }
    
];

const questions = document.getElementById("questions");

const option1= document.getElementById("option1");
const option2= document.getElementById("option2");
const option3= document.getElementById("option3");
const option4= document.getElementById("option4");
const UsersAnswer = document.getElementsByName("answer");

const submit = document.getElementById("submit");

const totalScore = document.getElementById("showscore");

let questionCount = 0;
let score = 0;
const questionLoad = () =>{
   const questionList = quizDB[questionCount]
  questions.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;

}
questionLoad();
const getRightAnswer = () =>{
    let answer  ;
    UsersAnswer.forEach((curElementVal)=>{
           if(curElementVal.checked)
           {
               answer = curElementVal.id;
           }
    });
    return answer;
}

submit.addEventListener("click",()=>{
       const checkedAnswer = getRightAnswer();
       if(checkedAnswer === quizDB[questionCount].ans)
       {
        score++;
       }
       questionCount++;
       if(questionCount < quizDB.length){
        questionLoad();
       }
       else
       {
        
        totalScore.innerHTML = `<h3>You have scored ${score}/${quizDB.length}</h3>
        <button id="btn" onclick="location.reload()">Play Again</button>    
        
        `;
        totalScore.classList.remove("Score")
       }
})
