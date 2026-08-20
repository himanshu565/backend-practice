import express from "express";



// conceptually to role will be inside the token but where wopuld the role be ? how to access the payload
const roleaccess = (role)=>{
    const role  = req.

}




app.get("/", (req,res)=> {
  res.send("Hello World");
});



app.get("/about", (req,res)=>{
  res.send("About Page");

});
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // <- without this, the request hangs forever
}

app.use(logger);

app.get("/user/:id",(req,res)=>{
  const id = req.params.id;
  res.send(`UserID: ${id}`);
})
app.listen(3000,()=>{
  console.log("server running on port: 3000")
});
