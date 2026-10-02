const questionBank = [
    {
        statement: "IEEE مخصصة فقط لطلاب ومهندسي الكهرباء.",
        answer: false,
        explanation: "IEEE تضم مجالات هندسية وتقنية متعددة، وليست محصورة في الهندسة الكهربائية فقط."
    },
    {
        statement: "يمكن للطالب الانضمام إلى IEEE قبل التخرج.",
        answer: true,
        explanation: "IEEE توفر عضوية مخصصة لطلاب الجامعات وطلاب الدراسات العليا."
    },
    {
        statement: "IEEE منظمة طلابية تعمل داخل الجامعات فقط.",
        answer: false,
        explanation: "IEEE منظمة مهنية وتقنية عالمية تضم طلابًا ومهندسين وباحثين ومحترفين."
    },
    {
        statement: "بعد التخرج تنتهي علاقتك بـ IEEE.",
        answer: false,
        explanation: "يمكن أن تستمر مع IEEE بعد التخرج من خلال العضوية المهنية ومجتمعات مثل IEEE Young Professionals."
    },
    {
        statement: "IEEE موجودة في جامعات ودول عديدة حول العالم.",
        answer: true,
        explanation: "لدى IEEE فروع طلابية ومجتمعات وأعضاء في دول وجامعات كثيرة حول العالم."
    },
    {
        statement: "أنشطة IEEE تقتصر على المحاضرات والندوات التقنية.",
        answer: false,
        explanation: "تشمل أنشطة IEEE أيضًا المسابقات والمشاريع والتواصل المهني والتطوير والفعاليات المختلفة."
    },
    {
        statement: "يمكن أن توفر IEEE للطلاب فرص منح وجوائز ودعم لبعض الأنشطة والسفر.",
        answer: true,
        explanation: "تقدم IEEE فرصًا متنوعة للطلاب مثل الجوائز والمنح وبعض برامج الدعم والفرص الطلابية."
    },
    {
        statement: "يمكن لفروع IEEE الطلابية الحصول على دعم لبعض الفعاليات والمشاريع.",
        answer: true,
        explanation: "توفر IEEE فرص دعم وتمويل لبعض أنشطة ومشاريع الفروع الطلابية وفق البرامج المتاحة."
    },
    {
        statement: "IEEE مفيدة فقط لمن يريد أن يصبح باحثًا أكاديميًا.",
        answer: false,
        explanation: "IEEE تقدم أيضًا فرصًا للتطوير المهني وبناء العلاقات والمسابقات والأنشطة والموارد المهنية."
    },
    {
        statement: "لدى IEEE مجتمعات متخصصة في مجالات تقنية مختلفة.",
        answer: true,
        explanation: "تضم IEEE العديد من المجتمعات المتخصصة في مجالات هندسية وتقنية متنوعة."
    },
    {
        statement: "فرع IEEE الطلابي في الجامعة منفصل تمامًا عن IEEE العالمية.",
        answer: false,
        explanation: "الفرع الطلابي جزء من مجتمع IEEE الأوسع ويربط الطلاب بالشبكة العالمية للمنظمة."
    },
    {
        statement: "IEEE شركة تجارية هدفها الأساسي تحقيق الربح.",
        answer: false,
        explanation: "IEEE منظمة مهنية وتقنية غير ربحية تهدف إلى تطوير التقنية وخدمة المجتمع."
    },
    {
        statement: "IEEE يمكن أن تساعدك على التعرف على طلاب ومهندسين لديهم اهتمامات مشابهة لك.",
        answer: true,
        explanation: "بناء العلاقات والتواصل مع الطلاب والمهنيين من الفوائد المهمة للمشاركة في IEEE."
    },
    {
        statement: "IEEE تهتم بالجانب التقني فقط ولا تهتم بالتطوير المهني للطالب.",
        answer: false,
        explanation: "IEEE توفر أيضًا فرصًا للتطوير المهني والإرشاد وبناء العلاقات والاستعداد للمسار الوظيفي."
    }
];

const questionsPerRound = 3;

const screens = document.querySelectorAll(".screen");
const startScreen = document.querySelector("#start-screen");
const questionScreen = document.querySelector("#question-screen");
const resultScreen = document.querySelector("#result-screen");

const startButton = document.querySelector("#start-button");
const playAgainButton = document.querySelector("#play-again-button");
const homeButton = document.querySelector("#home-button");
const nextButton = document.querySelector("#next-button");
const nextButtonText = document.querySelector("#next-button-text");
const answerButtons = document.querySelectorAll(".answer-button");

const progressLabel = document.querySelector("#progress-label");
const progressTrack = document.querySelector("#progress-track");
const progressFill = document.querySelector("#progress-fill");
const questionStage = document.querySelector("#question-stage");
const questionText = document.querySelector("#question-text");

const feedbackPanel = document.querySelector("#feedback-panel");
const feedbackIcon = document.querySelector("#feedback-icon");
const feedbackStatus = document.querySelector("#feedback-status");
const correctAnswer = document.querySelector("#correct-answer");
const explanation = document.querySelector("#explanation");

const scoreValue = document.querySelector("#score-value");
const resultMessage = document.querySelector("#result-message");

let roundQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answerLocked = false;
let previousRoundKey = "";

function shuffleQuestions(questions) {
    const shuffledQuestions = [...questions];

    for (let index = shuffledQuestions.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledQuestions[index], shuffledQuestions[randomIndex]] = [
            shuffledQuestions[randomIndex],
            shuffledQuestions[index]
        ];
    }

    return shuffledQuestions;
}

function showScreen(activeScreen) {
    screens.forEach((screen) => {
        const isActiveScreen = screen === activeScreen;
        screen.hidden = !isActiveScreen;
        screen.classList.toggle("is-active", isActiveScreen);
    });
}

function startRound() {
    let newRoundKey = "";

    do {
        roundQuestions = shuffleQuestions(questionBank).slice(0, questionsPerRound);
        newRoundKey = roundQuestions
            .map((question) => question.statement)
            .sort()
            .join("|");
    } while (newRoundKey === previousRoundKey);

    previousRoundKey = newRoundKey;
    currentQuestionIndex = 0;
    score = 0;

    showScreen(questionScreen);
    renderQuestion();
}

function resetAnswerState() {
    answerLocked = false;
    feedbackPanel.hidden = true;
    feedbackPanel.classList.remove("is-correct", "is-incorrect");

    answerButtons.forEach((button) => {
        button.disabled = false;
        button.setAttribute("aria-pressed", "false");
        button.classList.remove("is-correct-answer", "is-wrong-answer", "is-dimmed");
    });
}

function renderQuestion() {
    const currentQuestion = roundQuestions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;

    resetAnswerState();
    progressLabel.textContent = `السؤال ${questionNumber} من ${questionsPerRound}`;
    progressTrack.setAttribute("aria-valuenow", String(questionNumber));
    progressFill.style.width = `${(questionNumber / questionsPerRound) * 100}%`;
    questionText.textContent = currentQuestion.statement;
    nextButtonText.textContent = questionNumber === questionsPerRound ? "عرض النتيجة" : "السؤال التالي";

    questionStage.classList.remove("question-enter");
    void questionStage.offsetWidth;
    questionStage.classList.add("question-enter");
    questionText.focus({ preventScroll: true });
}

function handleAnswer(event) {
    if (answerLocked) {
        return;
    }

    answerLocked = true;

    const selectedButton = event.currentTarget;
    const selectedAnswer = selectedButton.dataset.answer === "true";
    const currentQuestion = roundQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;

    if (isCorrect) {
        score += 1;
    }

    answerButtons.forEach((button) => {
        const buttonAnswer = button.dataset.answer === "true";
        button.disabled = true;
        button.setAttribute("aria-pressed", String(button === selectedButton));

        if (buttonAnswer === currentQuestion.answer) {
            button.classList.add("is-correct-answer");
        } else if (button === selectedButton) {
            button.classList.add("is-wrong-answer");
        } else {
            button.classList.add("is-dimmed");
        }
    });

    feedbackPanel.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedbackIcon.textContent = isCorrect ? "✓" : "×";
    feedbackStatus.textContent = isCorrect ? "إجابة صحيحة!" : "إجابة غير صحيحة";
    correctAnswer.textContent = `التصنيف الصحيح: ${currentQuestion.answer ? "حقيقة" : "خرافة"}`;
    explanation.textContent = currentQuestion.explanation;
    feedbackPanel.hidden = false;
    nextButton.focus({ preventScroll: true });
}

function showResult() {
    const messages = [
        "لا بأس! الآن أصبحت تعرف IEEE أكثر.",
        "جيد! تعرّفت اليوم على معلومات جديدة عن IEEE.",
        "رائع! كنت قريبًا من العلامة الكاملة.",
        "ممتاز! معرفتك بـ IEEE رائعة."
    ];

    scoreValue.textContent = String(score);
    resultMessage.textContent = messages[score];
    showScreen(resultScreen);
    playAgainButton.focus({ preventScroll: true });
}

function returnHome() {
    roundQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    answerLocked = false;
    previousRoundKey = "";

    resetAnswerState();
    questionText.textContent = "";
    explanation.textContent = "";
    feedbackIcon.textContent = "";
    feedbackStatus.textContent = "";
    correctAnswer.textContent = "";
    progressLabel.textContent = `السؤال 1 من ${questionsPerRound}`;
    progressTrack.setAttribute("aria-valuenow", "1");
    progressFill.style.width = `${100 / questionsPerRound}%`;
    nextButtonText.textContent = "السؤال التالي";
    scoreValue.textContent = "0";
    resultMessage.textContent = "";

    showScreen(startScreen);
    startButton.focus({ preventScroll: true });
}

function goToNextStep() {
    if (!answerLocked) {
        return;
    }

    if (currentQuestionIndex === questionsPerRound - 1) {
        showResult();
        return;
    }

    currentQuestionIndex += 1;
    renderQuestion();
}

startButton.addEventListener("click", startRound);
playAgainButton.addEventListener("click", startRound);
homeButton.addEventListener("click", returnHome);
nextButton.addEventListener("click", goToNextStep);

answerButtons.forEach((button) => {
    button.addEventListener("click", handleAnswer);
});

showScreen(startScreen);
