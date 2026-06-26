const form = document.getElementById("registerForm");


form.addEventListener("submit", async (e) => {

e.preventDefault();


const user = {

name: document.getElementById("name").value,

email: document.getElementById("email").value,

phone: document.getElementById("phone").value,

department: document.getElementById("department").value,

year: document.getElementById("year").value,

password: document.getElementById("password").value

};



try{


const response = await fetch(

"/register",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(user)

}

);



const data = await response.json();



if(data.success){

alert("Registration Successful 🎉");


window.location.href="login.html";

}


else{

alert(data.message);

}


}


catch(error){


console.log(error);


alert("Server Error");


}


});