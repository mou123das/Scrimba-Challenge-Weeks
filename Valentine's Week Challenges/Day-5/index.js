const body = document.body;
const heart = document.getElementById('heart');
document.getElementById("btn").addEventListener("click", change_Background_Color);
document.getElementById("btn-1").addEventListener("click", change_Heart_Color);

async function change_Background_Color() {
    
    const response1 = await fetch('https://apis.scrimba.com/hexcolors?count=1');
    const data1 = await response1.json();

    const body_Colour = data1.colors[0].value;

    body.style.setProperty("background", body_Colour);
}

async function change_Heart_Color() {

    const response2 = await fetch('https://apis.scrimba.com/hexcolors?count=1');
    const data2 = await response2.json();
    
    const heart_Color = data2.colors[0].value;
    
    heart.style.setProperty('--white', heart_Color);
}