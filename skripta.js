/*window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}*/
$(document).ready(function(){

    function storeObject(key,obj) {
        localStorage[key] = JSON.stringify(obj);
    }
    function retrieveObject(key) {
        return JSON.parse(localStorage[key]);
    }
    
    let igra1 = ['Festival','Foto-Aparat','Tabela','Mjuzikl','Film',
    'Odelo','Navika','Berza','Honorar','Rad',
    'Odgovor','Alergija','Lanac','Hemija','Reakcija',
    'Pesak','Fifa','Uefa','Stadion','Fudbal',
    'Akcija'];
    
    let igra2 = ['Vez','Pesak','Novac','Mali','Sitan',
    'Mis','Orao','Dvor','Medved','Beli',
    'Gradja','Glava','Peglanje','Pod','Daska',
    'Krstarenje','Internet','Jahanje','Talasi','Surfovanje',
    'Sneg'];

    let igra3 = ['Novac','Srbija','Alzir','Kuvajt','Dinar',
    'Ljubavni','Raskid','Hajducki','Oprostaj','Rastanak',
    'Timok','Hadzi Prodan','Seljak','Reka','Buna',
    'Omladina','Skupstina','Sindikat','Zdravlje','Dom',
    'Djak'];

    let igra4 = ['Novosti','Mesec','Skola','Matura','Vece',
    'Sastanak','Sport','Sef','Kongres','Sala',
    'Par','Stopala','Stikla','Koza','Cipele',
    'Voznja','Skijanje','Letenje','Bajaga','Instruktor',
    'Ples'];

    let igra5 = ['Istina','Podrum','Musica','Bure','Vino',
    'Skandinavija','Kraljevina','Nobel','Stokholm','Svedska',
    'Baterija','Petrolej','Aladin','Signal','Lampa',
    'Zaokruzeni','Obli','Lopta','Tocak','Okrugli',
    'Sto'];
    storeObject('igra1',igra1);
    storeObject('igra2',igra2);
    storeObject('igra3',igra3);
    storeObject('igra4',igra4);
    storeObject('igra5',igra5);
    
    
    popuniAsocijaciju();
    
    function popuniAsocijaciju(){
        // rand od 1 do 5 da se vidi koja igra u retrieve object
        
        let rngnumber=Math.floor(Math.random()*5)+1;
        //alert('Asocijacija broj: '+rngnumber);
        let igra=retrieveObject("igra"+rngnumber);
        
        var resenja=[igra[20],igra[4],igra[9],igra[14],igra[19]]
        /*document.getElementById("res1").innerHTML=igra[4];
        document.getElementById("res2").innerHTML=igra[9];
        document.getElementById("res3").innerHTML=igra[14];
        document.getElementById("res4").innerHTML=igra[19];*/
        for(let i=1;i<5;i++){
            
            
            for(let j=0;j<4;j++){
                
                let pom=(i-1)*5 + j;
                $("#kol"+pom).append(igra[pom]);
                
            }
        }
        $('form').keypress(function(event) { 
            if (event.keyCode === 13) {
                $(this).children("button").click();
            }
            
            return event.keyCode != 13;
        }); 
        /* $(".forma>input").keyup(function(event) {
            if (event.keyCode === 13) {
                $(this).next().click();
            }
        });*/
        $(".forma>button").click(function(){
            //alert("hey");
            let curforma=$(this).parent();
            let curformaid=curforma.attr('id');
            let br=curformaid.slice(-1);
            let vrednost=document.getElementById('kolona'+br+'odgovor').value;
            if(resenja[br]==vrednost.charAt(0).toUpperCase()+vrednost.slice(1)){
                
                curforma.parent().append(resenja[br]).css({'background-color': color});
                curforma.hide();
                let tmppoeni=0;
                if(curforma.attr('id')=='forma1'){
                    $('.kolona1').css({'opacity':'1','background-color': color})
                    tmppoeni+=(kolona1+5);
                    kolona1=0;
                }
                if(curforma.attr('id')=='forma2'){
                    $('.kolona2').css({'opacity':'1','background-color': color})
                    tmppoeni+=(kolona2+5);
                    kolona2=0;
                }
                if(curforma.attr('id')=='forma3'){
                    $('.kolona3').css({'opacity':'1','background-color': color})
                    tmppoeni+=(kolona3+5);
                    kolona3=0;
                }
                if(curforma.attr('id')=='forma4'){
                    $('.kolona4').css({'opacity':'1','background-color': color})
                    tmppoeni+=(kolona4+5);
                    kolona4=0;
                }
                if(curforma.attr('id')=='forma0'){
                    tmppoeni+=(kolona1+kolona2+kolona3+kolona4+10);
                    ispisiResenjaKolona(color);
                    if(turn==1)poeni1+=tmppoeni;
                    if(turn==2)poeni2+=tmppoeni;
                    kraj();
                }
                if(turn==1){
                    poeni1+=tmppoeni;
                    document.getElementById("Vreme1").innerHTML=0;
                    document.getElementById("Poeni1").innerHTML=poeni1;
                    document.getElementById("prio1").style.backgroundColor="#292b2c";
                    clearInterval(myInterval1);
                    potez2();
                }else if(turn==2){
                    poeni2+=tmppoeni;
                    document.getElementById("Vreme2").innerHTML=0;
                    document.getElementById("Poeni2").innerHTML=poeni2;
                    document.getElementById("prio2").style.backgroundColor="#292b2c";
                    clearInterval(myInterval2);
                    potez1();
                }
                
            }else{
                if(turn==1){
                    document.getElementById("prio1").style.backgroundColor="#292b2c";
                    document.getElementById("Vreme1").innerHTML=0;
                    clearInterval(myInterval1);
                    potez2();
                }else if(turn==2){
                    document.getElementById("prio2").style.backgroundColor="#292b2c";
                    document.getElementById("Vreme2").innerHTML=0;
                    clearInterval(myInterval2);
                    potez1();
                }
            }
            
        })

        let currPozadina=1;
        let maksCurrPozadina=3;
        let poeni1=0;
        let poeni2=0;
        let kolona1=4;
        let kolona2=4;
        let kolona3=4;
        let kolona4=4;
        let enabler=1;
        document.getElementById("Poeni1").innerHTML=poeni1;
        document.getElementById("Poeni2").innerHTML=poeni2;
        document.getElementById("Vreme1").innerHTML=10;
        document.getElementById("Vreme2").innerHTML=10;
        let turn=0;
        let counter=60*4;
        let counter1=10;
        let counter2=10;
        let color;
        var tmp=0;
        potez1();
        myInterval=setInterval(function(){
            counter--;
            if(counter>=0){
                document.getElementById("Vreme").innerHTML=counter;
            }else{
                $("#forma0").parent().append(resenja[0]).css({'background-color': "#20c997"});
                $("#forma0").hide();
                ispisiResenjaKolona("#20c997");
                kraj();
                clearInterval(myInterval);
            }
        },1000)
        function potez1(){
            enabler=1;
            counter1=10;
            turn=1;
            color='#0dcaf0';
            document.getElementById("Vreme1").innerHTML=counter1;
            document.getElementById("prio1").style.backgroundColor="brown";
            myInterval1=setInterval(function(){
                
                counter1--;
                if(counter1>=0){
                    document.getElementById("prio1").style.backgroundColor="brown";
                    document.getElementById("Vreme1").innerHTML=counter1;
                }else{
                    clearInterval(myInterval1);
                    document.getElementById("prio1").style.backgroundColor="#292b2c";
                    potez2()
                }
            },1000)
        }
        function potez2(){
            enabler=1;
            turn=2;
            color='#dc3545';
            counter2=10;
            document.getElementById("Vreme2").innerHTML=counter2;
            document.getElementById("prio2").style.backgroundColor="brown";

            myInterval2=setInterval(function(){
                
                counter2--;
                if(counter2>=0){
                    document.getElementById("Vreme2").innerHTML=counter2;
                }else{
                    clearInterval(myInterval2);
                    document.getElementById("prio2").style.backgroundColor="#292b2c";
                    potez1();
                }
            },1000)
        }

        function ispisiResenjaKolona(thisColor){
            if(kolona1!=0){
                //$('#res1').show();*4
                $("#forma1").parent().append(resenja[1]).css({'background-color': thisColor});
                $('.kolona1').css({'opacity':'1','background-color': thisColor});}
                $('#forma1').hide();
            if(kolona2!=0){
                $("#forma2").parent().append(resenja[2]).css({'background-color': thisColor});
                $('.kolona2').css({'opacity':'1','background-color': thisColor});}
                $('#forma2').hide();
            if(kolona3!=0){
                $("#forma3").parent().append(resenja[3]).css({'background-color': thisColor});
                $('.kolona3').css({'opacity':'1','background-color': thisColor});}
                $('#forma3').hide();
            if(kolona4!=0){
                $("#forma4").parent().append(resenja[4]).css({'background-color': thisColor});
                $('.kolona4').css({'opacity':'1','background-color': thisColor});}
                $('#forma4').hide();
        }
        
        $(".kolona1").click(function(){
            if($(this).hasClass("otvoreno")){

            }else{
                if(enabler==1){
                    $(this).css({'opacity':'1','background-color':'#20c997'});
                    $(this).addClass("otvoreno");
                kolona1--;
                enabler=0;
                }
            }
            
            
        });
        $(".kolona2").click(function(){
            if($(this).hasClass("otvoreno")){

            }else{
                if(enabler==1){
                    $(this).css({'opacity':'1','background-color':'#20c997'});
                    $(this).addClass("otvoreno");
                kolona2--;
                enabler=0;
                }
            }
            
        });
        $(".kolona3").click(function(){
            if($(this).hasClass("otvoreno")){

            }else{
                if(enabler==1){
                    $(this).css({'opacity':'1','background-color':'#20c997'});
                    $(this).addClass("otvoreno");
                kolona3--;
                enabler=0;
                }
            }
            
        });
        $(".kolona4").click(function(){
            if($(this).hasClass("otvoreno")){

            }else{
                if(enabler==1){
                    $(this).css({'opacity':'1','background-color':'#20c997'});
                    $(this).addClass("otvoreno");
                kolona4--;
                enabler=0;
                }
            }
            
        });

        $(".dalje").click(function(){
            if(turn==1){
                document.getElementById("prio1").style.backgroundColor="#292b2c";
                document.getElementById("Vreme1").innerHTML=0;
                clearInterval(myInterval1);
                potez2();
            }else if(turn==2){
                document.getElementById("prio2").style.backgroundColor="#292b2c";
                document.getElementById("Vreme2").innerHTML=0;
                clearInterval(myInterval2);
                potez1();
            }
        })

        $(".odustanite").click(function(){
            $("#forma0").parent().append(resenja[0]).css({'background-color': "#20c997"});
            $("#forma0").hide();
            ispisiResenjaKolona("#20c997");
            kraj();
        })

        $(".pozadina").click(function(){
            currPozadina++;
            if(currPozadina>maksCurrPozadina){
                currPozadina=1;
            }
            let string='url(pozadina'+currPozadina+'.jpg)';
            $('body').css('background-image',string);
        })

        function kraj(){
            storeObject('poeni1',poeni1);
            storeObject('poeni2',poeni2);
            setTimeout(function(){window.location.replace('pobeda.html')}, 3000);
        }

    }


    /*$(".kolona").on({
        mouseenter : function() {
            $(this).parent().css("background-color", "lightgreen");
        },

        mouseleave : function() {
            $(this).parent().css("background-color", "yellow");
        }
    });*/

    

    

});

