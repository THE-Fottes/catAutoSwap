const cords = [ //for example at my resolution
    {x: 109, y: 353},
    {x: 173, y: 356},
    {x: 226, y: 354},
    {x: 289, y: 358},
    
    {x: 102, y: 404},
    {x: 157, y: 404},
    {x: 229, y: 404},
    {x: 297, y: 404},
    
    {x: 99, y: 454},
    {x: 170, y: 454},
    {x: 230, y: 454},
    {x: 287, y: 454},
];
function findMatchingPairs(arr) {
    const matchingPairs = [];
    const usedIndices = new Set(); 

    for (let i = 0; i < arr.length; i++) {
        if (usedIndices.has(i)) continue; 

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                matchingPairs.push([i, j]);
                usedIndices.add(i);
                usedIndices.add(j);
                break; 
            }
        }
    }
    return matchingPairs;
}

function simbiose(ca1_x, cat1_y, cat2_x, cat2_y) {
var mouseDownEvent = new MouseEvent('mousedown', {
  bubbles: true,
  cancelable: true,
  view: window,
  buttons: 1,
  clientX: ca1_x,
  clientY: cat1_y
});

var mouseDownEvent2 = new MouseEvent('mouseup', {
  bubbles: true,
  cancelable: true,
  view: window,
  buttons: 1,
  clientX: cat2_x,
  clientY: cat2_y
});

var targetElement = document.elementFromPoint(ca1_x, cat1_y);
var targetElement2 = document.elementFromPoint(cat2_x, cat2_y);

targetElement.dispatchEvent(mouseDownEvent);
targetElement.dispatchEvent(mouseDownEvent2);
}

const pairs = findMatchingPairs(window.manager.cat.cats);
pairs.forEach((para, index) => {
  setTimeout(() => {
    const [firstIndex, secondIndex] = para;
    simbiose(cords[firstIndex].x, cords[firstIndex].y, cords[secondIndex].x, cords[secondIndex].y);
  }, 1000 * index);
});
