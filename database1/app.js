import express from 'express';
const PORT= 3000;
const app= express();

app.use(express.json());

const notes=[];

// post method for creating notes
app.post("/notes",(req, res)=>{
    notes.push(req.body);
    console.log(notes);
    res.status(201).json({
        message:'Note created successfully',
        data:req.body
    })
});

// get method for getting notes
app.get("/notes",(req, res)=>{
    res.status(200).json({
        message:'Notes fetched successfully',
        notes:notes
    })
});

// delete method for deleting notes
app.delete('/notes/:index', (req, res)=>{
    const index= req.params.index;
    delete notes[index];

    res.status(201).json({
        message:"note deleted successfully",
        data:notes
    })
});

// patch methods for updating motes
app.patch('/notes/:index', (req,res)=>{
    const index= req.params.index;
    const description= req.body.description;

    if(!notes[index]){
        return res.status(404).json({
            message:'Note not found'
        });
    }
    notes[index].description= description;

    res.status(200).json({
        message:"dscription updated successfully"
    })
})

// server listen on PORT no. 3000
app.listen(PORT, ()=>{
    console.log(`server is running on PORT no. ${PORT}`);
})