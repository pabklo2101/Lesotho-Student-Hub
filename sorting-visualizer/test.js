// Test Suite for Sorting Algorithms

const testCases = [
    {
        name: 'Small Array (5 elements)',
        input: [64, 34, 25, 12, 22],
        expected: [12, 22, 25, 34, 64],
        description: 'Testing basic functionality with small array'
    },
    {
        name: 'Already Sorted Array',
        input: [1, 2, 3, 4, 5],
        expected: [1, 2, 3, 4, 5],
        description: 'Array that is already in sorted order'
    },
    {
        name: 'Reverse Sorted Array',
        input: [5, 4, 3, 2, 1],
        expected: [1, 2, 3, 4, 5],
        description: 'Array in completely reverse order'
    },
    {
        name: 'Single Element',
        input: [42],
        expected: [42],
        description: 'Edge case with single element'
    },
    {
        name: 'Two Elements',
        input: [2, 1],
        expected: [1, 2],
        description: 'Minimal array with two elements'
    },
    {
        name: 'Duplicate Elements',
        input: [5, 2, 5, 1, 2, 5, 3],
        expected: [1, 2, 2, 3, 5, 5, 5],
        description: 'Array with many duplicate values'
    },
    {
        name: 'Negative Numbers',
        input: [3, -1, 4, -5, 2],
        expected: [-5, -1, 2, 3, 4],
        description: 'Array containing negative numbers'
    },
    {
        name: 'Large Array (1000 elements)',
        input: (() => {
            const arr = [];
            for (let i = 0; i < 1000; i++) {
                arr.push(Math.floor(Math.random() * 1000));
            }
            return arr;
        })(),
        expected: null, // Will verify by checking if sorted
        description: 'Performance test with 1000 random elements',
        isLarge: true
    },
    {
        name: 'Algorithm Comparison',
        input: [64, 34, 25, 12, 22, 11, 90],
        expected: [11, 12, 22, 25, 34, 64, 90],
        description: 'Testing all algorithms produce same result',
        compareAll: true
    }
];

const algorithms = new SortingAlgorithms();
let testResults = [];

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, i) => val === arr2[i]);
}

async function runTest(testCase, algorithm) {
    const input = [...testCase.input];
    const startTime = performance.now();
    let result, comparisons, swaps;
    
    try {
        if (algorithm === 'bubble') {
            result = await algorithms.bubbleSort(input, 0);
        } else if (algorithm === 'selection') {
            result = await algorithms.selectionSort(input, 0);
        } else if (algorithm === 'insertion') {
            result = await algorithms.insertionSort(input, 0);
        } else if (algorithm === 'merge') {
            result = await algorithms.mergeSort(input, 0);
        }
        
        const endTime = performance.now();
        const time = Math.round(endTime - startTime);
        comparisons = algorithms.comparisons;
        swaps = algorithms.swaps;
        
        // Verify result
        let passed = false;
        if (testCase.isLarge) {
            passed = isSorted(result);
        } else if (testCase.expected) {
            passed = arraysEqual(result, testCase.expected);
        } else {
            passed = isSorted(result);
        }
        
        return {
            passed,
            time,
            comparisons,
            swaps,
            error: null
        };
    } catch (error) {
        return {
            passed: false,
            time: 0,
            comparisons: 0,
            swaps: 0,
            error: error.message
        };
    }
}

async function runAllTests() {
    const runAllBtn = document.getElementById('runAllBtn');
    const testResultsDiv = document.getElementById('testResults');
    const summaryDiv = document.getElementById('summary');
    
    runAllBtn.disabled = true;
    testResultsDiv.innerHTML = '<div class="loading"><span class="spinner"></span>Running tests...</div>';
    
    testResults = [];
    const algorithms_list = ['bubble', 'selection', 'insertion', 'merge'];
    const startTime = performance.now();
    
    for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        const testResult = {
            name: testCase.name,
            description: testCase.description,
            algorithms: {}
        };
        
        for (const algo of algorithms_list) {
            const result = await runTest(testCase, algo);
            testResult.algorithms[algo] = result;
        }
        
        testResults.push(testResult);
        displayTestResults();
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const endTime = performance.now();
    const totalTime = Math.round(endTime - startTime);
    
    displaySummary(totalTime);
    runAllBtn.disabled = false;
}

function displayTestResults() {
    const testResultsDiv = document.getElementById('testResults');
    testResultsDiv.innerHTML = '';
    
    testResults.forEach((testResult) => {
        const allPassed = Object.values(testResult.algorithms).every(r => r.passed);
        const anyFailed = Object.values(testResult.algorithms).some(r => !r.passed);
        
        const testDiv = document.createElement('div');
        testDiv.className = `test-case ${allPassed ? 'passed' : 'failed'}`;
        
        let metricsHTML = '<div class="test-metrics">';
        const firstResult = Object.values(testResult.algorithms)[0];
        metricsHTML += `<div class="metric">
            <span class="metric-label">Avg Time:</span>
            <span class="metric-value">${Math.round(Object.values(testResult.algorithms).reduce((sum, r) => sum + r.time, 0) / 4)}ms</span>
        </div>`;
        metricsHTML += `<div class="metric">
            <span class="metric-label">Comparisons:</span>
            <span class="metric-value">${firstResult.comparisons}</span>
        </div>`;
        metricsHTML += `<div class="metric">
            <span class="metric-label">Swaps:</span>
            <span class="metric-value">${firstResult.swaps}</span>
        </div></div>`;
        
        testDiv.innerHTML = `
            <div class="test-header">
                <div class="test-status">${allPassed ? '✓' : '✗'}</div>
                <div>
                    <div class="test-title">${testResult.name}</div>
                    <div class="test-details">${testResult.description}</div>
                </div>
            </div>
            ${metricsHTML}
        `;
        
        testResultsDiv.appendChild(testDiv);
    });
}

function displaySummary(totalTime) {
    const totalTests = testResults.length * 4; // 4 algorithms
    const passedTests = testResults.reduce((sum, tr) => {
        return sum + Object.values(tr.algorithms).filter(r => r.passed).length;
    }, 0);
    const failedTests = totalTests - passedTests;
    
    document.getElementById('totalTests').textContent = totalTests;
    document.getElementById('passedTests').textContent = passedTests;
    document.getElementById('failedTests').textContent = failedTests;
    document.getElementById('totalTime').textContent = totalTime + 'ms';
    
    document.getElementById('summary').style.display = 'block';
}

document.getElementById('runAllBtn').addEventListener('click', runAllTests);
document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('testResults').innerHTML = '';
    document.getElementById('summary').style.display = 'none';
    testResults = [];
});