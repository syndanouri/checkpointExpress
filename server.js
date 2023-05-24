const express = require ('express');
const app = express();
const port = 4000;
const path= require('path');
const router = require('./routes/route');
const { checkWorkingHours } = require('./middelwares/date');


app.set('views','./views')

app.set("view engine","pug")

app.use(express.static(path.join(__dirname,"public")))
app.use('/',checkWorkingHours,router);

//app.use('/contact',router)


app.listen(port,(err)=>{
    (err)? console.log(err): console.log(`server running at :${port}`);
});

