
yes.onclick = function(wrongAnswers){
    item.style.backgroundColor = "red";
}

no.onclick = function(correctAnswer){
    item.style.backgroundColor = "green";
}

const questions = [
    {
        topic: 'science',
        questions: 'What color is the sky?',
        possibleAnswers: ['blue', 'green', 'yellow'],
        wrongAnswers: ['green', 'yellow'],
        correctAnswer: 'blue',
    },
    
    {
        topic: 'tech',
        questions: 'What is the best language to learn?',
        possibleAnswers: ['javascript', 'python', 'ruby'],
        wrongAnswers: ['python', 'ruby'],
        correctAnswer: 'javascript',
    },   
    
    {
        topic: 'dogname',
        questions: 'What is the name of my dog?',
        possibleAnswers: ['Bullseye', 'Chico', 'Idun'],
        wrongAnswers: ['Bullseye', 'Chico'],
        correctAnswer: 'Idun',
    },   
];

const quizProgress = document.getElementById('quizProgress')
const questionContainer = document.getElementById('questionContainer')
const answerContainer = document.getElementById('answerContainer')
let currentQuestionIndex = 0;

function handleQuestion(index) {
  // handle quiz progress section
  quizProgress.innerHTML = "";
  questions.forEach((question) => {
    quizProgress.innerHTML += "<span></span>";
  });
  let spans = document.querySelectorAll("span");
  for (let i = 0; i <= index; i++) {
    spans[i].classList.add("seen");
  }

  // topic/question
  questionContainer.innerHTML = `<p>${questions[index].topic}</p>
  <p>${questions[index].question}</p>
  `;

  // answers
  answerContainer.innerHTML = "";
  questions[index].possibleAnswers.forEach((answer) => {
    answerContainer.innerHTML += `<button>${answer}</button>`;
  });
  let answers = document.querySelectorAll("button");
  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      if (e.target.textContent === questions[index].correctAnswer) {
        console.log("correct! ");
      } else {
        console.log("wrong");
      }
      if (currentQuestionIndex === questions.length - 1) {
        currentQuestionIndex = 0;
      } else {
        currentQuestionIndex++;
      }
      handleQuestion(currentQuestionIndex);
    });
  });
}

handleQuestion();