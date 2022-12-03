document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit',(e) => {
    console.log(e)
  })
});
//Create a to do list
function createTodoList(todo){
  let li = document.createElement('li');
  let btn = document.createElement('button');
  //add an event listner for handling the todo list delete
  btn.addEventListener('click',handleDelete)
  //assign text to the element
  p.textContent = todo
  btn.textContent = 'x';
  //choose a parent element and append p to it
  let parent = document.getElementById('tasks')
  parent.appendChild(li)
  p.appendChild(btn);
  //create a function to delete done todo list items
  function handleDelete(e){
    return e.target.parentNode.remove()
  }
}