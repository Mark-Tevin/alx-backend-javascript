export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;  // Reassigning outer-scoped variable
    const task2 = false; // Reassigning outer-scoped variable
  }

  return [task, task2];
}
