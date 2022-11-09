
const addForm =document.querySelector('.add');
const list =document.querySelector('.todos');
const search =document.querySelector('#search');
///to add html elements
const generateTemplate = todo =>{
    const html =` <li class="list-group-item d-flex justify-content-between aling-items-center">
    <span>${todo}</span>
    <i class="fa-solid fa-trash-can delete"></i>
</li>`
list.innerHTML+=html;
};


const filterTodos = term => {

    // add filtered class
    Array.from(list.children)
      .filter(todo => !todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.add('filtered'));
  
    // remove filtered class
    Array.from(list.children)
      .filter(todo => todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.remove('filtered'));
  
  };
//add todos event

addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo =addForm.add.value.trim();
   
    //to check tht user should enter any thing before submit
if(todo.length){
    generateTemplate(todo);
    addForm.reset();
}
   
});

// to delete list
list.addEventListener('click', e =>{

if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
});



// search keyup event

search.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase();
    filterTodos(term);
  
  });