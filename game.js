function adduser(){
    player1name=document.getElementById("name1").value
    player2name=document.getElementById("name2").value
    localStorage.setItem("player1name", player1name)
    localStorage.setItem("player2name", player2name)
    window.location="game_page.html"
}