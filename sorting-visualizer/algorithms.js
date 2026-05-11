// Sorting Algorithms Implementation

class SortingAlgorithms {
    constructor() {
        this.comparisons = 0;
        this.swaps = 0;
        this.operations = [];
    }

    reset() {
        this.comparisons = 0;
        this.swaps = 0;
        this.operations = [];
    }

    // Bubble Sort - O(n²)
    async bubbleSort(arr, delay) {
        this.reset();
        const n = arr.length;
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                this.comparisons++;
                this.operations.push({ type: 'compare', indices: [j, j + 1] });
                
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    this.swaps++;
                    this.operations.push({ type: 'swap', indices: [j, j + 1] });
                }
                
                await this.sleep(delay);
            }
            this.operations.push({ type: 'sorted', indices: [n - i - 1] });
        }
        this.operations.push({ type: 'sorted', indices: [0] });
        return arr;
    }

    // Selection Sort - O(n²)
    async selectionSort(arr, delay) {
        this.reset();
        const n = arr.length;
        
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            this.operations.push({ type: 'sorted', indices: [i] });
            
            for (let j = i + 1; j < n; j++) {
                this.comparisons++;
                this.operations.push({ type: 'compare', indices: [minIdx, j] });
                
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
                
                await this.sleep(delay);
            }
            
            if (minIdx !== i) {
                [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
                this.swaps++;
                this.operations.push({ type: 'swap', indices: [i, minIdx] });
                await this.sleep(delay);
            }
        }
        this.operations.push({ type: 'sorted', indices: [n - 1] });
        return arr;
    }

    // Insertion Sort - O(n²)
    async insertionSort(arr, delay) {
        this.reset();
        const n = arr.length;
        
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;
            
            while (j >= 0 && arr[j] > key) {
                this.comparisons++;
                this.operations.push({ type: 'compare', indices: [j, j + 1] });
                arr[j + 1] = arr[j];
                this.swaps++;
                this.operations.push({ type: 'swap', indices: [j, j + 1] });
                j--;
                await this.sleep(delay);
            }
            arr[j + 1] = key;
            this.operations.push({ type: 'sorted', indices: [i] });
        }
        return arr;
    }

    // Merge Sort - O(n log n)
    async mergeSort(arr, delay) {
        this.reset();
        await this.mergeSortHelper(arr, 0, arr.length - 1, delay);
        return arr;
    }

    async mergeSortHelper(arr, left, right, delay) {
        if (left < right) {
            const mid = Math.floor((left + right) / 2);
            await this.mergeSortHelper(arr, left, mid, delay);
            await this.mergeSortHelper(arr, mid + 1, right, delay);
            await this.merge(arr, left, mid, right, delay);
        }
    }

    async merge(arr, left, mid, right, delay) {
        const leftArr = arr.slice(left, mid + 1);
        const rightArr = arr.slice(mid + 1, right + 1);
        let i = 0, j = 0, k = left;
        
        while (i < leftArr.length && j < rightArr.length) {
            this.comparisons++;
            this.operations.push({ type: 'compare', indices: [left + i, mid + 1 + j] });
            
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            
            this.swaps++;
            this.operations.push({ type: 'swap', indices: [k] });
            k++;
            await this.sleep(delay);
        }
        
        while (i < leftArr.length) {
            arr[k] = leftArr[i];
            this.operations.push({ type: 'swap', indices: [k] });
            i++;
            k++;
            await this.sleep(delay);
        }
        
        while (j < rightArr.length) {
            arr[k] = rightArr[j];
            this.operations.push({ type: 'swap', indices: [k] });
            j++;
            k++;
            await this.sleep(delay);
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SortingAlgorithms;
}