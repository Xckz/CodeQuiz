//Required Variables

let start_button = document.querySelector(".start-button button");
let start_screen = document.querySelector(".start-screen");

start_button.onclick = () => {
    start_screen.classList.add("activeInfo");
};

exit_button.onclick = () => {
    start_screen.classList.remove("activeInfo");
};

continue_button.onclick = () => {
    start_screen.classList.remove("activeInfo");
};

let question_number = 0;

function showQuestions() {
    let questionText = document.querySelector(".answerTextf");
    let que_tag = "<span" + questions[0].question + "</span>";
    questionText.innerHTML = que_tag;
}

var questions = [
    {
        numb: 1,
        question:
            "Where in the HTML document should you link an external stylesheet?",
        answer: "2. In the head",
        options: [
            "1. In the head",
            "2. In the header",
            "3. In the foot",
            "4. In the footer",
        ],
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "4. Cascading Style Sheets",
        options: [
            "1. Computerized Styling Standards",
            "2. Cascading Styling Standard",
            "3. Creative Style Source",
            "4. Cascading Style Sheets",
        ],
    },
    {
        numb: 3,
        question: "What are arrays used for?",
        answer: "3. They are used for storing multiple values in a single variable",
        options: [
            "1. They are used to choose colors",
            "2. They are used for changing multiple colors with a single variable",
            "3. They are used for storing multiple values in a single variable",
            "4. They are used for storing multiple colors",
        ],
    },
    {
        numb: 4,
        question:
            "In Bootstrap, which class provides a responsibe fixed width container?",
        answer: "4. .container-fluid",
        options: [
            "1. .container-fixed",
            "2. .container-reponsive",
            "3. .container-rfw",
            "4. .container-fluid",
        ],
    },
    {
        numb: 5,
        question: "The Bootstrap grid system is based on how many columns?",
        answer: "1. 12",
        options: ["1. 12", "2. 9", "3. 6", "4. 3"],
    },
    {
        numb: 6,
        question:
            "If an image can't be displayed, which HTML attribute specifies an alternate text for the image?",
        answer: "4. alt",
        options: ["1. descr", "2. src", "3. spec", "4. alt"],
    },
    {
        numb: 7,
        question: "Which attribute is used for a navigation bar?",
        answer: "3. nav",
        options: ["1. navbar", "2. navi", "3. nav", "4. nvgtn"],
    },
    {
        numb: 8,
        question:
            "Which of the following is the best resource for information regarding Web Development?",
        answer: "2. MDN Web Docs",
        options: [
            "1. Spider Worlds",
            "2. MDN Web Docs",
            "3. Wikipedia",
            "4. Facebook",
        ],
    },
];
