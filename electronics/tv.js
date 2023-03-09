var container = document.getElementById("dataDiv");
let inp;
 document.getElementById("lth").addEventListener("click",()=>{
    inp = "asc";
    getData(inp);
 })
 document.getElementById("htl").addEventListener("click",()=>{
    inp = "desc";
    getData(inp);
 })

async function getData(inp){
    try {
        var res = await fetch(`http://localhost:3000/electronicsData?key=tv&_sort=price&_order=${inp}`);
        var jsonData =await res.json();
        display(jsonData);
    } catch (error) {
        console.log(error);
    }
}
getData();

function display(data){
    container.textContent = "";
    data.forEach(elm=>{
        var anchor = document.createElement("a");
        var image = document.createElement("img");
        image.src = elm.image;
        var div = document.createElement("div");
        div.textContent = elm.description;
        var price = document.createElement("h4");
        price.textContent = "$ "+ elm.price;
        anchor.append(image,div,price);
        container.append(anchor);
    })
}