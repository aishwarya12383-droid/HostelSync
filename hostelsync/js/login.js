const togglePassword =
document.getElementById("togglePassword");

const password =
document.getElementById("password");


// Show / Hide Password

togglePassword.addEventListener(

"click",

()=>{

if(password.type==="password"){

password.type="text";

togglePassword.classList.remove(
"fa-eye"
);

togglePassword.classList.add(
"fa-eye-slash"
);

}

else{

password.type="password";

togglePassword.classList.remove(
"fa-eye-slash"
);

togglePassword.classList.add(
"fa-eye"
);

}

}

);




// Login


const form =
document.querySelector("form");


form.addEventListener(

"submit",

async(e)=>{


e.preventDefault();




const email =
document.getElementById("email").value;



const pass =
document.getElementById("password").value;



try{


const response =
await fetch(

"/login",



{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(

{

email,

password:pass

}

)

}

);



const data =
await response.json();



if(data.success){


alert(

"Login Successful 🎉"

);



localStorage.setItem(

"user",

JSON.stringify(

data.user

)

);



window.location.href=

"student.html";


}



else{


alert(

data.message

);


}



}


catch(error){


console.log(error);



alert(

"Server Error"

);


}



}

);