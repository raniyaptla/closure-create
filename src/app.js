const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;

// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop

const NEG_INF = -1000000;


 // Progression 2: add 3 variables: title, currIndex, check
 
function createPop(array, target) {
  const title = document.createElement('h3');
  let currIndex = NEG_INF;
  let check = false;

  // Progression 3: create a function "searchForElement" 
  function searchForElement(item) {
    const index = array.indexOf(item);
    if (index !== -1) {
      
      currIndex = index;
      check = true;
    }
  }

  
  
  // Progression 4: In `createPop()`, return a closure function - which uses the updated values of `currIndex` and `check` to return the desired output.
  return function () {
    
    searchForElement(target);

    
    return check
      ? `The item is present and is at index ${currIndex}`
      : `The item is not present and is at index ${NEG_INF}`;
  };
}



const popClosure = createPop(arrayOfNumbers, itemToSearch);
