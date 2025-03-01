const buttons = document.getElementsByClassName("botton-d");
let count = 0;

const task = document.getElementById("task-amount").innerText;
      let taskAmount = parseInt(task);
 
 for (const button of buttons) {
    button.addEventListener('click', function(event) {
        console.log('Button clicked');
       event.target.setAttribute('disabled', true);
        count++;
      console.log(count);
      
      taskAmount--;
      document.getElementById("task-amount").innerText = taskAmount;
    
    });
 

}

