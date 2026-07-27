const express = require('express'); 
const app = express();  
app.use(express.json());  
// In-memory data 
let students = [     
    {id:1, name:"John"},     
    {id:2, name:"Sam"} 
];  

// GET all 
app.get('/students', (req,res)=>{     
    res.json(students); 
});  

// POST 
app.post('/students', (req,res)=>{     
    const newStudent = req.body;     
    students.push(newStudent);     
    res.json(newStudent); 
});  

// PUT 
app.put('/students/:id', (req,res)=>{     
    const id = parseInt(req.params.id);     
    students = students.map(s => s.id === id ? req.body : s);     
    res.json({message:"Updated"}); 
});  

// DELETE 
app.delete('/students/:id', (req,res)=>{     
    const id = parseInt(req.params.id);     
    students = students.filter(s => s.id !== id);     
    res.json({message:"Deleted"}); 
});  

app.listen(3000, ()=> console.log("Server running")); 