import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';
import multer from 'multer';
import path from 'path';


const app = express();
app.use(cors());
app.use(express.json());

const db = createConnection({
    host: 'localhost',
    user: 'sqluser',
    password: 'sqluser',
    database: 'signup'
});

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//           cb(null, 'public/images')
//     },
//     filename: (req, file, cb) => {
//         cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
// }} )

// const upload = multer({
//     storage:storage
// })

db.query("SELECT * FROM login", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

// app.post('/upload',upload.single('image') ,(req, res) => {
//     console.log(req.file);
//     const image = req.file.filename;
//     console.log(image);
//     const sql = "INSERT INTO ``(`image`) VALUES (?)";
//     db.query(sql, [values], (err, data) => {
//         if (err) {
//           return res.json("error");
//         }
//         return res.json(data);
//       });
// });



app.post('/signup', (req, res) => {
    console.log(req.body);
    const {fname,lname,NIC,DOB,email,mobile,address,occupation,AgeAtMarriage,pregnancies,HusName,HusOccupation,HusMobile,password } = req.body; 
    const sql = "INSERT INTO `login`( `fname`, `lname`, `NIC`, `DOB`, `email`, `mobile`, `address`, `occupation`, `AgeAtMarriage`, `pregnancies`, `HusName`, `HusOccupation`, `HusMobile`, `password`) VALUES (?)";
    const values = [fname,lname,NIC,DOB,email,mobile,address,occupation,AgeAtMarriage,pregnancies,HusName,HusOccupation,HusMobile,password];
    db.query(sql, [values], (err, data) => {
      if (err) {
        return res.json("error");
      }
      return res.json(data);
    });
  });








  

  app.post('/login', (req, res) => {
    console.log(req.body);
     
    const sql = "SELECT * FROM `login` WHERE `NIC` = ? AND `password` = ?";
    
    db.query(sql, [req.body.NIC,req.body.password], (err, data) => {
      if (err) {
        return res.json("error");
      }
      if(data.length > 0){
        return res.json("Success");
    } else { 
        return res.json("Failed");}
    }
    );
  });
  
   



app.listen(8081, () => {
 console.log('Server is running on port 8081');
})