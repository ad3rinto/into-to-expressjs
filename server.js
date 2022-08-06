const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function(req, res){
    res.send("<h1>Hello, World!</h1>")

})


app.get("/about", function(req, res){
    res.send("My name is Katanga")
})

app.listen(3000, function(){
    console.log(`server started on port ${PORT}`)
});

