 //facebook
    function Facebook(data){
        let info = {
            "souvent":0,
            "je suis accro":0,
            "jamais":0,
            "rarement":0
         };
         for(let i = 0; i < data.length;i++){
             if(data[i]['Quels réseaux sociaux [Facebook]'].includes("souvent")){
                 info['souvent']++;
             }
             else if(data[i]['Quels réseaux sociaux [Facebook]'].includes("je suis accro")){
                 info['je suis accro']++;
             }
             else if(data[i]['Quels réseaux sociaux [Facebook]'].includes("jamais")){
                 info['jamais']++;
             }
             else{
                 info['rarement']++;
             }
         }
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#facebook")
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
    
     function Linkedin(data){
         let info = {
             "souvent":0,
             "rarement":0,
             "jamais":0,
             "je suis accro":0
         };
         for(let i = 0; i <data.length;i++){
             if(data[i]['Quels réseaux sociaux [LinkedIn]'].includes('souvent')){
                 info['souvent']++;
             }
             else if(data[i]['Quels réseaux sociaux [LinkedIn]'].includes('rarement')){
                info['rarement']++;
            }
            else if(data[i]['Quels réseaux sociaux [LinkedIn]'].includes('jamais')){
                info['jamais']++;
         }
         else{
            info['je suis accro']++;
         }
        }

         //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#linkedin")
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
     
    

    function Telegram(data){
        let info = {
            "souvent":0,
            "rarement":0,
            "jamais":0,
            "je suis accro":0
        };
        for(let i = 0; i< data.length;i++){
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
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#telegram")
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

   


    function Snapchat(data){
        let info = {
            "rarement":0,
            "souvent":0,
            "je suis accro":0,
            "jamais":0
        };
        for(let i = 0; i <data.length;i++){
            switch(data[i]['Quels réseaux sociaux [snapchat]']){
                case "rarement":
                    info["rarement"]++;
                    break;
                case "souvent":
                   info["souvent"]++;
                    break;
                case "je suis accro":
                  info["je suis accro"]++;
                    break;

                case "jamais":
                    info['jamais']++;
                    break;
                default:
                    break;

            }
        }
        var width = 450
        height = 450
        margin = 40
    var radius = Math.min(width, height) / 2 - margin
    var svg = d3.select("#snapchat")
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

    function Youtube(data){
        let info = {
            "souvent":0,
            "rarement":0,
            "jamais":0,
            "je suis accro":0
        };
        for(let i = 0; i< data.length;i++){
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
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#youtube")
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

    function Instagram(data){
        let info = {
            "souvent":0,
            "rarement":0,
            "jamais":0,
            "je suis accro":0
        };
        for(let i = 0; i< data.length;i++){
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
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#instagram")
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

    function Discord(data){
        let info = {
            "souvent":0,
            "rarement":0,
            "jamais":0,
            "je suis accro":0
        };
        for(let i = 0; i< data.length;i++){
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
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#discord")
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