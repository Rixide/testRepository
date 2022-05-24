const buttons = document.querySelectorAll(".btn");
const resultat = document.querySelector(".affichage");
 buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        resultat.textContent += e.target.id;
    });
});
equal.addEventListener('click',()=>{
    resultat.textContent = eval(resultat.textContent);
});

clear.addEventListener('click', ()=>{
    resultat.textContent = "";
});