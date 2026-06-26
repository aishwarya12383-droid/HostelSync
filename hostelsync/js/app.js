function login(){


let u=document.getElementById("user").value;


let p=document.getElementById("pass").value;



if(u=="student" && p=="1234"){


localStorage.setItem("user",u);


window.location.href="dashboard.html";

}


else{


alert("Invalid Credentials");


}



}
