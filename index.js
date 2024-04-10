import express from "express";
const app = express();
const PORT = 3000

app.get('/hello' , (req , res) => {
    console.log(req)
    res.send("hello world");
})

app.listen(PORT, () => {
    console.log("server is running on port :" + PORT)
})