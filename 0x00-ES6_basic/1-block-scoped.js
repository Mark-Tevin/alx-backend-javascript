export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;  // Reassigning outer-scoped variable
    task2 = false; // Reassigning outer-scoped variable
  }

  return [task, task2];
}
