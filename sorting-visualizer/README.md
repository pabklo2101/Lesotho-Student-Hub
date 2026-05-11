# 🎨 Sorting Algorithm Visualizer

A complete, interactive visualization and testing suite for sorting algorithms with real-time performance metrics.

## Features

### 📊 Interactive Visualizer
- **Real-time visualization** of sorting algorithms with animated bars
- **4 sorting algorithms**:
  - Bubble Sort (O(n²))
  - Selection Sort (O(n²))
  - Insertion Sort (O(n²))
  - Merge Sort (O(n log n))
- **Adjustable parameters**:
  - Array size (10-200 elements)
  - Animation speed (1-100ms delay)
- **Live statistics**: comparisons, swaps, and elapsed time
- **Color coding**:
  - Blue: Unsorted elements
  - Red: Currently comparing elements
  - Green: Sorted elements

### 🧪 Comprehensive Test Suite
- **9 test cases** covering:
  - Small arrays
  - Edge cases (single/two elements)
  - Already sorted and reverse sorted arrays
  - Duplicate elements
  - Negative numbers
  - Large arrays (1000+ elements)
  - Algorithm comparison
- **Performance metrics** for each algorithm
- **Visual test results** with pass/fail indicators

## How to Use

### Visualizer
1. Open `index.html` in your browser
2. Adjust the array size and animation speed using sliders
3. Select an algorithm from the dropdown
4. Click "Start" to begin the visualization
5. Use "Reset" to generate a new array or "Randomize" to shuffle the current array

### Testing
1. Open `test.html` in your browser
2. Click "Run All Tests" to execute the comprehensive test suite
3. View detailed results for each test case and algorithm
4. Check the summary for overall statistics

## Algorithm Details

### Bubble Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- **Description**: Repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order.

### Selection Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- **Description**: Divides the input into sorted and unsorted portions, repeatedly finding the minimum element from the unsorted portion.

### Insertion Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- **Description**: Builds the sorted array one item at a time by inserting elements into their correct position.

### Merge Sort
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(n)
- **Description**: Divide-and-conquer algorithm that divides the array, recursively sorts the halves, and merges them back together.

## Technology Stack
- **HTML5**: Structure and semantics
- **CSS3**: Styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: Algorithm implementation and visualization
- **Canvas API**: Real-time drawing and rendering

## File Structure
```
sorting-visualizer/
├── index.html        # Main visualizer interface
├── test.html         # Test suite interface
├── style.css         # Styling for visualizer
├── algorithms.js     # Algorithm implementations
├── visualizer.js     # Visualization controller
├── test.js          # Test suite implementation
└── README.md        # Documentation
```

## Performance Comparison

The visualizer shows real-time statistics:
- **Comparisons**: Number of element comparisons made
- **Swaps**: Number of element swaps performed
- **Time**: Elapsed time for the sorting operation

Merge Sort typically shows better performance on larger arrays despite higher constant factors.

## Learning Benefits

- Understand how different sorting algorithms work
- Visualize the difference in algorithm efficiency
- See real-time performance metrics
- Learn about time and space complexity
- Compare algorithm behavior on different data patterns

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements
- Add more sorting algorithms (Quick Sort, Heap Sort, etc.)
- Sound effects for comparisons and swaps
- Customizable color schemes
- Save and share visualization recordings
- Mobile app version

## License
MIT License - Feel free to use and modify!

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.
