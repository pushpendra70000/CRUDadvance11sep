const express = require('express');
const app = express();
const env =  require('dotenv');
const { userSchema, mongoose } = require('./models/User');
env.config();


app.use(express.json());


app.post('/student', (req,res)=>{
    const User = mongoose.model('Users', userSchema);

const user = new User({
    firstname:"pushpendra",
    email:"p@gmail.com",
    username:"p",
    password_hash:"p",
    role:"teacher"
});

user.save()
.then((d)=>{
    console.log('saved')
    res.status(200).json({
    msg:"saved",
    data:req.body
});
})
.catch((e)=>{
    console.log('save failed',e)
    res.status(400).json({
        msg:"not saved",
        error:e
    })

});
   /* res.status(200).json({
        msg:"ok"
    })*/

})

let port = process.env.PORT || 7770
app.listen(port, ()=>{
    console.log('this server is running on', port)
})