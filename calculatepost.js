express=require("express");
app=express();
fs=require("fs");
mymodule=require("./mymodule");
bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("form.html",{root:__dirname});
    console.log("file send to response");
});

app.post("/calculate",function(req,resp){
    result=mymodule.addition(req.body.num1,req.body.num2);
	data=req.body.num1+","+req.body.num2+"\n";
	 fs.appendFile('sample.txt',data, 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});
     resp.send("Addition: "+result);
	 console.log("o/p is send to  response");
});
app.listen(3000,function(){
	console.log("server started on port 3000");
})