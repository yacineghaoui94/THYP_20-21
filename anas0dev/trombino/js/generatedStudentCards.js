

var studList = new Array();
// let studCards = document.getElementById("studCards");
let dataCsv;

let file_csv = "./data/data.csv";


d3.csv(file_csv)
    .then((data) => {
        // console.log(data);
        setData(data);
    })
    .catch((error) => {
        console.error("Error loading the file_csv");
    });

function setData(data){
    dataCsv = data;
    dataCsv.forEach(function(etud, id) {
        let newEtud = new Student(etud, id);
        studList.push(newEtud);
    });

    let studCards = d3.select("#studCards").selectAll("div")
                        .data(studList)
                        .enter()
                            .append("div")
                                .attr("class", "card mb-3")
                                .style("max-width","540px")
                            .append("div")
                                .attr("class", "row no-gutters")//.select(".row")
                            .append("div")
                                .attr("class", "col-md-4")//.select(".col-md-4")
                            .append("img")
                                .attr("src",function(d) { 
                                    //merci à https://davidwalsh.name/query-string-javascript
                                    // https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en
                                    let url = new URL(d.details["Votre photo"]);
                                    let urlParam = new URLSearchParams(url.search);
                                    let id = urlParam.get('id');
                                    //merci à https://stackoverflow.com/questions/50664868/get-pictures-from-google-drive-folder-with-javascript-to-my-website
                                    let urlTof = "https://drive.google.com/uc?id=" + id + "&export=download";                      
                                    return urlTof; 
                                    })
                                .attr("class", "card-img")
                                // .style("height", "100%")
                            .append("div")
                                .attr("class", ".col-md-8")
                            .append("div")
                                .attr("class", "card-body")
                            .append("h5")
                                .attr("class", "card-title")
                                .html("card title")
                            .append("p")
                                .attr("class", "card-text")
                            .append("p")
                                .attr("class", "card-text")
                                    .append("small")
                                        .attr("class", "text-muted");

                                

}


 // <div class="card mb-3" style="max-width: 540px;">
        // <div class="row no-gutters">
        //     <div class="col-md-4">
        //     <img src="..." class="card-img" alt="...">
        //     </div>
        //     <div class="col-md-8">
        //     <div class="card-body">
        //         <h5 class="card-title">Card title</h5>
        //         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        //     </div>
        //     </div>
        // </div>
        // </div>

