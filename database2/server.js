import app from "./src/app.js";
import connectDb from "./db/db.js";

connectDb();

app.listen(3000, ()=>{
    console.log(`Server listen on PORT no. 3000`);
})