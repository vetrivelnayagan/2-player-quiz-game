player1_name=localStorage.getItem("player1name")
player2_name=localStorage.getItem("player2name")
player1score=0
player2score=0
document.getElementById("player1name").innerHTML=player1_name
document.getElementById("player2name").innerHTML=player2_name
document.getElementById("player1score").innerHTML=player1score
document.getElementById("player2score").innerHTML=player2score
document.getElementById("playeranswer").innerHTML="answerturn="+player2_name
document.getElementById("playerquestion").innerHTML="questionturn="+player1_name
function send(){
    getword=document.getElementById("word").value
    word=getword.toLowerCase()
    charat1=word.charAt(1);
console.log(charat1)
length2=Math.floor(word.length/2)
charat2=word.charAt(length2)
length3=word.length-1
charat3=word.charAt(3)
removecharat1=word.replace(charat1,"_")
removecharat2=removecharat1.replace(charat2,"_")
removecharat3=removecharat2.replace(charat3,"_")


questionword="<h4 id='word_display'> Q. "+removecharat3+"</h4>";
Inputbox="<br>answer:<input id='inputcheckbox'>"
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=questionword+Inputbox+check_button
document.getElementById("output").innerHTML=row
}
questionturn="player1"
answerturn="player2"
function check(){
    getanswer=document.getElementById("inputcheckbox").value
    answer=getanswer.toLowerCase()
    if (answer==word) {
      if (answerturn=="player1") {
          player1score=player1score+1
          document.getElementById("player1score").innerHTML=player1score
      }  
      else{
        player2score=player2score+1
        document.getElementById("player2score").innerHTML=player2score     
      }
    }
    if (questionturn=="player1") {
        questionturn="player2"
        document.getElementById("playerquestion").innerHTML="questionturn  "+player2_name
    }
    else{
        questionturn="player1"
        document.getElementById("playerquestion").innerHTML="questionturn  "+player1_name   
    }
    if (answerturn=="player1") {
        answerturn="player2"
        document.getElementById("playeranswer").innerHTML="answernturn  "+player2_name
    }
    else{
        answerturn="player1"
        document.getElementById("playeranswer").innerHTML="answerturn  "+player1_name   
    }
    document.getElementById("output").innerHTML=""
}