player1name=localStorage.getItem("player1name")
player2name=localStorage.getItem("player2name")
player1score=0
player2score=0
document.getElementById("player1_name").innerHTML=player1name+" : "
document.getElementById("player2_name").innerHTML=player2name+" : "
document.getElementById("player1_score").innerHTML=player1score
document.getElementById("player2_score").innerHTML=player2score
document.getElementById("questionturn").innerHTML="questionturn:"+player1name
document.getElementById("answerturn").innerHTML="answerturn:"+player2name
function send(){
    getword= document.getElementById("word").value;
    word=getword.toLowerCase()
    console.log(word)
    carat1=word.charAt(1)
    console.log(carat1)
    legnthdividedby2= Math.floor(word.length/2)
    carat2=word.charAt(legnthdividedby2)
    console.log(carat2)
    legnthminus1=word.length-1
    carat3=word.charAt(legnthminus1)
    console.log(carat3)
    remove1=word.replace(carat1,"_")
    remove2=remove1.replace(carat2,"_")
    remove3=remove2.replace(carat3,"_")
    console.log(remove3)
    question="<h4>Q."+remove3+"</h4><br>"
    input="answer : <input id='input' type='text'>"
    button="<br><br><button class='btn btn-info' onclick='check()' >check</button>"
    row=question+input+button
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
}
questionturn="player1"
answerturn="player2"
function check(){
getanswer=document.getElementById("input").value
answer=getanswer.toLowerCase()
if (answer==word) {
 if (answerturn=="player1") {
 player1score=player1score+1 
 document.getElementById("player1_score").innerHTML=player1score
     
 } else {
    player2score=player2score+1 
 document.getElementById("player2_score").innerHTML=player2score  
 }   
}
if (answerturn=="player1") {
  answerturn="player2"
  document.getElementById("answerturn").innerHTML="answerturn- "+player2name  
} else {
    answerturn="player1"
    document.getElementById("answerturn").innerHTML="answerturn- "+player1name    
}
if (questionturn=="player1") {
    questionturn="player2"
    document.getElementById("questionturn").innerHTML="questionturn- "+player2name 
} else {
    questionturn="player1"
    document.getElementById("questionturn").innerHTML="questionturn- "+player1name  
}
document.getElementById("output").innerHTML=""
}