let  todoList = [
  {
    item:'wake up',
     dueDate:'30-4-2024'
  },
  {
    item:'go for walk ',
     dueDate:'30-4-2024'
  }
];

displayItems();

function addTodo(){
//here we will extract task from text-input and store it in a variable
let inputElement = document.querySelector('#todo-input');//
let todoItem = inputElement.value // extracting the value from variable 


//here we will extract date from date-input and store it in a variable
let dateElement = document.querySelector('#todo-date')
let todoDate = dateElement.value;// extracting the value from variable 



todoList.push({item:todoItem , dueDate:todoDate})// pushing task and date to array named todoList
inputElement.value = "";// this to make input box to a default.just like making it empty for next task 
dateElement.value = "";
// localStorage.setItem('item', JSON.stringify(todoItem));
// localStorage.setItem('dueDate', JSON.stringify(todoDate));
displayItems()


}


function displayItems(){// this function is made to display todo task 
  let  cointainerElement = document.querySelector('.todo-cointainer');

  let newHtml = "" ;
  for(let i = 0; i<todoList.length;i++){//for loop to display every task store inside a aray .by iterating it 
    let {item,dueDate} = todoList[i];
    newHtml += `
    
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='delete-btn'onclick="todoList.splice(${i},1)
      displayItems()
      ">Delete</button>
    
    `; // here we created a new html pattern to display todo task in div cointainer with class todo- cointainer
}
cointainerElement.innerHTML = newHtml;//here the html is assign to cointainer element to display to display task in above create html pattern 
}
