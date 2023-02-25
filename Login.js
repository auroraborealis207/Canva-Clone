var login_id ="";
var password = "";
var text_array = [];

var input_user = document.getElementById("user");
var input_password = document.getElementById("password");

function check_credentials (){
    login_id = input_user.value;
    console.log(login_id);
    password = input_password.value;
    console.log(password);
    read_csv(login_id,password);
}

function read_csv (username,password_){
   // console.log(read_file("login-data.csv"))
    var fr=new FileReader();
    fr.readAsText(text_array)
    console.log(text_array[0])

}