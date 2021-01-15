let score = localStorage.getItem('score');
const scoreBtn = document.getElementById('correct-answers');
const highscoresList = document.getElementById('highscores-list')
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question')
let shuffledQuestions, currentQuestionsIndex

// start / next / finish / answer buttons
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const finishButton = document.getElementById('finish-btn')
const answerButtonsElement = document.getElementById('answer-buttons')

// start game function
function startGame() {
    console.log('start game')
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    questionContainerElement.classList.remove('hide');
    scoreBtn.classList.remove('hide');
    currentQuestionsIndex = 0
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    setNextQuestion();
    score = 0
};

// set next question function
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionsIndex]);
};

// show question function
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
};

// reset container function
function resetState() {

    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    };
};

// select answer function
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.classList.add('hide');
        finishButton.classList.remove('hide');
    };
    if (selectedButton.dataset = correct) {
        score++
    }
    document.getElementById('correct-answers').innerHTML = "Score: " + score;
};

// change color of correct/wrong answer
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');

    } else {
        element.classList.add('wrong');
    };
};

// clears correct/wrong colors after each question
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// finish game function
function finishGame() {
    document.getElementById('finish-hide').classList.add('hide');
    document.getElementById('container').classList.add('center');
    alert('Well done! You finished the quiz!');
    alert("Your score is " + score);
    console.log(score);
}

// event listeners 
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++;
    setNextQuestion();
});
finishButton.addEventListener('click', finishGame);

// list of questions
const questions = [
    {
        question: "Which of the following is not a coding language?",
        answers: [
            { text: 'JavaScript', correct: false },
            { text: 'CSS', correct: false },
            { text: 'MAC OSx', correct: true },
            { text: 'HTML', correct: false }
        ]
    },
    {
        question: "How many legs does a dog have?",
        answers: [
            { text: '2', correct: false },
            { text: '5', correct: false },
            { text: '4', correct: true },
            { text: '6', correct: false },
        ]
    },
    {
        question: "Which of the following is not an insect?",
        answers: [
            { text: 'Beetle', correct: false },
            { text: 'Ant', correct: false },
            { text: 'Spider', correct: true },
            { text: 'Fly', correct: false },
        ]
    },

    {
        question: "How many planets are their in our solar system?",
        answers: [
            { text: '10', correct: false },
            { text: '12', correct: false },
            { text: '8', correct: true },
            { text: '7', correct: false },
        ]
    },

    {
        question: "How many lives do cats have?",
        answers: [
            { text: '1', correct: false },
            { text: '6', correct: false },
            { text: '9', correct: true },
            { text: '2', correct: false },
        ]
    },
];