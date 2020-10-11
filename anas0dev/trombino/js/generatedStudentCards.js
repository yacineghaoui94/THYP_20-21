"use strict";

let studListAll = new Array();
let studListDisplay;

let dataCsv;

let facet = {};

let studCards = document.getElementById("studCards");
let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("searchInput");
let navbarFacet = document.getElementById("navbarFacet");


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

function setData(data){
    dataCsv = data;
    dataCsv.forEach(function(etud, id) {
        let newStud = new Student(etud, id, facet);
        facet = newStud.facet;
        newStud.cleanFacet();
        studListAll.push(newStud);
    });

    studListDisplay = studListAll;
    generateCards(studListDisplay);
    createNavFacet(facet);
    // studListDisplay.forEach(stud => {
    //     studCards.appendChild(createCards_1(stud));
    // });
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
    if(className)
        newElt.className = className;
    if(src)
        newElt.src = src;
    if(style)
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
    let newElt = createBalise("div","card mb-3 studCard");
    let newElt2 = createBalise("div","row no-gutters");
    let newElt3 = createBalise("div","col-md-4 bg-white");
    let newImg = createBalise("img", "card-img", getUrl(stud.details["Votre photo"]));
    let newElt4 = createBalise("div","col-md-8");
    let newElt5 = createBalise("div","card-body");
    let newTitle = createBalise("h5", "card-title studName");
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

function generateCards(CardsList){
    CardsList.forEach(stud => {
        studCards.appendChild(createCards_1(stud));
    });
}

function filterStudByName(){
    let nameSearched = searchInput.value.toLowerCase();
    let studName = document.getElementsByClassName("studName");
    let cards = document.getElementsByClassName("studCard");

    for(let i = 0; i < studName.length; i++){
        if(studName[i].textContent.toLowerCase().indexOf(nameSearched) == -1){
            cards[i].style.display = "none";
        }else{
            cards[i].style.display = "";
        }
    }
}


searchButton.onclick = filterStudByName;
searchInput.addEventListener("keyup", e => {
        filterStudByName();
});


function createNavFacet(facet) {
    let newNavbar = createBalise("ul", "navbar-nav mr-auto");
    let parcours = createDropdown("Parcours", facet);
    newNavbar.appendChild(parcours);

    // let newNavbar2 = createBalise("ul", "navbar-nav mr-auto");
    // let ordinateur = createDropdown("Ordinateur", facet);
    // newNavbar2.appendChild(ordinateur);
    // console.log(facet);

    // navbarFacet.prepend(newNavbar2);
    navbarFacet.prepend(newNavbar);
}

function createDropdown(name, facet) {
    if(facet[name]){
        let newDropdown = createBalise("li", "nav-item dropdown");
        // console.log(facet[name]);
        let title = createBalise("a", "nav-link dropdown-toggle");
        title.href = "#";
        title.id = "navbarDropdown";
        // title.role = "button";
        title.setAttribute("role", "button");
        title.setAttribute("data-toggle", "dropdown")
        title.setAttribute("aria-haspopup", "true")
        title.setAttribute("aria-expanded", "false")
        // title["data-toggle"] = "dropdown";
        // title["aria-haspopup"] = "true";
        // title["aria-expanded"] = "false";
        title.appendChild(document.createTextNode(name));
        newDropdown.appendChild(title);

        let subTitles = createBalise("div", "dropdown-menu");
        subTitles.setAttribute("aria-labelledby", "navbarDropdown");
        // subTitles["aria-labelledby"] = "navbarDropdown";

        for(const exp in facet[name].facetList){
            let subTitle = createBalise("a", "dropdown-item");
            subTitle.href = "#";
            // console.log(exp);
            let checkbox = createBalise("div", "form-check");
            let checkInput = createBalise("input", "form-check-input");
            checkInput.setAttribute("type", "checkbox");
            checkInput.setAttribute("value", "");
            // checkInput.type = "checkbox";
            // checkInput.value = "";
            checkInput.id = "defaultCheck1";
            checkbox.appendChild(checkInput);
            let checkLabel = createBalise("label", "form-check-label");
            checkLabel.setAttribute("for", "defaultCheck1");
            // checkLabel.for = "defaultCheck1";
            checkLabel.appendChild(document.createTextNode(exp));
            checkbox.appendChild(checkLabel);

            subTitle.appendChild(checkbox);
            subTitles.appendChild(subTitle);
        }
        newDropdown.appendChild(title);
        newDropdown.appendChild(subTitles);
        

        return newDropdown;
    }
}

{/* <ul class="navbar-nav mr-auto">			
			<li class="nav-item dropdown">
			  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Parcours
			  </a>
			  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
				<a class="dropdown-item" href="#">
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
						<label class="form-check-label" for="defaultCheck1">
						  Default checkbox
						</label>
					  </div>
				</a>
				<a class="dropdown-item" href="#">
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
						<label class="form-check-label" for="defaultCheck1">
						  Default checkbox
						</label>
					  </div>
				</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="#">Something else here</a>
			  </div>
			</li>
		</ul> */}