// ========================================
// App Principal - 5S Training
// ========================================

// Estado de la aplicación
let appState = {
    progress: {
        seiri: 0,
        seiton: 0,
        seiso: 0,
        seiketsu: 0,
        shitsuke: 0
    },
    totalPoints: 0,
    badges: [],
    quizHistory: [],
    gameHistory: [],
    completedModules: []
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderModules();
    updateDashboard();
    renderBadges();
    renderCharts();
});

// Guardar/Cargar estado de localStorage
function saveState() {
    localStorage.setItem('5s_training_state', JSON.stringify(appState));
}

function loadState() {
    const saved = localStorage.getItem('5s_training_state');
    if (saved) {
        appState = JSON.parse(saved);
    }
}

// Navegación
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    // Cerrar menú móvil si está abierto
    document.querySelector('.nav-menu').classList.remove('active');
    
    // Actualizar gráficos si es la sección de resultados
    if (sectionId === 'results') {
        renderCharts();
        renderStatsTable();
    }
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}

function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
}

// Dashboard
function updateDashboard() {
    // Calcular progreso total
    const progressValues = Object.values(appState.progress);
    const totalProgress = progressValues.reduce((a, b) => a + b, 0) / progressValues.length;
    
    // Actualizar valores
    document.getElementById('progressText').textContent = Math.round(totalProgress) + '%';
    document.getElementById('totalPoints').textContent = appState.totalPoints;
    document.getElementById('totalBadges').textContent = appState.badges.length;
    
    // Dibujar anillo de progreso
    drawProgressRing(totalProgress);
}

function drawProgressRing(progress) {
    const canvas = document.getElementById('progressRing');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 50;
    const lineWidth = 10;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fondo del anillo
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    
    // Progreso
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (2 * Math.PI * progress / 100);
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();
}

// Módulos
function renderModules() {
    const grid = document.getElementById('modulesGrid');
    grid.innerHTML = '';
    
    modulesData.forEach((module, index) => {
        const isCompleted = appState.completedModules.includes(module.id);
        const progress = appState.progress[module.id] || 0;
        
        const card = document.createElement('div');
        card.className = `module-card${isCompleted ? ' completed' : ''}`;
        card.onclick = () => openModule(module.id);
        
        card.innerHTML = `
            <div class="module-icon">${module.icon}</div>
            <h3>${module.title}</h3>
            <p>${module.description}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function openModule(moduleId) {
    const module = modulesData.find(m => m.id === moduleId);
    if (!module) return;
    
    const modal = document.getElementById('moduleModal');
    const content = document.getElementById('moduleContent');
    
    content.innerHTML = `
        ${module.content}
        <div style="margin-top: 32px; text-align: center;">
            <button class="btn-primary" onclick="completeModule('${moduleId}')">
                Marcar como Completado
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('moduleModal').classList.remove('active');
}

function completeModule(moduleId) {
    if (!appState.completedModules.includes(moduleId)) {
        appState.completedModules.push(moduleId);
        appState.progress[moduleId] = 100;
        appState.totalPoints += 50;
        
        // Verificar logros
        checkBadge('first_module');
        if (appState.completedModules.length === 5) {
            checkBadge('all_modules');
        }
        checkPointsBadges();
        
        saveState();
        renderModules();
        updateDashboard();
        showToast('Módulo completado! +50 puntos', 'success');
    }
    closeModal();
}

// Badges/Logros
function checkBadge(badgeId) {
    if (!appState.badges.includes(badgeId)) {
        appState.badges.push(badgeId);
        const badge = badgesData.find(b => b.id === badgeId);
        if (badge) {
            showToast(`Logro desbloqueado: ${badge.name}!`, 'success');
        }
        saveState();
        renderBadges();
    }
}

function checkPointsBadges() {
    if (appState.totalPoints >= 100) checkBadge('points_100');
    if (appState.totalPoints >= 500) checkBadge('points_500');
}

function renderBadges() {
    const grid = document.getElementById('badgesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    badgesData.forEach(badge => {
        const isUnlocked = appState.badges.includes(badge.id);
        
        const badgeEl = document.createElement('div');
        badgeEl.className = `badge-item ${isUnlocked ? 'unlocked' : 'locked'}`;
        
        badgeEl.innerHTML = `
            <div class="badge-icon">
                ${getBadgeIcon(badge.icon)}
            </div>
            <div class="badge-name">${badge.name}</div>
        `;
        
        badgeEl.title = badge.description;
        grid.appendChild(badgeEl);
    });
}

function getBadgeIcon(iconName) {
    const icons = {
        'star': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
        'award': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
        'play': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
        'target': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
        'book': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
        'trophy': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
        'zap': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        'flame': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
        'coin': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/><path d="M8 10h8"/><path d="M8 14h8"/></svg>',
        'gem': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M12 22L2 9h20z"/><path d="M12 22V9"/></svg>'
    };
    return icons[iconName] || icons['star'];
}

// Charts
function renderCharts() {
    renderRadarChart();
    renderLineChart();
}

function renderRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;
    
    // Destruir chart existente si hay
    if (window.radarChartInstance) {
        window.radarChartInstance.destroy();
    }
    
    window.radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Seiri', 'Seiton', 'Seiso', 'Seiketsu', 'Shitsuke'],
            datasets: [{
                label: 'Tu Progreso',
                data: [
                    appState.progress.seiri,
                    appState.progress.seiton,
                    appState.progress.seiso,
                    appState.progress.seiketsu,
                    appState.progress.shitsuke
                ],
                backgroundColor: 'rgba(42, 92, 170, 0.2)',
                borderColor: '#2A5CAA',
                borderWidth: 2,
                pointBackgroundColor: '#2A5CAA'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function renderLineChart() {
    const ctx = document.getElementById('lineChart');
    if (!ctx) return;
    
    if (window.lineChartInstance) {
        window.lineChartInstance.destroy();
    }
    
    // Obtener últimos 10 resultados de quiz
    const quizScores = appState.quizHistory.slice(-10).map(h => h.score);
    const labels = quizScores.map((_, i) => `Intento ${i + 1}`);
    
    window.lineChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.length ? labels : ['Sin datos'],
            datasets: [{
                label: 'Puntuación Quiz',
                data: quizScores.length ? quizScores : [0],
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function renderStatsTable() {
    const table = document.getElementById('statsTable');
    if (!table) return;
    
    const totalQuizzes = appState.quizHistory.length;
    const avgScore = totalQuizzes > 0 
        ? Math.round(appState.quizHistory.reduce((a, b) => a + b.score, 0) / totalQuizzes)
        : 0;
    const totalGames = appState.gameHistory.length;
    const avgGameScore = totalGames > 0
        ? Math.round(appState.gameHistory.reduce((a, b) => a + b.score, 0) / totalGames)
        : 0;
    
    table.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Métrica</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Módulos completados</td>
                    <td>${appState.completedModules.length} / 5</td>
                </tr>
                <tr>
                    <td>Quizzes realizados</td>
                    <td>${totalQuizzes}</td>
                </tr>
                <tr>
                    <td>Promedio Quiz</td>
                    <td>${avgScore}%</td>
                </tr>
                <tr>
                    <td>Juegos completados</td>
                    <td>${totalGames}</td>
                </tr>
                <tr>
                    <td>Promedio Juego</td>
                    <td>${avgGameScore}%</td>
                </tr>
                <tr>
                    <td>Puntos totales</td>
                    <td>${appState.totalPoints}</td>
                </tr>
                <tr>
                    <td>Logros desbloqueados</td>
                    <td>${appState.badges.length} / ${badgesData.length}</td>
                </tr>
            </tbody>
        </table>
    `;
}

// Export
function exportData(format) {
    const data = {
        exportDate: new Date().toISOString(),
        ...appState
    };
    
    let content, filename, type;
    
    if (format === 'json') {
        content = JSON.stringify(data, null, 2);
        filename = '5s_training_data.json';
        type = 'application/json';
    } else {
        // CSV
        const rows = [
            ['Métrica', 'Valor'],
            ['Progreso Seiri', appState.progress.seiri + '%'],
            ['Progreso Seiton', appState.progress.seiton + '%'],
            ['Progreso Seiso', appState.progress.seiso + '%'],
            ['Progreso Seiketsu', appState.progress.seiketsu + '%'],
            ['Progreso Shitsuke', appState.progress.shitsuke + '%'],
            ['Puntos Totales', appState.totalPoints],
            ['Módulos Completados', appState.completedModules.length],
            ['Logros', appState.badges.length]
        ];
        content = rows.map(r => r.join(',')).join('\n');
        filename = '5s_training_data.csv';
        type = 'text/csv';
    }
    
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    
    showToast(`Datos exportados como ${format.toUpperCase()}`, 'success');
}

function resetAllData() {
    if (confirm('¿Estás seguro de que quieres eliminar todos tus datos? Esta acción no se puede deshacer.')) {
        localStorage.removeItem('5s_training_state');
        appState = {
            progress: { seiri: 0, seiton: 0, seiso: 0, seiketsu: 0, shitsuke: 0 },
            totalPoints: 0,
            badges: [],
            quizHistory: [],
            gameHistory: [],
            completedModules: []
        };
        updateDashboard();
        renderModules();
        renderBadges();
        renderCharts();
        renderStatsTable();
        showToast('Todos los datos han sido eliminados', 'info');
    }
}

// Toast notifications
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span>${message}</span>
    `;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 4000);
}

// Cerrar modal con Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Cerrar modal al hacer clic fuera
document.getElementById('moduleModal')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});
