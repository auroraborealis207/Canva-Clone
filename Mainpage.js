
var drawbli = document.getElementById("Drawbli_Area");
var canvas = [];
var input_file = document.getElementById('file-input');
var text_editor = document.getElementById("text_editor");
var current_counter = -1;
var prev_current_counter = -1;
var mouse_x = 0;
var mouse_y = 0;
var not_in_text_editor = 0;


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

// const fileInput = input_file;
// fileInput.onchange = () => {
//     const selectedFile = fileInput.files[0];
//     console.log(selectedFile);
// }

function insert_image(){
    canvas.push(new Image());
    // console.log(selectedFile);
    // console.log(selectedFile.value);
    input_file.click();

    drawbli.appendChild(canvas[canvas.length-1]);//canvas[canvas.lenght-1]
    
    //canvas[canvas.length-1].src = selectedfile.value;
    
    //canvas[canvas.length-1].src="Title - trans.png";
    canvas[canvas.length-1].style.position = "absolute";
    canvas[canvas.lenght-1].style.top="100px";
    canvas[canvas.lenght-1].style.width="100px";
    canvas[canvas.lenght-1].style.height="500px";
    canvas[canvas.lenght-1].style.width="500px";

   
    recentEventListeners();

    
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

var openFile = function(file) {
  var input = file.target;
  var reader = new FileReader();
  reader.onload = function(){
    var dataURL = reader.result;
    var output = document.getElementById('output');
    canvas[canvas.length-1].src = dataURL;
    console.log(input.files[0]);
  };
  reader.readAsDataURL(input.files[0]);
};

function recentEventListeners(){
    var i_ = canvas.length-1;
    //current_element     make the box position absolute
    canvas[canvas.length-1].addEventListener("click",function(e,i=i_){current_counter=i;
        move_Text();});
    if (canvas[canvas.length-1].tagName!="image"){
        canvas[canvas.length-1].addEventListener("dblclick",function(e,i=i_){current_counter=i;
        edit_Text();});
    }

    // canvas[canvas.length-1].addEventListener("mousemove",function(e,i =i_){current_counter=i;
    //     mouse_over();});
    // canvas[canvas.length-1].addEventListener("mouseleave",function(e,i=i_){current_counter=i;
    //     mouse_leave_section();});
    // canvas[canvas.length-1].addEventListener("ondrag",function(e,i=i_){current_counter=i;
    //         change_position();});
    
}

function move_Text(){
    
    if(current_counter!=prev_current_counter){
        if (canvas[canvas.length-1].tagName!="image"){
            canvas[current_counter].style.color = "green";
            canvas[current_counter].style.font_size = "45px";
            canvas[current_counter].style.border_style ="groove";
        }
        prev_current_counter = current_counter;
        
        //console.log(current_counter);
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

        
 function edit_Text(i){
    in_edit =1;
    in_edit_num =current_counter;
    console.log("f");
    text_editor.style.position = "absolute";
    text_editor.style.display="initial";
    text_editor.style.width=canvas[current_counter].style.width;
    text_editor.style.height=canvas[current_counter].style.height;
    text_editor.style.fontSize=canvas[current_counter].style.fontSize;

    text_editor.style.top=canvas[current_counter].style.top;
    text_editor.style.left=canvas[current_counter].style.left;

    text_editor.value = canvas[current_counter].innerHTML;

    canvas[current_counter].style.display = "none";
    
    current_counter =-1;
 }

 function exit_edit_text(){
    canvas[in_edit_num].style.display = "initial";
    canvas[in_edit_num].innerHTML = text_editor.value;
    text_editor.style.display="none";
    in_edit = 0;
    in_edit_num = -1;
    
 }

 function detect_outside_text_edit(){
    console.log(is_mouse_in_current_area)
    if(not_in_text_editor == 0 && in_edit_num !=-1){
        exit_edit_text();
    }
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
    console.log("current Counter",current_counter);
    if(current_counter!=-1){
        canvas[current_counter-1].style.top=mouse_y+"px";
        canvas[current_counter-1].style.left=mouse_x+"px";
    }
 }

 function downcount(){
    is_mouse_down =1;
    current_counter=-1;
 }

 function upcount(){
    is_mouse_down =0;
    current_counter =-1;
 }

//  function mouse_over(){
//     if (in_edit_num == current_counter){
//         is_mouse_in_current_area = 1;
//     }
//     console.log('g');
// //     current_counter =-1;
// //  }

//  function mouse_leave_section(){
//     if (in_edit_num == current_counter){
//         is_mouse_in_current_area = 0;
//     }
//     console.log("h")
//     current_counter =-1;
//  }