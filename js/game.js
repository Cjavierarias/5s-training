// ========================================
// Juego de Clasificación - 5S Training
// ========================================

let gameState = {
    isPlaying: false,
    timer: 60,
    timerInterval: null,
    score: 0,
    correct: 0,
    errors: 0,
    currentItems: []
};

// Iniciar juego
function startGame() {
    resetGame();
    gameState.isPlaying = true;
    gameState.timer = 60;
    gameState.score = 0;
    gameState.correct = 0;
    gameState.errors = 0;
    
    // Ocultar resultado anterior
    document.getElementById('gameResult').style.display = 'none';
    
    // Generar items aleatorios (12 items)
    gameState.currentItems = shuffleArray([...gameItems]).slice(0, 12);
    renderGameItems();
    
    // Iniciar temporizador
    updateTimerDisplay();
    gameState.timerInterval = setInterval(() => {
        gameState.timer--;
        updateTimerDisplay();
        
        if (gameState.timer <= 0) {
            endGame();
        }
    }, 1000);
}

function resetGame() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.isPlaying = false;
    gameState.timer = 60;
    gameState.score = 0;
    gameState.correct = 0;
    gameState.errors = 0;
    
    document.getElementById('gameTimer').textContent = '60';
    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameResult').style.display = 'none';
    
    // Limpiar zonas de destino
    document.querySelectorAll('.zone-items').forEach(zone => {
        zone.innerHTML = '';
    });
    
    // Limpiar contenedor de items
    document.getElementById('itemsContainer').innerHTML = '';
}

function renderGameItems() {
    const container = document.getElementById('itemsContainer');
    container.innerHTML = '';
    
    gameState.currentItems.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'game-item';
        itemEl.draggable = true;
        itemEl.id = `item-${index}`;
        itemEl.dataset.category = item.category;
        itemEl.textContent = item.name;
        
        // Eventos de drag
        itemEl.addEventListener('dragstart', dragStart);
        itemEl.addEventListener('dragend', dragEnd);
        
        container.appendChild(itemEl);
    });
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('gameTimer');
    timerEl.textContent = gameState.timer;
    
    if (gameState.timer <= 10) {
        timerEl.style.color = '#E53935';
    } else {
        timerEl.style.color = '';
    }
}

// Drag and Drop
function dragStart(e) {
    if (!gameState.isPlaying) {
        e.preventDefault();
        return;
    }
    
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.classList.add('dragging');
}

function dragEnd(e) {
    e.target.classList.remove('dragging');
}

function allowDrop(e) {
    if (!gameState.isPlaying) return;
    
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function dragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function drop(e) {
    if (!gameState.isPlaying) return;
    
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const itemId = e.dataTransfer.getData('text/plain');
    const item = document.getElementById(itemId);
    
    if (!item) return;
    
    const zone = e.currentTarget.dataset.zone;
    const itemCategory = item.dataset.category;
    
    // Verificar si es correcto
    const isCorrect = zone === itemCategory;
    
    if (isCorrect) {
        gameState.correct++;
        gameState.score += 10;
        item.classList.add('correct');
        showToast('Correcto! +10 pts', 'success');
    } else {
        gameState.errors++;
        gameState.score = Math.max(0, gameState.score - 5);
        item.classList.add('wrong');
        showToast(`Incorrecto. Era: ${getCategoryName(itemCategory)}`, 'error');
    }
    
    // Mover item a la zona
    const zoneItems = e.currentTarget.querySelector('.zone-items');
    item.draggable = false;
    zoneItems.appendChild(item);
    
    // Actualizar puntuación
    document.getElementById('gameScore').textContent = gameState.score;
    
    // Verificar si todos los items fueron clasificados
    const remainingItems = document.querySelectorAll('#itemsContainer .game-item');
    if (remainingItems.length === 0) {
        setTimeout(() => endGame(), 500);
    }
}

function getCategoryName(category) {
    const names = {
        'necesario': 'Necesario',
        'no-necesario': 'No Necesario',
        'peligroso': 'Peligroso',
        'basura': 'Basura'
    };
    return names[category] || category;
}

function endGame() {
    clearInterval(gameState.timerInterval);
    gameState.isPlaying = false;
    
    // Calcular puntuación final
    const totalItems = gameState.correct + gameState.errors;
    const percentage = totalItems > 0 ? Math.round((gameState.correct / totalItems) * 100) : 0;
    
    // Bonus por tiempo restante
    const timeBonus = gameState.timer * 2;
    gameState.score += timeBonus;
    
    // Mostrar resultado
    document.getElementById('gameResult').style.display = 'block';
    document.getElementById('finalGameScore').textContent = gameState.score;
    document.getElementById('correctCount').textContent = gameState.correct;
    document.getElementById('errorCount').textContent = gameState.errors;
    
    // Guardar en historial
    appState.gameHistory.push({
        date: new Date().toISOString(),
        score: percentage,
        points: gameState.score,
        correct: gameState.correct,
        errors: gameState.errors
    });
    
    // Agregar puntos al total
    appState.totalPoints += gameState.score;
    
    // Verificar logros
    checkBadge('first_game');
    if (percentage === 100) {
        checkBadge('game_master');
    }
    checkPointsBadges();
    
    saveState();
    updateDashboard();
    
    // Mensaje según resultado
    if (percentage >= 80) {
        showToast('Excelente clasificación!', 'success');
    } else if (percentage >= 60) {
        showToast('Buen trabajo, sigue practicando!', 'info');
    } else {
        showToast('Necesitas más práctica. Inténtalo de nuevo!', 'error');
    }
}

// Utilidades
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
