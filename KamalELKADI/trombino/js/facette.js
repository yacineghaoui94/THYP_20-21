var divContainers = document.getElementById("rows");
let input = document.getElementById("search");
        
            input.addEventListener("keyup", function(event) {
                if (event.keyCode === 13 && input.value) {
                    let profils = divContainers.getElementsByTagName("div");
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

        
 d3.csv("./data.csv").then(function(data){
                Upload(data);               
                console.log(data[1]);
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
                  let rs ="", langages ="", langues = "";
                    Object.keys(data[i]).forEach(element => {
                    if(data[i][element] !== "je ne connais pas du tout" && element.includes("Langages")){
                        langages += element.match(/\[(.*?)\]/)[1] + " ";
                    }
                    if((data[i][element] === "je connais bien" || data[i][element] === "je suis expert(e)") && element.includes("Langues")){
                        langues += element.match(/\[(.*?)\]/)[1] + " ";
                    }
                    if((data[i][element] === "je suis accro" || data[i][element] === "souvent") && element.includes("sociaux")){
                        rs += element.match(/\[(.*?)\]/)[1] + " ";
                    }
                    
                });
                    var url_img = GetImage(data[i]["Votre photo"]);
                   divContainers.innerHTML += "<div class='profil col-sm-3 mb-5 mr-2 ml-2 bg-white'> "
                    + "<img class='profil-img' src=" + url_img + " alt='Card image cap' style='height: 250px;background-color: rgb(21, 21, 21);color: rgb(255, 255, 255);'> "
                    + "<p class'profil-name'> " + "Etudiant : " + data[i]["Votre prénom"] + " " + data[i]["Votre nom"].toUpperCase() + " </br>" + "N° : "+ data[i]["N° étudiant"] + "</p> "
                    + "<p class'profil-formation'> " + "Parcours : " + data[i]["Dans quel parcours êtes vous inscris ?"] + "</p> "
                    + "<p class'profil-skills'>" + "Spécialités : " +data[i]["Vos spécialités"] + "</p>"
                    + "<p class'profil-github'>" + "Github : " +data[i]["Votre compte GitHub"] + "</p>" 
                    + "<p class'profil-email'> " +"<p> Mail : " + "<a href=mailto:" +  data[i]["Votre mail"] + ">" + data[i]["Votre mail"] + "</p> "        
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

function displaySpinners()
    {
        document.getElementById("spinner1").style.display = "block";
        document.getElementById("spinner2").style.display = "block";
    }
    function hideSpinners()
    {
        document.getElementById("spinner1").style.display = "none";
        document.getElementById("spinner2").style.display = "none";
    }
var parcours;
var dataPhoto, dataForm, dataFacet=[], dataDoublons={}
    , vals = {"Pas besoin":1, "Besoin d'approfondissement":5, "Besoin urgent":10, "je ne connais pas du tout":1,"je connais un peu":5,"je connais bien":10,"je suis expert(e)":20
        ,"Oui":1,"Non":1
        ,"jamais":1,"rarement":2,"souvent":5,"je suis accro":10
        ,"Dans quel parcours êtes vous inscris ?":"Parcours"
        ,"Avez-vous un ordinateur personnel pour suivre les cours ?":"Ordinateur"
        ,"Votre connexion internet personnelle est :":"Connexion"        
        ,"Votre compte GitHub":"Compte"
        ,"Votre compte Diigo":"Compte"
        ,"Votre compte Zotero":"Compte"
        ,"Vos spécialités":"Spécialités"
        ,"Vos spécialités":"Objectifs"
        ,"Votre formation précédente":"Formation"
        ,"Quelles sont besoins ?":"Besoins"        
        ,"Quelles sont vos compétences ?":"Compétences"        
        ,"Quelles outils utilisez vous ?":"Outils"        
        ,"Langages":"Langages"
        ,"Langues":"Langues"
        ,"CMS":"CMS"
        ,"Quels réseaux sociaux":"Réseaux sociaux"
        };
    
    let url = 'data.csv';  
    var csv_data;          
    var q = d3.queue()
        .defer(d3.csv, url)
        .awaitAll(function(error, results) {
            if (error) throw error;
            csv_data=results;
            localStorage.clear();
            setData(results,false);
            
        });
    var divTT = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    function setData(data,donneeFiltree){
        
        dataFacet=[];
        dataDoublons={};
 document.getElementById("etuCards").innerHTML="";
 document.getElementById("tabFacet").innerHTML="";
      if(donneeFiltree==true){ dataForm = data;}
      else { dataForm = data[0];
      parcours=dataFacet[0];}
     // console.log(dataForm);
            let dataEtu = []; 
      
            //réorganise les datas
            dataForm.forEach(function(d, j){
                d.reponses = {'besoins':[],'competences':[],'outils':[]};
                for (let i in d) {
                    //compilation des facettes
                    let quest = i.indexOf("[") > 0 ? vals[i.substring(0, i.indexOf("[")-1)] : vals[i]; 
                    let prop = i.substring(i.indexOf("[")+1,i.indexOf("]")); 
                    let v = d[i];
                    let n = vals[v];

                    if(quest){
                        if(dataDoublons[quest] === undefined){
                            dataDoublons[quest]=dataFacet.length; 
                            dataFacet.push({'label':quest,'values':[]});
                           // console.log(dataFacet);
                        }
                        let rep = prop ? prop : v;
                        let kRep = quest+'_'+rep;
                        if(dataDoublons[kRep] === undefined){
                            dataDoublons[kRep]=dataFacet[dataDoublons[quest]]['values'].length;
                            dataFacet[dataDoublons[quest]]['values'].push({
                                'prop':rep
                                ,'importance': 0
                                ,'expression':v
                                ,'ids':[]
                            });
                        }                        
                        dataFacet[dataDoublons[quest]]['values'][dataDoublons[kRep]]['ids'].push(j);
                        dataFacet[dataDoublons[quest]]['values'][dataDoublons[kRep]]['importance'] += n ? n : 1;
                        
                    }
                    if(i.indexOf("besoins")>0){
                        d.reponses.besoins.push({'prop':prop,'importance':n,'expression':v,'id':j});
                        //d.reponses.push({'besoins':prop,'val':n,'lib':v});
                    }
                    if(i.indexOf("compétences")>0){
                        d.reponses.competences.push({'prop':prop,'importance':n,'expression':v,'id':j});
                    }
                    if(i.indexOf("outils utilisez")>0){
                        d.reponses.outils.push({'prop':prop,'importance':n,'expression':v,'id':j});
                    }							
                }
            });	
            hideSpinners();
            let html = '<div class="container"><div class="row">';
            html += '<div id="tabFacetContent__Col1" class="col-sm" style="padding-right:0px;padding-left:0px;"></div>';
            
            html += '</div></div>';
            //ajoute les tab de filtres
            var arrFacet = d3.select("#tabFacet")
                .selectAll("div")
                .data(dataFacet)
                .enter().append("div")
                .attr('class',"nav-item")
                .attr('role',"presentation")
                .append("a")
                .attr('class',function(d,i){
                    return i==0 ? "nav-link active" : "nav-link"
                })
                .attr('id',function(d,i){
                    return "tabFacet"+i
                })

                .text(d => d.label)
                .html(function(d, i) { return html.replace(/__/gi, "_"+i+"_");});	
                arrFacet.append('div').attr('id',function(d,i){
                    return "tabFacetContentDiag"+i
                })
                .text((d,i) => {
                    drawGraphReponse("#tabFacetContent_"+i+"_Col1", d.label, d.values, 100);
                });			

            var cards = d3.select('#etuCards').selectAll(".col-sm-4 mb-12").data(dataForm).enter()
                .append('div').attr('class','col-sm-4 mb-12').style('margin-bottom','10px')
                .append("div").attr('class','card');
            cards.append("img")
                    .attr('id',function(d, i) {return 'imgCard'+i})
                    .attr('class','card-img-top')
                    .attr('src',function(d) { 
                        
                        let url = new URL(d['Votre photo']);
                        let urlParam = new URLSearchParams(url.search);
                        let id = urlParam.get('id');
                       
                        let urlTof = "https://drive.google.com/uc?id="+id+"&export=download";                        
                        return urlTof; 
                        });


            var cardBody = cards.append('div').attr('class','card-body');
            cardBody.append('h4').attr('class','card-title')	  			
                        .text(function(d) { 
                            return d['Votre prénom'].toLowerCase()+' '+d['Votre nom']; 
                                });
   
            cardBody.append('h6').text(d => d['Dans quel parcours êtes vous inscris ?']);


            //construction du layout pour les graphiques
            html = '<div class="container-fluid"><div class="row">';
            html += '<div id="etudNum__Col1" class="col-4" style="padding-right:0px;padding-left:0px;"></div>';
            html += '<div id="etudNum__Col2" class="col-4" style="padding-right:0px;padding-left:0px;"></div>';
            html += '<div id="etudNum__Col3" class="col-4" style="padding-right:0px;padding-left:0px;"></div>';
            html += '</div></div>';
            cardBody.append('div').attr('class','card-text').attr('id',function(d, i) { return 'etudNum_'+i; })
                .html(function(d, i) { return html.replace(/__/gi, "_"+i+"_");});	  			
            cards.append('div').attr('class','card-footer')
                .append('small').attr('class','text-muted')
                .text(function(d, i) {
                        //charge le graph des réponses
                        var size = 100;
                        drawGraphReponse("#etudNum_"+i+"_Col1", 'Besoins', d.reponses.besoins, size);
                        drawGraphReponse("#etudNum_"+i+"_Col2", 'Compétences', d.reponses.competences, size);
                        drawGraphReponse("#etudNum_"+i+"_Col3", 'Outils', d.reponses.outils, size);
                return d['Votre mail'].toLowerCase(); 
                    });
                    if(donneeFiltree==false)
    {
      parcours=dataFacet[0];}
                  var selectParcours=  document.getElementById("selectParcours");
                
                  selectParcours.innerHTML='<option value=""></option>';
                 // console.log( console.log(dataFacet[0].values));
                var selectedParcours=localStorage.getItem("selectedParcours");
                console.log(selectedParcours);
for (let index = 0; index < parcours.values.length; index++) {
   

  var opt = document.createElement('option');
    opt.value = parcours.values[index].prop;
    opt.innerHTML = parcours.values[index].prop;
  
    selectParcours.appendChild(opt);
    if(selectedParcours==parcours.values[index].prop){selectParcours.selectedIndex=index+1; }
}

}    

function drawGraphReponse(idE, titre, data, size){

	let donut = donutChart()
	    .width(size)
	    .height(size)
	    .cornerRadius(3) // sets how rounded the corners are on each slice
	    .padAngle(0.015) // effectively dictates the gap between slices
	    .variable('importance')
	    .category('prop')
	    .title(titre);
    let s = d3.select(idE)
        .datum(data) // bind data to the div
        .call(donut); // draw chart in div
  //  console.log(idE+" graph fait");
}


function donutChart() {
    var width,
        height,
        margin = {top: 0, right: 0, bottom: 10, left: 0},
        colour = d3.scaleOrdinal(d3.schemeCategory20c), // colour scheme
        variable, // value in data that will dictate proportions on chart
        category, // compare data by
        padAngle, // effectively dictates the gap between slices
        floatFormat = d3.format('.4r'),
        cornerRadius, // sets how rounded the corners are on each slice
        percentFormat = d3.format(',.2%'),
        title;

    function chart(selection){
        selection.each(function(data) {
            // generate chart

            // ===========================================================================================
            // Set up constructors for making donut. See https://github.com/d3/d3-shape/blob/master/README.md
            var radius = Math.min(width, height) / 2;

            // creates a new pie generator
            var pie = d3.pie()
                .value(function(d) { return floatFormat(d[variable]); })
                .sort(null);

            // contructs and arc generator. This will be used for the donut. The difference between outer and inner
            // radius will dictate the thickness of the donut
            var arc = d3.arc()
                .outerRadius(radius * 0.8)
                .innerRadius(radius * 0.6)
                .cornerRadius(cornerRadius)
                .padAngle(padAngle);

            // this arc is used for aligning the text labels
            var outerArc = d3.arc()
                .outerRadius(radius * 0.9)
                .innerRadius(radius * 0.9);

                
            // ===========================================================================================

            // ===========================================================================================
            // append the svg object to the selection
            var wSvg = width + margin.left + margin.right, hSvg = height + margin.top + margin.bottom; 
            var svg = selection.append('svg')
                .attr('width', wSvg)
                .attr('height', hSvg)
              .append('g')
                .attr('transform', 'translate(' + wSvg / 2 + ',' + hSvg / 2 + ')');            	
            // ===========================================================================================
            // g elements to keep elements within svg modular
            svg.append('g').attr('class', 'slices');
            svg.append('g').attr('class', 'labelName');
            svg.append('g').attr('class', 'lines');
            // ===========================================================================================

            // ===========================================================================================
            // add and colour the donut slices
            var path = svg.select('.slices')
                .datum(data).selectAll('path')
                .data(pie)
              .enter().append('path')
                .attr('fill', function(d) { 
                    d.couleur = colour(d.data[category])
                    return d.couleur; 
                })
                .attr('d', arc);


            //ajoute le titre
            svg.append('text')
                .html(title)            
                .attr('text-anchor', 'middle')
                .attr('y', hSvg/2);            	


            // ===========================================================================================
            // add tooltip to mouse events on slices and labels
            d3.selectAll('.labelName text, .slices path').call(toolTip);
            // ===========================================================================================

            // ===========================================================================================
            // Functions

            // calculates the angle for the middle of a slice
            function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; }

            // function that creates and adds the tool tip to a selected element
            function toolTip(selection) {

                // add tooltip (svg circle element) when mouse enters label or slice
                selection.on('mouseenter', function (data) {
                	
              		
                        divTT.transition()
                            .duration(200)
                            .style("opacity", .9);
                        divTT.html(toolTipHTML(data))
                            .style('background', data.couleur)
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY - 28) + "px");


                });

                // remove the tooltip when mouse leaves the slice/label
                selection.on('mouseout', function (data) {
                    d3.selectAll('.toolCircle').remove();
              		                    
                        divTT.transition()
                            .duration(500)
                            .style("opacity", 0);
                                    });
            }

            // function to create the HTML string for the tool tip. Loops through each key in data object
            // and returns the html string key: value
            function toolTipHTML(data) {

            		var tip = '<h6 class="card-title">'+data.data.prop+'</h6>'
            		tip += '<p class="card-text">'+data.data.expression+'</p>';

                return tip;
            }
            // ===========================================================================================

        });
    }

    // getter and setter functions. See Mike Bostocks post "Towards Reusable Charts" for a tutorial on how this works.
    chart.width = function(value) {
        if (!arguments.length) return width;
        width = value;
        return chart;
    };

    chart.height = function(value) {
        if (!arguments.length) return height;
        height = value;
        return chart;
    };

    chart.margin = function(value) {
        if (!arguments.length) return margin;
        margin = value;
        return chart;
    };

    chart.radius = function(value) {
        if (!arguments.length) return radius;
        radius = value;
        return chart;
    };

    chart.padAngle = function(value) {
        if (!arguments.length) return padAngle;
        padAngle = value;
        return chart;
    };

    chart.cornerRadius = function(value) {
        if (!arguments.length) return cornerRadius;
        cornerRadius = value;
        return chart;
    };

    chart.colour = function(value) {
        if (!arguments.length) return colour;
        colour = value;
        return chart;
    };

    chart.variable = function(value) {
        if (!arguments.length) return variable;
        variable = value;
        return chart;
    };

    chart.category = function(value) {
        if (!arguments.length) return category;
        category = value;
        return chart;
    };

    chart.title = function(value) {
        if (!arguments.length) return title;
        title = value;
        return chart;
    };
    
    return chart;
}          
        
            
        
            
            
