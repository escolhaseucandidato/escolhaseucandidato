const questions = [

    {
        question: "Você é a favor do fim da escala 6x1?",

        explanation:
            "A questão aborda o fim do modelo de trabalho em que o trabalhador atua por seis dias e folga um.",

        options: [
            "Sim",
            "Não",
            "Não tenho opinião"
        ],

        lula: "Sim",
        flavio: "Não"
    },


    {
        question: "Você é a favor da manutenção da CLT e dos direitos trabalhistas previstos nela?",

        explanation:
            "A questão aborda a manutenção das regras e dos direitos trabalhistas estabelecidos pela CLT.",

        options: [
            "Sim",
            "Não",
            "Não tenho opinião"
        ],

        lula: "Sim",
        flavio: "Não"
    },


    {
        question: "Você é a favor do fim das bets no Brasil?",

        explanation:
            "A questão aborda se o Brasil deveria encerrar as apostas de quota fixa conhecidas popularmente como bets.",

        options: [
            "Sim",
            "Não",
            "Não tenho opinião"
        ],

        lula: "Sim",
        flavio: "Não"
    },


    {
        question: "Qual é a sua religião?",

        explanation:
            "A religião declarada pelos candidatos é utilizada como um dos critérios de compatibilidade desta pergunta.",

        options: [
            "Católico(a)",
            "Evangélico(a)",
            "Outra religião",
            "Ateu/ateia",
            "Não tenho religião",
            "Prefiro não responder"
        ],

        lula: "Católico(a)",
        flavio: "Evangélico(a)"
    },


    {
        question: "Você é a favor de uma maior atuação do Estado na economia?",

        explanation:
            "A questão aborda o grau de participação do Estado na economia e sua atuação em setores estratégicos.",

        options: [
            "Sim",
            "Não",
            "Não tenho opinião"
        ],

        lula: "Sim",
        flavio: "Não"
    },


    {
        question: "Você apoia a isenção do Imposto de Renda para quem ganha até R$ 5 mil por mês?",

        explanation:
            "A questão aborda a isenção do Imposto de Renda para pessoas com rendimentos mensais de até R$ 5 mil.",

        options: [
            "Sim",
            "Não",
            "Não tenho opinião"
        ],

        lula: "Sim",
        flavio: "Não"
    },


    {
        question: "Você é a favor da ampliação dos programas sociais do governo?",

        explanation:
            "A questão aborda a ampliação de programas e políticas sociais do governo.",

        options: [
            "Sim",
            "Não",
            "Não tenho opinião"
        ],

        lula: "Sim",
        flavio: "Não"
    },


    {
        question: "Você é a favor do aumento dos investimentos públicos em saúde?",

        explanation:
            "A questão aborda a ampliação dos investimentos públicos destinados à saúde.",

        options: [
            "Sim",
            "Não",
            "Não tenho opinião"
        ],

        lula: "Sim",
        flavio: "Não"
    },


    {
        question: "Você é a favor do aumento dos investimentos públicos em educação?",

        explanation:
            "A questão aborda a ampliação dos investimentos públicos destinados à educação.",

        options: [
            "Sim",
            "Não",
            "Não tenho opinião"
        ],

        lula: "Sim",
        flavio: "Não"
    },


    {
        question: "Você acha que o Pix deve ser tributado para facilitar a concorrência de empresas de cartão americanas?",

        explanation:
            "O Governo americano colocou a tributação do pix como uma das condições para o fim do tarifaço.",

        options: [
            "Sim",
            "Não",
            "Não tenho opinião"
        ],

        lula: "Não",
        flavio: "Sim"
    },


    {
        question: "Você acredita que o governo deve ter maior controle sobre empresas estratégicas, como energia?",

        explanation:
            "A questão aborda se o governo deve ter maior controle sobre empresas consideradas estratégicas, especialmente em setores como energia.",

        options: [
            "Sim",
            "Não",
            "Não tenho opinião"
        ],

        lula: "Sim",
        flavio: "Não"
    }

];


let currentQuestion = 0;

let userAnswers = [];


/* =========================
   INICIAR
========================= */

function startQuiz() {

    currentQuestion = 0;

    userAnswers = [];

    document
        .getElementById("intro")
        .classList.add("hidden");

    document
        .getElementById("quiz")
        .classList.remove("hidden");

    document
        .getElementById("result")
        .classList.add("hidden");

    renderQuestion();
}


/* =========================
   RENDERIZAR PERGUNTA
========================= */

function renderQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;


    document.getElementById("question-title").textContent =
        question.question;


    document.getElementById("question-explanation").textContent =
        question.explanation;


    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";


    question.options.forEach(option => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.classList.add("answer-option");

        button.textContent = option;


        if (userAnswers[currentQuestion] === option) {

            button.classList.add("selected");

        }


        button.addEventListener(
            "click",
            () => selectAnswer(option)
        );


        answersContainer.appendChild(button);

    });


    updateProgress();

    updateNavigation();
}


/* =========================
   SELECIONAR RESPOSTA
========================= */

function selectAnswer(answer) {

    userAnswers[currentQuestion] = answer;


    const buttons =
        document.querySelectorAll(".answer-option");


    buttons.forEach(button => {

        button.classList.remove("selected");


        if (button.textContent === answer) {

            button.classList.add("selected");

        }

    });


    updateNavigation();
}


/* =========================
   PROGRESSO
========================= */

function updateProgress() {

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    const progressBar =
        document.getElementById("progress-bar");


    progressBar.style.width =
        `${progress}%`;
}


/* =========================
   NAVEGAÇÃO
========================= */

function updateNavigation() {

    const backButton =
        document.getElementById("back-btn");

    const nextButton =
        document.getElementById("next-btn");


    backButton.disabled =
        currentQuestion === 0;


    nextButton.disabled =
        !userAnswers[currentQuestion];


    if (currentQuestion === questions.length - 1) {

        nextButton.textContent =
            "Ver resultado";

    } else {

        nextButton.textContent =
            "Próxima";

    }
}


/* =========================
   PRÓXIMA
========================= */

function nextQuestion() {

    if (!userAnswers[currentQuestion]) {
        return;
    }


    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        renderQuestion();

    } else {

        calculateResult();

    }
}


/* =========================
   VOLTAR
========================= */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();

    }
}


/* =========================
   CALCULAR RESULTADO
========================= */

function calculateResult() {

    let lulaScore = 0;

    let flavioScore = 0;

    let validQuestions = 0;


    questions.forEach((question, index) => {

        const answer =
            userAnswers[index];


        if (!answer) {
            return;
        }


        /*
         * Religião
         */

        if (index === 3) {

            if (answer === question.lula) {

                lulaScore++;

                validQuestions++;

            }

            else if (answer === question.flavio) {

                flavioScore++;

                validQuestions++;

            }

            return;
        }


        /*
         * Respostas neutras não entram
         * no cálculo da porcentagem.
         */

        if (
            answer === "Não tenho opinião" ||
            answer === "Prefiro não responder"
        ) {

            return;

        }


        validQuestions++;


        if (answer === question.lula) {

            lulaScore++;

        }


        if (answer === question.flavio) {

            flavioScore++;

        }

    });


    let lulaPercentage = 0;

    let flavioPercentage = 0;


    if (validQuestions > 0) {

        lulaPercentage =
            Math.round(
                (lulaScore / validQuestions) * 100
            );


        flavioPercentage =
            Math.round(
                (flavioScore / validQuestions) * 100
            );

    }


    showResults(
        lulaPercentage,
        flavioPercentage,
        lulaScore,
        flavioScore,
        validQuestions
    );
}


/* =========================
   MOSTRAR RESULTADO
========================= */

function showResults(
    lulaPercentage,
    flavioPercentage,
    lulaScore,
    flavioScore,
    validQuestions
) {

    document
        .getElementById("quiz")
        .classList.add("hidden");


    document
        .getElementById("result")
        .classList.remove("hidden");


    document.getElementById(
        "lula-percentage"
    ).textContent =
        `${lulaPercentage}%`;


    document.getElementById(
        "flavio-percentage"
    ).textContent =
        `${flavioPercentage}%`;


    document.getElementById(
        "lula-bar"
    ).style.width =
        `${lulaPercentage}%`;


    document.getElementById(
        "flavio-bar"
    ).style.width =
        `${flavioPercentage}%`;


    document.getElementById(
        "lula-score"
    ).textContent =
        `${lulaScore} de ${validQuestions} pontos`;


    document.getElementById(
        "flavio-score"
    ).textContent =
        `${flavioScore} de ${validQuestions} pontos`;


    generateAnswerReview();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   REVISÃO DAS RESPOSTAS
========================= */

function generateAnswerReview() {

    const reviewContainer =
        document.getElementById("answer-review");


    reviewContainer.innerHTML = "";


    questions.forEach((question, index) => {

        const answer =
            userAnswers[index];


        if (!answer) {
            return;
        }


        const reviewItem =
            document.createElement("div");


        reviewItem.classList.add(
            "review-item"
        );


        let resultHTML = "";


        if (
            answer === "Não tenho opinião" ||
            answer === "Prefiro não responder"
        ) {

            resultHTML =
                `<span class="neutral">• Não pontua</span>`;

        }

        else if (index === 3) {

            if (answer === question.lula) {

                resultHTML =
                    `<span class="compatible lula-compatible">✓ Compatível com Lula</span>`;

            }

            else if (answer === question.flavio) {

                resultHTML =
                    `<span class="compatible flavio-compatible">✓ Compatível com Flávio</span>`;

            }

            else {

                resultHTML =
                    `<span class="neutral">• Não pontua</span>`;

            }

        }

        else if (answer === question.lula) {

            resultHTML =
                `<span class="compatible lula-compatible">✓ Compatível com Lula</span>`;

        }

        else if (answer === question.flavio) {

            resultHTML =
                `<span class="compatible flavio-compatible">✓ Compatível com Flávio</span>`;

        }

        else {

            resultHTML =
                `<span class="neutral">• Não pontua</span>`;

        }


        reviewItem.innerHTML = `

            <div class="review-question">
                ${index + 1}. ${question.question}
            </div>

            <div class="review-answer">
                Sua resposta:
                <strong>${answer}</strong>
            </div>

            <div class="review-result">
                ${resultHTML}
            </div>

        `;


        reviewContainer.appendChild(
            reviewItem
        );

    });
}


/* =========================
   REINICIAR
========================= */

function restartQuiz() {

    currentQuestion = 0;

    userAnswers = [];


    document
        .getElementById("result")
        .classList.add("hidden");


    document
        .getElementById("quiz")
        .classList.remove("hidden");


    renderQuestion();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   EVENTOS
========================= */

document
    .getElementById("start-btn")
    .addEventListener(
        "click",
        startQuiz
    );


document
    .getElementById("next-btn")
    .addEventListener(
        "click",
        nextQuestion
    );


document
    .getElementById("back-btn")
    .addEventListener(
        "click",
        previousQuestion
    );


document
    .getElementById("restart-btn")
    .addEventListener(
        "click",
        restartQuiz
    );