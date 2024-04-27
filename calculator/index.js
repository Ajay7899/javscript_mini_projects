let string = "";
//queryselectorAll selecting a query with classname buttons 
let buttons = document.querySelectorAll('.buttons');
// we creating array from the button query which storing all elements in buttons class in to it
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML === '=' && e.target.innerHTML !== ''){
            output = eval(string.replace('%' ,'/100'));// Adding functionality to % button and it is should be on top of every condition to make the % work properly
            document.querySelector('.display').value = string;//storing value to string for displaying it in input box
          }
        else if(e.target.innerHTML == '='){
            string =eval(string); // adding functionality to = button
            document.querySelector('.display').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
         string = "";   // adding functionality to AC button to clear all dat on click AC button
        document.querySelector('.display').value = string;
        }
         else if(e.target.innerHTML == 'DEL'){
            string = string.toString().slice(0,-1);// this button remove the last element of string by slicing method
            document.querySelector('.display').value = string;
        }
        else{ // if none of the above condition works then this code gonna execute  
        
        string = string + e.target.innerHTML;
        document.querySelector(".display").value = string;
        }
    })
})