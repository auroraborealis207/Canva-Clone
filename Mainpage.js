
var drawbli = document.getElementById("Drawbli_Area");
var canvas = [];
var input_file = document.getElementById('file-input');
var text_editor = document.getElementById("text_editor");
var current_counter = -1;
var prev_current_counter = -1;
var mouse_x = 0;
var mouse_y = 0;


var is_mouse_down = 0;
var is_mouse_moving = 0;
var is_mouse_in_current_area = 0;
var in_edit = 0;
var in_edit_num = -1;
// var image = document.createElement("p");
// //image.src =  "Title.png";
// image.textContent="hello"
// image.width= "500px" ;
// drawbli.appendChild(image);


//document.addEventListener("onmousemove", mouseCoordinates);




const para = document.createElement("p");
      const node = document.createTextNode("The end.");
      para.appendChild(node);
     
      drawbli.appendChild(para);

const fileInput = input_file;
fileInput.onchange = () => {
    const selectedFile = fileInput.files[0];
    console.log(selectedFile);
}

function insert_image(){
    input_file.click()
    canvas.push(document.createElement("img"));
    canvas[canvas.length-1].src="Title - trans.png";
    var current_element = document.createElement("img");
    drawbli.appendChild(current_element);//canvas[canvas.lenght-1]
    current_element.addEventListener("click",set_outline_appearence_event);
    //current_element.src =selectedfile;
    
}

function insert_text(){
    
    canvas.push(document.createElement("text"));
    canvas[canvas.length-1].style.fontSize="60px";
    canvas[canvas.length-1].style.position="absolute";
    canvas[canvas.length-1].textContent = "Enter text here";
    var current_element = canvas[canvas.length-1];
    drawbli.appendChild(canvas[canvas.length-1]);
    recentEventListeners();
    
}

function recentEventListeners(){
    var i_ = canvas.length-1;
    //current_element     make the box position absolute
    // canvas[canvas.length-1].addEventListener("click",function(e,i=i_){current_counter=i;
    //     move_Text();});
    if (canvas[canvas.length-1].tagName!="image"){
        canvas[canvas.length-1].addEventListener("dblclick",function(e,i=i_){current_counter=i;
        edit_Text();});
    }
    // canvas[canvas.length-1].addEventListener("ondrag",function(e,i=i_){current_counter=i;
    //         change_position();});
    
}

function move_Text(){
    if(current_counter!=prev_current_counter){
        canvas[current_counter].style.color = "green";
        canvas[current_counter].style.font_size = "45px";
        prev_current_counter = current_counter;
        // if (is_mouse_down == 0){
        //     current_counter = -1;
        //     prev_current_counter = -1;
        // }
    }else{
        canvas[current_counter].style.color = "black";
        current_counter = -1;
        prev_current_counter = -1;
    }
    //e.style.color=white;
     console.log("ello");
    
 }

        
 function edit_Text(){
    in_edit =1;
    console.log("f");
    text_editor.style.width=canvas[current_counter].style.width;
    text_editor.style.height=canvas[current_counter].style.height;
    text_editor.style.fontSize=canvas[current_counter].style.fontSize;

    text_editor.style.top=canvas[current_counter].style.top;
    text_editor.style.left=canvas[current_counter].style.left;

    text_editor.value = canvas[current_counter].innerHTML;

    canvas[current_counter].style.display = "none";
    text_editor.style.display="block";

 }

 function exit_edit_text(){
    canvas[current_counter].style.display = "none";
    text_editor.style.display="none";
 }

//  function change_position(){
//     canvas[current_counter].style.top=mouse_y+"px";
//     canvas[current_counter].style.left=mouse_x+"px";
//     console.log("e")
//  }

 function mouseCoordinates(event){
    mouse_x = event.clientX;
    mouse_y = event.clientY;

    //add timer counter to smoothen out the animation
    if(current_counter!=-1){
        canvas[current_counter].style.top=mouse_y+"px";
        canvas[current_counter].style.left=mouse_x+"px";
    }
 }

 function downcount(){
    is_mouse_down =1;
 }

 function upcount(){
    is_mouse_down =0;
 }