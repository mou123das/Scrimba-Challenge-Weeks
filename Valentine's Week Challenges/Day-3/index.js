document.getElementById("check-box").addEventListener("click", check2);
var str="";

function check2()
{
    var cus=document.getElementById("custom");
    var check1=document.getElementById("check-box");
    var para=document.getElementById("paragraph");
    var fin=document.getElementById("paragraph-2");    
     
    if(check1.checked)
    {
        cus.disabled=false;
        para.classList.add("extra2");
    }
    else
    {
        cus.disabled=true;
        para.classList.remove("extra2");
        cus.value="";
        fin.innerHTML="";
    }
}

document.getElementById("btn").addEventListener("click", correct);

function correct()
{
    var cus=document.getElementById("custom");
    var check1=document.getElementById("check-box");
    var para=document.getElementById("paragraph");
    
    if(check1.checked)
    {
        str=cus.value.toString();
    }
    else
    {
        str=para.textContent;
    }
    
    var str1=str.toString().split(" ");
    var res="";
    
    for(var i=0;i<str1.length;i++)
        res+=str1[i].substring(0,1).toUpperCase()+str1[i].substring(1).toLowerCase()+" ";
    
    var fin=document.getElementById("paragraph-2");    
    fin.innerHTML=res;
    fin.classList.add("extra");
}
