const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {

e.preventDefault();


const inputs = document.querySelectorAll("input");
const selects = document.querySelectorAll("select");


const user = {

name: inputs[0].value,

email: inputs[1].value,

phone: inputs[2].value,

department: selects[0].value,

year: selects[1].value,

password: inputs[3].value

};



const response = await fetch(

"http://localhost:5000/register",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(user)

}

);



const data = await response.json();


alert(data.message);


window.location.href="login.html";


});