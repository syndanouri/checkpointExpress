const checkWorkingHours = (req, res, next)=>{
    const date = new Date();
    const hours = date.getHours();
    const day = date.getDay();

    if(hours > 9 || hours>17|| day>5){
        res.send('we are closed now')
    }else{
        next();
    }
}

module.exports = {checkWorkingHours};

