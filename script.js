const generalQuestionBank = [
    {
        "id":  "G01",
        "statement":  "عضوية IEEE الطلابية مخصصة لتخصصات الهندسة الكهربائية والإلكترونية فقط.",
        "answer":  false,
        "explanation":  "IEEE تضم مجالات هندسية وتقنية متعددة، وليست محصورة في الكهرباء والإلكترونيات فقط."
    },
    {
        "id":  "G02",
        "statement":  "يمكن لطالب الجامعة الانضمام إلى IEEE قبل أن يبدأ حياته المهنية.",
        "answer":  true,
        "explanation":  "IEEE لديها فئة عضوية مخصصة للطلاب وطلاب الدراسات العليا أثناء دراستهم."
    },
    {
        "id":  "G03",
        "statement":  "IEEE Student Branch هو جزء من منظمة IEEE الأوسع، وليس ناديًا جامعيًا مستقلًا عنها.",
        "answer":  true,
        "explanation":  "الـ Student Branch يربط طلاب الجامعة بشبكة IEEE الأوسع من أعضاء وأكاديميين ومهنيين."
    },
    {
        "id":  "G04",
        "statement":  "التخرج من الجامعة يعني انتهاء إمكانية الاستمرار مع IEEE.",
        "answer":  false,
        "explanation":  "يمكن الاستمرار مع IEEE بعد التخرج، ومن المسارات المتاحة IEEE Young Professionals."
    },
    {
        "id":  "G05",
        "statement":  "يمكن للطالب بناء شبكة علاقات مهنية من خلال IEEE قبل التخرج.",
        "answer":  true,
        "explanation":  "IEEE تشجع الطلاب على بدء بناء العلاقات المهنية والتواصل مع المهنيين وهم ما زالوا في الجامعة."
    },
    {
        "id":  "G06",
        "statement":  "وجود IEEE Student Branch في الجامعة يعني أن جميع أنشطته يجب أن تكون تقنية.",
        "answer":  false,
        "explanation":  "أنشطة الفرع يمكن أن تشمل فعاليات اجتماعية وتوعوية ومهنية إلى جانب الأنشطة التقنية."
    },
    {
        "id":  "G07",
        "statement":  "بعض برامج IEEE للطلاب تهتم بالمهارات المهنية إلى جانب المهارات التقنية.",
        "answer":  true,
        "explanation":  "IEEE توفر فرصًا ومسابقات وبرامج تساعد على التطور المهني والتقني معًا."
    },
    {
        "id":  "G08",
        "statement":  "قد تتضمن مزايا IEEE للطلاب منحًا وجوائز ودعمًا لبعض أنواع السفر.",
        "answer":  true,
        "explanation":  "IEEE توفر منحًا وجوائز وبعض فرص دعم السفر والفرص الطلابية المختلفة."
    },
    {
        "id":  "G09",
        "statement":  "تمويل أنشطة IEEE Student Branch يعتمد دائمًا بالكامل على ميزانية الجامعة.",
        "answer":  false,
        "explanation":  "يمكن للـ Student Branch الحصول على فرص تمويل ودعم من برامج IEEE لبعض فعالياته ومشاريعه."
    },
    {
        "id":  "G10",
        "statement":  "يمكن لبعض IEEE Student Branches التقدم للحصول على دعم لفعاليات ومشاريع.",
        "answer":  true,
        "explanation":  "IEEE توفر فرصًا لدعم وتمويل بعض الفعاليات والمشاريع والبرامج الطلابية."
    },
    {
        "id":  "G11",
        "statement":  "الإرشاد المهني من مهندسين وتقنيين محترفين متاح للمهنيين فقط وليس للطلاب.",
        "answer":  false,
        "explanation":  "Mentoring من مهندسين وتقنيين محترفين من المزايا المتاحة أيضًا لطلاب IEEE."
    },
    {
        "id":  "G12",
        "statement":  "لدى IEEE مجتمعات متخصصة يمكن للعضو اختيار الانضمام إليها حسب اهتمامه التقني.",
        "answer":  true,
        "explanation":  "لدى IEEE Societies متخصصة في مجالات تقنية مختلفة ويمكن للعضو اختيار ما يناسب اهتمامه."
    },
    {
        "id":  "G13",
        "statement":  "IEEE Student Branch يمكن أن ينظم أنشطة اجتماعية وتوعوية إلى جانب اللقاءات التقنية.",
        "answer":  true,
        "explanation":  "أنشطة الفروع يمكن أن تشمل اللقاءات الاجتماعية وبرامج التوعية والمشاريع والمؤتمرات إلى جانب الجانب التقني."
    },
    {
        "id":  "G14",
        "statement":  "شبكة العلاقات التي يبنيها الطالب من خلال IEEE تقتصر على أعضاء جامعته.",
        "answer":  false,
        "explanation":  "IEEE تتيح التواصل مع أعضاء ومهنيين ومجموعات داخل وخارج البيئة الجامعية المحلية."
    },
    {
        "id":  "G15",
        "statement":  "يمكن لطلاب IEEE الاستفادة من Mentoring يقدمه مهندسون وتقنيون محترفون.",
        "answer":  true,
        "explanation":  "التوجيه والإرشاد من المحترفين من المزايا المتاحة لطلاب IEEE."
    },
    {
        "id":  "G16",
        "statement":  "مسابقات IEEE الطلابية تركز على الجانب التقني ولا ترتبط بالتطوير المهني.",
        "answer":  false,
        "explanation":  "مسابقات وأنشطة IEEE يمكن أن تساعد على تطوير المهارات المهنية والتقنية معًا."
    },
    {
        "id":  "G17",
        "statement":  "أنشطة IEEE Student Branch قد تشمل مشاريع ومؤتمرات وبرامج توعوية.",
        "answer":  true,
        "explanation":  "هذه أمثلة على الأنشطة التي يمكن أن ينفذها الفرع الطلابي إلى جانب فعاليات أخرى."
    },
    {
        "id":  "G18",
        "statement":  "طلاب الدراسات العليا ينتقلون مباشرة إلى العضوية المهنية ولا توجد لهم فئة عضوية طلابية.",
        "answer":  false,
        "explanation":  "IEEE لديها فئة Graduate Student Member مخصصة لطلاب الدراسات العليا المؤهلين."
    },
    {
        "id":  "G19",
        "statement":  "بعض الموارد التعليمية التي تقدمها IEEE للطلاب يمكن الوصول إليها إلكترونيًا.",
        "answer":  true,
        "explanation":  "IEEE توفر أدوات وموارد تعليمية للطلاب، ومنها موارد يمكن الوصول إليها عبر الإنترنت."
    },
    {
        "id":  "G20",
        "statement":  "فرص التطوع عبر IEEE تكون حضورية ولا تشمل التطوع عن بُعد.",
        "answer":  false,
        "explanation":  "فرص التطوع في IEEE يمكن أن تتضمن فرصًا محلية وأخرى عن بُعد."
    },
    {
        "id":  "G21",
        "statement":  "فرص التطوع عبر IEEE تكون طويلة المدى ولا تناسب المهام القصيرة.",
        "answer":  false,
        "explanation":  "فرص التطوع قد تكون قصيرة أو طويلة المدى وبمتطلبات ومهارات مختلفة."
    },
    {
        "id":  "G22",
        "statement":  "من مزايا IEEE Student Branch إمكانية الحصول على استضافة مجانية لموقع إلكتروني للفرع.",
        "answer":  true,
        "explanation":  "الاستضافة المجانية للمواقع الإلكترونية من المزايا المتاحة لفروع IEEE الطلابية."
    },
    {
        "id":  "G23",
        "statement":  "بناء شبكة مهنية من خلال IEEE يبدأ فعليًا بعد التخرج.",
        "answer":  false,
        "explanation":  "يمكن للطالب البدء ببناء شبكة علاقات مهنية من خلال IEEE وهو ما زال في الجامعة."
    },
    {
        "id":  "G24",
        "statement":  "بعض فعاليات IEEE الطلابية يمكن أن تركز على المهارات المهنية أكثر من موضوع تقني.",
        "answer":  true,
        "explanation":  "بعض برامج IEEE تدعم فعاليات في المسار الوظيفي والتواصل والعمل الجماعي والتطوير المهني."
    },
    {
        "id":  "G25",
        "statement":  "التعليم المستمر بعد التخرج ليس جزءًا من الأنشطة والموارد التي تقدمها IEEE.",
        "answer":  false,
        "explanation":  "IEEE توفر موارد وفرصًا للتطوير والتعليم المهني المستمر حتى بعد المرحلة الجامعية."
    },
    {
        "id":  "G26",
        "statement":  "يمكن لأعضاء IEEE التعاون مع أعضاء ومجموعات أخرى إلكترونيًا أو وجهًا لوجه.",
        "answer":  true,
        "explanation":  "IEEE توفر فرصًا للتعاون والتواصل مع الأعضاء والمجموعات إلكترونيًا أو حضوريًا."
    },
    {
        "id":  "G27",
        "statement":  "فرص IEEE Student Branch تنحصر داخل الجامعة ولا تمتد إلى فرص على مستوى Section أو Region.",
        "answer":  false,
        "explanation":  "يمكن أن تمتد فرص IEEE إلى مستويات أوسع مثل Sections وRegions، وليس داخل الجامعة فقط."
    },
    {
        "id":  "G28",
        "statement":  "المشاركة في IEEE Student Branch يمكن أن تساعد على تطوير مهارات القيادة والتواصل والعمل الجماعي.",
        "answer":  true,
        "explanation":  "المشاركة الطلابية في IEEE يمكن أن تساعد على تطوير مهارات القيادة والتواصل والعمل ضمن الفريق."
    },
    {
        "id":  "G29",
        "statement":  "جوائز IEEE الطلابية لا تشمل تقدير النشاط والقيادة داخل Student Branch.",
        "answer":  false,
        "explanation":  "لدى IEEE برامج وجوائز يمكن أن تقدر إنجازات الطلاب والمتطوعين والنشاط المميز داخل الفروع."
    },
    {
        "id":  "G30",
        "statement":  "الجوائز المخصصة لـ Student Branch تُمنح لأعضاء أفراد فقط، وليس للفرع نفسه.",
        "answer":  false,
        "explanation":  "توجد جوائز وبرامج تقدير يمكن أن تكرم الـ Student Branch نفسه وأداءه كفرع."
    }
];

const challengeQuestionBank = [
    {
        "id":  "C01",
        "statement":  "عضوية IEEE الأساسية تجعل العضو تلقائيًا عضوًا في جميع IEEE Societies.",
        "answer":  false,
        "explanation":  "عضويات الـ Societies اختيارية وتُضاف إلى العضوية الأساسية حسب اهتمام العضو."
    },
    {
        "id":  "C02",
        "statement":  "IEEE Student Branch يركز عادةً على مجال تقني أكثر تخصصًا من Student Branch Chapter.",
        "answer":  false,
        "explanation":  "الـ Student Branch يمثل IEEE بشكل عام داخل الجامعة، بينما الـ Student Branch Chapter يرتبط عادةً بإحدى IEEE Societies ويركز على مجال تقني أكثر تخصصًا."
    },
    {
        "id":  "C03",
        "statement":  "وجود IEEE Student Branch واحد في الجامعة يمنع إنشاء عدة Student Branch Chapters داخله.",
        "answer":  false,
        "explanation":  "يمكن للجامعة أن تضم عدة Chapters، وكل واحد منها قد يرتبط بـ IEEE Society مختلفة."
    },
    {
        "id":  "C04",
        "statement":  "يمكن أن يوجد في الجامعة الواحدة أكثر من Student Branch Chapter لمجالات تقنية مختلفة.",
        "answer":  true,
        "explanation":  "يمكن أن تعمل عدة Chapters متخصصة تحت الـ Student Branch نفسه وفي مجالات تقنية مختلفة."
    },
    {
        "id":  "C05",
        "statement":  "IEEE Young Professionals يمكن أن يضم أشخاصًا لديهم عدة سنوات من الخبرة المهنية، وليس حديثي التخرج فقط.",
        "answer":  true,
        "explanation":  "Young Professionals لا يقتصر على حديثي التخرج فقط، بل يشمل أيضًا مهنيين ضمن المرحلة المهنية المبكرة."
    },
    {
        "id":  "C06",
        "statement":  "IEEE Young Professionals برنامج مخصص أساسًا للطلاب الذين لم يتخرجوا بعد.",
        "answer":  false,
        "explanation":  "Young Professionals يرتبط بالمرحلة المهنية بعد التخرج والانتقال من الحياة الطلابية إلى المهنية."
    },
    {
        "id":  "C07",
        "statement":  "الانتقال من Student Member إلى المرحلة المهنية يتطلب ترك IEEE ثم الانضمام إليها من جديد.",
        "answer":  false,
        "explanation":  "يمكن للعضو الانتقال من المرحلة الطلابية إلى المرحلة المهنية مع الاستمرار ضمن مجتمع IEEE."
    },
    {
        "id":  "C08",
        "statement":  "فئة Student/Graduate Student في IEEE لا تشترط بالضرورة دراسة 100% من العبء الدراسي الكامل.",
        "answer":  true,
        "explanation":  "العضوية الطلابية المؤهلة لا تشترط بالضرورة أن يكون الطالب مسجلًا في 100% من العبء الدراسي الكامل."
    },
    {
        "id":  "C09",
        "statement":  "عضوية IEEE الأساسية تمنح كل عضو وصولًا كاملًا وغير محدود إلى جميع محتويات IEEE Xplore.",
        "answer":  false,
        "explanation":  "الوصول الكامل إلى جميع محتويات IEEE Xplore ليس تلقائيًا بمجرد امتلاك العضوية الأساسية، وقد يعتمد على اشتراك أو صلاحيات إضافية."
    },
    {
        "id":  "C10",
        "statement":  "فعالية ممولة من برنامج IEEE SPAx يمكن أن تركز على التطوير المهني حتى لو لم يكن موضوعها تقنيًا بحتًا.",
        "answer":  true,
        "explanation":  "SPAx يدعم فعاليات مرتبطة بالتطوير المهني مثل التواصل والمسار الوظيفي والعمل الجماعي."
    },
    {
        "id":  "C11",
        "statement":  "فرص التطوع داخل IEEE يمكن أن تكون قصيرة أو طويلة المدى، ومحلية أو عن بُعد.",
        "answer":  true,
        "explanation":  "فرص التطوع في IEEE تختلف في مدتها وموقعها والمهارات المطلوبة لها."
    },
    {
        "id":  "C12",
        "statement":  "يمكن إنشاء IEEE Women in Engineering Affinity Group ضمن Student Branch إذا استوفى متطلبات التأسيس.",
        "answer":  true,
        "explanation":  "يمكن إنشاء WIE Student Branch Affinity Group بعد استيفاء متطلبات IEEE الخاصة بالتأسيس."
    },
    {
        "id":  "C13",
        "statement":  "Student Branch Chapter يمكن أن يكون وحدة عامة لا ترتبط بأي IEEE Society محددة.",
        "answer":  false,
        "explanation":  "Student Branch Chapter هو وحدة أكثر تخصصًا وترتبط عادةً بمجال إحدى IEEE Societies."
    },
    {
        "id":  "C14",
        "statement":  "Student Branch Chapter يعمل في مجال Society متخصصة لكنه يظل جزءًا من الـ Student Branch في الجامعة.",
        "answer":  true,
        "explanation":  "الـ Chapter يرتبط بمجال Society متخصصة ويعمل ضمن الـ Student Branch الأساسي في المؤسسة."
    },
    {
        "id":  "C15",
        "statement":  "يمكن استخدام تمويل برنامج IEEE SPAx لتغطية مصاريف السفر المرتبطة بالفعالية.",
        "answer":  false,
        "explanation":  "تمويل SPAx مخصص لدعم الفعالية نفسها ولا يُستخدم لتغطية مصاريف السفر."
    }
];

const questionsPerRound = 3;
const generalQuestionsPerRound = 2;
const challengeQuestionsPerRound = 1;
const questionStateStorageKey = "ieeeTruthOrMythQuestionStateV2";
const questionStateVersion = 2;
const questionBankSignature = "general-30-challenge-15-v2";
const logoTapTimeout = 2000;

const generalQuestionsById = new Map(
    generalQuestionBank.map((question) => [question.id, question])
);
const challengeQuestionsById = new Map(
    challengeQuestionBank.map((question) => [question.id, question])
);

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
const questionKicker = document.querySelector("#question-kicker");
const questionKickerText = document.querySelector("#question-kicker-text");
const challengeKickerStar = document.querySelector("#challenge-kicker-star");
const questionText = document.querySelector("#question-text");

const feedbackPanel = document.querySelector("#feedback-panel");
const feedbackIcon = document.querySelector("#feedback-icon");
const feedbackStatus = document.querySelector("#feedback-status");
const correctAnswer = document.querySelector("#correct-answer");
const explanation = document.querySelector("#explanation");

const scoreValue = document.querySelector("#score-value");
const resultMessage = document.querySelector("#result-message");

const ieeeDayLogo = document.querySelector("#ieee-day-logo");
const adminResetModal = document.querySelector("#admin-reset-modal");
const adminResetCancel = document.querySelector("#admin-reset-cancel");
const adminResetConfirm = document.querySelector("#admin-reset-confirm");

let roundQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answerLocked = false;
let volatileQuestionState = null;
let localStorageUnavailable = false;
let logoTapCount = 0;
let lastLogoTapTime = 0;
let logoTapTimer = null;
let lastLogoTouchTime = 0;

function shuffleQuestions(items) {
    const shuffledItems = [...items];

    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledItems[index], shuffledItems[randomIndex]] = [
            shuffledItems[randomIndex],
            shuffledItems[index]
        ];
    }

    return shuffledItems;
}

function createFreshQuestionState() {
    return {
        version: questionStateVersion,
        bankSignature: questionBankSignature,
        generalOrder: shuffleQuestions(generalQuestionBank.map((question) => question.id)),
        generalPosition: 0,
        challengeOrder: shuffleQuestions(challengeQuestionBank.map((question) => question.id)),
        challengePosition: 0
    };
}

function isValidDeck(order, validIds) {
    if (!Array.isArray(order) || order.length !== validIds.size) {
        return false;
    }

    const uniqueIds = new Set(order);
    return uniqueIds.size === validIds.size && order.every((id) => validIds.has(id));
}

function isValidQuestionState(state) {
    const generalIds = new Set(generalQuestionBank.map((question) => question.id));
    const challengeIds = new Set(challengeQuestionBank.map((question) => question.id));

    if (!state || typeof state !== "object") {
        return false;
    }

    if (
        state.version !== questionStateVersion ||
        state.bankSignature !== questionBankSignature ||
        !isValidDeck(state.generalOrder, generalIds) ||
        !isValidDeck(state.challengeOrder, challengeIds)
    ) {
        return false;
    }

    const positionsAreIntegers =
        Number.isInteger(state.generalPosition) &&
        Number.isInteger(state.challengePosition);
    const positionsAreInRange =
        state.generalPosition >= 0 &&
        state.generalPosition <= generalQuestionBank.length &&
        state.challengePosition >= 0 &&
        state.challengePosition <= challengeQuestionBank.length;
    const positionsStayAligned =
        state.generalPosition % generalQuestionsPerRound === 0 &&
        state.generalPosition / generalQuestionsPerRound === state.challengePosition;

    return positionsAreIntegers && positionsAreInRange && positionsStayAligned;
}

function saveQuestionState(state) {
    volatileQuestionState = state;

    if (localStorageUnavailable) {
        return;
    }

    try {
        localStorage.setItem(questionStateStorageKey, JSON.stringify(state));
    } catch (error) {
        localStorageUnavailable = true;
    }
}

function loadQuestionState() {
    if (!localStorageUnavailable) {
        let savedValue = null;

        try {
            savedValue = localStorage.getItem(questionStateStorageKey);
        } catch (error) {
            localStorageUnavailable = true;
        }

        if (!localStorageUnavailable && savedValue !== null) {
            try {
                const savedState = JSON.parse(savedValue);

                if (isValidQuestionState(savedState)) {
                    volatileQuestionState = savedState;
                    return savedState;
                }
            } catch (error) {
                // Corrupted state is replaced below with a fresh valid cycle.
            }
        }

        if (!localStorageUnavailable) {
            const freshState = createFreshQuestionState();
            saveQuestionState(freshState);
            return freshState;
        }
    }

    if (isValidQuestionState(volatileQuestionState)) {
        return volatileQuestionState;
    }

    const freshState = createFreshQuestionState();
    saveQuestionState(freshState);
    return freshState;
}

function resetQuestionRotation() {
    if (!localStorageUnavailable) {
        try {
            localStorage.removeItem(questionStateStorageKey);
        } catch (error) {
            localStorageUnavailable = true;
        }
    }

    const freshState = createFreshQuestionState();
    saveQuestionState(freshState);
    return freshState;
}

function getNextRoundQuestions() {
    let state = loadQuestionState();
    const cycleIsComplete =
        state.generalPosition === generalQuestionBank.length &&
        state.challengePosition === challengeQuestionBank.length;

    if (cycleIsComplete) {
        state = createFreshQuestionState();
    }

    const generalIds = state.generalOrder.slice(
        state.generalPosition,
        state.generalPosition + generalQuestionsPerRound
    );
    const challengeId = state.challengeOrder[state.challengePosition];

    const generalQuestions = generalIds.map((id) => generalQuestionsById.get(id));
    const challengeQuestion = challengeQuestionsById.get(challengeId);

    if (generalQuestions.some((question) => !question) || !challengeQuestion) {
        state = createFreshQuestionState();
        saveQuestionState(state);
        return getNextRoundQuestions();
    }

    state.generalPosition += generalQuestionsPerRound;
    state.challengePosition += challengeQuestionsPerRound;
    saveQuestionState(state);

    return [
        ...generalQuestions.map((question) => ({ ...question, category: "general" })),
        { ...challengeQuestion, category: "challenge" }
    ];
}

function showScreen(activeScreen) {
    screens.forEach((screen) => {
        const isActiveScreen = screen === activeScreen;
        screen.hidden = !isActiveScreen;
        screen.classList.toggle("is-active", isActiveScreen);
    });
}

function startRound() {
    roundQuestions = getNextRoundQuestions();
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
    const isChallengeQuestion = currentQuestion.category === "challenge";

    resetAnswerState();
    progressLabel.textContent = `السؤال ${questionNumber} من ${questionsPerRound}`;
    progressTrack.setAttribute("aria-valuenow", String(questionNumber));
    progressFill.style.width = `${(questionNumber / questionsPerRound) * 100}%`;
    questionText.textContent = currentQuestion.statement;
    nextButtonText.textContent = questionNumber === questionsPerRound ? "عرض النتيجة" : "السؤال التالي";

    questionKicker.classList.toggle("is-challenge", isChallengeQuestion);
    questionKickerText.textContent = isChallengeQuestion ? "سؤال التحدي" : "صنّف العبارة التالية";
    challengeKickerStar.hidden = !isChallengeQuestion;
    questionStage.classList.toggle("has-challenge-question", isChallengeQuestion);

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

function resetCurrentRoundInterface() {
    roundQuestions = [];
    currentQuestionIndex = 0;
    score = 0;

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
    questionKicker.classList.remove("is-challenge");
    questionKickerText.textContent = "صنّف العبارة التالية";
    challengeKickerStar.hidden = true;
    questionStage.classList.remove("has-challenge-question");
    scoreValue.textContent = "0";
    resultMessage.textContent = "";
}

function returnHome() {
    resetCurrentRoundInterface();
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

function resetLogoTapSequence() {
    logoTapCount = 0;
    lastLogoTapTime = 0;

    if (logoTapTimer !== null) {
        window.clearTimeout(logoTapTimer);
        logoTapTimer = null;
    }
}

function openAdminResetModal() {
    resetLogoTapSequence();
    adminResetModal.hidden = false;
    document.body.classList.add("has-open-modal");
    adminResetCancel.focus({ preventScroll: true });
}

function closeAdminResetModal() {
    adminResetModal.hidden = true;
    document.body.classList.remove("has-open-modal");
    startButton.focus({ preventScroll: true });
}

function handleLogoTap() {
    if (startScreen.hidden || !adminResetModal.hidden) {
        resetLogoTapSequence();
        return;
    }

    const currentTime = Date.now();

    if (logoTapCount === 0 || currentTime - lastLogoTapTime > logoTapTimeout) {
        resetLogoTapSequence();
        logoTapCount = 1;
        lastLogoTapTime = currentTime;
        logoTapTimer = window.setTimeout(resetLogoTapSequence, logoTapTimeout);
        return;
    }

    logoTapCount += 1;

    if (logoTapCount === 3) {
        openAdminResetModal();
    }
}

function handleLogoTouch() {
    lastLogoTouchTime = Date.now();
    handleLogoTap();
}

function handleLogoClick() {
    if (Date.now() - lastLogoTouchTime < 500) {
        return;
    }

    handleLogoTap();
}

function confirmQuestionRotationReset() {
    resetQuestionRotation();
    resetCurrentRoundInterface();
    closeAdminResetModal();
    showScreen(startScreen);
}

startButton.addEventListener("click", startRound);
playAgainButton.addEventListener("click", startRound);
homeButton.addEventListener("click", returnHome);
nextButton.addEventListener("click", goToNextStep);
ieeeDayLogo.addEventListener("touchend", handleLogoTouch, { passive: true });
ieeeDayLogo.addEventListener("click", handleLogoClick);
adminResetCancel.addEventListener("click", closeAdminResetModal);
adminResetConfirm.addEventListener("click", confirmQuestionRotationReset);

adminResetModal.addEventListener("click", (event) => {
    if (event.target === adminResetModal) {
        closeAdminResetModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !adminResetModal.hidden) {
        closeAdminResetModal();
    }
});

answerButtons.forEach((button) => {
    button.addEventListener("click", handleAnswer);
});

showScreen(startScreen);
