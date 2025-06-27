const express =require("express");
const app = express();
app.use(express.json());
const fs=require("fs");
const port =3000;


//get the square root and send the number in response.

app.get(`/getsqrt`,(req,res)=>{
    const num =parseFloat(req.query.num);

    const sqrt = Math.sqrt(num);
    res.send(`the square root of the number is:${sqrt}`);

})

// get time and send current time in response.

app.get(`/time`,(req,res)=>{
    const currentTime =new Date().toLocaleString();
    res.send(`current time is:${currentTime}`);

})


// add num1 +num2 res a+b

app.post(`/add`,(req,res)=>{
    const num1 = req.body.num1;
     const num2 = req.body.num2;


     res.send(`the sum numbers are ${num1+num2}`);
});

//fruits name.

let fruits = ["Apple", "Pineapple", "Mango"];
app.post(`/fruits`,(req,res)=>{

const Fruitname = req.body.Fruitname;

fruits.push(Fruitname);

res.send(fruits);})


// add notes to file


app.post('/addnotes', (req, res) => {
  const note = req.body.note;

  fs.appendFile('notes.txt', note + '\n', (err) => {
    if (err) {
      res.send('Error saving note');
    } else {
      res.send('Note saved to file');
    }
  });
});


app.listen(port,()=>{
    console.log(`server is running ${port}`);
});
