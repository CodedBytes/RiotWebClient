// Função que ativa o menu
function menu() {
    document.getElementById("window").classList.toggle("show");
    
    /*
    * Para implementação de som.
    *

    if(document.getElementById("dropdown").classList.contains("show"))
    {
      var sfx = new Audio("./audios/diagOpen.wav");
      sfx.play();
    }else{
      var sfx = new Audio("./audios/diagClose.wav");
      sfx.play();
    } 
    
    */
}


window.onclick = function(event) {

    // Janela de info - login page.
    if (!event.target.matches('#wBtn')) {
      var dropdowns = document.getElementsByClassName("windowInfo");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          //var sfx = new Audio("./audios/diagClose.wav");
          //sfx.play();
        }
      }
    }

    // Janela de info - login page.
    if (!event.target.matches('#wBtnn')) {
      var dropdowns = document.getElementsByClassName("indexWindowInfo");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          //var sfx = new Audio("./audios/diagClose.wav");
          //sfx.play();
        }
      }
    }
}
  