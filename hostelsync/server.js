const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "..")));


// ======================
// Home Route


app.get("/", (req, res) => {

    res.sendFile(

        path.join(

            __dirname,

            "login.html"

        )

    );

});
// ======================
// Register API
// ======================

app.post("/register", (req, res) => {

    const user = req.body;

    const users = JSON.parse(

        fs.readFileSync(

            "./data/users.json"

        )

    );


    users.push(user);


    fs.writeFileSync(

        "./data/users.json",

        JSON.stringify(

            users,

            null,

            2

        )

    );


    res.json({

        success: true,

        message: "Student Registered Successfully"

    });

});



// ======================
// Login API
// ======================

app.post("/login", (req, res) => {


    const {

        email,

        password

    } = req.body;



    const users = JSON.parse(

        fs.readFileSync(

            "./data/users.json"

        )

    );



    const user = users.find(

        u =>

        u.email === email &&

        u.password === password

    );



    if (user) {

        res.json({

            success: true,

            message: "Login Successful",

            user

        });

    }


    else {

        res.status(401).json({

            success: false,

            message: "Invalid Email or Password"

        });

    }


});


app.post("/bookMeal",(req,res)=>{


const meal=req.body;



const meals=JSON.parse(

fs.readFileSync(

"./data/meals.json"

)

);



meals.push(meal);



fs.writeFileSync(

"./data/meals.json",

JSON.stringify(

meals,

null,

2

)

);



res.json({


success:true,


message:"Meal Booked Successfully"


});


});

// Complaint API


app.post(

"/complaint",

(req,res)=>{


const complaint=
req.body;



const complaints=
JSON.parse(

fs.readFileSync(

"./data/complaints.json"

)

);



complaints.push(

complaint

);



fs.writeFileSync(

"./data/complaints.json",

JSON.stringify(

complaints,

null,

2

)

);



res.json({


success:true,


message:"Complaint Submitted Successfully"


});


}

);

app.get(

"/analytics",

(req,res)=>{


const users=
JSON.parse(

fs.readFileSync(

"./data/users.json"

)

);



const meals=
JSON.parse(

fs.readFileSync(

"./data/meals.json"

)

);



const complaints=
JSON.parse(

fs.readFileSync(

"./data/complaints.json"

)

);



res.json({


students:users.length,


meals:meals.length,


complaints:complaints.length


});


}

);

app.get(

"/allStudents",

(req,res)=>{


const users=
JSON.parse(

fs.readFileSync(

"./data/users.json"

)

);


res.json(

users

);


}

);





app.get(

"/allMeals",

(req,res)=>{


const meals=
JSON.parse(

fs.readFileSync(

"./data/meals.json"

)

);


res.json(

meals

);


}

);






app.get(

"/allComplaints",

(req,res)=>{


const complaints=
JSON.parse(

fs.readFileSync(

"./data/complaints.json"

)

);


res.json(

complaints

);


}

);


// ======================
// Server
// ======================

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {


    console.log(

        `Server Running On Port ${PORT}`

    );


});


