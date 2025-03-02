const buttons = document.getElementsByClassName("botton-d");
let count = 0;

const task = document.getElementById("task-amount").innerText;
      let taskAmount = parseInt(task);
 const navamount = document.getElementById("nav-amount").innerText;
        let navAmount = parseInt(navamount);
 for (const button of buttons) {
    button.addEventListener('click', function(event) {
        alert('Board updated successfully');
        console.log('Button clicked');
       event.target.setAttribute('disabled', true);
        count++;

      console.log(count);
      if(count == 6){
        alert('Congrates!!! You have completed all the current task');
      }
      taskAmount--;
      
      document.getElementById("task-amount").innerText = taskAmount;
    navAmount++;
        document.getElementById("nav-amount").innerText = navAmount;

        let taskCard = event.target.closest(".cards");
        let title = taskCard.querySelector(".titlw").innerText;
console.log(title);

          const now = new Date();
const formattedTime = now.toLocaleTimeString();

const clearHistoryb = document.querySelector(".clearbtn");
const activityLog = document.getElementById("activitylog");


clearHistoryb.addEventListener("click", function() {
    activityLog.innerHTML = ""; 
    
});
    const log = document.getElementById("activitylog");
    const p = document.createElement("p");
   
    p.innerText = `
   
    
    You have completed the task ${title} at  ${formattedTime} `;
   p.style.margin = "0"
    p.style.marginBottom = "10px";
    p.style.backgroundColor = "#F4F7FF";
    p.style.paddingTop = "-180px";
    p.style.marginTop = "10px";
    p.style.paddingBottom = "30px";
    p.style.textAlign = "center";
    p.style.justifyContent = "center";
    p.style.alignItems = "start";
    p.style.borderRadius = "5px";
    p.style.height="auto";
     
    log.appendChild(p);
   



   






    });
 

}

let today = new Date().toDateString();
document.getElementById("date").innerText = today;


