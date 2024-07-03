import express from "express";
const app = express();
const port = 4000;

app.get("/", (req,res) => {
    res.send("<h1>Home Page</h1>");
})

app.get("/about", (req,res) => {
    res.send("<h1>About</h1>");
})

app.get("/contact", (req,res) => {
    res.send("<h1>Contact</h1>" + "<br>" + "<p>You can contact me on Insagram @ayo_ady</p>" );
   
})



app.listen(port, () => {
    console.log(`Your server ${port} is effective`);
})