const app = require("express")()
app.get("/", (req, res) =>{
    res.setHeader("set-cookie", ["Setfromserver=1"])
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/path1", (req, res) =>{
    res.send(`Path 1: I Have been sent these cookies: ${req.headers.cookie}`)
})

app.get("/path2", (req, res) =>{
    res.send(`Path 2: I Have been sent these cookies: ${req.headers.cookie}`)
})

app.get("/img", (req,res) => {
    res.setHeader("set-cookie", ["tracking=2"])
    res.sendFile(`${__dirname}/cookie.png`)
})

app.get("/steal", (req,res) =>{

    res.send(`Hey I stole your cookies...I saved them in my database as well! Here are they ${req.query.v}`)
})


app.listen(8080, ()=>console.log("Listening on port 8080"))