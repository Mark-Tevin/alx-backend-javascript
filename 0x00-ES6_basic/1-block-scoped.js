export default function taskBlock(trueOrFalse) {
  let task = false;  // 'task' is block-scoped to the entire function
  let task2 = true;  // 'task2' is block-scoped to the entire function

  if (trueOrFalse) {
    // 'task' and 'task2' are new variables, to this 'if' block only.
    // They do not affect the outer 'task' and 'task2'.
    let task = true;  
    let task2 = false;
  }

  // Returns remain unchanged by the inner block.
  return [task, task2];  
}

