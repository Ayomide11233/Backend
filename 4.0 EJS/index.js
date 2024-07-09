import express from "express";
import ejs from "ejs"




const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "its time to work hard";

    if (day === 0 || day === 6){
        let type = "a weekend";
        let adv = "its time to play hard";
    }


    res.render("index.ejs", {dayType: type , advice: adv });

  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
