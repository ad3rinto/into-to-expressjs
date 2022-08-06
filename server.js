const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function(req, res){
    res.send("<h1>Hello</h1>")

})
app.listen(3000, function(){
    console.log(`server started on port ${PORT}`)
});

