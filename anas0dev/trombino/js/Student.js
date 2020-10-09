"use strict";

class Student{
    //merci à Monsieur Samuel Szoniecky  https://github.com/samszo/AccueilHN_20-21/blob/master/index.html
    // avec des petite correction
    vals = {"Pas besoin":1, "Besoin d'approfondissement":5, "Besoin urgent":10, "je ne connais pas du tout":1,"je connais un peu":5,"je connais bien":10,"je suis expert(e)":20
        ,"Oui":1,"Non":1
        ,"jamais":1,"rarement":2,"souvent":5,"je suis accro":10
        ,"Dans quel parcours êtes vous inscris ?":"Parcours"
        ,"Avez-vous un ordinateur personnel pour suivre les cours ?":"Ordinateur"
        ,"Votre connexion internet personnelle est :":"Connexion"        
        ,"Votre compte GitHub":"Compte"
        ,"Votre compte Diigo":"Compte"
        ,"Votre compte Zotero":"Compte"
        ,"Vos spécialités":"Spécialités"
        ,"Vos objectifs professionnels":"Objectifs"
        ,"Votre formation précédente":"Formation"
        ,"Quelles sont besoins ?":"Besoins"        
        ,"Quelles sont vos compétences ?":"Compétences"        
        ,"Quelles outils utilisez vous ?":"Outils"        
        ,"Langages":"Langages"
        ,"Langues":"Langues"
        ,"CMS":"CMS"
        ,"Quels réseaux sociaux":"Réseaux sociaux"
        };

    id;
    details;
    facet;

    constructor(etud, id, facet){
        this.id = id;
        this.details = {};
        this.facet = facet;

        for(let i in etud){

            if(i.indexOf("[") > 0){
                let quest = this.vals[i.substring(0, i.indexOf("[") - 1)];
                let prop = i.substring(i.indexOf("[") + 1,i.indexOf("]"));
                let v = etud[i];
                let n = this.vals[v];

                if(!this.details[quest])
                    this.details[quest] = new Map();

                // if(!this.facet[quest])
                //     this.facet[quest] = new Map();
                
                // if(!n)
                //     n = this.vals[v.substring(0, v.indexOf(",")-1)];
                
                this.details[quest].set(prop, {v, n});
                // this.facet[quest].set(prop, {"expression" : {v, n}});
                
                this.addFacet(quest, prop, v, n, id);


            }else if(this.vals[i] != undefined){
                if(this.vals[i] == "Compte"){
                    if(!(this.details[this.vals[i]]))
                        this.details[this.vals[i]] = new Map();
                    let compte = i.substring(i.indexOf("compte") + 7, i.length);
                    this.details[this.vals[i]].set(compte, etud[i]);
                }else{
                    this.details[this.vals[i]] = etud[i];
                }
            }else{
                this.details[i] = etud[i];
            }
        }
    }

    addFacet(quest, prop, v, n, id){
        
// console.log(this.facet[quest], quest);
        if(!this.facet[quest]){
            // console.log("ok");
            this.facet[quest] = new FacetList(quest);
        }
        
        if(!this.facet[quest].facetList[prop]){
            // console.log("ok", this.facet[quest][prop]);
            this.facet[quest].facetList[prop] = new Facet(prop);
            
        }
        // console.log("okokok");
        let index = this.facet[quest].facetList[prop].indexOfExpression(v);
        // if(index != -1)
            // console.log(quest, prop, v);

        if(this.facet[quest].facetList[prop].expression.length == 0 || index == -1){
            // console.log(id, v);
            this.facet[quest].facetList[prop].addNewExpression(prop, v, n, id);
        }else{
            // console.log("ok");
            this.facet[quest].facetList[prop].addToValue(index, n);
            this.facet[quest].facetList[prop].addId(index, id);
        }
    }

    cleanFacet(){
        this.facet = undefined;
    }
}