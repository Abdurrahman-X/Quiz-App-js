const quizData = [
    {
        question: "The longest Surah in the Qur'aan is?",
        a: "Kawthar",
        b: "Imran",
        c: "Hajj",
        d: "Baqarah",
        correct: "d"
        
    },
    
    {
        question: "How many Basmalah are present in the Glorious Qur'an?",
        a: "112",
        b: "113",
        c: "115",
        d: "114",
        correct: "d"

    },
    
    {
        question: "The first martyr in Islaam (Sumayyah) was the mother of which of these companions (radiyaLlaahu 'anhum)?",
        a: "'Ammar ibn Yaasir",
        b: "Hudhayfah ibn al-Yaman",
        c: "Abu 'Ubaydah ibn al-Jarrah",
        d: "'AbduLlaah ibn Salaam",
        correct: "a"
    },

    {
        question: "The sitting position in the last rak'ah of the Maghrib Prayer is known as?",
        a: "Iftirash",
        b: "Istiftah",
        c: "Ajnu",
        d: "Tawarruk",
        correct: "d"
    },

    {
        question: "How many Chapters of the Qur'an have their titles named after different prophets?",
        a: "8",
        b: "5",
        c: "6",
        d: "7",
        correct: "c"
    },

    {
        question: " 'Indeed, Allah will be testing you with a river. So whoever drinks from it is not of me, and whoever does not taste is indeed of me'. Who made this statement?",
        a: "Musa ('alayhi salam')",
        b: "Talut",
        c: "Dhul-Qarnayn",
        d: "Nuh ('alayhi salam)",
        correct: "b"
    },

    {
        question: "Which of the Prophet's wives did Allah mention her marriage to the Prophet (SallaLlahu 'alayhi wa salam) in the Qur'an?",
        a: "Umm Salamah",
        b: "Hafsah bint 'Umar",
        c: "Zaynab bint Jahsh",
        d: "Safiyya bint Huyayy",
        correct: "c"
    },

    {
        question: "Which of the following companions (radiyaLlaahu 'anhum) was not a commander in the Battle of Mu'tah?",
        a: "'Ali ibn Abi Talib",
        b: "'AbduLlaah ibn Rawahah",
        c: "Zayd ibn Harithah",
        d: "Ja'far ibn Abi Talib",
        correct: "a"
    },

    {
        question: "This Prophet prayed to Allah to delay the setting time of the sun. Who is this Prophet?",
        a: "Dhul-kifl",
        b: "Shu'ayb",
        c: "Yoosha' ibn noon",
        d: "Ilyas",
        correct: "c"
    },

    {
        question: "Which of the following companions (radiyaLlaahu 'anhum) was amongst the 10 promised Jannah?",
        a: "'AbduLlaah ibn 'Umar",
        b: "Sa'eed ibn Zayd",
        c: "Mu'adh ibn Jabal",
        d: "'AbduLlaah ibn Zubayr",
        correct: "b"
    }   
]

// SELECTORS
const answerElements = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz")
const questionText = document.querySelector(".question-text");
const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
const optionC = document.getElementById("option-c");
const optionD = document.getElementById("option-d");
const submitBtn = document.getElementById("submit");
const quizHeader = document.querySelector(".quiz-header");


//console.log(quizHeader);

let currentQuestion = 0;
let score = 0;



// EVENT LISTENERS
submitBtn.addEventListener("click", nextQuestion);
// FUNCTIONS
function loadQuiz() {
    deselectAnswers();
    
    // Get the first question from the quizData and store in a constant
    const currentQuizQuestion = quizData[currentQuestion];
    // Add the text of the first question
    questionText.innerText = currentQuizQuestion.question;
    // Adding options
    optionA.innerText = currentQuizQuestion.a;
    optionB.innerText = currentQuizQuestion.b;
    optionC.innerText = currentQuizQuestion.c;
    optionD.innerText = currentQuizQuestion.d;

    //currentQuestion = currentQuestion + 1;
    
    //console.log(currentQuizQuestion);
    //console.log(questionText);
}

function getSelected() {
    
    
    let answer = undefined;
    answerElements.forEach((answerElement) => {
       if (answerElement.checked) {
           answer = answerElement.id;
       }  
    });
    
    return answer;
    
}

function deselectAnswers() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
     });
}

function nextQuestion() {
    
    //check to see answer
    const answer = getSelected();

    //console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
       
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
        // const completeDiv = document.createElement("div");
        // completeDiv.classList.add("q-completed");
        // completeDiv.innerText = "Quiz Completed!"
        // quizHeader.append(completeDiv);
       // alert("Congratulations!. You completed the Quiz");

       quiz.innerHTML =  `
       <h2>You answered ${score}/${quizData.length} questions correctly.</h2> 
       
       <button onclick="location.reload()">Reload</button>`;
     }
    }
    

    //getSelected();

}

loadQuiz();
//getSelected();



//console.log(quizData);
