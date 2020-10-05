function Langue_francais(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
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
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#francais")
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

function Langue_anglais(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
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
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#anglais")
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

function Langue_espagnol(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
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
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#espagnol")
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

function Langue_italien(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
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
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#italien")
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

function Langue_portugais(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
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
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#tamazirth")
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

function Langue_tamazirth(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
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
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#portugais")
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

function Langue_allemand(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
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
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#allemand")
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

function Langue_russe(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
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
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#russe")
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

function Langue_perse(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
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
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#perse")
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
function Langue_chinois(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
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
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#chinois")
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

function Langue_japonais(data){
    let info = {
        "je suis expert(e)":0,
        "je connais bien":0,
        "je connais un peu":0,
        "je ne connais pas du tout":0
    };
    for(let i = 0; i< data.length;i++){
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
    //console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#japonais")
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