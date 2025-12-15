// ========================================
// Datos de la Aplicación 5S
// ========================================

// Contenido de los módulos
const modulesData = [
    {
        id: 'seiri',
        title: 'Seiri - Clasificar',
        japanese: '整理',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
        </svg>`,
        description: 'Aprende a separar lo necesario de lo innecesario',
        content: `
            <h2>Seiri - Clasificar (整理)</h2>
            <p><strong>Significado:</strong> Separar lo necesario de lo innecesario y eliminar lo que no se usa.</p>
            
            <h3>Principios Clave</h3>
            <ul>
                <li><strong>Identificar:</strong> Revisar todos los elementos del área de trabajo</li>
                <li><strong>Clasificar:</strong> Determinar qué es necesario y qué no</li>
                <li><strong>Eliminar:</strong> Retirar todo lo que no agrega valor</li>
                <li><strong>Etiquetar:</strong> Usar tarjetas rojas para marcar elementos dudosos</li>
            </ul>
            
            <h3>Beneficios</h3>
            <ul>
                <li>Libera espacio valioso</li>
                <li>Reduce el tiempo de búsqueda</li>
                <li>Mejora la visibilidad del área</li>
                <li>Reduce accidentes y riesgos</li>
            </ul>
            
            <h3>Criterios de Clasificación</h3>
            <table style="width:100%; border-collapse: collapse; margin: 16px 0;">
                <tr style="background: #E3EAF5;">
                    <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Frecuencia de Uso</th>
                    <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Acción</th>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">Uso diario</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Mantener cerca del puesto de trabajo</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">Uso semanal</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Almacenar en el área general</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">Uso mensual</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Almacenar en bodega</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">Sin uso en 1 año</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Considerar eliminación</td>
                </tr>
            </table>
        `
    },
    {
        id: 'seiton',
        title: 'Seiton - Ordenar',
        japanese: '整頓',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>`,
        description: 'Un lugar para cada cosa y cada cosa en su lugar',
        content: `
            <h2>Seiton - Ordenar (整頓)</h2>
            <p><strong>Significado:</strong> Organizar los elementos necesarios de manera que sean fáciles de encontrar, usar y devolver.</p>
            
            <h3>Principios Clave</h3>
            <ul>
                <li><strong>Un lugar para cada cosa:</strong> Definir ubicaciones específicas</li>
                <li><strong>Cada cosa en su lugar:</strong> Mantener el orden constantemente</li>
                <li><strong>Identificación visual:</strong> Etiquetar y señalizar</li>
                <li><strong>Accesibilidad:</strong> Los más usados, más cerca</li>
            </ul>
            
            <h3>Técnicas de Ordenamiento</h3>
            <ul>
                <li><strong>Delimitación:</strong> Marcar áreas con líneas y colores</li>
                <li><strong>Etiquetado:</strong> Identificar cada ubicación</li>
                <li><strong>Tableros de sombras:</strong> Siluetas para herramientas</li>
                <li><strong>Código de colores:</strong> Categorización visual</li>
            </ul>
            
            <h3>Código de Colores Estándar</h3>
            <div style="display: grid; gap: 8px; margin: 16px 0;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 32px; height: 32px; background: #4CAF50; border-radius: 4px;"></div>
                    <span><strong>Verde:</strong> Materiales en proceso, rutas de evacuación</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 32px; height: 32px; background: #FFC107; border-radius: 4px;"></div>
                    <span><strong>Amarillo:</strong> Pasillos, áreas de precaución</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 32px; height: 32px; background: #E53935; border-radius: 4px;"></div>
                    <span><strong>Rojo:</strong> Defectos, productos no conformes</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 32px; height: 32px; background: #2196F3; border-radius: 4px;"></div>
                    <span><strong>Azul:</strong> Materias primas, componentes</span>
                </div>
            </div>
        `
    },
    {
        id: 'seiso',
        title: 'Seiso - Limpiar',
        japanese: '清掃',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/>
            <path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/>
        </svg>`,
        description: 'Mantener el área limpia e identificar problemas',
        content: `
            <h2>Seiso - Limpiar (清掃)</h2>
            <p><strong>Significado:</strong> Mantener el área de trabajo limpia, identificando y eliminando las fuentes de suciedad.</p>
            
            <h3>Principios Clave</h3>
            <ul>
                <li><strong>Limpiar es inspeccionar:</strong> La limpieza permite detectar anomalías</li>
                <li><strong>Prevención:</strong> Identificar y eliminar fuentes de suciedad</li>
                <li><strong>Responsabilidad:</strong> Cada persona limpia su área</li>
                <li><strong>Constancia:</strong> Limpieza diaria, no solo ocasional</li>
            </ul>
            
            <h3>Niveles de Limpieza</h3>
            <ol>
                <li><strong>Macro:</strong> Limpieza general del área</li>
                <li><strong>Individual:</strong> Limpieza del puesto de trabajo</li>
                <li><strong>Micro:</strong> Limpieza de equipos y herramientas</li>
            </ol>
            
            <h3>Plan de Limpieza</h3>
            <ul>
                <li>Definir qué limpiar</li>
                <li>Asignar responsables</li>
                <li>Establecer métodos y frecuencias</li>
                <li>Preparar herramientas de limpieza</li>
                <li>Ejecutar y verificar</li>
            </ul>
            
            <h3>Beneficios</h3>
            <ul>
                <li>Ambiente de trabajo agradable</li>
                <li>Detección temprana de problemas</li>
                <li>Prolongación de vida útil de equipos</li>
                <li>Reducción de accidentes</li>
            </ul>
        `
    },
    {
        id: 'seiketsu',
        title: 'Seiketsu - Estandarizar',
        japanese: '清潔',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>`,
        description: 'Crear normas para mantener las 3S anteriores',
        content: `
            <h2>Seiketsu - Estandarizar (清潔)</h2>
            <p><strong>Significado:</strong> Crear y mantener estándares para asegurar que las primeras 3S se cumplan consistentemente.</p>
            
            <h3>Principios Clave</h3>
            <ul>
                <li><strong>Documentar:</strong> Crear procedimientos claros</li>
                <li><strong>Visualizar:</strong> Hacer visibles los estándares</li>
                <li><strong>Medir:</strong> Establecer indicadores de cumplimiento</li>
                <li><strong>Mejorar:</strong> Actualizar estándares continuamente</li>
            </ul>
            
            <h3>Herramientas de Estandarización</h3>
            <ul>
                <li><strong>Checklists:</strong> Listas de verificación diarias</li>
                <li><strong>Fotos del estado ideal:</strong> Referencias visuales</li>
                <li><strong>Procedimientos operativos:</strong> Instrucciones paso a paso</li>
                <li><strong>Mapas de responsabilidades:</strong> Quién hace qué</li>
            </ul>
            
            <h3>Control Visual</h3>
            <ul>
                <li>Señalización clara y visible</li>
                <li>Indicadores de estado (normal/anormal)</li>
                <li>Límites mínimos y máximos</li>
                <li>Tableros de gestión visual</li>
            </ul>
            
            <h3>Auditorías 5S</h3>
            <ul>
                <li>Frecuencia: Semanal o mensual</li>
                <li>Criterios objetivos y medibles</li>
                <li>Retroalimentación constructiva</li>
                <li>Plan de acciones correctivas</li>
            </ul>
        `
    },
    {
        id: 'shitsuke',
        title: 'Shitsuke - Disciplina',
        japanese: '躾',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>`,
        description: 'Convertir las 5S en hábito y cultura',
        content: `
            <h2>Shitsuke - Disciplina (躾)</h2>
            <p><strong>Significado:</strong> Crear el hábito de respetar y seguir los estándares establecidos, convirtiendo las 5S en parte de la cultura organizacional.</p>
            
            <h3>Principios Clave</h3>
            <ul>
                <li><strong>Compromiso:</strong> Participación de todos los niveles</li>
                <li><strong>Constancia:</strong> Práctica diaria sin excusas</li>
                <li><strong>Ejemplo:</strong> Los líderes deben ser modelo</li>
                <li><strong>Reconocimiento:</strong> Celebrar los logros</li>
            </ul>
            
            <h3>Estrategias para la Disciplina</h3>
            <ul>
                <li><strong>Capacitación continua:</strong> Reforzar conocimientos</li>
                <li><strong>Comunicación:</strong> Mantener informado al equipo</li>
                <li><strong>Incentivos:</strong> Reconocer el buen desempeño</li>
                <li><strong>Seguimiento:</strong> Monitorear el cumplimiento</li>
            </ul>
            
            <h3>Indicadores de Éxito</h3>
            <ul>
                <li>Las 5S se practican sin supervisión</li>
                <li>Los empleados proponen mejoras</li>
                <li>Se mantienen los estándares en el tiempo</li>
                <li>Nuevos empleados adoptan la cultura rápidamente</li>
            </ul>
            
            <h3>Ciclo de Mejora Continua</h3>
            <ol>
                <li><strong>Planificar:</strong> Definir objetivos de mejora</li>
                <li><strong>Hacer:</strong> Implementar las mejoras</li>
                <li><strong>Verificar:</strong> Evaluar resultados</li>
                <li><strong>Actuar:</strong> Estandarizar o ajustar</li>
            </ol>
        `
    }
];

// Items para el juego de clasificación
const gameItems = [
    // Necesarios
    { name: 'Herramienta de uso diario', category: 'necesario' },
    { name: 'Manual de procedimientos', category: 'necesario' },
    { name: 'EPP (casco, guantes)', category: 'necesario' },
    { name: 'Computadora de trabajo', category: 'necesario' },
    { name: 'Documentos del proyecto actual', category: 'necesario' },
    { name: 'Teléfono de trabajo', category: 'necesario' },
    { name: 'Calibrador de precisión', category: 'necesario' },
    { name: 'Kit de primeros auxilios', category: 'necesario' },
    
    // No necesarios
    { name: 'Revistas viejas', category: 'no-necesario' },
    { name: 'Cajas vacías acumuladas', category: 'no-necesario' },
    { name: 'Decoraciones personales excesivas', category: 'no-necesario' },
    { name: 'Herramientas duplicadas', category: 'no-necesario' },
    { name: 'Documentos de hace 5 años', category: 'no-necesario' },
    { name: 'Muestras de productos antiguos', category: 'no-necesario' },
    { name: 'Catálogos obsoletos', category: 'no-necesario' },
    { name: 'Equipos sin uso por 2 años', category: 'no-necesario' },
    
    // Peligrosos
    { name: 'Cable eléctrico pelado', category: 'peligroso' },
    { name: 'Químico sin etiqueta', category: 'peligroso' },
    { name: 'Escalera dañada', category: 'peligroso' },
    { name: 'Extintor vencido', category: 'peligroso' },
    { name: 'Herramienta con filo expuesto', category: 'peligroso' },
    { name: 'Piso mojado sin señalizar', category: 'peligroso' },
    { name: 'Cilindro de gas sin asegurar', category: 'peligroso' },
    { name: 'Máquina sin guarda de seguridad', category: 'peligroso' },
    
    // Basura
    { name: 'Envolturas de comida', category: 'basura' },
    { name: 'Papel usado y arrugado', category: 'basura' },
    { name: 'Vasos desechables', category: 'basura' },
    { name: 'Cajas de cartón rotas', category: 'basura' },
    { name: 'Bolsas plásticas', category: 'basura' },
    { name: 'Residuos de material', category: 'basura' },
    { name: 'Trapos sucios', category: 'basura' },
    { name: 'Etiquetas despegadas', category: 'basura' }
];

// Preguntas del Quiz
const quizQuestions = [
    // SEIRI - Clasificar
    {
        id: 1,
        category: 'seiri',
        difficulty: 'basica',
        question: '¿Qué significa "Seiri" en la metodología 5S?',
        options: ['Ordenar', 'Clasificar', 'Limpiar', 'Estandarizar'],
        correct: 1,
        explanation: 'Seiri significa Clasificar: separar lo necesario de lo innecesario.'
    },
    {
        id: 2,
        category: 'seiri',
        difficulty: 'basica',
        question: '¿Cuál es el objetivo principal de Seiri?',
        options: [
            'Mantener el área limpia',
            'Crear procedimientos',
            'Eliminar lo innecesario del área de trabajo',
            'Ordenar las herramientas'
        ],
        correct: 2,
        explanation: 'El objetivo de Seiri es eliminar todo lo que no es necesario para el trabajo.'
    },
    {
        id: 3,
        category: 'seiri',
        difficulty: 'intermedia',
        question: '¿Qué herramienta se utiliza comúnmente para marcar elementos a evaluar en Seiri?',
        options: ['Etiqueta verde', 'Tarjeta roja', 'Cinta amarilla', 'Sticker azul'],
        correct: 1,
        explanation: 'La tarjeta roja se usa para identificar elementos que necesitan ser evaluados para posible eliminación.'
    },
    {
        id: 4,
        category: 'seiri',
        difficulty: 'intermedia',
        question: 'Un elemento que no se ha usado en 12 meses debería:',
        options: [
            'Guardarse por si acaso',
            'Considerarse para eliminación',
            'Dejarse donde está',
            'Pintarse de rojo'
        ],
        correct: 1,
        explanation: 'Si un elemento no se usa en un año, debe considerarse seriamente su eliminación.'
    },
    {
        id: 5,
        category: 'seiri',
        difficulty: 'avanzada',
        question: '¿Cuál es el criterio principal para clasificar un elemento como "necesario"?',
        options: [
            'Su valor económico',
            'Su antigüedad',
            'Su frecuencia de uso y valor para el trabajo',
            'Su tamaño'
        ],
        correct: 2,
        explanation: 'La frecuencia de uso y el valor que aporta al trabajo son los criterios principales.'
    },
    
    // SEITON - Ordenar
    {
        id: 6,
        category: 'seiton',
        difficulty: 'basica',
        question: '¿Cuál es el principio fundamental de Seiton?',
        options: [
            'Limpiar todo',
            'Un lugar para cada cosa y cada cosa en su lugar',
            'Eliminar lo innecesario',
            'Crear documentos'
        ],
        correct: 1,
        explanation: 'Seiton establece que cada elemento debe tener una ubicación definida y respetarse.'
    },
    {
        id: 7,
        category: 'seiton',
        difficulty: 'basica',
        question: '¿Qué significa Seiton?',
        options: ['Clasificar', 'Limpiar', 'Ordenar', 'Disciplina'],
        correct: 2,
        explanation: 'Seiton significa Ordenar: organizar los elementos para facilitar su uso.'
    },
    {
        id: 8,
        category: 'seiton',
        difficulty: 'intermedia',
        question: '¿Qué es un "tablero de sombras"?',
        options: [
            'Un tablero para proyectar presentaciones',
            'Una herramienta visual que muestra la silueta de cada herramienta',
            'Un panel de control',
            'Un tablero de anuncios'
        ],
        correct: 1,
        explanation: 'El tablero de sombras muestra la silueta de cada herramienta para identificar rápidamente si falta alguna.'
    },
    {
        id: 9,
        category: 'seiton',
        difficulty: 'intermedia',
        question: 'Las herramientas de uso frecuente deben ubicarse:',
        options: [
            'En el almacén central',
            'Lo más cerca posible del punto de uso',
            'En cualquier lugar disponible',
            'En la oficina del supervisor'
        ],
        correct: 1,
        explanation: 'Las herramientas de uso frecuente deben estar accesibles para minimizar movimientos.'
    },
    {
        id: 10,
        category: 'seiton',
        difficulty: 'avanzada',
        question: '¿Qué criterio se aplica para definir la ubicación óptima de un elemento?',
        options: [
            'El color del elemento',
            'Frecuencia de uso, ergonomía y flujo de trabajo',
            'El tamaño del elemento únicamente',
            'La preferencia personal del operador'
        ],
        correct: 1,
        explanation: 'La ubicación debe considerar frecuencia de uso, ergonomía y el flujo natural del trabajo.'
    },
    
    // SEISO - Limpiar
    {
        id: 11,
        category: 'seiso',
        difficulty: 'basica',
        question: '¿Qué significa Seiso?',
        options: ['Ordenar', 'Estandarizar', 'Limpiar', 'Disciplina'],
        correct: 2,
        explanation: 'Seiso significa Limpiar: mantener el área de trabajo limpia.'
    },
    {
        id: 12,
        category: 'seiso',
        difficulty: 'basica',
        question: 'En Seiso, "limpiar es inspeccionar" significa que:',
        options: [
            'Solo los inspectores deben limpiar',
            'La limpieza permite detectar problemas y anomalías',
            'Hay que limpiar solo cuando hay inspección',
            'La limpieza es opcional'
        ],
        correct: 1,
        explanation: 'Al limpiar, podemos detectar fugas, desgastes, daños y otros problemas.'
    },
    {
        id: 13,
        category: 'seiso',
        difficulty: 'intermedia',
        question: '¿Cuál es el enfoque correcto de Seiso?',
        options: [
            'Limpiar solo cuando está muy sucio',
            'Contratar personal de limpieza externo',
            'Cada persona es responsable de limpiar su área de trabajo',
            'Limpiar solo los fines de semana'
        ],
        correct: 2,
        explanation: 'En 5S, cada persona es responsable de mantener limpia su área de trabajo.'
    },
    {
        id: 14,
        category: 'seiso',
        difficulty: 'intermedia',
        question: '¿Qué se debe hacer al encontrar una fuente de suciedad recurrente?',
        options: [
            'Limpiar más frecuentemente',
            'Identificar y eliminar la causa raíz',
            'Ignorarla',
            'Reportarla y olvidarla'
        ],
        correct: 1,
        explanation: 'Se debe identificar y eliminar la causa raíz para prevenir la recurrencia.'
    },
    {
        id: 15,
        category: 'seiso',
        difficulty: 'avanzada',
        question: '¿Cuáles son los tres niveles de limpieza en 5S?',
        options: [
            'Rápida, normal y profunda',
            'Macro (área general), Individual (puesto) y Micro (equipos)',
            'Diaria, semanal y mensual',
            'Superficial, media y total'
        ],
        correct: 1,
        explanation: 'Los tres niveles son: Macro (área general), Individual (puesto de trabajo) y Micro (equipos/herramientas).'
    },
    
    // SEIKETSU - Estandarizar
    {
        id: 16,
        category: 'seiketsu',
        difficulty: 'basica',
        question: '¿Qué significa Seiketsu?',
        options: ['Clasificar', 'Estandarizar', 'Limpiar', 'Ordenar'],
        correct: 1,
        explanation: 'Seiketsu significa Estandarizar: crear normas para mantener las 3S anteriores.'
    },
    {
        id: 17,
        category: 'seiketsu',
        difficulty: 'basica',
        question: '¿Cuál es el propósito principal de Seiketsu?',
        options: [
            'Limpiar más rápido',
            'Mantener y asegurar las primeras 3S de forma consistente',
            'Comprar nuevos equipos',
            'Reducir personal'
        ],
        correct: 1,
        explanation: 'Seiketsu busca mantener los logros de Seiri, Seiton y Seiso de manera sostenida.'
    },
    {
        id: 18,
        category: 'seiketsu',
        difficulty: 'intermedia',
        question: '¿Qué herramienta es esencial para Seiketsu?',
        options: [
            'Martillo',
            'Checklists y procedimientos documentados',
            'Pintura',
            'Calculadora'
        ],
        correct: 1,
        explanation: 'Los checklists y procedimientos ayudan a estandarizar y verificar el cumplimiento.'
    },
    {
        id: 19,
        category: 'seiketsu',
        difficulty: 'intermedia',
        question: 'El control visual en Seiketsu sirve para:',
        options: [
            'Decorar el área',
            'Hacer que las condiciones normales y anormales sean evidentes',
            'Cumplir requisitos de auditoría',
            'Impresionar a los visitantes'
        ],
        correct: 1,
        explanation: 'El control visual permite identificar rápidamente si algo está fuera de lo normal.'
    },
    {
        id: 20,
        category: 'seiketsu',
        difficulty: 'avanzada',
        question: '¿Con qué frecuencia se recomienda realizar auditorías 5S?',
        options: [
            'Solo cuando hay problemas',
            'Una vez al año',
            'Semanal o mensualmente, según la madurez del programa',
            'Nunca, las 5S son autodisciplina'
        ],
        correct: 2,
        explanation: 'Las auditorías periódicas (semanales o mensuales) ayudan a mantener el sistema.'
    },
    
    // SHITSUKE - Disciplina
    {
        id: 21,
        category: 'shitsuke',
        difficulty: 'basica',
        question: '¿Qué significa Shitsuke?',
        options: ['Ordenar', 'Limpiar', 'Clasificar', 'Disciplina'],
        correct: 3,
        explanation: 'Shitsuke significa Disciplina: convertir las 5S en un hábito.'
    },
    {
        id: 22,
        category: 'shitsuke',
        difficulty: 'basica',
        question: '¿Por qué Shitsuke es considerada la S más difícil?',
        options: [
            'Requiere más dinero',
            'Necesita cambiar el comportamiento y crear hábitos duraderos',
            'Es muy técnica',
            'Requiere equipos especiales'
        ],
        correct: 1,
        explanation: 'Cambiar comportamientos y crear nuevos hábitos es el mayor desafío de las 5S.'
    },
    {
        id: 23,
        category: 'shitsuke',
        difficulty: 'intermedia',
        question: '¿Cuál es el rol de los líderes en Shitsuke?',
        options: [
            'Solo supervisar',
            'Dar el ejemplo y ser modelo del comportamiento esperado',
            'Castigar a quienes no cumplan',
            'Delegar todo al equipo'
        ],
        correct: 1,
        explanation: 'Los líderes deben ser modelo del comportamiento 5S que esperan de su equipo.'
    },
    {
        id: 24,
        category: 'shitsuke',
        difficulty: 'intermedia',
        question: 'Un indicador de éxito en Shitsuke es cuando:',
        options: [
            'El jefe está siempre supervisando',
            'Las personas practican las 5S sin necesidad de supervisión',
            'Se aplican multas por incumplimiento',
            'Solo algunos cumplen'
        ],
        correct: 1,
        explanation: 'El éxito de Shitsuke se mide cuando las 5S se practican naturalmente, sin supervisión.'
    },
    {
        id: 25,
        category: 'shitsuke',
        difficulty: 'avanzada',
        question: '¿Qué ciclo de mejora continua se relaciona con Shitsuke?',
        options: [
            'ABC',
            'PDCA (Planificar, Hacer, Verificar, Actuar)',
            'XYZ',
            'FIFO'
        ],
        correct: 1,
        explanation: 'El ciclo PDCA es fundamental para la mejora continua en 5S.'
    },
    
    // Preguntas generales y mixtas
    {
        id: 26,
        category: 'seiri',
        difficulty: 'avanzada',
        question: '¿En qué orden correcto se implementan las 5S?',
        options: [
            'Seiton, Seiri, Seiso, Shitsuke, Seiketsu',
            'Seiri, Seiton, Seiso, Seiketsu, Shitsuke',
            'Seiso, Seiton, Seiri, Seiketsu, Shitsuke',
            'Shitsuke, Seiketsu, Seiso, Seiton, Seiri'
        ],
        correct: 1,
        explanation: 'El orden correcto es: Seiri (Clasificar), Seiton (Ordenar), Seiso (Limpiar), Seiketsu (Estandarizar), Shitsuke (Disciplina).'
    },
    {
        id: 27,
        category: 'seiton',
        difficulty: 'avanzada',
        question: '¿Qué principio de ergonomía se aplica en Seiton?',
        options: [
            'Los objetos pesados arriba',
            'Todo al mismo nivel',
            'Los objetos de uso frecuente a la altura de la cintura o pecho',
            'Los objetos pequeños lejos del alcance'
        ],
        correct: 2,
        explanation: 'Los objetos de uso frecuente deben estar a una altura ergonómica para evitar movimientos innecesarios.'
    },
    {
        id: 28,
        category: 'seiso',
        difficulty: 'avanzada',
        question: '¿Qué relación existe entre Seiso y el mantenimiento preventivo?',
        options: [
            'No tienen relación',
            'Son lo mismo',
            'La limpieza permite detectar problemas antes de que causen fallas',
            'El mantenimiento reemplaza a Seiso'
        ],
        correct: 2,
        explanation: 'La limpieza regular permite detectar desgastes, fugas y otros problemas antes de que se conviertan en fallas mayores.'
    },
    {
        id: 29,
        category: 'seiketsu',
        difficulty: 'basica',
        question: '¿Qué significa que un área tenga "control visual"?',
        options: [
            'Tiene cámaras de seguridad',
            'Cualquier persona puede ver rápidamente si las cosas están en orden',
            'Está pintada de colores brillantes',
            'Tiene muchos letreros'
        ],
        correct: 1,
        explanation: 'El control visual permite que cualquiera identifique rápidamente el estado normal o anormal del área.'
    },
    {
        id: 30,
        category: 'shitsuke',
        difficulty: 'avanzada',
        question: '¿Cuál es la mejor forma de sostener las 5S en el tiempo?',
        options: [
            'Aplicar castigos severos',
            'Combinar capacitación, reconocimiento, auditorías y liderazgo ejemplar',
            'Contratar más supervisores',
            'Hacer las 5S solo una vez al año'
        ],
        correct: 1,
        explanation: 'La sostenibilidad requiere un enfoque integral: formación, reconocimiento positivo, seguimiento y liderazgo.'
    }
];

// Logros/Badges
const badgesData = [
    { id: 'first_module', name: 'Primer Paso', description: 'Completa tu primer módulo', icon: 'star' },
    { id: 'all_modules', name: 'Maestro 5S', description: 'Completa todos los módulos', icon: 'award' },
    { id: 'first_game', name: 'Clasificador Novato', description: 'Completa tu primer juego', icon: 'play' },
    { id: 'game_master', name: 'Clasificador Experto', description: 'Obtén 100% en el juego', icon: 'target' },
    { id: 'first_quiz', name: 'Estudiante 5S', description: 'Completa tu primer quiz', icon: 'book' },
    { id: 'quiz_master', name: 'Experto en 5S', description: 'Obtén más del 90% en un quiz', icon: 'trophy' },
    { id: 'streak_5', name: 'Racha de 5', description: 'Consigue 5 respuestas correctas seguidas', icon: 'zap' },
    { id: 'streak_10', name: 'Racha de 10', description: 'Consigue 10 respuestas correctas seguidas', icon: 'flame' },
    { id: 'points_100', name: 'Centenario', description: 'Acumula 100 puntos', icon: 'coin' },
    { id: 'points_500', name: 'Medio Millar', description: 'Acumula 500 puntos', icon: 'gem' }
];
