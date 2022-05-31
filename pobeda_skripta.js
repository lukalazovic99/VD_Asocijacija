$(document).ready(function(){
    let poeni1= localStorage.getItem("poeni1");
    let poeni2= localStorage.getItem("poeni2");
    
    poeni1=parseInt(poeni1,10);
    poeni2=parseInt(poeni2,10);
    document.getElementById("poeni11").innerHTML = poeni1;
    document.getElementById("poeni22").innerHTML = poeni2;

    if(poeni1>poeni2)document.getElementById("pobednik").innerHTML = 'Igrac 1 Je Pobednik'
    if(poeni1<poeni2)document.getElementById("pobednik").innerHTML = 'Igrac 2 Je Pobednik'
    if(poeni1==poeni2)document.getElementById("pobednik").innerHTML = 'Ishod Je Neresen'

    $('#zapocni').click(function(){
        window.location.replace('asocijacije-igra.html');
    })
});