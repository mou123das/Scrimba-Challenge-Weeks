var emojis = [
    "💘","💘","🌞","🧡","🍇",
    "🧁","⚡️","💝","🐱","💘",
    "🧡","💫","🍓","💜","⚡️",
    "⚡️","🐶","💘","🍇","🐱",
    "💘","💫","🍓","💜","💕",
    "⚡️","💘","🌞","🐱","💘",
    "💫","🍓","💜","⚡️","🧡",
    "💕","🍇","💘"
    ]

var allEmojisP = document.getElementById("all-emojis-p")
var uniqueEmojisP = document.getElementById("unique-emojis-p")
    
for (let emoji of emojis)
{
    allEmojisP.textContent += emoji;
}

function reset()
{
  uniqueEmojisP.textContent="";
}


function filterDuplicates() 
{
 
    const unique = new Set();
    
    for (let emoji of emojis) {
        unique.add(emoji);
    }
    uniqueEmojisP.textContent = Array.from(unique).join('');
}

function sort2() 
{
    var sort1 = emojis.sort();
    uniqueEmojisP.textContent = sort1;
}

    
function replace(val) 
{
    var b=[];
    
    for(var i=0;i<(emojis.length)-1;i++)
    {
        if(emojis[i]===emojis[i+1])
            b[i]=val;
        else
            b[i]=emojis[i];        
    }
    b[(emojis.length)-1]=emojis[(emojis.length)-1];
    uniqueEmojisP.textContent =b;
}


document.getElementById("btn").addEventListener("click", filterDuplicates);
document.getElementById("btn-1").addEventListener("click", sort2);
document.getElementById("cus-1").addEventListener("click", () => replace("🤖"));
document.getElementById("cus-2").addEventListener("click", () => replace("🤢"));
document.getElementById("cus-3").addEventListener("click", () => replace("👻"));
document.getElementById("btn-2").addEventListener("click", reset);
