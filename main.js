/********************
 * HELPER FUNCTIONS *
 ********************/


const getTodoName = todo => todo.text;

const getPriority = todo => todo.priority;

const isComplete = todo => todo.complete;

const isHighPriority =  todo =>  (todo.priority>1) ? true: false;









/***********************
 * ITERATION FUNCTIONS *
 ***********************/


const names = todos => todos.map(getTodoName);

const priorities = todos => todos.map(getPriority);

const namesAndPriorities = function (todos){
  let newArray = [];

  for(let i = 0;i < todos.length; i++){
    (todos[i].priority === 1) ? newArray.push(todos[i].text + ' - Low'): newArray.push(todos[i].text + ' - High')
  }
  return newArray
}

const justNotComplete = function (todos){
  let newArray = [];

  for(let i = 0;i < todos.length; i++)
    (todos[i].complete === false) ? newArray.push(todos[i]): 'finish'
  

return newArray
}

const justComplete = function (todos){
  let newArray = [];

  for(let i = 0;i < todos.length; i++)
    (todos[i].complete === true) ? newArray.push(todos[i]): 'finish'
  

return newArray
}

const priority2Only = function (todos){
  let newArray = [];

  for(let i = 0;i < todos.length; i++)
    (todos[i].priority === 2) ? newArray.push(todos[i]): 'finish'
return newArray
}

const priority1Only = function (todos){
  let newArray = [];

  for(let i = 0;i < todos.length; i++)
    (todos[i].priority === 1) ? newArray.push(todos[i]): 'finish'
return newArray
}







// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
