


function cle(id) {
    d3.csv("data.csv", function(data) {
        ProfileDisplayByPromo(data, id);
    });
}
/*
function profileDisplay (data) {
    for(let i = 0; i < data.length; i++) {
        let url_img = getPhoto (data[i]["Votre photo"]);
        if( divCardDisplayAll != null) {
            divCardDisplayAll.innerHTML += "<div class='col'> "
            // + "<img class='img-responsive' src=" + url_img + "> "
            + "<h6 class'card-title'>" + data[i]["Votre prénom"] + " " + data[i]["Votre nom"].toUpperCase() + "</h6>"
            + "<p class'card-title'>" + data[i]["Dans quel parcours êtes vous inscris ?"] +"</p> "
            + "<p class'card-title'>" + "<a href=mailto:" +  data[i]["Votre mail"] + "</a>" + data[i]["Votre mail"] + "</p> "
            +"<hr>"
            + "</div>";
        }
    }
}
*/
function ProfileDisplayByPromo(data, id){
    for(let i = 0; i < data.length; i++) {
        let url_img = getPhoto (data[i]["Votre photo"]);
        let divCardDisplayAll = document.getElementById("cardDisplayAll");
        if( divCardDisplayAll != null) {
            if (data[i]["Dans quel parcours êtes vous inscris ?"] === id) {
                divCardDisplayAll.innerHTML += "<div class='col'> "
                // + "<img class='img-responsive' src=" + url_img + "> "
                + "<h6 class'card-title'>" + data[i]["Votre prénom"] + " " + data[i]["Votre nom"].toUpperCase() + "</h6>"
                + "<p class'card-title'>" + data[i]["Dans quel parcours êtes vous inscris ?"] +"</p> "
                + "<p class'card-title'>" + "<a href=mailto:" +  data[i]["Votre mail"] + "</a>" + data[i]["Votre mail"] + "</p> "
                +"<hr>"
                + "</div>";
            }
        }
    }
}
/*
function thypProfileDisplay(data){
    for(let i = 0; i < data.length; i++) {
        let url_img = getPhoto (data[i]["Votre photo"]);
        if( divCardDisplayAll != null) {
            if (data[i]["Dans quel parcours êtes vous inscris ?"] == "M2 THYP") {
                divCardDisplayAll.innerHTML += "<div class='col'> "
                // + "<img class='img-responsive' src=" + url_img + "> "
                + "<h6 class'card-title'>" + data[i]["Votre prénom"] + " " + data[i]["Votre nom"].toUpperCase() + "</h6>"
                + "<p class'card-title'>" + data[i]["Dans quel parcours êtes vous inscris ?"] +"</p> "
                + "<p class'card-title'>" + "<a href=mailto:" +  data[i]["Votre mail"] + "</a>" + data[i]["Votre mail"] + "</p> "
                +"<hr>"
                + "</div>";
            }
        }
    }
}
*/
function getPhoto (img) {
    let url = new URL(img);
    let urlParam = new URLSearchParams(url.search);
    let id = urlParam.get('id');
    let link = "https://drive.google.com/uc?id="+id+"&export=download";                        
    return link;
}

