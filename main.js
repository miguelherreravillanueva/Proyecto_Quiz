const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const controls = document.querySelector(".controls");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const mainCard = document.getElementById("mainCard");
const resultCard = document.getElementById("resultCard");
const questionCard = document.getElementById("questionCard");
const noteElement = document.querySelector(".nota");
const btnFinal = document.getElementById("btnFinal");
const resultImage = document.getElementById("resultImage");
const finalText = document.getElementById("finalText");
const restartBtn = document.getElementById("restart-button");

let questionIndex;
let nota = 0;
let questions = [];

function startGame() {
  nota = 0
  noteElement.innerHTML = "Tu puntuación: " + nota;
  resultCard.classList.add("hide");
  mainCard.classList.add("hide");
  nextButton.classList.remove("btn");

  axios
    .get("https://opentdb.com/api.php?amount=10&category=20&difficulty=hard")
    .then((res) => {
      questions = res.data.results;
      questionIndex = 0;
      questionCard.classList.remove("hide");
      setNextQuestion();
    })
    .catch((err) => console.error(err));
}

function selectAnswer() {
  Array.from(answerButtons.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (questions.length > questionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Volver a comenzar";
    startButton.classList.remove("hide");
    resultCard.classList.remove("hide");
    questionCard.classList.add("hide");
  }
}
function showQuestion(questionGeneral) {
  question.innerText = questionGeneral.question;

  const answerArray = [];
  for (const falseAnswer of questionGeneral.incorrect_answers) {
    answerArray.push({ response: falseAnswer, correct: false });
  }
  answerArray.push({ response: questionGeneral.correct_answer, correct: true });
  answerArray.sort(function () { return Math.random() - 0.5 });

  answerArray.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.response;

    if (answer.correct) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", function () {
      if (button.dataset.correct == "true") {
        nota++;
        noteElement.innerHTML = "Tu puntuación: " + nota;
      } else {
        if (nota != 0) {
          nota = nota - 0.5;
          noteElement.innerHTML = "Tu puntuación: " + nota;
        } else {
          noteElement.innerHTML = "Tu puntuación: " + nota;
        }
      }

      selectAnswer();
    });
    answerButtons.appendChild(button);
  });
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[questionIndex]);
}

function setStatusClass(element, correct) {
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

nextButton.addEventListener("click", () => {
  questionIndex++;
  setNextQuestion();
});

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

btnFinal.addEventListener("click", function () {
  resultImage.classList.add("hide");
  finalText.innerHTML = "Tu nota es: " + nota;
  restartBtn.classList.remove("hide");
  btnFinal.classList.add("hide");
  btnFinal.classList.remove("btn");
  btnFinal.classList.remove("btn-danger");
});
startButton.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);


//Readme

