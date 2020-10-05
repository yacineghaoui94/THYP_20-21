function Instagram_cen(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Quels réseaux sociaux [instagram]']){
           
                case "souvent":
                     info["souvent"]++;
                     break;
                 case "rarement":
                     info["rarement"]++;
                     break;
                 case "jamais":
                     info["jamais"]++;
                     break;
                 case "je suis accro":
                     info["je suis accro"]++;
                     break;
                 default:
                 break;
            }
        }
       
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#instagram_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
 
}
function Youtube_cen(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Quels réseaux sociaux [Youtube]']){
           
                case "souvent":
                     info["souvent"]++;
                     break;
                 case "rarement":
                     info["rarement"]++;
                     break;
                 case "jamais":
                     info["jamais"]++;
                     break;
                 case "je suis accro":
                     info["je suis accro"]++;
                     break;
                 default:
                 break;
            }
        }
       
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#youtube_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}

function Linkedin_cen(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Quels réseaux sociaux [LinkedIn]']){
           
                case "souvent":
                     info["souvent"]++;
                     break;
                 case "rarement":
                     info["rarement"]++;
                     break;
                 case "jamais":
                     info["jamais"]++;
                     break;
                 case "je suis accro":
                     info["je suis accro"]++;
                     break;
                 default:
                 break;
            }
        }
       
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#linkedin_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}

function Facebook_cen(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Quels réseaux sociaux [Facebook]']){
           
                case "souvent":
                     info["souvent"]++;
                     break;
                 case "rarement":
                     info["rarement"]++;
                     break;
                 case "jamais":
                     info["jamais"]++;
                     break;
                 case "je suis accro":
                     info["je suis accro"]++;
                     break;
                 default:
                 break;
            }
        }
       
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#facebook_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
 
}

function Telegram_cen(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Quels réseaux sociaux [telegram]']){
           
                case "souvent":
                     info["souvent"]++;
                     break;
                 case "rarement":
                     info["rarement"]++;
                     break;
                 case "jamais":
                     info["jamais"]++;
                     break;
                 case "je suis accro":
                     info["je suis accro"]++;
                     break;
                 default:
                 break;
            }
        }
       
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#telegram_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
 
}

function Discord_cen(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Quels réseaux sociaux [discorde]']){
           
                case "souvent":
                     info["souvent"]++;
                     break;
                 case "rarement":
                     info["rarement"]++;
                     break;
                 case "jamais":
                     info["jamais"]++;
                     break;
                 case "je suis accro":
                     info["je suis accro"]++;
                     break;
                 default:
                 break;
            }
        }
       
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#discord_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
 
}

function Snapchat_cen(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Quels réseaux sociaux [snapchat]']){
           
                case "souvent":
                     info["souvent"]++;
                     break;
                 case "rarement":
                     info["rarement"]++;
                     break;
                 case "jamais":
                     info["jamais"]++;
                     break;
                 case "je suis accro":
                     info["je suis accro"]++;
                     break;
                 default:
                 break;
            }
        }
       
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#snapchat_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}

//Langues

function Langue_japonais_cen(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Langues [Japonais]']){
                case "je suis expert(e)":
                        info["je suis expert(e)"]++;
                        break;
                    case "je connais bien":
                        info["je connais bien"]++;
                        break;
                    case "je connais un peu":
                        info["je connais un peu"]++;
                        break;
                    case "je ne connais pas du tout":
                        info["je ne connais pas du tout"]++;
                        break;
                    default:
                    break;
            }
        }
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#japonais_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
 
}

function Langue_chinois_cen(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Langues [Chinois]']){
                case "je suis expert(e)":
                        info["je suis expert(e)"]++;
                        break;
                    case "je connais bien":
                        info["je connais bien"]++;
                        break;
                    case "je connais un peu":
                        info["je connais un peu"]++;
                        break;
                    case "je ne connais pas du tout":
                        info["je ne connais pas du tout"]++;
                        break;
                    default:
                    break;
            }
        }
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#chinois_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");

     
 
}

function Langue_russe_cen(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Langues [Russe]']){
                case "je suis expert(e)":
                        info["je suis expert(e)"]++;
                        break;
                    case "je connais bien":
                        info["je connais bien"]++;
                        break;
                    case "je connais un peu":
                        info["je connais un peu"]++;
                        break;
                    case "je ne connais pas du tout":
                        info["je ne connais pas du tout"]++;
                        break;
                    default:
                    break;
            }
        }
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#russe_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}

function Langue_perse_cen(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Langues [Persan]']){
                case "je suis expert(e)":
                        info["je suis expert(e)"]++;
                        break;
                    case "je connais bien":
                        info["je connais bien"]++;
                        break;
                    case "je connais un peu":
                        info["je connais un peu"]++;
                        break;
                    case "je ne connais pas du tout":
                        info["je ne connais pas du tout"]++;
                        break;
                    default:
                    break;
            }
        }
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#perse_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}

function Langue_allemand_cen(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Langues [Allemenand]']){
                case "je suis expert(e)":
                        info["je suis expert(e)"]++;
                        break;
                    case "je connais bien":
                        info["je connais bien"]++;
                        break;
                    case "je connais un peu":
                        info["je connais un peu"]++;
                        break;
                    case "je ne connais pas du tout":
                        info["je ne connais pas du tout"]++;
                        break;
                    default:
                    break;
            }
        }
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#allemand_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}


function Langue_italien_cen(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Langues [Italien]']){
                case "je suis expert(e)":
                        info["je suis expert(e)"]++;
                        break;
                    case "je connais bien":
                        info["je connais bien"]++;
                        break;
                    case "je connais un peu":
                        info["je connais un peu"]++;
                        break;
                    case "je ne connais pas du tout":
                        info["je ne connais pas du tout"]++;
                        break;
                    default:
                    break;
            }
        }
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#italien_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}










function Langue_tamazirth_cen(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Langues [Tamazirth]']){
                case "je suis expert(e)":
                        info["je suis expert(e)"]++;
                        break;
                    case "je connais bien":
                        info["je connais bien"]++;
                        break;
                    case "je connais un peu":
                        info["je connais un peu"]++;
                        break;
                    case "je ne connais pas du tout":
                        info["je ne connais pas du tout"]++;
                        break;
                    default:
                    break;
            }
        }
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#tamazirth_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}






function Langue_espagnol_cen(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Langues [Espagnol]']){
                case "je suis expert(e)":
                        info["je suis expert(e)"]++;
                        break;
                    case "je connais bien":
                        info["je connais bien"]++;
                        break;
                    case "je connais un peu":
                        info["je connais un peu"]++;
                        break;
                    case "je ne connais pas du tout":
                        info["je ne connais pas du tout"]++;
                        break;
                    default:
                    break;
            }
        }
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#espagnol_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}





function Langue_anglais_cen(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Langues [Anglais]']){
                case "je suis expert(e)":
                        info["je suis expert(e)"]++;
                        break;
                    case "je connais bien":
                        info["je connais bien"]++;
                        break;
                    case "je connais un peu":
                        info["je connais un peu"]++;
                        break;
                    case "je ne connais pas du tout":
                        info["je ne connais pas du tout"]++;
                        break;
                    default:
                    break;
            }
        }
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#anglais_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}





function Langue_portugais_cen(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Langues [Portugais]']){
                case "je suis expert(e)":
                        info["je suis expert(e)"]++;
                        break;
                    case "je connais bien":
                        info["je connais bien"]++;
                        break;
                    case "je connais un peu":
                        info["je connais un peu"]++;
                        break;
                    case "je ne connais pas du tout":
                        info["je ne connais pas du tout"]++;
                        break;
                    default:
                    break;
            }
        }
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#portugais_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}

function Langue_francais_cen(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 CEN"){
            switch(data[i]['Langues [Français]']){
                case "je suis expert(e)":
                        info["je suis expert(e)"]++;
                        break;
                    case "je connais bien":
                        info["je connais bien"]++;
                        break;
                    case "je connais un peu":
                        info["je connais un peu"]++;
                        break;
                    case "je ne connais pas du tout":
                        info["je ne connais pas du tout"]++;
                        break;
                    default:
                    break;
            }
        }
    }
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#francais_cen")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('text')
     .text(function(d){ return d.data.key})
     .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
     .style("text-anchor", "middle")
     .style("font-size", 29)
     .style("fill","white");
}