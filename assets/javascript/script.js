// variables 
let score = 0;
let shuffledQuestions, currentQuestionsIndex;
let playerScore = document.querySelector('#final-score');
let playerInitials = document.querySelector('#final-initials');
let seconds = 60;
let answerPicked = false
let name = document.getElementById('name')
let playerInfo = [];

// const
const scoreBtn = document.getElementById('correct-answers');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const scoreBox = document.getElementById('score-box');
const timerBox = document.getElementById('timer-box');
const scoreHolder = document.getElementById('score-holder');
const timer = document.getElementById('timer');


// start / next / finish / answer /submit buttons
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const finishButton = document.getElementById('finish-btn');
const answerButtonsElement = document.getElementById('answer-buttons');
const submitBtn = document.getElementById('submit-btn');

// start game function
function startGame() {
    alert('You have 60 seconds to finish this quiz, if time runs out you will be brought to the high-score page. Good luck!')
    countDown();
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    questionContainerElement.classList.remove('hide');
    scoreBtn.classList.remove('hide');
    scoreHolder.classList.remove('hide');
    timer.classList.remove('hide');
    currentQuestionsIndex = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    setNextQuestion();
};

// set next question function
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionsIndex]);
};

// show question function
function showQuestion(question) {
    answerPicked = false
    questionElement.innerText = question.question;
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

function countDown() {
    let timeInterval = setInterval(function () {
        let counter = document.getElementById('time-left');
        counter.innerHTML = 'Timer: ' + seconds;
        // As long as the `timeLeft` is greater than 1
        if (seconds > 1) {
            // Set the `textContent` of `counter` to show the remaining seconds
            counter.textContent = 'Timer: ' + seconds;
            // Decrement `seconds` by 1
            seconds--;
        } else {
            // Once `seconds` gets to 0, set `timerEl` to an empty string
            timer.innerHTML = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            finishGame();
        }
        if (seconds == 0) {
            finishGame();
        }
    }, 1000);
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
    if (answerPicked === false) {
        if (selectedButton.dataset = correct) {
            score += 7
        } else {
            seconds -= 5;
        }
        answerPicked = true
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

// clears correct/wrong colors from buttons after each question
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
};

// finish game function
function finishGame() {
    document.getElementById('finish-hide').classList.add('hide');
    document.getElementById('finish-show').classList.remove('hide');
    document.getElementById('container').classList.add('center-highscore');
    document.getElementById('timer').classList.add('hide');
    document.getElementById('timer').classList.add('hide');
};

// save high scores / initials
function submitScore() {
    if (name.value === '' || null) {
        window.alert('Please enter your initials!')
    } else {
        localStorage.setItem("player-initials", document.getElementById('name').value,
        localStorage.setItem("player-score", JSON.stringify(score)))
    };
    submitBtn.onclick = location.href = './highscores.html';
};




// event listeners 
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => { currentQuestionsIndex++; setNextQuestion() });
finishButton.addEventListener('click', finishGame);
submitBtn.addEventListener('click', submitScore);

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