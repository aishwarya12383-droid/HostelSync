async function loadNotices(){

const response=await fetch(
"http://localhost:5000/notices"
);

const notices=await response.json();

console.log(notices);

}

loadNotices();