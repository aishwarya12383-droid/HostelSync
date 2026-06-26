async function bookMeal(mealType){

const meal = {

student:"Aishwarya",

meal:mealType,

date:new Date().toLocaleDateString(),

status:"Booked"

};



const response = await fetch(

"http://localhost:5000/bookMeal",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(meal)

}

);



const data = await response.json();


alert(data.message);


}




async function skipMeal(){


const meal = {


student:"Aishwarya",


meal:"All",


date:new Date().toLocaleDateString(),


status:"Skipped"


};



const response = await fetch(

"http://localhost:5000/bookMeal",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(meal)

}

);



const data = await response.json();


alert(

"Meal Skipped Successfully"

);


}