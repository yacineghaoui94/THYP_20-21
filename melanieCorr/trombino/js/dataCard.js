let data; 
var dataList = d3.queue()
    .defer(d3.csv, 'data.csv')
    .awaitAll(function(error, results) {
        if (error) throw error;
        cardData(results); 
        data = results; 
    }); 

function cardData(data) {
    let dataStudents = data[0];

    dataStudents.forEach(function(data) {  
        displayBody(data); 
    });
}


function displayBody(data) {
    var card = d3.select('#student-cards').append('div')
            .attr('class', 'justify-content-center d-inline-block')
            .style('margin', '30px').append('div')
            .attr('class', 'card border-dark mb-3 text-center')
            .style('width', '21rem')
        card.append('div').attr('class', 'card-header').append('h5').text(data['Votre prénom'] + " " + data['Votre nom'])
            .append('a').attr('class', 'fa fa-info-circle float-right')
            .attr('href', 'infoPage.html?prenom='+ encodeURI(data['Votre prénom']))
        
    var cardBody = card.append('div').attr('class', 'card-body')
        cardBody.append('p').text(data['Dans quel parcours êtes vous inscris ?'])
        cardBody.append('img').attr('class', 'card-img-top')
            .style('max-height', '100%').style('max-width', '100%')
            .attr('src', function() {
                let imgId = data['Votre photo'].split('id=')[1]; 
                let imgStudent = 'https://drive.google.com/uc?id=' + imgId + '&export=download'; 
                return imgStudent;
            }) 

        card.append('div').attr('class', 'card-footer')
            .text(data['Votre mail'])
}

function parcoursFilter(parcours) {
    let cards = document.getElementById('student-cards');  
    cards.innerHTML = ''; 
    if (parcours === 'Tous') {
        setTimeout(() => {
            data[0].forEach(d => {
                cards = displayBody(d); 
            })
        }, 1000); 
    }
    else {
        setTimeout(() => {
            data[0].forEach(d => {
                if (d['Dans quel parcours êtes vous inscris ?'] === parcours) {
                    cards = displayBody(d); 
                }
            })
        }, 1000); 
    }
}

function ordiFilter(ordi) {
    let cards = document.getElementById('student-cards'); 
    cards.innerHTML = ''; 
    if (ordi === 'Tous') {
        setTimeout(() => {
            data[0].forEach(d => {
                cards = displayBody(d); 
            })
        }, 1000);
    }
    else {
        setTimeout(() => {
            data[0].forEach(d => {
                if (d['Avez-vous un ordinateur personnel pour suivre les cours ?'] === ordi) {
                    cards = displayBody(d); 
                }
            })
        }, 1000); 
    }
}

function langueFilter(langue) {
    let cards = document.getElementById('student-cards'); 
    cards.innerHTML = ''; 
    if (langue === 'Tous') {
        setTimeout(() => {
            data[0].forEach(d => {
                cards = displayBody(d); 
            })
        }, 1000);
    } 
    else {
        setTimeout(() => {
            data[0].forEach(d => {
                let l = 'Langues [' + langue + ']'; 
                if (d[l] === 'je connais bien' || d[l] === 'je suis expert(e)' || d[l] === 'je connais un peu') {
                    cards = displayBody(d); 
                }
            })
        }, 1000); 
    }
}

function reseauxFilter(reseau) {
    let cards = document.getElementById('student-cards'); 
    cards.innerHTML = ''; 
    if (reseau === 'Tous') {
        setTimeout(() => {
            data[0].forEach(d => {
                cards = displayBody(d); 
            })
        }, 1000);
    }
    else {
        setTimeout(() => {
            data[0].forEach(d => {
                let l = 'Quels réseaux sociaux [' + reseau + ']'; 
                if (d[l] === 'souvent' || d[l] === 'je suis accro') {
                    cards = displayBody(d); 
                }
            })
        }, 1000); 
    }
}

function connexionFilter(connexion) {
    let cards = document.getElementById('student-cards'); 
    cards.innerHTML = ''; 
    if (connexion === 'Tous') {
        setTimeout(() => {
            data[0].forEach(d => {
                cards = displayBody(d); 
            })
        }, 1000);
    }
    else {
        setTimeout(() => {
            data[0].forEach(d => {
                let l = 'Votre connexion internet personnelle est : [' + connexion + ']'; 
                if (d[l] === 'De bonne qualité' || d[l] === 'De qualité moyenne') {
                    cards = displayBody(d); 
                }
            })
        }, 1000); 
    }
}