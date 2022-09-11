const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017')
 .then((d)=>{
    console.log('connected')
 })
 .catch((e)=>{
    console.log('not connected')
 });

 exports.mongoose = mongoose ; 