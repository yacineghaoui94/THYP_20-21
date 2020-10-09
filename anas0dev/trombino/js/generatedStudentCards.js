"use strict";

let studList = new Array();
let facet = {};
let studCards = document.getElementById("studCards");
let dataCsv;

let file_csv = "./data/data.csv";


d3.csv(file_csv)
    .then((data) => {
        // console.log(data);
        setData(data);
    });

function getUrl(url){
    //merci à https://davidwalsh.name/query-string-javascript
    // https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en
    let newUrl = new URL(url);
    let urlParam = new URLSearchParams(newUrl.search);
    let id = urlParam.get('id');
    //merci à https://stackoverflow.com/questions/50664868/get-pictures-from-google-drive-folder-with-javascript-to-my-website
    let urlTof = "https://drive.google.com/uc?id=" + id + "&export=download";                      
    return urlTof;
}

// function createDiv(className, style){
//     let newElt = document.createElement("div");
//     newElt.className = className;
//     newElt.style = style;
//     return newElt;
// }

function createBalise(balise, className, src, style){
    let newElt = document.createElement(balise);
    newElt.className = className;
    newElt.src = src;
    newElt.style = style;
    return newElt;
}

// function createImg(src, className, style){
//     let newEltImg = document.createElement("IMG");
//     newEltImg.src = src;
//     newEltImg.className = className;
//     newEltImg.style = style;
//     return newEltImg;
// }

function setData(data){
    dataCsv = data;
    dataCsv.forEach(function(etud, id) {
        let newStud = new Student(etud, id, facet);
        facet = newStud.facet;
        newStud.cleanFacet();
        studList.push(newStud);
    });

    studList.forEach(stud => {
        studCards.appendChild(createCards_1(stud));
    });
}

function getUrl(url){
    //merci à https://davidwalsh.name/query-string-javascript
    // https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en
    let newUrl = new URL(url);
    let urlParam = new URLSearchParams(newUrl.search);
    let id = urlParam.get('id');
    //merci à https://stackoverflow.com/questions/50664868/get-pictures-from-google-drive-folder-with-javascript-to-my-website
    let urlTof = "https://drive.google.com/uc?id=" + id + "&export=download";                      
    return urlTof;
}

// function createDiv(className, style){
//     let newElt = document.createElement("div");
//     newElt.className = className;
//     newElt.style = style;
//     return newElt;
// }

function createBalise(balise, className, src, style){
    let newElt = document.createElement(balise);
    newElt.className = className;
    newElt.src = src;
    newElt.style = style;
    return newElt;
}

// function createImg(src, className, style){
//     let newEltImg = document.createElement("IMG");
//     newEltImg.src = src;
//     newEltImg.className = className;
//     newEltImg.style = style;
//     return newEltImg;
// }

function createCards_1(stud){
    let newElt = createBalise("div","card mb-3");
    let newElt2 = createBalise("div","row no-gutters");
    let newElt3 = createBalise("div","col-md-4 bg-white");
    let newImg = createBalise("img", "card-img", getUrl(stud.details["Votre photo"]));
    let newElt4 = createBalise("div","col-md-8");
    let newElt5 = createBalise("div","card-body");
    let newTitle = createBalise("h5", "card-title");
    newTitle.appendChild(document.createTextNode(stud.details["Votre prénom"] + " " + stud.details["Votre nom"].toUpperCase()));
    let newSubTitle = createBalise("p", "card-text");
    newSubTitle.appendChild(document.createTextNode(stud.details["Parcours"]));
    let newText = createBalise("p", "card-text");
    let newSmall = createBalise("small", "text-muted");
    let newLien = createBalise("a", undefined, "aaaaa.com");
    newSmall.appendChild(newLien).appendChild(document.createTextNode("Plus d'information"));

    newText.appendChild(newSmall);
    newElt5.appendChild(newTitle);
    newElt5.appendChild(newSubTitle);
    newElt5.appendChild(newText);
    newElt4.appendChild(newElt5);
    newElt3.appendChild(newImg);
    newElt2.appendChild(newElt3);
    newElt2.appendChild(newElt4);
    newElt.appendChild(newElt2);

    return newElt;
}
