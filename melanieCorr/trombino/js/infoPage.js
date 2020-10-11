var dataList = d3.queue()
    .defer(d3.csv, 'data.csv')
    .awaitAll(function(error, results) {
        if (error) throw error;
        infoData(results); 
    });

var paramPrenom = window.location.search.substring(8);

var tooltip = d3.select('body').append('div')
.attr('class', 'tooltip')
.style('opacity', 0);

var vals = {
    'Pas besoin': 1, 'Besoin d\'approfondissement': 5, 'Besoin urgent': 10, 
    'je ne connais pas du tout': 1, 'je connais un peu': 5, 'je connais bien': 10, 'je suis expert(e)': 20
}

function infoData(data) {
    let dataStudents = data[0];
    let besoins = [], competences = [], outils = [], langages = [], langues = [], reseaux = []; 

    dataStudents.forEach(function(data, id) { 
        if (data['Votre prénom'] === decodeURI(paramPrenom)) {
            console.log(data); 
            for (i in data) {
                let quest = i.substring(i.indexOf("[")+1,i.indexOf("]")); 
                let rep = data[i];
                let importance = vals[rep];
                if(i.indexOf('besoins') > 0) {
                    besoins.push({'question': quest, 'importance': importance, 'reponse': rep, 'id': id});
                }
                if(i.indexOf('compétences') > 0) {
                    competences.push({'question': quest, 'importance': importance, 'reponse': rep, 'id': id});
                }
                if(i.indexOf('outils utilisez') > 0) {
                    outils.push({'question': quest, 'importance': importance, 'reponse': rep, 'id': id});
                }
                if (i.indexOf('Langages') === 0) {
                    langages.push({ 'question': quest, 'reponse': rep }); 
                }
                if (i.indexOf('Langues') === 0) {
                    langues.push({ 'question': quest, 'reponse': rep }); 
                }
                if (i.indexOf('réseaux sociaux') > 0) {
                    reseaux.push({ 'question': quest, 'reponse': rep }); 
                }
            }

            var media = d3.select('#media')
                media.append('img').attr('class', 'align-self-center mr-3').style('height', '15rem')
                .style('max-height', '100%').style('max-width', '100%').attr('src', function() {
                    let imgId = data['Votre photo'].split('id=')[1]; 
                    let imgStudent = 'https://drive.google.com/uc?id=' + imgId + '&export=download'; 
                    return imgStudent;
                })

            var mediaBody = media.append('div').attr('class', 'media-body').attr('id', 'media-body')
                mediaBody.append('h5').text(data['Votre prénom'] + ' ' + data['Votre nom']).append('span')
                    .style('color', 'grey').text(' (' + data['N° étudiant'] + ')')
                    .append('h6').style('color', 'grey').text(data['Dans quel parcours êtes vous inscris ?'])
                mediaBody.append('span').attr('class', 'fa fa-github').append('a').style('color', 'black')
                    .attr('href', 'https://github.com/' + data['Votre compte GitHub'])
                    .append('strong').text(' ' + data['Votre compte GitHub'])
                mediaBody.append('br')
                mediaBody.append('span').attr('class', 'fa fa-at').append('span').style('color', 'black')
                    .attr('onclick', 'sendEmail()').append('strong').text(' ' + data['Votre mail'])
                mediaBody.append('br')
            var codeLangages = mediaBody.append('span').attr('class', 'fa fa-code')
                mediaBody.append('br')
            var languages = mediaBody.append('span').attr('class', 'fa fa-language')
                mediaBody.append('br')
            var reseauxSo = mediaBody.append('span').attr('class', 'fa fa-users')
                mediaBody.append('br')

            langages.forEach(function(l) {
                if (l.reponse === 'je connais un peu' || l.reponse === 'je connais bien' || l.reponse === 'je suis expert(e)') {
                    codeLangages.append('strong').text(' ' + l.question); 
                }
            })

            langues.forEach(function(l) {
                if (l.reponse === 'je connais un peu' || l.reponse === 'je connais bien' || l.reponse === 'je suis expert(e)') {
                    languages.append('strong').text(' ' + l.question); 
                }
            })

            reseaux.forEach(function(l) {
                if (l.reponse === 'souvent' || l.reponse === 'je suis accro') {
                    reseauxSo.append('strong').text(' ' + l.question);
                }
            })
        }
    });
    drawChart(100, besoins, 'Besoins'); 
    drawChart(100, competences, 'Compétences'); 
    drawChart(100, outils, 'Outils'); 
}

function drawChart(size, data, title) {
    var w = size, h = size, radius = Math.min(w, h) / 2; 
    var floatFormat = d3.format('.4r'); 
    var color = d3.scaleOrdinal(d3.schemeCategory20b);

    var wSvg = w + 10 + 0, hSvg = h + 10 + 10; 
    var svg = d3.select('#media-body').append('svg')
        .attr('width', wSvg).attr('height', hSvg)
        .append('g').attr('transform', 'translate(' + (wSvg / 2) + ',' + (hSvg / 2) + ')');
    
    var arc = d3.arc().innerRadius(radius * 0.6).outerRadius(radius * 0.8); 

    var pie = d3.pie().value(function(d) { return floatFormat(d['importance']) }).sort(null); 

    var tooltip = d3.select('#media-body').append('div').attr('class', 'tooltip'); 
        tooltip.append('div').attr('class', 'label'); 

    svg.append('g').attr('class', 'slices');

    var path = svg.select('.slices').datum(data).selectAll('path').data(pie).enter()
        .append('path').attr('d', arc).attr('fill', function(d) {
            d.couleur = color(d.data['question']); 
            return d.couleur; 
        }); 
    
    svg.append('text').html(title).attr('text-anchor', 'middle').attr('y', hSvg / 2); 

    path.on('mouseenter', function(data) {
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(toolTipHTML(data))
            .style('background', data.couleur)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    })

    path.on('mouseout', function () {
        d3.selectAll('.toolCircle').remove();           		                    
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    });

    function toolTipHTML(data) {
        var tip = '<h6 class="card-title">' + data.data.question + '</h6>'
            tip += '<p class="card-text">' + data.data.reponse + '</p>';
        
        return tip; 
    }
}

function sendEmail() {
    console.log("Send an email"); 
}