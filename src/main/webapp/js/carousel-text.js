function Project(nome,categoria,testo){
  this.nome = nome;
  this.categoria = categoria;
  this.testo = testo;
}

//Creo una variabile per ogni progetto e la inizializzo
var Libra = new Project("Libra", "Web app", "Libra è una piattaforma creata per la gestione dei tirocini esterni universitari. Permette a 4 tipologie di utenti (Studente,Professore,Segreteria,Azienda) di gestire la pratica del tirocinio in modo semplice e veloce. Grazie a Libra è possibile ridurre del 90% i tempi necessari all'avvio e permette a tutti gli utenti di poter monitorare lo stato delle attività. ");
var Fumetteria = new Project("Fumetteria", "E-commerce", "Fumetteria è una piattaforma che permette ad un negoziante di poter mettere in vendita online il propio materiale, in modo da ampliare la sua visibilità e di conseguenza la sua clientela. Grazie ad essa è possibile mettere in vendita diverse categorie di oggetti, associandoli ad una serie(se appartenente), e quindi di poterli vendere sia singolarmente che tramite abbonamento. ");
var MyProfile = new Project("MyProfile", "Website", "MyProfile è un sito web che permette ad ognuno di noi di poter mettere in mostra le proprie capacità e competenze, garantendo una presentazione diversa dagli standard che sia allo stesso tempo creativa, innovativa e professionale. Possiamo dar sfogo alla nostra creatività in modo da ottenere un design che sia di impatto per tutti i nostri utenti e che allo stesso tempo fornisca una chiara idea di chi siamo e cosa sappiamo fare.");

var projects = [Libra,Fumetteria,MyProfile];

//Creo delle variabili per memorizzare le immagini relative ad ogni progetto
var screenLibra = ["./img/screen/libra/1.png","./img/screen/libra/2.png","./img/screen/libra/3.png","./img/screen/libra/4.png"];
var screenFumetteria = ["./img/screen/fumetteria/1.jpg","./img/screen/fumetteria/2.jpg","./img/screen/fumetteria/3.jpg"];
var i = 0, j;

//Funzione che passa al progetto successivo
function next(){
  i++;
  if(i > projects.length-1){i = 0;}

  document.getElementById("projectName").innerHTML=projects[i].nome;
  document.getElementById("projectCategory").innerHTML=projects[i].categoria;
  document.getElementById("projectText").innerHTML=projects[i].testo;
  }

//Funzione che passa al progetto precedente
function prev(){
  i--;
  if(i < 0){i = projects.length-1};

  document.getElementById("projectName").innerHTML=projects[i].nome;
  document.getElementById("projectCategory").innerHTML=projects[i].categoria;
  document.getElementById("projectText").innerHTML=projects[i].testo;
  i--;
  gallery();
}

//Funzione che carica le immagini da visualizzare nella gallery
function gallery(){

  document.getElementById("galleryButton").href="./img/"+projects[i].nome+".png";
  j = 0;

    //Creo uno switch che in base al progetto riempie il tag data-remote con i rispettivi screen.
    switch (i) {
      case 0: while(j < screenLibra.length){
                var n = "hidden"+j;
                document.getElementById(n).setAttribute("data-remote", screenLibra[j]);
                document.getElementById(n).setAttribute("data-gallery", "hidden-images");
                j++;
              }
              break;

      case 1: while(j < screenFumetteria.length){
                var n = "hidden"+j;
                document.getElementById(n).setAttribute("data-remote", screenFumetteria[j]);
                document.getElementById(n).setAttribute("data-gallery", "hidden-images");
                j++;
              }
              break;

      default: break;
    }

    //Rendo inutilizzabili i div in eccesso (le immagini hidden).
    while(j >= 0 && j < 4){
      var n = "hidden"+j;
      document.getElementById(n).setAttribute("data-gallery", " ");
      j++;
    }
}

//Funzione invocata ogni volta che si chiede di spostarsi ad altri progetti (sia prev che next)
$('.carousel').on('slide.bs.carousel', function () {
  next();
  gallery();
})
