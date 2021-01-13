// start button and event listener to start game
const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startGame);

// questions
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question')

// answer buttons
const answerButtonsElement = document.getElementById('answer-buttons')

// next button and even listener for next question
const nextButton = document.getElementById('next-btn');

// shuffle questions
let shuffledQuestions, currentQuestionsIndex

function startGame() {
    console.log('start game')
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    questionContainerElement.classList.remove('hide');
    currentQuestionsIndex = 0
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    setNextQuestion();
};

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionsIndex]);
};

function showQuestion(question) {
    questionElement.innerText = question.question

};

function selectAnswer() {


};




















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











