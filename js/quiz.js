// ========================================
// Quiz System - 5S Training
// ========================================

let quizState = {
    isPlaying: false,
    questions: [],
    currentIndex: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    bestStreak: 0,
    score: 0,
    timer: 30,
    timerInterval: null,
    answered: false
};

// Iniciar quiz
function startQuiz() {
    const difficulty = document.getElementById('quizDifficulty').value;
    const category = document.getElementById('quizCategory').value;
    
    // Filtrar preguntas
    let filteredQuestions = [...quizQuestions];
    
    if (difficulty !== 'all') {
        filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
    }
    
    if (category !== 'all') {
        filteredQuestions = filteredQuestions.filter(q => q.category === category);
    }
    
    // Verificar que hay suficientes preguntas
    if (filteredQuestions.length < 5) {
        showToast('No hay suficientes preguntas con esos filtros', 'error');
        return;
    }
    
    // Seleccionar 20 preguntas aleatorias (o todas si hay menos)
    quizState.questions = shuffleArray(filteredQuestions).slice(0, Math.min(20, filteredQuestions.length));
    quizState.currentIndex = 0;
    quizState.correct = 0;
    quizState.wrong = 0;
    quizState.streak = 0;
    quizState.bestStreak = 0;
    quizState.score = 0;
    quizState.isPlaying = true;
    
    // Actualizar UI
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizGame').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
    
    document.getElementById('totalQuestions').textContent = quizState.questions.length;
    
    // Mostrar primera pregunta
    showQuestion();
}

function showQuestion() {
    const question = quizState.questions[quizState.currentIndex];
    quizState.answered = false;
    quizState.timer = 30;
    
    // Actualizar progreso
    document.getElementById('currentQuestion').textContent = quizState.currentIndex + 1;
    const progress = ((quizState.currentIndex) / quizState.questions.length) * 100;
    document.getElementById('quizProgressBar').style.width = progress + '%';
    
    // Mostrar pregunta
    document.getElementById('questionCategory').textContent = getCategoryDisplayName(question.category);
    document.getElementById('questionText').textContent = question.question;
    
    // Renderizar respuestas
    const container = document.getElementById('answersContainer');
    container.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        container.appendChild(btn);
    });
    
    // Actualizar stats
    updateQuizStats();
    
    // Iniciar temporizador
    startQuestionTimer();
}

function getCategoryDisplayName(category) {
    const names = {
        'seiri': 'Seiri - Clasificar',
        'seiton': 'Seiton - Ordenar',
        'seiso': 'Seiso - Limpiar',
        'seiketsu': 'Seiketsu - Estandarizar',
        'shitsuke': 'Shitsuke - Disciplina'
    };
    return names[category] || category;
}

function startQuestionTimer() {
    // Limpiar timer anterior
    if (quizState.timerInterval) {
        clearInterval(quizState.timerInterval);
    }
    
    const timerBar = document.getElementById('quizTimerBar');
    timerBar.style.width = '100%';
    timerBar.classList.remove('warning');
    
    quizState.timerInterval = setInterval(() => {
        quizState.timer--;
        const percentage = (quizState.timer / 30) * 100;
        timerBar.style.width = percentage + '%';
        
        if (quizState.timer <= 10) {
            timerBar.classList.add('warning');
        }
        
        if (quizState.timer <= 0) {
            clearInterval(quizState.timerInterval);
            if (!quizState.answered) {
                timeOut();
            }
        }
    }, 1000);
}

function timeOut() {
    quizState.answered = true;
    quizState.wrong++;
    quizState.streak = 0;
    
    const question = quizState.questions[quizState.currentIndex];
    const buttons = document.querySelectorAll('.answer-btn');
    
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        }
    });
    
    showToast('Tiempo agotado!', 'error');
    updateQuizStats();
    
    setTimeout(() => nextQuestion(), 2000);
}

function selectAnswer(selectedIndex) {
    if (quizState.answered) return;
    
    quizState.answered = true;
    clearInterval(quizState.timerInterval);
    
    const question = quizState.questions[quizState.currentIndex];
    const isCorrect = selectedIndex === question.correct;
    const buttons = document.querySelectorAll('.answer-btn');
    
    // Deshabilitar todos los botones
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    if (isCorrect) {
        quizState.correct++;
        quizState.streak++;
        if (quizState.streak > quizState.bestStreak) {
            quizState.bestStreak = quizState.streak;
        }
        
        // Puntuación: base + bonus por tiempo + bonus por racha
        const timeBonus = Math.floor(quizState.timer / 3);
        const streakBonus = Math.min(quizState.streak * 2, 20);
        quizState.score += 10 + timeBonus + streakBonus;
        
        showToast('Correcto! +' + (10 + timeBonus + streakBonus) + ' pts', 'success');
        
        // Verificar logros de racha
        if (quizState.streak >= 5) checkBadge('streak_5');
        if (quizState.streak >= 10) checkBadge('streak_10');
        
        // Actualizar progreso en la categoría
        updateCategoryProgress(question.category);
    } else {
        quizState.wrong++;
        quizState.streak = 0;
        showToast(`Incorrecto. ${question.explanation}`, 'error');
    }
    
    updateQuizStats();
    
    // Siguiente pregunta después de 2 segundos
    setTimeout(() => nextQuestion(), 2000);
}

function updateCategoryProgress(category) {
    // Calcular cuántas preguntas de esta categoría se han respondido correctamente
    const categoryQuestions = quizState.questions.filter(q => q.category === category);
    const answeredCorrectly = categoryQuestions.filter((q, i) => {
        const qIndex = quizState.questions.indexOf(q);
        return qIndex <= quizState.currentIndex && quizState.questions[qIndex].category === category;
    }).length;
    
    // Actualizar progreso (incrementar gradualmente)
    const currentProgress = appState.progress[category] || 0;
    const increment = 5;
    appState.progress[category] = Math.min(100, currentProgress + increment);
}

function updateQuizStats() {
    document.getElementById('quizCorrect').textContent = quizState.correct;
    document.getElementById('quizWrong').textContent = quizState.wrong;
    document.getElementById('quizStreak').textContent = quizState.streak;
}

function nextQuestion() {
    quizState.currentIndex++;
    
    if (quizState.currentIndex >= quizState.questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

function endQuiz() {
    quizState.isPlaying = false;
    clearInterval(quizState.timerInterval);
    
    const totalQuestions = quizState.questions.length;
    const percentage = Math.round((quizState.correct / totalQuestions) * 100);
    
    // Mostrar resultados
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    
    document.getElementById('quizFinalScore').textContent = quizState.score;
    document.getElementById('resultCorrect').textContent = quizState.correct;
    document.getElementById('resultWrong').textContent = quizState.wrong;
    document.getElementById('resultPercentage').textContent = percentage + '%';
    document.getElementById('resultBestStreak').textContent = quizState.bestStreak;
    
    // Actualizar icono y título según resultado
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    
    if (percentage >= 90) {
        resultTitle.textContent = 'Excelente!';
        resultIcon.classList.remove('fail');
    } else if (percentage >= 70) {
        resultTitle.textContent = 'Muy bien!';
        resultIcon.classList.remove('fail');
    } else if (percentage >= 50) {
        resultTitle.textContent = 'Buen intento';
        resultIcon.classList.remove('fail');
    } else {
        resultTitle.textContent = 'Sigue practicando';
        resultIcon.classList.add('fail');
    }
    
    // Guardar en historial
    appState.quizHistory.push({
        date: new Date().toISOString(),
        score: percentage,
        points: quizState.score,
        correct: quizState.correct,
        wrong: quizState.wrong,
        bestStreak: quizState.bestStreak
    });
    
    // Agregar puntos
    appState.totalPoints += quizState.score;
    
    // Verificar logros
    checkBadge('first_quiz');
    if (percentage >= 90) {
        checkBadge('quiz_master');
    }
    checkPointsBadges();
    
    saveState();
    updateDashboard();
}

// Función para volver al inicio del quiz
function resetQuiz() {
    document.getElementById('quizStart').style.display = 'block';
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
}

// Shuffle array (Fisher-Yates)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
