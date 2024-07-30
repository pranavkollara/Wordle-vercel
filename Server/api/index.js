const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const database = require("../database");
const playerModel = require("../database/models/Player");

const app = express();
app.use(express.json());
app.use(cors());
app.listen(5000, () => {
  console.log("listening on 5000");
});

app.get("/",(req,res)=>{
  res.json("Working")
})

app.post("/adduser/:uid", async (req, res) => {
  let data = req.body;
  let user = await playerModel.find({ id: req.params.uid });
  if (user.length == 0) {
    try{
        const query = await playerModel.insertMany({
            id: data.id,
            name: data.name,
            win: 0,
            try: 0,
          });
          res.json("Added")
          console.log("Added")
    }catch(err){

        throw err
    } 
   
  }
  else{
    res.json("user already exist");
    console.log("user already exist");
  }
});

app.patch("/win/:uid", async (req,res) => {
  try{
    let query =  await playerModel.updateOne({id:req.params.uid},{
       $inc : {win :1}
    })
    res.json("done")
  }catch(err){
    console.log(err)
  }
})

app.patch("/try/:uid", async (req,res) => {
  try{
    let query =  await playerModel.updateOne({id:req.params.uid},{
       $inc : {try :1}
    })
    res.json("done")
  }catch(err){
    console.log(err)
  }
})

// function ssort(array){
//   for(let i=0;i<array.length-1;i++){
//     for(let j=i+1;j<array.length;j++){
//       if(array[i].win<array[j].win){let a = array[i];
//       let b = array[j];
//       array[i]=b;
//       array[j]=a;}
//     }
//   }
// }

app.get("/rank", async (req,res) => {
  let data = await playerModel.find().sort({
    win : -1
  })

  // let player = []
  // for(let i=0;i<data.length;i++){
  //   player.push({
  //     "name":data[i].name,
  //     "win" : data[i].win,
  //     "try" : data[i].try
  //   })
  // }

  console.log(data);
  res.json(data)

})