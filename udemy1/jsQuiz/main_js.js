/**
 * Created by Philipp on 29.04.2017.
 */

function submitAnswers(){
    var questions = 4;
    var score= 0;
    var answers = ["a","c","a","a"];

    var name = document.querySelector('input[name="name"]').value;

    var f1= document.querySelector('input[name="f1"]:checked');
    var f2= document.querySelector('input[name="f2"]:checked');
    var f3= document.querySelector('input[name="f3"]:checked');
    var f4= document.querySelector('input[name="f4"]:checked');

    for(var i=1; i<=questions; i++){
        if(eval('f'+i)==null){
            alert("Folgende Frage wurde nicht beantwortet: Frage "+i);
            return false;
        }
    }

    for(i=1; i<=questions; i++){
        if(eval('f'+i).value ==answers[i-1]){
            score++;
        }
    }

    var results= document.getElementById('results');
    results.innerHTML = '<h1>'+name+', du hast <span>'+score+'</span> Punkte von <span>'+questions+'</span> erreicht.';
    if(score==questions){
        alert("Du hast alles richtig!");
    }
    return false;
}