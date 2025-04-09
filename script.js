const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        answer: "Harper Lee"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your score: ${score}/${quizData.length}</p>`;
    }
}


loadQuestion();