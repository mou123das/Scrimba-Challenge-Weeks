document.getElementById("btn").addEventListener("click", calculate);
let costEl = document.getElementById("cost-el");
let err_msg= document.getElementById("error_message");
let res=document.getElementById("result");
let ballon_cost=2;

function calculate()
{
    
    var food=document.getElementById("food-select").value;
    var transport=document.getElementById("transport-select").value;
    var total_cost=0;
    
    if(food!="" && transport!="")
    {
        total_cost=Number(food)+Number(transport);
        if(document.getElementById("balloon-checkbox").checked)
        total_cost+=2;
        costEl.innerText=total_cost;
        res.classList.add("extra");
        err_msg.style.display="none";
    }
    else
    {
       
        if(food=="" && transport=="")
        {
            err_msg.innerText="Please choose a food and a transport!";
        }
        else if(food=="")
        {
            err_msg.innerText="Please choose a food!";
        }
        else if(transport=="")
        {
            err_msg.innerText="Please choose a transport!";
        }
        err_msg.style.display="block";
        costEl.innerText="❓";
        res.classList.remove("extra");
    }
}
