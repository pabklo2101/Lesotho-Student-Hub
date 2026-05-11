// Visualizer Controller

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const algorithms = new SortingAlgorithms();

let array = [];
let isSorting = false;
let animationRunning = false;

// Set canvas size
function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Generate random array
function generateArray() {
    const size = parseInt(document.getElementById('arraySize').value);
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
    draw();
}

// Draw bars on canvas
function draw(highlightIndices = [], sortedIndices = []) {
    const barWidth = canvas.width / array.length;
    const maxValue = Math.max(...array);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < array.length; i++) {
        const barHeight = (array[i] / maxValue) * (canvas.height - 20);
        const x = i * barWidth;
        const y = canvas.height - barHeight;
        
        // Determine color
        let color = '#667eea'; // Default blue
        if (sortedIndices.includes(i)) {
            color = '#4ecdc4'; // Green for sorted
        } else if (highlightIndices.includes(i)) {
            color = '#ff6b6b'; // Red for comparing
        }
        
        // Draw bar
        ctx.fillStyle = color;
        ctx.fillRect(x, y, barWidth - 2, barHeight);
        
        // Draw border
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, barWidth - 2, barHeight);
    }
}

// Update statistics
function updateStats() {
    document.getElementById('comparisons').textContent = algorithms.comparisons;
    document.getElementById('swaps').textContent = algorithms.swaps;
}

// Start sorting animation
async function startSort() {
    if (isSorting) return;
    
    isSorting = true;
    animationRunning = true;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('status').textContent = 'Sorting...';
    
    const algorithm = document.getElementById('algorithm').value;
    const speed = 101 - parseInt(document.getElementById('speed').value);
    const startTime = performance.now();
    
    // Create a copy for sorting
    const sortArray = [...array];
    
    switch (algorithm) {
        case 'bubble':
            await sortWithVisualization(algorithms.bubbleSort.bind(algorithms), sortArray, speed);
            break;
        case 'selection':
            await sortWithVisualization(algorithms.selectionSort.bind(algorithms), sortArray, speed);
            break;
        case 'insertion':
            await sortWithVisualization(algorithms.insertionSort.bind(algorithms), sortArray, speed);
            break;
        case 'merge':
            await sortWithVisualization(algorithms.mergeSort.bind(algorithms), sortArray, speed);
            break;
    }
    
    array = sortArray;
    const endTime = performance.now();
    const elapsed = Math.round(endTime - startTime);
    
    document.getElementById('time').textContent = elapsed + 'ms';
    document.getElementById('status').textContent = 'Complete!';
    draw([], Array.from({ length: array.length }, (_, i) => i));
    
    isSorting = false;
    document.getElementById('startBtn').disabled = false;
}

async function sortWithVisualization(sortFunc, arr, speed) {
    await sortFunc(arr, speed);
    updateStats();
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', startSort);
document.getElementById('resetBtn').addEventListener('click', () => {
    if (!isSorting) {
        generateArray();
        document.getElementById('comparisons').textContent = '0';
        document.getElementById('swaps').textContent = '0';
        document.getElementById('time').textContent = '0ms';
        document.getElementById('status').textContent = 'Ready';
    }
});

document.getElementById('randomBtn').addEventListener('click', () => {
    if (!isSorting) {
        generateArray();
    }
});

document.getElementById('arraySize').addEventListener('input', (e) => {
    if (!isSorting) {
        document.getElementById('sizeDisplay').textContent = e.target.value;
        generateArray();
    }
});

document.getElementById('speed').addEventListener('input', (e) => {
    document.getElementById('speedDisplay').textContent = (101 - parseInt(e.target.value)) + 'ms';
});

// Initialize
generateArray();