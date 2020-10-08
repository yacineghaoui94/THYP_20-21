var divContainers = document.getElementById("rows");
var input = document.getElementById("search");
 d3.csv("./data.csv").then(function(data){
                Upload(data);
                console.log(data[1]);
            });
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13 && input.value) {
  var profils = divContainers.getElementsByTagName("div");
     Object.values(profils).forEach(element => {
                        if(element.innerHTML.includes(input.value)){
                            element.classList.remove("hide");
                        }
                        else{
                            element.classList.add("hide");
                        }
                    });
                 }
                });
        function GetImage(img){
                var url = new URL(img);
                var urlParam = new URLSearchParams(url.search);
                var id = urlParam.get('id');
                var urlTof = "https://drive.google.com/uc?id="+id+"&export=download";                        
                return urlTof; 
            }        
        function Upload(data){
                for(let i = 0; i < data.length; i++){
                    var rs ="", langages ="", langues = "";
                    var url_img = GetImage(data[i]["Votre photo"]);
                    divContainers.innerHTML += "<div class='profil col-sm-5 mb-5 mr-2 ml-2 bg-white'> "
                    + "<img class='profil-img' src=" + url_img + "> "
                    + "<p class'profil-name'> " + data[i]["Votre prénom"] + " " + data[i]["Votre nom"].toUpperCase() + "<span> " + data[i]["N° étudiant"] + "</span></p> "
                    + "<p class'profil-email'> " +  data[i]["Votre mail"] + "</p> "
                    + "<p class'profil-formation'> " + data[i]["Dans quel parcours êtes vous inscris ?"] + "</p> "
                    + "<p class'profil-skills'>" + data[i]["Vos spécialités"] + "</p>"
                    + "<p class'profil-github'>" + data[i]["Votre compte GitHub"] + "</p>"         
                    + "</span></div>";
                }
            }        
        function Tri(id){
          var profils = divContainers.getElementsByTagName("div");
          document.getElementById("btn_menu").innerText = id
          Object.values(profils).forEach(element => {
          if(id === "Tous"){
            element.classList.remove("hide");
          }
          else if(element.innerHTML.includes(id)){
            element.classList.remove("hide");
          }
          else {
            element.classList.add("hide");
          }
          });
        }
            
        
            
        
            
            
