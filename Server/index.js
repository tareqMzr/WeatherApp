import bodyParser from "body-parser";
import express  from "express";
import axios from "axios";
const port=5000;
const app=express();
const icon_url="https://openweathermap.org/img/wn/";
const url="https://api.openweathermap.org/data/2.5/weather?q=";
const api="&appid=59311517dc77a34c680dcbab721fcc2e";
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 
app.use(express.static("public"));

app.post("/WeatherApi",async(req,res)=>{
    try{
        const data=req.body.country;
        const _URL=url+data+api+"&units=metric";
        const result=await axios.get(_URL);
        const Icon=icon_url+result.data.weather[0].icon+"@2x.png";
        res.status(200).json({Data:result.data,icon:Icon});

        // console.log(result.data);
    }
    catch(error){
        res.status(500).json({error});
    }
});
app.listen(port,()=>{
    console.log("You are listing to port number"+port);
})