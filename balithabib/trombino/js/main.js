let url = 'data/data.csv';

const QUESTIONS_TO_KEYWORD = {
    "Dans quel parcours êtes vous inscris ?": "Parcours",
    "Avez-vous un ordinateur personnel pour suivre les cours ?": "Ordinateur",
    "Votre connexion internet personnelle est :": "Connexion",
    "Votre compte": "Compte",
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
};

const RESPONSE_TO_IMPORTANCE_VALUE = {
    "Pas besoin": 1,
    "Besoin d'approfondissement": 5,
    "Besoin urgent": 10,
    "je ne connais pas du tout": 1,
    "je connais un peu": 5,
    "je vonnais bien": 10,
    "je suis expert(e)": 20,
    "Oui": 1,
    "Non": 1,
    "jamais": 1,
    "rarement": 2,
    "souvent": 5,
    "je suis accro": 10
};

let facets, dataForm;
const data = d3.queue()
    .defer(d3.csv, url)
    .awaitAll(function (error, result) {
        if (error) throw error;
        dataForm = result[0];
        populateFacets(result[0]);
    });

function populateFacets(result) {
    facets = initFacets(Object.values(QUESTIONS_TO_KEYWORD));
    let id = 0;
    result.forEach(studentForm => {
        for (let item in studentForm) {
            let evaluate = evaluateResponse(item);

            if (QUESTIONS_TO_KEYWORD[evaluate.question] !== undefined) {
                let facet = facets[QUESTIONS_TO_KEYWORD[evaluate.question]];
                evaluate.proposal = evaluate.proposal !== '' ? evaluate.proposal : studentForm[item];
                let proposal = facet.findIndex(evaluate.proposal);
                let importance = getImportance(studentForm[item]);

                if (proposal === undefined) {
                    facet.addValue(new Proposal(evaluate.proposal, importance, studentForm[item]));
                } else {
                    proposal.addId([id, studentForm[item]]);
                    proposal.incrementedImportance(importance);
                    proposal.addExpresion(studentForm[item]);
                }
            }
        }
        id++;
    });

    console.log(facets);
    createViewCard();
}

function createViewCard() {
    d3.select('#studentsCards')
        .selectAll(".col-sm-4 mb-12")
        .data(dataForm).enter()
        .append('div').attr('class', 'col-sm-4 mb-12').style('margin-bottom', '10px')
        .append("div").attr('class', 'card')
        .append("img").attr('class', 'studentImg')
        .attr('id', (d, i) => 'imgCard' + i)
        .attr('src',  (d) => {
            let url = new URL(d['Votre photo']);
            let urlParam = new URLSearchParams(url.search);
            return "https://drive.google.com/uc?id=" + urlParam.get('id') + "&export=download";
        });
}

function getImportance(response) {
    let importance = RESPONSE_TO_IMPORTANCE_VALUE[response];
    return importance !== undefined ? importance : 1;
}

function initFacets(labels) {
    let facets = {};
    Array.from(new Set(labels)).forEach(label => facets[label] = new Facet(label));
    return facets;
}

function evaluateResponse(stringValue) {
    let question = stringValue, proposal = '', questionAndProposal, regExpMatchArray;
    regExpMatchArray = stringValue.match(/.*\[*]/);
    if (regExpMatchArray != null) {
        questionAndProposal = stringValue.split('[');
        question = questionAndProposal[0].substring(0, questionAndProposal[0].length - 1);
        proposal = questionAndProposal[1].substring(0, questionAndProposal[1].length - 1);

    }
    regExpMatchArray = stringValue.match(/.*\?/);
    if (regExpMatchArray != null) {
        questionAndProposal = stringValue.split('?');
        question = questionAndProposal[0].substring(0, questionAndProposal[0].length - 1) + ' ?';
    }
    return {
        'question': question,
        'proposal': proposal
    };
}
