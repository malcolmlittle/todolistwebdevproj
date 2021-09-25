// Prompt for user input
let input = prompt('hey, what would you like to do?');

// Create empty array to store list items
const todos = [];

// While loop input not equal to 'quit' and 'q' then go into if statement
while (input !== 'quit' && input !== 'q') {

  // If input equals 'list' then print todos using for loop
  if (input === 'list') {
    console.log('***********')
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('***********')

    // If input equals 'new' prompt for task, store input, and push to todos array then print confirmation
  } else if (input === 'new') {
    const newTodo = prompt('What is the new task?');
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`)

    // If input equals 'delete' prompt for index, store parsed input, check validity of input, then print confirmation
  } else if (input === 'delete') {
    const index = parseInt(prompt('Okay, enter an index to delete'));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Okay, deleted ${deleted[0]}`);
    } else {
      console.log('Unknown index')
    }
  }
  input = prompt('hey, what would you like to do?')
}

// Exit while loop if input equals either 'quit' or 'q'
console.log('you have quit the application');