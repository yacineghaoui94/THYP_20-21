function Youtube_gsi(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#youtube_gsi")
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
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
}

function Facebook_gsi(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#facebook_gsi")
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
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
 
}

function LinkedIn_gsi(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#linkedin_gsi")
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
function Snapchat_gsi(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#snapchat_gsi")
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
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
 
}

function Discord_gsi(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#discord_gsi")
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

function Telegram_gsi(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#telegram_gsi")
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
function Instagram_gsi(data){
    let info = {
        "souvent":0,
        "rarement":0,
        "jamais":0,
        "je suis accro":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#instagram_gsi")
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
     .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.35');
        div.transition()
            .duration(50)
            .style("opacity", 1);
        div.html(d.data.key + "<br />" + d.value + "/62")
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
        })
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '1');
            div.transition()
                .duration('50')
                .style("opacity", 0);
        });
 
}


//Langues


function Langue_japonais_gsi(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#japonais_gsi")
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
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
 
}

function Langue_chinois_gsi(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#chinois_gsi")
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
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });

     
 
}

function Langue_russe_gsi(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#russe_gsi")
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
     .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.35');
        div.transition()
            .duration(50)
            .style("opacity", 1);
        div.html(d.data.key + "<br />" + d.value + "/62")
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
        })
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '1');
            div.transition()
                .duration('50')
                .style("opacity", 0);
        });
}

function Langue_perse_gsi(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#perse_gsi")
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
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
}

function Langue_allemand_gsi(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#allemand_gsi")
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
     .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.35');
        div.transition()
            .duration(50)
            .style("opacity", 1);
        div.html(d.data.key + "<br />" + d.value + "/62")
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
        })
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '1');
            div.transition()
                .duration('50')
                .style("opacity", 0);
        });
}


function Langue_italien_gsi(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#italien_gsi")
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
     .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.35');
        div.transition()
            .duration(50)
            .style("opacity", 1);
        div.html(d.data.key + "<br />" + d.value + "/62")
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
        })
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '1');
            div.transition()
                .duration('50')
                .style("opacity", 0);
        });
}










function Langue_tamazirth_gsi(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#tamazirth_gsi")
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
     .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.35');
        div.transition()
            .duration(50)
            .style("opacity", 1);
        div.html(d.data.key + "<br />" + d.value + "/62")
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
        })
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '1');
            div.transition()
                .duration('50')
                .style("opacity", 0);
        });
}






function Langue_espagnol_gsi(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#espagnol_gsi")
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
     .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.35');
        div.transition()
            .duration(50)
            .style("opacity", 1);
        div.html(d.data.key + "<br />" + d.value + "/62")
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
        })
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '1');
            div.transition()
                .duration('50')
                .style("opacity", 0);
        });
}





function Langue_anglais_gsi(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#anglais_gsi")
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
     .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.35');
        div.transition()
            .duration(50)
            .style("opacity", 1);
        div.html(d.data.key + "<br />" + d.value + "/62")
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
        })
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '1');
            div.transition()
                .duration('50')
                .style("opacity", 0);
        });
   
}





function Langue_portugais_gsi(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#portugais_gsi")
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
     .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.35');
        div.transition()
            .duration(50)
            .style("opacity", 1);
        div.html(d.data.key + "<br />" + d.value + "/62")
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
        })
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '1');
            div.transition()
                .duration('50')
                .style("opacity", 0);
        });
}

function Langue_francais_gsi(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M1 GSI"){
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
     var svg = d3.select("#francais_gsi")
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
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
}
