var valide = true;


function inscription(){
    valide = true;
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    document.getElementById('email').setAttribute("type", "email");
    let tele = document.getElementById('tele').value;
    document.getElementById('tele').setAttribute("type", "tel");
    let checkboxes = document.querySelectorAll('input[name="a"]:checked');
    let checkboxes1 = document.querySelectorAll('input[name="b"]:checked');
    let phoneRGEX = /^[(]{0,1}[0]{1}[)]{0,1}[5-7]{0,1}[0-9]{3}[0-9]{0,1}[0-9]{4}$/;
    let validRegex = /^[a-zA-Z-.]+@{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
    let regName = /^[a-zA-Z ]+$/;
    let values = [];
    let values1 = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    checkboxes1.forEach((checkbox) => {
        values1.push(checkbox.value);
    });
    let selected = [];
    for (var option of document.getElementById('selected1').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    let tab = "Votre Nom est :" + " " + nom + "<br>" + "<br>"+ "Votre Prénom est :" + " " + " " + prenom + "<br>"+"<br>" + "Votre Email est :" + " " + " " + email + "<br>"+ "<br>" + "Votre Télephone est :" + " " +  " " +tele + "<br>"+ "<br>" + "Votre Genre est :" + " " + " " + values + "<br>"+ "<br>" + "Votre Group est :" + " " + " " + values1 + "<br>"+ "<br>" + "Votre choix du Club(s) est :" + " " + " " + selected;
    if (nom.length == "" || nom.length > 30 || regName.test(nom)<0) {
        document.getElementById('return1').innerHTML="S'il vous plait saisez votre nom!!";
        valide= false;
    }
    if (prenom.length == "" || prenom.length > 30 || regName.test(prenom) <0) {
        document.getElementById('return2').innerHTML="S'il vous plait saisez votre prenom!!";
        valide= false;
    }
    if(email =="" || validRegex.test(email)<0){
        document.getElementById('return3').innerHTML="S'il vous plait saisez valid format d'email!!";
        valide= false;
    }
    if(tele =="" || phoneRGEX.test(tele)<0){
        document.getElementById('return4').innerHTML="S'il vous plait saisez valid format de telephone!!";
        valide= false;
    }
    if(values == ""){
        document.getElementById('return5').innerHTML="S'il vous plait choisez votre Genre!!";
        valide= false;
    }
    if(values1 == ""){
        document.getElementById('return6').innerHTML="S'il vous plait choisez votre Group!!";
        valide= false;
    }
    if(selected == ""){
        document.getElementById('return7').innerHTML="S'il vous plait choisez le choix du club!!";
        valide= false;
    }
    if(selected.length > 3){
        document.getElementById('return7').innerHTML="S'il vous plait choisez just 3 choix du club!!";
        valide= false;
    }
}

function validName(){
    let nom = document.getElementById('nom').value;
    let regName = /^[a-zA-Z]+$/;
    if (nom.length == "" || nom.length > 30) {
        document.getElementById('nom').style.border='3px solid red';
        document.getElementById('nom').style.background='rgb(248, 147, 147)';
    }
    if(nom.length <= 30 && regName.test(nom)){
        document.getElementById('nom').style.border='3px solid green';
        document.getElementById('nom').style.background='rgb(130, 246, 130)';
    }
}

function validPrenom(){
    let prenom = document.getElementById('prenom').value;
    let regName = /^[a-zA-Z ]+$/;
    if (prenom.length == "" || prenom.length > 30 ) {
        document.getElementById('prenom').style.border='3px solid red';
        document.getElementById('prenom').style.background='rgb(248, 147, 147)';

    }
    if(prenom.length <= 30 && regName.test(prenom)){
        document.getElementById('prenom').style.border='3px solid green';
        document.getElementById('prenom').style.background='rgb(130, 246, 130)';

    }
}

function validTell(){
    let tele = document.getElementById('tele').value;
    let phoneRGEX = /^[(]{0,1}[0]{1}[)]{0,1}[5-7]{0,1}[0-9]{3}[0-9]{0,1}[0-9]{4}$/;
    document.getElementById('tele').setAttribute("type", "tel");
    let phone = tele.length;
    if(phoneRGEX.test(tele)&&phone==10){
        document.getElementById('tele').style.border='3px solid green';
        document.getElementById('tele').style.background='rgb(130, 246, 130)';

    }
    else{
        document.getElementById('tele').style.border='3px solid red';
        document.getElementById('tele').style.background='rgb(248, 147, 147)';

    }
}

function validEmail(){
    let email = document.getElementById('email').value;
    let validRegex = /^[a-zA-Z-.]+@{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
    document.getElementById('email').setAttribute("type", "email");
    console.log(validRegex.test(email));
    
    if(validRegex.test(email)){
        document.getElementById('email').style.border='3px solid green';
        document.getElementById('email').style.background='rgb(130, 246, 130)';
    }
    else{
        document.getElementById('email').style.border='3px solid red';
        document.getElementById('email').style.background='rgb(248, 147, 147)';

        
    }
}

document.querySelector('form').addEventListener('submit', event=>{
    if(valide == false) {
        event.preventDefault();
    }
})