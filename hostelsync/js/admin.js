async function loadAdmin(){

const analytics =
await fetch(
"http://localhost:5000/analytics"
);

const data =
await analytics.json();



document.getElementById(
"students"
).innerText =
data.students;



document.getElementById(
"meals"
).innerText =
data.meals;



document.getElementById(
"complaints"
).innerText =
data.complaints;



document.getElementById(
"saved"
).innerText =
data.meals*2 + " KG";


}


loadAdmin();