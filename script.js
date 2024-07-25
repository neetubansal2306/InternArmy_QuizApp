
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin"],
        correct: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.querySelector(".quiz-container");
const questionText = document.querySelectorAll(".question-text");
const options = document.querySelectorAll(".options");
const submitBtn = document.querySelector(".submit-btn");
const resultDiv = document.querySelector(".result");

function renderQuestion() {
    questionText[currentQuestion].textContent = questions[currentQuestion].question;
    options[currentQuestion].innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.id = `option${index + 1}`;
    })
}