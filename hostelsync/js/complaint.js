async function submitComplaint(){


const inputs =
document.querySelectorAll("input");


const selects =
document.querySelectorAll("select");


const textarea =
document.querySelector("textarea");



const complaint={


student:"Aishwarya",


title:inputs[0].value,


category:selects[0].value,


priority:selects[1].value,


description:textarea.value,


status:"Pending",


date:new Date().toLocaleDateString()


};



const response=
await fetch(

"http://localhost:5000/complaint",

{

method:"POST",


headers:{


"Content-Type":"application/json"

},


body:JSON.stringify(

complaint

)


}


);



const data=
await response.json();



alert(

data.message

);



}