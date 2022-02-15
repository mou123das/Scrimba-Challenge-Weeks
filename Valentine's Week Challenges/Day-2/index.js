const greetingDisplay = document.getElementById("greeting-display");
let form=document.getElementById("form");
let btn=document.getElementById("btn");
let check=document.getElementById("check-box");
let cus_msg=document.getElementById("custom-input");

  
function writeGreeting() {

let message = document.getElementById("greeting-select").value;
let recipient = document.getElementById("recipient-input").value;
let sender = document.getElementById("sender-input");

  if(recipient!="")
  {
      sender.disabled=false;

  if(check.checked && recipient)
  cus_msg.disabled=false;
  else
  cus_msg.disabled=true;
  
  if(!check.checked)
  cus_msg.value="";
  
  greetingDisplay.innerHTML="Dear "+`${recipient}`+" <br><br>"+`${message}<br><br>`+" From "+`${sender.value}`;
  if (cus_msg.value)
   greetingDisplay.innerHTML="Dear "+`${recipient}`+",<br><br>"+`${message}<br>`+`${cus_msg.value}`+"<br><br>"+" From "+`${sender.value}`;
  }
  
}

function clear()
{
    let message = document.getElementById("greeting-select").value;
    let recipient = document.getElementById("recipient-input").value;
    let sender = document.getElementById("sender-input");
    let cus_msg=document.getElementById("custom-input");
    
    greetingDisplay.innerHTML="Greeting will go here..";
    sender.disabled=true;
    cus_msg.disabled=true;
    
    document.getElementById("recipient-input").value="";
    document.getElementById("sender-input").value="";
    document.getElementById("custom-input").value="";
}

form.addEventListener("input", writeGreeting);
btn.addEventListener("click", clear);
/* <!--The heart Check mark icon's CREDITS given below:-->
    <!-- The heart check mark icon has been attributed below:
         <a href="https://www.flaticon.com/free-icons/heart-check" title="heart check icons">Heart check icons created by SBTS2018 - Flaticon</a>
         -->**/
         