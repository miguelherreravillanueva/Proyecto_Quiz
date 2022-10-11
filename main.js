const questionContainer = document.getElementById('question-container');
const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const controls = document.getAnimations('controls');
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

let questionIndex;

const questions = [

    {
        "category": "Entertainment: Cartoon & Animations",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who was the villain of &#039;&#039;The Lion King&#039;&#039;?",
        "correct_answer": "Scar",
        "incorrect_answers": [
            "Fred",
            "Jafar",
            "Vada"
        ]
    },
    {
        "category": "Vehicles",
        "type": "multiple",
        "difficulty": "hard",
        "question": "The difference between the lengths of a Boeing 777-300ER and an Airbus A350-1000 is closest to:",
        "correct_answer": "0.1m",
        "incorrect_answers": [
            "1m",
            "10m ",
            "100m"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "boolean",
        "difficulty": "medium",
        "question": "&quot;Metal Gear Solid 3: Snake Eater&quot; takes place on Shadow Moses Island.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "Entertainment: Japanese Anime & Manga",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What was Ash Ketchum&#039;s second Pokemon?",
        "correct_answer": "Caterpie",
        "incorrect_answers": [
            "Charmander",
            "Pikachu",
            "Pidgey"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who is the main protagonist of Dead Space?",
        "correct_answer": "Isaac Clarke",
        "incorrect_answers": [
            "Commander Shepard",
            "Gordon Freeman",
            "Master Chief"
        ]
    },
    {
        "category": "Geography",
        "type": "boolean",
        "difficulty": "medium",
        "question": "The capital of the US State Ohio is the city of Chillicothe.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "History",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who was the first president born in the independent United States?",
        "correct_answer": "Martin Van Buren",
        "incorrect_answers": [
            "John Adams",
            "George Washington",
            "James Monroe "
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In &quot;Starbound&quot;, what is the max HP of the monster &quot;Punchy&quot;?",
        "correct_answer": "50,000 HP",
        "incorrect_answers": [
            "9,000,000 HP",
            "100 HP",
            "150,000 HP"
        ]
    },
    {
        "category": "Science & Nature",
        "type": "boolean",
        "difficulty": "medium",
        "question": "The most frequent subconscious activity repeated by the human body is blinking.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "Entertainment: Books",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following is not a work authored by Fyodor Dostoevsky?",
        "correct_answer": "Anna Karenina",
        "incorrect_answers": [
            "Notes from the Underground",
            "Crime and Punishment",
            "The Brothers Karamazov"
        ]
    }
]


function startGame() {
    startButton.classList.add("hide");
    questionIndex = 0;
    questionContainer.classList.remove("hide");
    setNextQuestion();
}

function showQuestion(questionGeneral) {
    question.innerText = questionGeneral.question;

    const answerArray = []
    for (const falseAnswer of questionGeneral.incorrect_answers) {
        answerArray.push({ response: falseAnswer, correct: false })
    }
    answerArray.push({ response: questionGeneral.correct_answer, correct: true })
    //HACER MÁS ADELANTE: desordenar las respuestas para que la Correcta no se sepa.

    answerArray.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.response;

        if (answer.correct) {
            button.dataset.correct = true;
        }

        answerButtons.appendChild(button);
    });
}

function setNextQuestion() {
    showQuestion(questions[questionIndex]);
}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function selectAnswer(){
    Array.from(answerButtons.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    if (questions.length > questionIndex + 1){
        nextButton.classList.remove("hide");
    } else{
        startButton.innerText = "Volver a comenzar";
        startButton.classList.remove("hide");
    }
    
}

startButton.addEventListener("click", startGame);

