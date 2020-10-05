var dataList = d3.queue()
    .defer(d3.csv, 'data.csv')
    .awaitAll(function(error, results) {
        if (error) throw error;
        
        cardData(results)
    });

var vals = {
    "Pas besoin":1, "Besoin d'approfondissement":5, "Besoin urgent":10, 
    "je ne connais pas du tout":1, "je connais un peu":5, "je vonnais bien":10, "je suis expert(e)":20,
    "Oui":1, "Non":1, 
    "jamais":1, "rarement":2, "souvent":5, "je suis accro":10,
    "Dans quel parcours êtes vous inscris ?": "Parcours",
    "Avez-vous un ordinateur personnel pour suivre les cours ?": "Ordinateur",
    "Votre connexion internet personnelle est :": "Connexion",
    "Vos spécialités": "Spécialités",
    "Vos spécialités": "Objectifs",
    "Votre formation précédente": "Formation",
    "Quelles sont besoins ?": "Besoins",      
    "Quelles sont vos compétences ?": "Compétences",        
    "Quelles outils utilisez vous ?": "Outils",       
    "Langages": "Langages",
    "Langues": "Langues",
    "CMS": "CMS",
    "Quels réseaux sociaux": "Réseaux sociaux"
}, facet=[], spare={}, res = []

function cardData(data) {
    let dataStudents = data[0];

    var m1cen = document.getElementById('m1cen').checked;
    var m1gsi = document.getElementById('m1gsi').checked;
    var m1net = document.getElementById('m1net').checked;
    var m2thyp = document.getElementById('m2thyp').checked;
    var ordiOui = document.getElementById('ordiOui').checked;
    var ordiNon = document.getElementById('ordiNon').checked;

    dataStudents.forEach(function(data, j) {  

        dataResponses = {'besoins':[], 'competences':[], 'outils':[]};
        for (let i in data) {
            let question = i.indexOf("[") > 0 ? vals[i.substring(0, i.indexOf("[")-1)] : vals[i]; 
            let quest = i.substring(i.indexOf("[")+1,i.indexOf("]")); 
            let rep = data[i];
            let importance = vals[rep];
            if(i.indexOf("besoins") > 0){
                dataResponses.besoins.push({'question': quest, 'importance': importance, 'reponse': rep, 'id': j});
            }
            if(i.indexOf("compétences") > 0){
                dataResponses.competences.push({'question': quest, 'importance': importance, 'reponse': rep, 'id':j});
            }
            if(i.indexOf("outils utilisez") > 0){
                dataResponses.outils.push({'question': quest, 'importance': importance, 'reponse': rep, 'id':j});
            }

            if(question){
                if(spare[question] === undefined){
                    spare[question] = facet.length; 
                    facet.push({'label': question, 'values':[] });
                }
                let r = quest ? quest : rep;
                let kRep = question + '_' + r;
                if(spare[kRep] === undefined){
                    spare[kRep] = facet[spare[question]]['values'].length;
                    facet[spare[question]]['values'].push({
                        'reponse': r, 'importance': 0, 'question': rep, 'ids': []
                    });
                }                        
                facet[spare[question]]['values'][spare[kRep]]['ids'].push(j);
                facet[spare[question]]['values'][spare[kRep]]['importance'] += importance ? importance : 1;
            }
        }

        // Display data en fonction des dropdown 
        if (
            ((m1cen === false && m1gsi === false && m1net === false && m2thyp === false) ||
            (m1cen === true && m1gsi === true && m1net === true && m2thyp === true)) && 
            ((ordiOui === false && ordiNon === false) || (ordiOui === true && ordiNon === true))
        ) {
            displayBody(data)
        } 
        else if (
            ((m1cen === false && m1gsi === false && m1net === false && m2thyp === false) ||
            (m1cen === true && m1gsi === true && m1net === true && m2thyp === true)) && 
            (ordiOui === true && ordiNon === false)
        ) {
            if (data['Avez-vous un ordinateur personnel pour suivre les cours ?'] === 'Oui') {
                displayBody(data)
            }
        } 
        else if (
            ((m1cen === false && m1gsi === false && m1net === false && m2thyp === false) ||
            (m1cen === true && m1gsi === true && m1net === true && m2thyp === true)) && 
            (ordiOui === false && ordiNon === true)
        ) {
            if (data['Avez-vous un ordinateur personnel pour suivre les cours ?'] === 'Non') {
                displayBody(data)
            }
        } 
        else if (m1cen === true && m1gsi === false && m1net === false && m2thyp === false) {
            if (ordiOui === true && ordiNon === false) {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M1 CEN' && 
                    data['Avez-vous un ordinateur personnel pour suivre les cours ?'] === 'Oui'
                ) {
                    displayBody(data)
                } 
            }
            else if (ordiOui === false && ordiNon === true) {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M1 CEN' && 
                    data['Avez-vous un ordinateur personnel pour suivre les cours ?'] === 'Non'
                ) {
                    displayBody(data)
                } 
            }
            else {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M1 CEN'
                ) {
                    displayBody(data)
                } 
            }
        }
        else if (m1cen === false && m1gsi === true && m1net === false && m2thyp === false) {
            if (ordiOui === true && ordiNon === false) {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M1 GSI' && 
                    data['Avez-vous un ordinateur personnel pour suivre les cours ?'] === 'Oui'
                ) {
                    displayBody(data)
                } 
            }
            else if (ordiOui === false && ordiNon === true) {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M1 GSI' && 
                    data['Avez-vous un ordinateur personnel pour suivre les cours ?'] === 'Non'
                ) {
                    displayBody(data)
                } 
            }
            else {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M1 GSI'
                ) {
                    displayBody(data)
                } 
            }
        }
        else if (m1cen === false && m1gsi === false && m1net === true && m2thyp === false) {
            if (ordiOui === true && ordiNon === false) {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M1 NET' && 
                    data['Avez-vous un ordinateur personnel pour suivre les cours ?'] === 'Oui'
                ) {
                    displayBody(data)
                } 
            }
            else if (ordiOui === false && ordiNon === true) {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M1 NET' && 
                    data['Avez-vous un ordinateur personnel pour suivre les cours ?'] === 'Non'
                ) {
                    displayBody(data)
                } 
            }
            else {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M1 NET'
                ) {
                    displayBody(data)
                } 
            }
        }
        else if (m1cen === false && m1gsi === false && m1net === false && m2thyp === true) {
            if (ordiOui === true && ordiNon === false) {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M2 THYP' && 
                    data['Avez-vous un ordinateur personnel pour suivre les cours ?'] === 'Oui'
                ) {
                    displayBody(data)
                } 
            }
            else if (ordiOui === false && ordiNon === true) {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M2 THYP' && 
                    data['Avez-vous un ordinateur personnel pour suivre les cours ?'] === 'Non'
                ) {
                    displayBody(data)
                } 
            }
            else {
                if (
                    data['Dans quel parcours êtes vous inscris ?'] === 'M2 THYP'
                ) {
                    displayBody(data)
                } 
            }
        }
    })
}


function displayBody(data) {
    var card = d3.select('body').append('div')
            .attr('class', 'justify-content-center d-inline-block')
            .style('margin', '30px').append('div')
            .attr('class', 'card border-dark mb-3 text-center')
            .style('width', '20rem')
        card.append('div').attr('class', 'card-header').append('h5').text(data['Votre prénom'] + " " + data['Votre nom'])
        
        var cardBody = card.append('div').attr('class', 'card-body')
        cardBody.append('p').text(data['Dans quel parcours êtes vous inscris ?'])
        cardBody.append('img').attr('class', 'card-img-top')
            .style('height', '20rem').style('width', '18rem')
            .attr('src', function() {
                let imgId = data['Votre photo'].split('id=')[1]; 
                let imgStudent = 'https://drive.google.com/uc?id=' + imgId + '&export=download'; 
                return imgStudent;
            }) 
        cardBody.append('p').text(function() {
            if (
                data['Votre compte GitHub'] === '' ||
                data['Votre compte GitHub'] === 'non'
            ) return 'GitHub: Pas de compte'
            else return 'GitHub: ' + data['Votre compte GitHub']
        })
        cardBody.append('p').text(function() {
            if (
                data['Votre compte Diigo'] === 'non' || 
                data['Votre compte Diigo'] === 'Pas de compte' || 
                data['Votre compte Diigo'] === ''
            ) return 'Diigo: Pas de compte'; 
            else return 'Diigo: ' + data['Votre compte Diigo']
        })
        cardBody.append('p').text(function() {
            if (
                data['Votre compte Zotero'] === 'Pas de compte' ||
                data['Votre compte Zotero'] === 'non' ||
                data['Votre compte Zotero'] === '' 
            ) return 'Zotero: Pas de compte'; 
            else return 'Zotero: ' + data['Votre compte Zotero']
        })

        card.append('div').attr('class', 'card-footer')
            .text(data['Votre mail'])
}