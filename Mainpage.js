
var drawbli = document.getElementById("Drawbli_Area")
var canvas = []
var input_file = document.createElement("input");
input_file.type = File;

function insert_image(){
    canvas.push(document.createElement("image"));
    canvas[canvas.length-1].parent(drawbli);
    canvas[canvas.length-1].src = document.getElementById('file-input').click();
}