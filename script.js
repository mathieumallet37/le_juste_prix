let input = document.getElementById('prix');
let error = document.querySelector('small');
let form = document.querySelector('#formulaire');
let coups = 0;
let nombreChoisi;
error.style.display = "none";

let nombreAleatoire =  Math.floor(Math.random() * 1001);

function verifier(nombre){
    let instruction = document.createElement("div");

    if (nombre < nombreAleatoire) {
        instruction.textContent = "#" + coups + "(" + nombreChoisi + ")" + " C'est plus !";
        instruction.className = "instruction plus";
    }else if (nombre > nombreAleatoire) {
        instruction.textContent = "#" + coups + "(" + nombreChoisi + ")" + " C'est moins !";
        instruction.className ="instruction moins";
    }else{
        instruction.textContent = "#" + coups + "(" + nombreChoisi + ")" + " Félicitations, vous avez trouvé !";
        instruction.className = "instruction fini";
    }
    document.querySelector("#instructions").prepend(instruction);
    console.log(instruction);
}

input.addEventListener('keyup', ()=>{
    if (isNaN(input.value)) {
            error.style.display = "block";
    }else{
        error.style.display = "none";
    }
});

formulaire.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (isNaN(input.value) || input.value == "") {
        input.style.borderColor = "red";
    }else{
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);
    }
});

